import React, {useState} from 'react'

import Messages from './component/Messages';
import Form from './component/Forms';
import { Topology } from './component/Topology';


import '@q-free/ui/dist/main.css'; 



interface Input {
  id:string; 
  entryPoint: string; 
  exitPoint: string; 
  time: number;
}


const App: React.FC = () => {
  const [init, setAfter] = useState<Input[]>([]);

  // const input = [{id:" a1", text: "name"}]

  const inputHandler = (entryPoint: string, exitPoint: string, time: number)=> {
      console.log(entryPoint, exitPoint); 
      setAfter(prevInput => [...prevInput, {id:Math.random().toString(), 
        entryPoint: entryPoint, 
        exitPoint: exitPoint, 
        time:time
      }])
  }

  const input = new Topology("bole", "pizza", 1400, 200);
  
  return ( <div>
    
      <h2> Ascendi </h2>
      <Messages items={init}  />  
      <Form onCalling={inputHandler} />
      {input.entryPoint} {input.exitPoint} {input.distance()}
       {/* <CcsTester /> */}
      
     
 
    </div>
  );
}

export default App;
