import { Helmet } from 'react-helmet';
import {
  Box,
  CircularProgress,
  Container,
  Grid
} from '@material-ui/core';
import { LazyLog, ScrollFollow } from 'react-lazylog';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useSdk from 'src/Hooks/useSdk';
import WebhookCard from '../components/webhook/WebhookCard';
import WebhookLogLayout from '../components/webhook/WebhookLogLayout'
import redirectUnauthorize from 'src/utils/redirectUnauthorize';
import getWebsocketBaseUrl from 'src/utils/getWebsocketBaseUrl';



const Dashboard = () =>{
  const {id} = useParams()
  const [webhook, setWebhook] = useState(null)
  const sdk = useSdk()

  useEffect(() => {
    sdk.Webhook.retrieve({id})
    .then(({data})=>{
      setWebhook(data)
    })
    .catch(error=>{
      redirectUnauthorize(error)
    })
    return sdk.abort
  }, [])

return (
  <>
    <Helmet>
      <title>Webhook log</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {webhook?(
              <WebhookCard product={webhook} postDelete={()=>window.history.back()} />
            ):(
              <CircularProgress  size={40} thickness={20} />
            )}
          </Grid>
          <Grid
          style={{height:'70vh'}}
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <WebhookLogLayout id={id} /> */}
            {
              id?(
                <ScrollFollow
                  startFollowing={true}
    
                  render={({ follow, onScroll }) => (
                    <LazyLog 
                    url={`${getWebsocketBaseUrl()}/ws/signal-log/${id}/?token=${localStorage.getItem("token")}`} 
                    // url={`ws://localhost:8000/ws/?token=${localStorage.getItem("token")}`} 
                    websocket={true}  
                    follow={follow} 
                    onScroll={onScroll}
                    enableSearch
                    // websocketOptions={{
                    //   on
                    // }}
    
                     />
                  )}
    
                />

              ):null
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
}

export default Dashboard;
