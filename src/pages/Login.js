import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import useSdk from 'src/Hooks/useSdk';
import { createBrowserHistory } from 'history';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import redirectUnauthorize from '../utils/redirectUnauthorize'
import getRoute from '../utils/genRoute'


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}




const Login = () => {
  const navigate = useNavigate();
  const [message,setmessage] = useState({
    type:'',
    message:''
  })
  const [state,setstate] = useState({
    email:'',
    password:''
  })
  const [isSubmitting,setIsSubmitting] = useState(false)
  const history = createBrowserHistory()
  const sdk = useSdk()
  



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setmessage({
      type:'',
      message:''
    })
  };

  function handleChange(e){
    setstate(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  function handleSubmit(){
    setIsSubmitting(true)
    sdk.Auth.login({
      data:state
    })
    .then(({data})=>{
      localStorage.setItem("token",data.token)
      setmessage({
        type:"success",
        message:"login successfull"
      })
      
      setstate({email:'',password:''})
      
      window.location.href = "/"
    })
    .catch(err=>{
      setmessage({
        type:"error",
        message:"invalid email or password"
      })
      setstate(prev=>({...prev,password:''}))
      
    })
    .finally(()=>{
      setIsSubmitting(false)
    })
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
         
      {
        message.message&&message.type?(
          <div style={{position:'absolute'}}>
              <Alert onClose={handleClose} severity={message.type}>
                {message.message}
              </Alert>
          </div>

        ):null
      }
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
        <TextField
          fullWidth
          value={state.email}
          label="enter your email"
          margin="normal"
          name="email"
          onChange={handleChange}
          type="email"
          variant="outlined"
        />
        <TextField
          fullWidth
          value={state.password}
          label="enter your password"
          margin="normal"
          name="password"
          onChange={handleChange}
          type="password"
          variant="outlined"
        />
        <Box sx={{ py: 2 }}>
          <Button
            color="primary"
            disabled={Boolean(isSubmitting|!state.password|!state.email)}
            endIcon={isSubmitting?<CircularProgress size={10} />:null}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={handleSubmit}
          >
            Sign in now
          </Button>
          <Button
            color="primary"
            fullWidth
            size="large"
            variant="text"
            onClick={handleSubmit}
            href={getRoute.resetPassword.create()}
          >
            create an account
          </Button>
        </Box>
        </Container>
      </Box>
    </>
  );
};

export default Login;
