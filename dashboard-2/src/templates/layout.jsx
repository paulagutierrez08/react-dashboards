import {Box, CssBaseline, Grid} from "@mui/material";

import "../styles/app.css"

function Layout () {
    return (
        <Box style={{display: "flex", height: "100vh"}}>
            <CssBaseline/>
            <Grid container className="container">
                <Grid item flexBasis={80} className="menu">MENU</Grid>
                <Grid item flex={1}>
                    <Grid xs={12} className="header">HEADER</Grid>
                    <Grid xs={12} className="brand">BRANDING</Grid>
                    <Grid container className="main">
                        <Grid xs={3}>PKI</Grid>
                        <Grid xs={3}>PKI</Grid>
                        <Grid xs={3}>PKI</Grid>
                        <Grid xs={3}>PKI</Grid>
                    </Grid> 
                    <Grid container className="footer">
                        <Grid xs={4}>CONTAINER 1</Grid>
                        <Grid xs={4}>COTAINER 2</Grid>
                        <Grid xs={4}>COTAINER 3</Grid>
                    </Grid> 
                    
                </Grid>
            </Grid>
        </Box>
    )
}

export default Layout;  