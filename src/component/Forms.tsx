import React, {useRef} from "react";
import {Button, theme} from '@q-free/ui'; 


// tells the props what kind of data it shall have. 
interface forTheProp {
    onCalling: (entryPoint: string, exitPoint: string, time: number) => void; 
}

const Form: React.FC<forTheProp>  = (props)=>{
    const entryPoints= useRef<HTMLInputElement>(null); 
    const exitPoints = useRef<HTMLInputElement>(null); 

    const startTime = useRef<HTMLInputElement>(null); 

    
    const CustomerHandler = (event: React.FormEvent) =>{
        event.preventDefault();
        const entryPoint = entryPoints.current!.value; 
        const exitPoint = exitPoints.current!.value; 
        const time = +startTime.current!.value; 

        console.log(entryPoint); 

        // show the entryPoint on the ui or send it to the dbs
        props.onCalling(entryPoint, exitPoint, time)
    }
    return(
        <form onSubmit={CustomerHandler}>
            <label htmlFor="info "> Entry point</label> 
            <input type="text" id="start"  ref={entryPoints} />


            <label htmlFor="info "> Exit point</label> 
            <input type="text" id="start"  ref={exitPoints}/>


            <label htmlFor="info "> Duration min</label> 
            <input type="number" id="time"  placeholder="Estimated travel time"  ref={startTime}/>

            <label htmlFor="info "> Duration max</label> 
            <input type="number" id="time"  placeholder="Estimated travel time"  ref={startTime}/>
            {/* <label htmlFor="info "> End time</label> 
            <input type="time" id="end"  ref={EndTime}/> */}

            <Button type="submit"
            styles={{...theme.button?.primary, 
            width:'40', flex:{justify:"center"},
            rounded:'full',
            padding:{y:'3',x:'4'},
            }}> 
                Submit 
            </Button>
        </form>) 
    
}
export default Form; 