import React,{useState, Component} from 'react';
import { Line } from 'react-chartjs-2';

class  App extends Component {
  state={
    data:{
      labels:["1","2","3","4","5"],
      datasets:[
    {
      label:"First Data Set",
      backgroundColor:"rgba(255,0,255,0.75)",
      data:[1,10,34,5,10,17,5]
    },
    {
      label:"Second Data Set",
      backgroundColor:"rgba(0,255,0,0.75)",
      data:[11,1,4,25,15,7,35]
    }
    
      ]
    }
  }
//ctx===>contxt from canvas
setGradientColor=(canvas,color)=>{
const ctx=canvas.getContext("2d");
const gradient=ctx.createLinearGradient(0,0,200,150);
gradient.addColorStop(0,color);
gradient.addColorStop(0.95,"rgba(133,255 ,144,0.85)");
return gradient;
}


//this gradient will be set in getChartData gradient

  //this will accept a canvas object
getChartData=(canvas)=>{
  const data=this.state.data;
if(data.datasets){
  let colors=["rgba(255,0,255,0.75)","rgba(255,0,255,0.75)"]
  data.datasets.map((set,i)=>{
set.backgroundColor=this.setGradientColor(canvas,colors[i]);
set.borderColor="white";
set.borderWidth=2;
  }
  
  
  )
}

  return data

}

  
render(){
  return (
    <React.Fragment>
       <div style ={{position:"relative",width:"800px",height:"750px"}}> 
   <h3>Chart js and React chart js-2</h3>
    <Line options={{responsive:true}} data={this.getChartData}/>
       </div> 
    
      </React.Fragment>
     );
}
 
}

export default App;
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient
//https://www.chartjs.org/docs/latest/charts/line.html
//check dataset properties
//labels are important..it is a array
//datasets are array of objects
//we can send direct data to "data" props as {this.state.data}...but we will pass a callback function for customization
//initial state of data should look like

// data:{
//   labels:[],
//   datasets:[]
// }