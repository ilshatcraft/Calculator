import './App.scss';
import {React,useState,useEffect} from 'react'; 
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Form from 'react-bootstrap/Form'




 function App() {

  let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
  let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
  let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const [equation,SetEquation]=useState('')
 
  const inputs=(x,value)=>{
    switch (x) {
       case 1:
        SetEquation(equation+value);
        break;
      case 2:
        
        var  l=(Object.values(equation))
         l.splice(-1,1)
         SetEquation(l.join(''));
        break;

      case 3:
        SetEquation('');
        break;

      case 4:
          if (Object.values(equation).includes(value) )
          break;  
       
     }
     console.log(equation)
  }

  return <div className='Body'>
<div>
  <div>
    <input 
    type="text" 
    value={equation.replace(/[^0-9\.\,\%\/\*\-\+]/g, '')}
    onChange={(e)=>{SetEquation(e.target.value);}}
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
