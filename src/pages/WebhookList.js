import { Helmet } from 'react-helmet';
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Button,
  Typography,
  withStyles
} from '@material-ui/core';
import ChannelModelToolbar from 'src/components/channel/ChannelModelToolbar';
import WebhookCard from 'src/components/webhook//WebhookCard';
import WebhookForm from 'src/components/webhook//WebhookForm';
import products from 'src/__mocks__/products';
import useSdk from 'src/Hooks/useSdk';
import { useState } from 'react';
import { useEffect } from 'react';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import getPaginationSlice from 'src/utils/getPaginationSlice';
import { TablePagination } from '@material-ui/core';
import CustomTab from '../components/CustomTab'
import redirectUnauthorize from 'src/utils/redirectUnauthorize';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitlec = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContentc = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActionsc = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);




const WebhookList = () => {
  const sdk = useSdk()
  const [webhooks,setWebhooks] = useState(null)
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const [sliceData, setSliceData] = useState([0,limit]);
  const [labels, setLables] = useState(["All"]);
  const [currentTab, setCurrentTab] = useState(0);

  const updateWebhook = ()=>{
    sdk.Webhook.list()
    .then(({data})=>{
      
      setWebhooks(data)
      setLables(["All",...new Set(data.map(value=>value.product_name))])
    })
    .catch(redirectUnauthorize)
  }

  useEffect(()=>{
    updateWebhook()
    return ()=>sdk.abort()
  },[])

  function handlePageChange(event,newPage){
    setPage(newPage)
    setSliceData(getPaginationSlice(newPage,limit))
  }

  function handleLimitChange(event){
    setLimit(event.target.value)
    setSliceData(getPaginationSlice(page,event.target.value))
    
  }

  function handleChange(e,newValue) {
    setCurrentTab(newValue)
  }



  return (
    <>
      <Helmet>
        <title>Webhook</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        {
          webhooks?(
            <CustomTab labels={labels} onChange={handleChange}>

              <Container maxWidth={false}>
              
                <Box sx={{ pt: 3 }}>
                  <Grid
                    container
                    spacing={3}
                  >
                    {webhooks?webhooks.filter(value=>currentTab?value.product_name===labels[currentTab]:true).slice(...sliceData).map((webhook) => (
                      <Grid
                        item
                        key={webhook.id}
                        lg={4}
                        md={6}
                        xs={12}
                      >
                        <WebhookCard postDelete={updateWebhook} product={webhook} />
                      </Grid>
                    )):(
                      <CircularProgress thinkness={20} size={100} />
                    )}
                    {
                      webhooks&&!webhooks.length?(
                        <Typography variant="h5">
                          You have no webhook
                        </Typography>
                      ):null
                    }
                  </Grid>
                </Box>
                <Box sx={{ pt: 3 }}>
                  <Grid
                    container
                    spacing={3}
                  >
                    <TablePagination
                        component="div"
                        count={webhooks?webhooks.length+limit:0}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleLimitChange}
                        page={page}
                        rowsPerPage={limit}
                        rowsPerPageOptions={[3,5,20, 50,100,200]}
                      />
                  </Grid>
                </Box>
                
              </Container>
            </CustomTab>

          ):<CircularProgress size={50} thickness={20} />
        }
      </Box>
    </>
  );
}

export default WebhookList;
