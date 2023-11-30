import React from 'react';

import {Paper, Box, Avatar} from '@mui/material';
import {ArrowDownwardOutlined, ArrowUpwardOutlined} from '@mui/icons-material';
import CustomizedProgressBar from '../atoms/progressBar.jsx'

import "../styles/app.css"

let kpiInfo

function KPI ({data, icon, iconColor}) {
    const {title, amount, amountType, changeFromLastMonth, type} = data ?? {};

    const amountDecorator = (amount) => { 
        //  Código para ver el valor de K o %
        const prefix = amountType === "thousands" ? "$" : ""
        const suffix = amountType === "thousands" ? "K" : "%"
        const formattedAmount = amountType === "thousands" ? amount /1000 : amount
        
        return `${prefix}${formattedAmount}${suffix}`;
    };
    
    const monthChange = changeFromLastMonth > 0 ? <ArrowUpwardOutlined sx={{color: "#14B8A7"}}/> : <ArrowDownwardOutlined sx={{color:"#CD4344"}}/>

    const monthChangeDisplay = changeFromLastMonth === null ? "" : monthChange;
    
    if (type === "change") {
            kpiInfo = "Since Last Month";
        } else if (type === "progress"){
            kpiInfo = <CustomizedProgressBar/>;
        } else {
            kpiInfo = " ";
    };

    return (
        <Paper sx={{height:'170px'}} className='kpi-container'>
            <Box sx={{width:"170px"}}>
            <h6 className='title'>{title}</h6>
                <h1 className='amount'>{amountDecorator(amount)}</h1>
            <p className='change-kpi'>{monthChangeDisplay} {changeFromLastMonth} {kpiInfo}</p>
            </Box>
            <Box sx={{pt:"18px"}}>
                <Avatar sx={{bgcolor:`${iconColor}`}} className='avatar-kpi'>
                    {icon}
                </Avatar>
            </Box>
        </Paper> 
    );
}

export default KPI;   