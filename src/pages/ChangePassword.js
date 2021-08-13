import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
} from '@material-ui/core';
import { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import useSdk from 'src/Hooks/useSdk';
import { createBrowserHistory } from 'history';
import MuiAlert from '@material-ui/lab/Alert';
import redirectUnauthorize from 'src/utils/redirectUnauthorize';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}




const Login = () => {
  const [message,setmessage] = useState({
    type:'',
    message:''
  })
  const [state,setstate] = useState({
    password:'',
    confirmPassword:''
  })
  const [isSubmitting,setIsSubmitting] = useState(false)
  const history = createBrowserHistory()
  const sdk = useSdk()
  const {token} = useParams()
  



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
    if(state.password !==state.confirmPassword){
      setmessage({
        type:"error",
        message:"Both password must be the same"
      })
      return 
    }
    setIsSubmitting(true)
    sdk.Auth.changePassword({
      token,
      data:state
    })
    .then(({data})=>{
      localStorage.setItem("token",data.token)
      setmessage({
        type:"success",
        message:"account created successfull"
      })
      
      setstate({confirmPassword:'',password:''})
      
      window.location.href = "/login/"
    })
    .catch(err=>{
      setmessage({
        type:"error",
        message:"session has expire"
      })
      setstate({confirmPassword:'',password:''})
      redirectUnauthorize(err)
    })
    .finally(()=>{
      setIsSubmitting(false)
    })
  }

  return (
    <>
      <Helmet>
        <title>Create Account</title>
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
          value={state.password}
          label="enter your password"
          margin="normal"
          name="password"
          onChange={handleChange}
          type="password"
          variant="outlined"
        />
        <TextField
          fullWidth
          value={state.confirmPassword}
          label="re-enter your password"
          margin="normal"
          name="confirmPassword"
          onChange={handleChange}
          type="password"
          variant="outlined"
        />
        <Box sx={{ py: 2 }}>
          <Button
            color="primary"
            disabled={Boolean(isSubmitting|!state.password|!state.confirmPassword)}
            endIcon={isSubmitting?<CircularProgress size={10} />:null}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={handleSubmit}
          >
            Sign in now
          </Button>
        </Box>
        </Container>
      </Box>
    </>
  );
};

export default Login;
