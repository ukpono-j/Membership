import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
  Button,
  CircularProgress
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import { forwardRef, useRef } from 'react';
import moment from 'moment';
import { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import useSdk from 'src/Hooks/useSdk';
import redirectUnauthorize from 'src/utils/redirectUnauthorize';
import genRoute from 'src/utils/genRoute';



const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




/*
"id":webhook.id,
"channel_id":webhook.channel_id,
"channel_name":webhook.channel_name,
"created_at":webhook.created_at,
"name":webhook.name,
"token":webhook.token,
"type":str(webhook.type),
"url":webhook.url
 */


const ProductCard = ({ product,postDelete, ...rest }={postDelete:()=>null}) => {
  const ref = useRef()
  const sdk = useSdk()
  const [open,setOpen] = useState(false)
  const [submitting,setsubmitting] = useState(false)

  const hasExpires = moment(product.expiring_date).format('Do MMMM YYYY')<moment(new Date()).format('Do MMMM YYYY')

  const handleClose = () => {
    setOpen(false);
  };

  const copy = ()=>{
    ref.current.select()
    document.execCommand('copy');
  }


  const handelDelete =()=>{
    setsubmitting(true)
    sdk.Webhook.delete({
      id:product.id
    })
    .then(({data})=>{
      setsubmitting(false)
      setOpen(false)
      postDelete(data)
    })
    .catch(err=>{
      setsubmitting(false)
      setOpen(false)
      redirectUnauthorize(err)
    })
  }

  return (
    <>
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id={"alert-dialog-slide-description"+1000}>
            {`You are deleting ${product.name} webhook,are you sure of this?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)} disabled={submitting} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handelDelete} disabled={submitting} endIcon={submitting?<CircularProgress size={10} />:null}  color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
        {...rest}
      >
        <CardContent>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            {product.name}
          </Typography>
          <Grid
            style={{width:'100%'}}
            alignItems="center"
            justifyContent="center"
          >
            <TextField fullWidth inputRef={ele=>ref.current=ele} id={product.id.toString()} label="url" variant="outlined" value={product.url} />
          </Grid>
    
        </CardContent>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Box sx={{ p: 2 }}>
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: 'space-between' }}
          >
            

            {/* expired at */}
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <AccessTimeIcon color={hasExpires?"error":"primary"} />
              <Typography
                color="textSecondary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                {moment(product.expiring_date).format('Do MMMM YYYY')}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <Button  variant="contained" color="primary" href={genRoute.log.create(product.id)}>
                view log
              </Button>
              <Button style={{marginLeft:20}} onClick={copy} variant="contained" color="primary">
                Copy
              </Button>
              <Button style={{marginLeft:20}} onClick={()=>setOpen(true)} variant="contained" color="secondary">
                Delete
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
