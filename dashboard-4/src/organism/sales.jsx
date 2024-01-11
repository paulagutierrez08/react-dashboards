import { Card, CardContent, CardHeader} from "@mui/material";

import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

import {longToShortDate} from "../utils/dates";

function normalizeData(data){ 
    console.log(data);

    if (!Array.isArray(data)) {
        console.error("Error: data is not an array");
        return [];
    }

    return data.map((sale) => {
        const formattedDate = longToShortDate(sale.date)
        return {
        date: formattedDate,
        currentYear: sale.currentYear,
        lastYear: sale.lastYear
        }
    });
}

function Sales({data}) {
    const newData = normalizeData(data)

    return (
        <Card>
            <CardHeader title="Latest Sales"/>
            <CardContent>
                <BarChart
                    width={700}
                    height={300}
                    data={newData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="currentYear" fill="#3f51b5" barSize={12}/>
                    <Bar dataKey="lastYear" fill="#AFAFAF" barSize={12}/>
                </BarChart>
            </CardContent>
        </Card>
    );
}

export default Sales; 