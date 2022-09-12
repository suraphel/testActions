import React from 'react'

interface forProps{
    items:{id:string, entryPoint:string, exitPoint: string, time: number}[];
}

const Messages: React.FC<forProps> = (props) => {
    return(
        <div> 
            <h4>Road side Topology</h4> 
            <ul> {props.items.map(ele => 
                <li key =  {ele.id}>
                <span>{ele.entryPoint}</span>    &nbsp;
                <span> {ele.time}</span>  &nbsp;
                <span>{ele.exitPoint}</span>    
                </li>)}         
            </ul>
        </div>
    )
}
export default Messages; 