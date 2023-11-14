import {Box, CssBaseline, Grid} from '@mui/material'
import { grey } from '@mui/material/colors';

function Layout() {
  return (
      <Box style={{display: "flex"}}>
            <CssBaseline/>
            <Grid container m={2}>
                <Grid item flexBasis={120} bgcolor={grey[400]} height= {"90vh"} m={2}>Navegation</Grid>
                <Grid item flex={2}>
                    <Grid xs={12} bgcolor={grey[400]} height={'20vh'} my={2}>Header</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'20vh'} my={2}>User input</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'45vh'}>Thread</Grid>
                </Grid>
                <Grid item flex={1} m={2}>
                    <Grid xs={12} bgcolor={grey[400]} height={'10vh'}>Search</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'20vh'} my={2}>Container 1</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'30vh'} mb={2}>Container 2</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'22vh'}>Container 3</Grid>
                </Grid>
            </Grid>
        </Box>
  )
}
export default Layout;