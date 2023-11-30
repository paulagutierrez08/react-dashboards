import React from 'react';

import {Card, List, ListItem, ListItemIcon,} from "@mui/material";
import {PieChart, Pie, Cell } from 'recharts';

import { ComputerOutlined, TabletMacOutlined, LocalPhone } from '@mui/icons-material';

const COLORS = ["#3F51B5", "#E53935", "#FB8C00"];
function Traffic({data}) {

    return (
    <Card className='pie-container'>
        <h2>Traffic by Device</h2>
        <PieChart width={800} height={400}>    
        <Pie
            className='pie-chart'
            title="Traffic by Device"
            data={data}
            cx={140}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="traffic"
            startAngle={90}
            endAngle={-360} 
        >
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        </PieChart>
        <List className='icons-pie'>
        <ListItem>
            <ListItemIcon>
                <ComputerOutlined sx={{color: "#6F7683"}}/>
                <p>63%</p>
            </ListItemIcon>
            <ListItemIcon>
            <TabletMacOutlined sx={{color: "#6F7683"}}/>
            <p>15%</p>
            </ListItemIcon>
            <ListItemIcon>
                <LocalPhone sx={{color: "#6F7683"}}/>
                <p>23%</p>
            </ListItemIcon>
        </ListItem>
        </List>
    </Card>
    );
    }
    
export default Traffic; 