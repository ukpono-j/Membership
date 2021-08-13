import { Box, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import PlanCard from '../Cards/PlanCard'



function PriceSection(){
    return (
        <Grid container justifyContent="center" direction="column">
          <Grid component={Box} item>
            <Typography variant="subtitle1" style={{
              textAlign:'center'
            }}>
              lore is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </Typography>
          </Grid>

          <Grid container item>

            <Grid>
              <PlanCard title="plan one" price="$44"  />

            </Grid>
            <Grid>
              <PlanCard title="plan one" price="$44"  />

            </Grid>
            <Grid>
              <PlanCard title="plan one" price="$44"  />

            </Grid>
          </Grid>

          
        </Grid>
    )
}


export default PriceSection
