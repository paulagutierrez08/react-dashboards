import {Box, CssBaseline, Grid} from "@mui/material";
import {grey} from "@mui/material/colors";


import "../styles/app.css"

function Layout () {
    return (
        <Box style={{display: "flex", height: "100vh"}}>
            <CssBaseline/>
            <Grid container className="container" m={2}>
                <Grid item flexBasis={220} bgcolor={grey[300]} m={2}>Side</Grid>
                <Grid item flex={1}>
                    <Grid xs={12} my={2} bgcolor={grey[300]} height={100}>Header</Grid>
                    <Grid container>
                        <Grid xs={3} pr={2}>
                        <Grid bgcolor={grey[300]} height={150}>PKI</Grid>
                        </Grid>
                        <Grid xs={3} pr={2}>
                        <Grid bgcolor={grey[300]} height={150}>PKI</Grid>
                        </Grid>
                        <Grid xs={3} pr={2}>
                        <Grid bgcolor={grey[300]} height={150}>PKI</Grid>
                        </Grid>
                        <Grid xs={3}>
                        <Grid bgcolor={grey[300]} height={150}>PKI</Grid>
                        </Grid>
                    </Grid> 
                    <Grid container my={2}>
                        <Grid xs={8} pr={2}>
                        <Grid bgcolor={grey[300]} height={400}>Container 1</Grid>
                        </Grid> 
                        <Grid xs={4}>
                        <Grid bgcolor={grey[300]} height={400}>Container 2</Grid>
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Layout;  