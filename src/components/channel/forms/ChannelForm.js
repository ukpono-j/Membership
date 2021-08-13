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
  server: 0,
  name: '',
  topic: '',
  product_ids: [""],
}


const schema = yup.object().shape({
  server:yup.string().required(),
  name:yup.string().required(),
  topic:yup.string().required(),
  product_ids:yup.array().of(yup.string()).required()
})






export default function ChannelForm({initailValues,postSubmit}={initialValues:null,postSubmit:()=>null}) {
  const [options, setoptions] = useState({
    servers:[],
    products:[]
  })
  const sdk = useSdk()

  const handleSubmit = (values, { setSubmitting,resetForm }) => {
    
     const data = {...values,product_ids:values.product_ids.filter(value=>value)}
     
      if(!initailValues){
        sdk.Channel.create({
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
    Promise.all([
      sdk.Product.list({
        params:{
          limit:300
        }
      }),
      sdk.Server.list()
    ])
    .then(response=>{
      setoptions({
        products:response[0].data.data,
        servers:response[1].data
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
                        <InputLabel htmlFor="discord-server">Server</InputLabel>
                      <FormControl style={{width:'100%',marginBottom:10}}>
                        <Field
                          
                          component={Select}
                          name="server"
                          inputProps={{
                            id: 'discord-server',
                          }}
                          
                        >
                          <MenuItem value={0}>Select a discord server</MenuItem>
                          {options.servers.map(server=>(
                            <MenuItem key={server.id} value={server.id}>{server.name}</MenuItem>
                          ))}
                        </Field>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} style={{width:"100%"}}>
                      <InputLabel htmlFor="channel-name">Channel name</InputLabel>
                      <FormControl style={{width:"100%",marginBottom:10}}>
                        <Field
                          component={TextField}
                          name="name"
                          type="text"
                          inputProps={{
                            id: 'channel-name',
                          }}
                        />
                      </FormControl>
                    </Grid>

                    
                    <Grid item xs={12} style={{width:"100%"}}>

                      <InputLabel htmlFor="channel-topic">Channel Topic</InputLabel>
                      <FormControl style={{width:"100%",marginBottom:10}}>
                        <Field
                          component={TextField}
                          name="topic"
                          inputProps={{
                            id: 'channel-topic',
                          }}
                        />
                      </FormControl>
                    </Grid>
                    
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
                            <MenuItem key={product.id} value={product.id}>{product.name.split("-").join(" ")}</MenuItem>
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
