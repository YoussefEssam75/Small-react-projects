import { useState } from 'react';
import "./App.css";

export default function App(){
  return (
      <div className="App">
        <TipCalculatur/>
      </div>
  );
}

function TipCalculatur(){
  const [billamount, setBillamount] = useState(0);
  const[persntage1 , setpersntage1] = useState(0);
  const[persntage2 , setpersntage2] = useState(0);
const tip =billamount * (persntage1 + persntage2) /200;
return <div>
  <BillInput billamount={billamount} onsetBillamount={setBillamount}/>
  <TipSelector persntage1={persntage1} onselect={setpersntage1}> please rate the service used </TipSelector>
  <TipSelector persntage2={persntage2} onselect={setpersntage2}> please make your friend rate the service you used </TipSelector>
  <Output billamount={billamount} tip={tip}/>
  <Reset onReset={() => {setBillamount(""); setpersntage1(0); setpersntage2(0);}}/>
</div>
}

function BillInput({billamount, onsetBillamount}){
return <div>
  <label> How much was the bill ? </label>
  <input type="text" placeholder="Enter Amount" value={billamount} onChange={(e)=> onsetBillamount(Number(e.target.value))}/>
</div>
}

function TipSelector({children , persntage , onselect}){
  
return <div>  
  <label>{children}</label>
  <select value={persntage} onChange={(e)=> onselect(Number(e.target.value))}> 
    <option value="0"> So Bad </option>
    <option value="5"> Not Bad </option>
    <option value="10"> Good </option>
    <option value="15"> So Good </option>
    <option value="20"> Fantastic </option> 
  </select>
</div>
}

function Output({billamount, tip}  ){
return <div>
  <h3> Bill Amount : {billamount} $ </h3>
  <h3> Tip Amount : {tip} $ </h3>
  <h3> Total Amount : {billamount + tip} $ </h3>
</div>
}

function Reset({onReset}){
    return <div>
      <button onClick={onReset}> Reset </button>
    </div>
}