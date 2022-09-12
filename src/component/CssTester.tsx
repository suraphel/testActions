import React from "react";
import {Button, theme} from '@q-free/ui'; 

import {Block} from '@q-free/ui'; 



const isLight = "white"; 
const CcsTester: React.FC = () =>{
    
    const run = ()=>{
        console.log("For the display"); 
    }
    return(  <div>
      <Block      
      styles={{
        background: isLight ? { color: 'white', variant: null } : { color: 'blue', variant: '700' },
        border: {
          width: '1',
          color: isLight ? 'gray' : 'blue',
          variant: isLight ? '300' : '600',
          
        }, 
        rounded:'b-sm',
        width:'auto'
        
      }}>
            <p> This is a Block</p>

        </Block> 
      
            <h2> hi </h2>
            <Button  styles={{
                ...theme.button?.primary,
                width: '40',
                flex: { justify: 'center' },
                rounded: 'full',
                padding: { y: '3', x: '4' },
              }}onClick={run}> 
                  something</Button>
        </div>
    )
}

export default CcsTester; 