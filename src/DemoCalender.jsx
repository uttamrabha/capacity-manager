import React, { useState } from "react";
import { Alert, Calendar } from 'antd';
import dayjs from 'dayjs';
import { useLocation } from "react-router-dom";
const DemoCalender = () => {
  const [value, setValue] = useState(() => dayjs('2023-04-18'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2023-04-18'));
  const { state } = useLocation()
  console.log('TEST', state)
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ display: 'flex' ,margin:'50px' }}>
      <div style={{ width: '50%' ,border:"1px solid black", display: "flex", flexDirection:"column",alignItems:"center",height:"fit-content", padding:"10px"}}>
        
        <div style={{display:"flex",alignItems:"center"}}>
          <span>Type : </span>
        {state.capacity =="purchase_capacity" && <p> Purchase Capacity</p> || <p> Session Capacity</p>}
        </div>

        <div style={{display:"flex",alignItems:"center"}}>
          
          {state.company && 
          <div>
            <span>Company Type : {state.company}</span>
            <p></p>
          </div>
          }
          </div>

        <div style={{display:"flex", alignItems:"center"}}>
          
          {state.profile && 
          <div>
            <span>Profile Type :  {state.profile}</span>
            <p></p>
          </div>
          }
          </div>

        <div style={{display:"flex", alignItems:"center"}}>
          
        {state.product && 
        <div>
          <span>Product Type : {state.product}</span>
          <p></p>
        </div>
        }
        </div>
        
        <div style={{display:"flex", alignItems:"center"}}>

        {state.valueArray.length>0 &&
        
        <div>
          {console.log(state.valueArray)}
          <span>Parking Selected : 
        {state.valueArray.map((arrvalue)=> {
          return <p>{arrvalue}</p>
        })}</span>
        </div>
        } 
        </div>

        <div style={{display:"flex", alignItems:"center"}}>
          
          {state.capacityType && 
          <div>
            <span>Capacity Type : {state.capacityType}</span>
            
          </div>
          }
          </div>
        
          <div style={{display:"flex", alignItems:"center"}}>
          
          {state.reqCapacity && 
          <div>
            <span>Capacity Required : {state.reqCapacity}</span>
            
          </div>
          }
          </div>
        
        
      </div>
      <div style={{ width: '50%' }}>
        <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
      </div>
    </div>
  );
};
export default DemoCalender;
