import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Grid, LinearProgress } from '@material-ui/core';
import { TextField,Select } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { useEffect, useState } from 'react';
import useSdk from 'src/Hooks/useSdk';
import InputLabel from '@material-ui/core/InputLabel';
import * as yup from 'yup';


const defaultInitialValues = {
  name: '',
  url: "",
  product_ids: [""],
}


const schema = yup.object().shape({
  name:yup.string().required(),
  url:yup.string().required(),
  product_ids:yup.array().of(yup.string()).required()
})






export default function ChannelForm({initailValues,postSubmit}={initialValues:null,postSubmit:()=>null}) {
  const [options, setoptions] = useState({
    products:[],
    chart_urls:[]
  })
  const sdk = useSdk()

  const handleSubmit = (values, { setSubmitting,resetForm }) => {
    
     const data = {...values,product_ids:values.product_ids.filter(value=>value)}
     
      if(!initailValues){
        sdk.Chart.create({
          data
        })
        .then(({data})=>{
          setSubmitting(false)
          resetForm(defaultInitialValues)
          postSubmit&&postSubmit(data)
        })
        .catch(err=>{
          setSubmitting(false)
          redirectUnauthorize(err)
        })
        
      }else{
        // update code goes here

      }
  }

  useEffect(() => {
      sdk.Product.list({
        params:{
          limit:300
        }
      })
    .then(({data})=>{
      setoptions({
        products:data.data,
      })
    })
    .catch(err=>redirectUnauthorize)

    
    return () => sdk.abort()
  }, [])

    return (
        <Formik
        
            initialValues={initailValues||defaultInitialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
            >
            {({ submitForm, isSubmitting }) => (
                <Form>
                  <Grid
                    container
                    
                    direction="column"
                    justify="center"
                    alignItems="center"
                    
                  >
                    
                    <Grid item xs={12} style={{width:"100%"}}>
                      <InputLabel htmlFor="chart-name">Give this chart link a name</InputLabel>
                      <FormControl style={{width:"100%",marginBottom:10}}>
                        <Field
                          component={TextField}
                          name="name"
                          type="text"
                          inputProps={{
                            id: 'chart-name',
                          }}
                        />
                      </FormControl>
                    </Grid>

                    {/* chart url text input */}
                    <Grid item xs={12} style={{width:"100%"}}>

                      <InputLabel htmlFor="chart-url">Chart url</InputLabel>
                      <FormControl style={{width:"100%",marginBottom:10}}>
                        <Field
                          component={TextField}
                          name="url"
                          inputProps={{
                            id: 'chart-url',
                          }}
                        />
                      </FormControl>
                    </Grid>

                    {/* chart url select */}
                    <Grid item xs={12} style={{width:"100%"}}>
                    <InputLabel htmlFor="chart-url">Or Select url</InputLabel>
                      <FormControl style={{width:"100%",marginBottom:10}}>
                        <Field
                          
                          component={Select}
                          name="url"
                          
                          inputProps={{
                            id: 'chart-url-select',
                          }}
                          
                        >
                          <MenuItem value={""}>Select chart url</MenuItem>
                          {options.chart_urls?.map((url,index)=>(
                            <MenuItem key={index} value={url}>{url}</MenuItem>
                          ))}
                        </Field>
                      </FormControl>

                    </Grid>
                    {/* chart url select */}

                    <Grid item xs={12} style={{width:"100%"}}>
                      <InputLabel htmlFor="product-ids">Stripe Products</InputLabel>
                      <FormControl style={{width:"100%",marginBottom:10}}>
                        <Field
                        
                          component={Select}
                          name="product_ids"
                          multiple
                          inputProps={{
                            id: 'product-ids',
                          }}
                          
                        >
                          <MenuItem value={""}>Select products</MenuItem>
                          {options.products.map(product=>(
                            <MenuItem key={product.id} value={product.id}>{product.name}</MenuItem>
                          ))}
                        </Field>
                      </FormControl>

                    </Grid>
                    <Grid item xs={12} style={{width:"100%"}}>
                      
                      
                      {isSubmitting && <LinearProgress />}
                      
                      <Button
                          variant="contained"
                          color="primary"
                          disabled={isSubmitting}
                          onClick={submitForm}
                          fullWidth
                      >
                          Submit
                      </Button>

                    </Grid>
                  </Grid>
                  
                 
                </Form>
            )}
        </Formik>
    )
}
