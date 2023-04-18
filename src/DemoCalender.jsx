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
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        
        <div style={{display:"flex",alignItems:"center"}}>
          <span>Type : </span>
        {state.capacity =="purchase_capacity" && <p>Purchase Capacity</p> || <p>Session Capacity</p>}
        </div>

        <div style={{display:"flex", alignItems:"center"}}>
          
          {state.selectedCompany && 
          <div>
            <span>Company Type : </span>
            <p>{state.selectedCompany}</p>
          </div>
          }
          </div>

        <div style={{display:"flex", alignItems:"center"}}>
          
          {state.profile && 
          <div>
            <span>Profile Type : </span>
            <p>{state.profile}</p>
          </div>
          }
          </div>

        <div style={{display:"flex", alignItems:"center"}}>
          
        {state.product && 
        <div>
          <span>Product Type : </span>
          <p>{state.product}</p>
        </div>
        }
        </div>
        
        <div style={{display:"flex", alignItems:"center"}}>

        {state.valueArray &&
        <div>
          <span>Parking Selected</span>
        {state.valueArray.map((arrvalue)=> {
          return <p>{arrvalue}</p>
        })}
        </div>
        } 
        </div>

        <div style={{display:"flex", alignItems:"center"}}>
          
          {state.capacityType && 
          <div>
            <span>Capacity Type : </span>
            <p>{state.capacityType}</p>
          </div>
          }
          </div>
        
          <div style={{display:"flex", alignItems:"center"}}>
          
          {state.capacityRequired && 
          <div>
            <span>Capacity Required : </span>
            <p>{state.capacityRequired}</p>
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
