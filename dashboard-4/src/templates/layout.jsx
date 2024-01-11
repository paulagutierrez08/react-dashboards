import {Box, CssBaseline, Grid} from "@mui/material";

function Layout ({children}) {
    const [header, menu, kpi1, kpi2, kpi3, kpi4, sales, traffic]= children

    return (
        <Box style={{display: "flex", height: "100vh"}}>
            <CssBaseline/>
            <Grid container sx={{flexgrow:1}}>
                <Grid item flexBasis={220}>{menu}</Grid>
                <Grid item flex={1}>
                    <Grid xs={12}>{header}</Grid>
                    <Grid container p={2}>
                        <Grid xs={3} pr={2}>{kpi1}</Grid>
                        <Grid xs={3} pr={2}>{kpi2}</Grid>
                        <Grid xs={3} pr={2}>{kpi3}</Grid>
                        <Grid xs={3} pr={2}>{kpi4}</Grid>
                    </Grid> 
                    <Grid container my={2}>
                        <Grid xs={8} pr={2}>
                        <Grid pl={2}>{sales}</Grid>
                        </Grid> 
                        <Grid xs={4}>
                        <Grid pr={2}>{traffic}</Grid>
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Layout;  