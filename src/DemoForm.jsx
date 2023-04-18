import React, { useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { Card, List } from 'antd';
import { useState } from "react";
import DemoCalender from "./DemoCalender";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const sportsData = ["BasketBall", "Cricket", "Football", "Golf"];
const FormDisabledDemo = () => {
  let navigate = useNavigate();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [capacity, setCapacity] = useState("purchase_capacity");
  const [type, setType] = useState("continuous");
  const [slots, setSlots] = useState([]);
  const [selectedCompany,setSelectedCompany] = useState()
  const [productType,setProductType] = useState()
  const [profileType,setProfileType] = useState()
  const [capacityRequired,setCapacityRequired] = useState()
  const addNewSlot = () => {
    setSlots([...slots, { value: "break", capacity: "500" }]);
  };
  const redirectToCalender = () => {
    navigate("/calender", { state: { data: 'hello' ,
    valueArray:valueArray,
  capacity:capacity,
profile:profileType,
product:productType,
capacityType:type,
reqCapacity:capacityRequired,
company:selectedCompany} });
  };
  const handleSlots = () => {
    return slots.map((slot) => {
      return (
        <div style={{ display: "flex" }}>
          <Form.Item label="Capacity Requirement">
            <Select
              defaultValue={slot.value}
              onChange={(data) => {
                // setType(data);
              }}
            >
              <Select.Option value="continuous">Continuous</Select.Option>
              <Select.Option value="break">Specific Date Ranges</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item style={{ marginLeft: "10px", marginRight: "10px" }}>
            <RangePicker />
          </Form.Item>
          <Form.Item label="CAPACITY (MAX)">
            <Input />
          </Form.Item>
        </div>
      );
    });
  };
  const [valueArray, setValueArray] = useState([])
  const options = [
    { label: 'AUTOMATION_ACCESS_TAX_IN', value: 'p1' },
    { label: 'EBT_PnD _PostPay 2.2', value: 'p2' },
    { label: 'EBTPnD Postpay CST Timezone', value: 'p3' },
    { label: 'CHECKOUTPOSTPAY', value: 'p4' },
    { label: 'EBt PnD MST Time Zone', value: 'p5' },
    { label: 'Prepay_TAX_IN', value: 'p6' },
    { label: 'HECKOUT_PREPAY2', value: 'p7' },
    { label: 'PnD Postpay CST Timezone', value: 'p8' }
  ]

  const profileOprtions = [
    { label: 'All', value: 'All' },
    { label: 'Personal', value: 'Personal' },
    { label: 'Business', value: 'Business' },
    { label: 'Corporate', value: 'Corporate' }
  ]
  const setSelectedValue = (value) => {
    setValueArray([...valueArray, options.find(option => option.value === value).label])
  }
  const handleRadioClick= (e) => {
    setCapacity(e.target.value)
  }

  const getSelectedCompany= (e) => {
    setSelectedCompany(e)
  }

  const getProductType = (e) => {
    console.log(e)
    setProductType(e)
  }

  const getProfileType = (e) => {
    console.log(e)
    setProfileType(e)
  }
  const getCapacityRequired = (e) => {
    setCapacityRequired(e.target.value)
  }
  return (
    <>
      <Form
        labelCol={{
          span: 100,
          color: "#fff",
        }}
        wrapperCol={{
          span: 100,
        }}
        layout="horizontal"
        style={{
          maxWidth: 1000,
          color: "#fff",
        }}
      >
        <Form.Item label="Type">
          <Radio.Group
            defaultValue={capacity}
            onChange={(data) => {
              setCapacity(data.target.value);
            }}
          >
            <Radio value="purchase_capacity" onClick={(e)=>handleRadioClick(e)}>Purchase Capacity</Radio>
            <Radio value="Session Capacity" onClick={(e)=>handleRadioClick(e)} >Session Capacity</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Select Company Name" style={{ display: "flex" }}>
          <Select defaultValue={"INGENICO_AUSTRIA"} onSelect={(e)=> getSelectedCompany(e)} >
            <Select.Option value="INGENICO_AUSTRIA" >
              INGENICO_AUSTRIA
            </Select.Option>
            <Select.Option value="NETS_POSTPAY_SWEDEN">
              NETS_POSTPAY_SWEDEN
            </Select.Option>
            <Select.Option value="NMI_ONEPARKING">NMI_ONEPARKING</Select.Option>
            <Select.Option value="AUTOMATION_DENMARK">
              AUTOMATION_DENMARK
            </Select.Option>
            <Select.Option value="GLOBAL_PERMITS">GLOBAL_PERMITS</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Profile Type" style={{ width: "300px" }}>
          <Select placeholder="Select profile type" options={profileOprtions} onSelect={(e)=> getProfileType(e)} >
          </Select>
        </Form.Item>
        <Form.Item label="Product Type" style={{ display: "flex" }}>
        
          <Select value={capacity === "purchase_capacity" ? "Pass Master" : "STP Product"} onSelect={(e)=>{getProductType(e)}}>
            <Select.Option value="Pass Master">Pass Master</Select.Option>
            <Select.Option value="Pre-Booking">Pre-Booking</Select.Option>
            <Select.Option value="STP Product">STP Product</Select.Option>
          </Select>
        </Form.Item>
        <div style={{ display: 'flex' }}>
          <Form.Item label="Pass Master ID">

            <Form.Item label="Parking" >
              <Select mode="multiple" options={options} onSelect={e => setSelectedValue(e)} />

            </Form.Item>
            <Form.Item label="Parking Lot">
              <List
                dataSource={valueArray}
                renderItem={(item) => (
                  <List.Item>
                    <Card>{item}</Card>
                  </List.Item>
                )}
              />
            </Form.Item>

          </Form.Item>
        </div>
        <Form.Item style={{ width: "80px" }}>
          <Button type="primary" block>
            SLOTS
          </Button>
        </Form.Item>
        <div style={{ display: "flex" }}>
          <Form.Item label="Capacity Requirement">
            <Select
              defaultValue={type}
              onChange={(data) => {
                setType(data);
              }}
            >
              <Select.Option value="continuous">Continuous</Select.Option>
              <Select.Option value="break">Specific Date Ranges</Select.Option>
            </Select>
          </Form.Item>
          {type === "continuous" && (
            <>
              <Form.Item style={{ marginLeft: "10px", marginRight: "10px" }}>
                <DatePicker />
              </Form.Item>
              <Form.Item label="Enter Capacity Required">
                <Input onChange={(value)=>getCapacityRequired(value)}/>
              </Form.Item>
            </>
          )}
          {type === "break" && (
            <>
              <Form.Item style={{ marginLeft: "10px", marginRight: "10px" }}>
                <RangePicker />
              </Form.Item>
              <Form.Item label="CAPACITY(MAX)">
                <Input onChange={(value)=>getCapacityRequired(value)}/>
              </Form.Item>
              <Form.Item style={{ width: "250px" }}>
                <Button type="primary" block onClick={addNewSlot}>
                  + ADD MORE SLOTS
                </Button>
              </Form.Item>
            </>
          )}
        </div>
        {type === "break" && handleSlots()}

        <Form.Item style={{ width: "300px" }}>
          <Button type="primary" block onClick={redirectToCalender}>
            CONFIRM AND SAVE DETAILS
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;
