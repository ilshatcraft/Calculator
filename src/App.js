import './App.scss';
import {React,useState,useEffect} from 'react'; 
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Form from 'react-bootstrap/Form'




 function App() {
var symbols=['.',',','%','/','*','-','+']
  const [equation,SetEquation]=useState('')

const check=(value, arr)=>{
  for( let i=0;i<arr.length;i++){
   if( value==arr[i]){
    return true}
  }
  return false
}

const chek2=(value,arr)=>{
  
 if( (check(Object.values(equation).splice(-1,1),symbols))&& check(value,arr)){
   return true
 }
 return false
}

const input_chek=(target)=>{
let b=Object.values(target).splice(-1,1)
  if( ((equation=='')&& (check(b,symbols)))){   
    target=target.replace(/[^0-9]/g, '')
    SetEquation(target)
    return true
  }
  if((chek2(b,symbols))){
    target=target.replace(/[^0-9]/g, '')
    SetEquation(target+b)
    return true
  }
  target=target.replace(/[^0-9\.\,\%\/\*\-\+]/g, '')
  SetEquation(target)
  return false
}

 
  const inputs=(x,value)=>{
    switch (x) {
       case 1:
        if( ((equation=='')&& (check(value,symbols)))){   
         
          break;
        }
        if((chek2(value,symbols))){
          break;
        }
        SetEquation(equation+value);
        break;
      case 2:
        
        let  l=(Object.values(equation))
         l.splice(-1,1)
         SetEquation(l.join(''));
        break;

      case 3:
        SetEquation('');
        break;

      case 4:
          
          break;  
       
     }
     console.log(equation)
  }

  return <div className='Body'>
<div>
  <div>
    <input 
    type="text" 
    value={equation}
    onChange={(e)=>{input_chek(e.target.value) ;}}
    ></input>
</div>
<ButtonGroup className='Buttons_holder' >
    <div>
<div  className='Buttons_holder_row'>
  <Button onClick={()=>inputs(3)}>AC</Button>
  <Button onClick={()=>inputs(2)}>&#129188;</Button>
  <Button onClick={()=>inputs(1,'%')}>&#65285;</Button>
  <Button onClick={()=>inputs(1,'/')}>&#247;</Button>

  
</div>

<div  className='Buttons_holder_row'>
  <Button onClick={()=>inputs(1,1)}>1</Button>
  <Button onClick={()=>inputs(1,2)}>2</Button>
  <Button onClick={()=>inputs(1,3)}>3</Button>
  <Button  onClick={()=>inputs(1,'*')}>&#215;</Button>
  
  
</div>

<div   className='Buttons_holder_row'>
  <Button onClick={()=>inputs(1,4)}>4</Button>
  <Button onClick={()=>inputs(1,5)}>5</Button>
  <Button onClick={()=>inputs(1,6)}>6</Button>
  <Button onClick={()=>inputs(1,'-')}>-</Button>
  
 
</div>

<div  className='Buttons_holder_row'>
  <Button onClick={()=>inputs(1,7)}>7</Button>
  <Button onClick={()=>inputs(1,8)}>8</Button>
  <Button onClick={()=>inputs(1,9)}>9</Button>
  <Button onClick={()=>inputs(1,'+')}>+</Button>
  </div>

  <div  className='Buttons_holder_row_last'>
  <Button onClick={()=>inputs(1,',')}>,</Button>
  <Button onClick={()=>inputs(1,0)}>0</Button>
  <Button onClick={()=>inputs(4)}>=</Button>
  </div>

</div>
</ButtonGroup>
</div>
  </div>;
}

export default App;
