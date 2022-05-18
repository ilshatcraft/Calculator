import './App.scss';
import {React,useState,useEffect} from 'react'; 
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Form from 'react-bootstrap/Form'




function App() {
  var symbols=['.',',','/','*','-','+']
  var signs=['/','*','-','+']
  const [equation,SetEquation]=useState('')
  var array_index

const check=(value, arr)=>{
  for( let i=0;i<arr.length;i++){
   if( value==arr[i]){
    return true}
  }
  return false
}

const check2=(value,arr)=>{
  
 if( (check(Object.values(equation).splice(-1,1),symbols))&& check(value,arr)){
   return true
 }
 return false
}

const input_chek=(target)=>{
let b=Object.values(target).splice(-1,1)
  if( ((equation=='')&& (check(b,symbols)))){   
    // target=target.replace(/[^0-9]/g, '')
    // SetEquation(target)
    return true
  }
  if((check2(b,symbols))){
    // target=target.replace(/[^0-9]/g, '')
    // SetEquation(target+b)
    return true
  }
  target=target.replace(/[^0-9\.\,\/\*\-\+]/g, '')
  SetEquation(target)
  return false
}

const string_to_int=(array,element_of_array,sign)=>{
   console.log(array,element_of_array,sign)
   let number=[]
   let b=0;
   for(let i=element_of_array+sign;i<array.length&&i>-1;i=i+sign){
    if(check(array[i],signs)){
      console.log('знак')
      break
    }
    number[b]=array[i]
    if(number[b]==','){
      number[b]='.'
    }
    b++
     console.log('не знак')
   }
   console.log(number.join(''))
   array_index=b
   if(sign==-1){
    return(number.reverse().join(''))
   }
   return(number.join(''))
}

const count=()=>{
  let eqation_array=Object.values(equation)
  let summ=0;
  let final_summ=0;
  if(!check(Object.values(equation).splice(-1,1),symbols)){

  for(let l=0;l<eqation_array.length;l++){

    if(eqation_array[l]==='*'){
      string_to_int(eqation_array,l,-1)
      let equation_length1
      let equation_length2
      let summ1=Number(string_to_int(eqation_array,l,-1))
      equation_length1=array_index
      let summ2=Number(string_to_int(eqation_array,l,1))
      equation_length2=equation_length1+array_index+1
      summ=summ1*summ2
      eqation_array.splice(l-equation_length1,equation_length2,summ)
      l=0
      array_index=0
      equation_length1=0
      equation_length2=0
      console.log(eqation_array)
    }

    else if(eqation_array[l]==='/'){
      string_to_int(eqation_array,l,-1)
      let equation_length1
      let equation_length2
      let summ1=Number(string_to_int(eqation_array,l,-1))
      equation_length1=array_index
      let summ2=Number(string_to_int(eqation_array,l,1))
      equation_length2=equation_length1+array_index+1
      summ=summ1/summ2
      eqation_array.splice(l-equation_length1,equation_length2,summ)
      l=0
      array_index=0
      equation_length1=0
      equation_length2=0
      console.log(eqation_array)
    }

   

    summ=0;
  }
for(let l=0;l<eqation_array.length;l++){

    if(eqation_array[l]==='+'){
      string_to_int(eqation_array,l,-1)
      let equation_length1
      let equation_length2
      let summ1=Number(string_to_int(eqation_array,l,-1))
      equation_length1=array_index
      let summ2=Number(string_to_int(eqation_array,l,1))
      equation_length2=equation_length1+array_index+1
      summ=summ1+summ2
      eqation_array.splice(l-equation_length1,equation_length2,summ)
      l=0
      array_index=0
      equation_length1=0
      equation_length2=0
      console.log(eqation_array)
    }

    else if(eqation_array[l]==='-'){
      string_to_int(eqation_array,l,-1)
      let equation_length1
      let equation_length2
      let summ1=Number(string_to_int(eqation_array,l,-1))
      equation_length1=array_index
      let summ2=Number(string_to_int(eqation_array,l,1))
      equation_length2=equation_length1+array_index+1
      summ=summ1-summ2
      eqation_array.splice(l-equation_length1,equation_length2,summ)
      l=0
      array_index=0
      equation_length1=0
      equation_length2=0
      console.log(eqation_array)
    }
    summ=0;
  }



  SetEquation(eqation_array.join(''))
}
else{console.log('net')}
}
 
  const inputs=(x,value)=>{
    switch (x) {
       case 1:
        if( ((equation=='')&& (check(value,symbols)))){   
         
          break;
        }
        if((check2(value,symbols))){
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
        count();
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
  <Button onClick={()=>inputs(1,'/')}>&#247;</Button>
  <Button  onClick={()=>inputs(1,'*')}>&#215;</Button>
  
</div>

<div  className='Buttons_holder_row'>
  <Button onClick={()=>inputs(1,1)}>1</Button>
  <Button onClick={()=>inputs(1,2)}>2</Button>
  <Button onClick={()=>inputs(1,3)}>3</Button>
  <Button onClick={()=>inputs(1,'-')}>-</Button>
  
  
</div>

<div   className='Buttons_holder_row'>
  <Button onClick={()=>inputs(1,4)}>4</Button>
  <Button onClick={()=>inputs(1,5)}>5</Button>
  <Button onClick={()=>inputs(1,6)}>6</Button>
  <Button onClick={()=>inputs(1,'+')}>+</Button>
  
 
</div>

<div  className='Buttons_holder_row'>
  <Button onClick={()=>inputs(1,7)}>7</Button>
  <Button onClick={()=>inputs(1,8)}>8</Button>
  <Button onClick={()=>inputs(1,9)}>9</Button>
  <Button onClick={()=>inputs(4)}>=</Button>
  </div>

  <div  className='Buttons_holder_row_last'>
  <Button onClick={()=>inputs(1,',')}>,</Button>
  <Button onClick={()=>inputs(1,0)}>0</Button>
  
  </div>

</div>
</ButtonGroup>
</div>
  </div>;
}

export default App;
