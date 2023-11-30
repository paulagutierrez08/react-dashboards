import React from "react";

import { Avatar,Paper,IconButton, Grid, InputBase } from "@mui/material";
import {PeopleOutlineOutlined, NotificationsNoneOutlined, SearchOutlined} from "@mui/icons-material"

const ICON_STYLES = {color: "#9CA3AF"};


function Header({search, onSearch, onSearchType}){

    const onKeyDownHandler = (event) => {
        if (event.key === "Enter") {
            onSearch()
        }
    }

    return (
        <Paper elevation={3}>
            <Grid container sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Grid item>
                    <IconButton>
                        <SearchOutlined sx={ICON_STYLES}/>
                    </IconButton>
                    <InputBase 
                        sx={{ml:1, flex:1}} placeholder="Search here" value={search} onKeyDown={onKeyDownHandler} onChange={onSearchType}
                    />
                </Grid>
                <Grid item>
                    <IconButton>
                        <PeopleOutlineOutlined sx={ICON_STYLES}/>
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneOutlined sx={ICON_STYLES}/>
                    </IconButton>
                    <IconButton>
                        <Avatar/>
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Header;