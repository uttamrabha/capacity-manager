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
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [capacity, setCapacity] = useState("apple");
  const [type, setType] = useState("continuous");
  const [slots, setSlots] = useState([]);
  const addNewSlot = () => {
    setSlots([...slots, { value: "break", capacity: "500" }]);
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
  const [valueArray,setValueArray] = useState([])  
  const options = [
    {label:'AUTOMATION_ACCESS_TAX_IN', value:'p1'},
    {label:'EBT_PnD _PostPay 2.2',value:'p2'},
    {label:'EBTPnD Postpay CST Timezone',value:'p3'},
    {label:'CHECKOUTPOSTPAY',value:'p4'},
    {label:'EBt PnD MST Time Zone',value:'p5'},
    {label:'Prepay_TAX_IN',value:'p6'},
    {label:'HECKOUT_PREPAY2',value:'p7'},
    {label:'PnD Postpay CST Timezone',value:'p8'}
  ]

  // const redirectToSavedDetails = () => {
  //   const navigate = useNavigate();
  //   const handleClick = () => {
  //     navigate("/path/to/push");
  // }
  // }


  const setSelectedValue = value => {
    setValueArray([...valueArray,options.find(option=>option.value === value).label])
    
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
            <Radio value="apple">Purchase Capacity </Radio>
            <Radio value="pear">Session Capacity</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Select Company Name" style={{ display: "flex" }}>
          <Select defaultValue={"ingenico_austria"}>
            <Select.Option value="ingenico_austria">
              INGENICO_AUSTRIA
            </Select.Option>
            <Select.Option value="nets_postpay">
              NETS_POSTPAY_SWEDEN
            </Select.Option>
            <Select.Option value="nmi_oneparking">NMI_ONEPARKING</Select.Option>
            <Select.Option value="automation_denmark">
              AUTOMATION_DENMARK
            </Select.Option>
            <Select.Option value="global_permits">GLOBAL_PERMITS</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Profile Type" style={{ width: "300px" }}>
          <Select defaultValue={"all"}>
            <Select.Option value="all">All</Select.Option>
            <Select.Option value="personal">Personal</Select.Option>
            <Select.Option value="business">Business</Select.Option>
            <Select.Option value="corporate">Corporate</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Product Type" style={{ display: "flex" }}>
          <Select value={capacity === "apple" ? "pass_master" : "stp_product"}>
            <Select.Option value="pass_master">Pass Master</Select.Option>
            <Select.Option value="pre_booking">Pre-Booking</Select.Option>
            <Select.Option value="stp_product">STP Product</Select.Option>
          </Select>
        </Form.Item>
        <div style={{display: 'flex'}}>
        <Form.Item label="Pass Master ID">
        
        <Form.Item label="Parking" >
          <Select  mode="multiple" options={options} onSelect={e=>setSelectedValue(e)}/>
        
        </Form.Item>
        <Form.Item label="Parking Lot">
        <List
    // grid={{
    //   gutter: 16,
    //   xs: 1,
    //   sm: 2,
    //   md: 4,
    //   lg: 4,
    //   xl: 6,
    //   xxl: 3,
    // }}
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
                <Input />
              </Form.Item>
            </>
          )}
          {type === "break" && (
            <>
              <Form.Item style={{ marginLeft: "10px", marginRight: "10px" }}>
                <RangePicker />
              </Form.Item>
              <Form.Item label="CAPACITY (MAX)">
                <Input />
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
          <Button type="primary" block onClick={<DemoCalender />}>
            CONFIRM AND SAVE DETAILS
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;
