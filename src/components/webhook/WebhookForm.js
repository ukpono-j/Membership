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
  channel: 0,
  reason: "",
}


const schema = yup.object().shape({
  name:yup.string().required(),
  channel:yup.string().required(),
  reason:yup.string(),
})






export default function ChannelForm({initailValues,postSubmit}={initialValues:null,postSubmit:()=>null}) {
  const [options, setoptions] = useState({
    channels:[],
  })
  const sdk = useSdk()

  const handleSubmit = (values, { setSubmitting,resetForm }) => {
    
     
     
      if(!initailValues){
        sdk.Webhook.create({
          data:values
        })
        .then(({data})=>{
          
          setSubmitting(false)
          resetForm(defaultInitialValues)
          postSubmit(data)
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
      sdk.Channel.list({
        params:{

        }
      })
    .then(({data})=>{
      setoptions({
        channels:data,
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
                      <InputLabel htmlFor="webhook-name">webhook name</InputLabel>
                      <FormControl style={{width:"100%",marginBottom:10}}>
                        <Field
                          component={TextField}
                          name="name"
                          type="text"
                          inputProps={{
                            id: 'webhook-name',
                          }}
                        />
                      </FormControl>
                    </Grid>

                    

                    {/* chart url select */}
                    <Grid item xs={12} style={{width:"100%"}}>
                    <InputLabel htmlFor="channels">Select a discord channel</InputLabel>
                      <FormControl style={{width:"100%",marginBottom:10}}>
                        <Field
                          
                          component={Select}
                          name="channel"
                          
                          inputProps={{
                            id: 'channels',
                          }}
                          
                        >
                          <MenuItem value={0}>Select discord channel</MenuItem>
                          {options.channels?.map((channel)=>(
                            <MenuItem key={channel.id} value={channel.id}>{channel.name}</MenuItem>
                          ))}
                        </Field>
                      </FormControl>

                    </Grid>



                    <Grid item xs={12} style={{width:"100%"}}>
                      <InputLabel htmlFor="webhook-Reason">Reason</InputLabel>
                      <FormControl style={{width:"100%",marginBottom:10}}>
                        <Field
                          component={TextField}
                          name="reason"
                          type="text"
                          inputProps={{
                            id: 'webhook-reason',
                          }}
                        />
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
