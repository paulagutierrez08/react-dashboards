import React from "react";

import { LinearProgress } from "@mui/material";

function ProgressBar (){
    const [progress, setProgress]= React.useState(0);

    React.useEffect(() =>{
        const timer = setInterval (() =>{
            setProgress((prevProgress)=>(prevProgress >=75 ? 0:prevProgress+10));
        }, 300);
        return () =>{
            clearInterval({timer});
        };
    }, []);

    return(
        <div className="progress-Bar">
            <LinearProgress variant="determinate" value={progress}/>
        </div>
    )
};

export default ProgressBar;