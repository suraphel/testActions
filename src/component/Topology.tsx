
// const myClasses: React.FC = () => {

    export class Topology{
      entryPoint: string; 
      exitPoint: string; 
      distanceMin: number; 
      distanceMax: number; 
 
      public constructor(entryPoint :string, exitPoint: string, distanceMin: number, distanceMax: number){
         this.entryPoint = entryPoint; 
         this.exitPoint = exitPoint; 
         this.distanceMin = distanceMin; 
         this.distanceMax = distanceMax; 
      }

      //  function to calculate the billable amount
      public distance(): number{
         if(this.distanceMax - this.distanceMin < 0 ){
          let totalDistance=  this.distanceMin - this.distanceMax; 
          return totalDistance;  

      }else{
         console.log("Please chech your input");
         return 404; 
            }
       
      }

       
 
 }

// return(<div> 


// const entry = new Topology("bole", "pizza"); 

// console.log(entry.entryPoint); 
// </div>)
// }
// export default myClasses; 