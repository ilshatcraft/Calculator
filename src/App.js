import './App.scss';
import {React,useState,useEffect} from 'react'; 
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Form from 'react-bootstrap/Form'




 function App() {


  const [equation,SetEquation]=useState('')
 
  const inputs=(x)=>{
    switch (x) {
      case 1:
        SetEquation(equation,x);
        break;
      
      default:
        
    }
  }

  return <div className='Body'>
<div>
    <Form.Label></Form.Label>
    <Form.Control type="" placeholder="" />
    

<ButtonGroup className='Buttons_holder' >
    <div>
<div vertical className='Buttons_holder_row'>
  <Button>AC</Button>
  <Button>&#129188;</Button>
  <Button>&#65285;</Button>
  <Button>&#247;</Button>

  
</div>

<div vertical className='Buttons_holder_row'>
  <Button >1</Button>
  <Button>2</Button>
  <Button>3</Button>
  <Button>&#215;</Button>
  
  
</div>

<div vertical className='Buttons_holder_row'>
  <Button>4</Button>
  <Button>5</Button>
  <Button>6</Button>
  <Button>-</Button>
  
 
</div>

<div vertical className='Buttons_holder_row'>
  <Button>7</Button>
  <Button>8</Button>
  <Button>9</Button>
  <Button>+</Button>
  </div>

  <div vertical className='Buttons_holder_row_last'>
  <Button>,</Button>
  <Button>0</Button>
  <Button>=</Button>
  </div>

</div>
</ButtonGroup>
</div>
  </div>;
}

export default App;
