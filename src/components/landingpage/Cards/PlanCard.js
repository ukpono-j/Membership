import {
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
  Grid, 
  Typography, 
  Button, 
  useTheme, 
  Paper, 
  Box, 
  Avatar
 } from '@material-ui/core'
import pt from 'prop-types'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AdbIcon from '@material-ui/icons/Adb';




function PlanCard(props){
  const theme = useTheme()
  return(
    <Grid component={Box} mx={{md:3,xs:0}} mb={{xs:6,md:4}} style={{
      // backgroundColor:theme.palette.secondary.main,
      color:theme.palette.primary.contrastText,
      borderRadius:30,
      padding:15,
      maxWidth:300,
      borderColor:theme.palette.secondary.main,
      borderWidth:5,
      borderStyle:"solid"
    }}  item container  direction="column"  >
      <Box component={Grid} container justifyContent="center" mt={-6  } mb={3} >
        <Avatar  style={{backgroundColor:theme.palette.secondary.main,height:60,width:60}}  >
          <AdbIcon  />
        </Avatar>
      </Box>



      <Box>
        <Typography textAlign="center" gutterButtom variant="h2">
          {props.title.toUpperCase()}
        </Typography>
      </Box>


      <Box my={2} component={Grid} container justifyContent="center" alignItems="flex-end" >
        <Typography gutterButtom variant="h3">
          {props.price}/
        </Typography>
        <Typography variant="subtitle1">
          month
        </Typography>
      </Box>


      <Box mb={2} style={{color:theme.palette.secondary.dark}}>
        <List dense={true}>
        
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon style={{color:theme.palette.secondary.dark}} />
            </ListItemIcon>
            <ListItemText
              primary="Single-line item"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon style={{color:theme.palette.secondary.dark}} />
            </ListItemIcon>
            <ListItemText
              primary="Single-line item"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon style={{color:theme.palette.secondary.dark}} />
            </ListItemIcon>
            <ListItemText
              primary="Single-line item"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon style={{color:theme.palette.secondary.dark}} />
            </ListItemIcon>
            <ListItemText
              primary="Single-line item"
            />
          </ListItem>
        
        </List>

        

      </Box>

      <Button style={{borderRadius:40}} variant="contained" color="secondary">
        Subscribe
      </Button>
    </Grid>
  )
}

PlanCard.defaultProps = {
  title:"Title",
  price:"$33",
  description:"Lorem Ipsum is simply dummy text of the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}


PlanCard.propTypes = {
  title:pt.string,
  price:pt.string,
  description:pt.string
}



export default PlanCard
