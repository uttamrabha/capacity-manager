import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
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
} from 'antd';
import { useState } from 'react';
import DemoCalender from './DemoCalender';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [capacity, setCapacity] = useState('apple')
  const [type, setType] = useState('continuous')

  return (
    <>
      <Form
        labelCol={{
          span: 100,
          color : "#fff"
        }}
        wrapperCol={{
          span: 100,
        }}
        layout="horizontal"
        style={{
          maxWidth: 1000,
          color :  "#fff"
        }}
      >
        <Form.Item label="Type">
          <Radio.Group defaultValue={capacity} onChange={(data) => {
            setCapacity(data.target.value)
          }}>
            <Radio value="apple">Purchase Capacity </Radio>
            <Radio value="pear">Session Capacity</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Select Company Name">
          <Select defaultValue={'ingenico_austria'} >
            <Select.Option value="ingenico_austria">INGENICO_AUSTRIA</Select.Option>
            <Select.Option value="nets_postpay">NETS_POSTPAY_SWEDEN</Select.Option>
            <Select.Option value="nmi_oneparking">NMI_ONEPARKING</Select.Option>
            <Select.Option value="automation_denmark">AUTOMATION_DENMARK</Select.Option>
            <Select.Option value="global_permits">GLOBAL_PERMITS</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Profile Type">
          <Select defaultValue={'all'}>
          <Select.Option value="all">All</Select.Option>
          <Select.Option value="personal">Personal</Select.Option>
          <Select.Option value="business">Business</Select.Option>
          <Select.Option value="corporate">Corporate</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Product Type">
          <Select value={capacity === 'apple' ? 'pass_master' : 'stp_product'}>
            <Select.Option value="pass_master">Pass Master</Select.Option>
            <Select.Option value="pre_booking">Pre-Booking</Select.Option>
            <Select.Option value="stp_product">STP Product</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item label="Pass Master ID">
        <div style={{display: 'flex'}}>
        <Form.Item label="Parking">
          <Select defaultValue={'p1'}>
            <Select.Option value="p1">AUTOMATION_ACCESS_TAX_IN</Select.Option>
            <Select.Option value="p2">EBT_PnD _PostPay 2.2</Select.Option>
            <Select.Option value="p3">EBTPnD Postpay CST Timezone</Select.Option>
            <Select.Option value="p4">CHECKOUTPOSTPAY</Select.Option>
            <Select.Option value="p5">EBt PnD MST Time Zone</Select.Option>
            <Select.Option value="p6">Prepay_TAX_IN</Select.Option>
            <Select.Option value="p7">CHECKOUT_PREPAY2</Select.Option>
            <Select.Option value="p8">PnD Postpay CST Timezone</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Parking Lot">
          <Input />
        </Form.Item>
        </div>
        </Form.Item>
       
        <div style={{display: 'flex'}}>
        <Form.Item label="Capacity Requirement">
          <Select defaultValue={type} onChange={(data) => {
            setCapacity(data.target.value)
          }}>
            <Select.Option value="continuous">Continuous</Select.Option>
            <Select.Option value="break">Specific Date Ranges</Select.Option>
          </Select>
        </Form.Item >
        <Form.Item style={{ marginLeft: "10px" , marginRight: "10px" }}>
          <DatePicker />
        </Form.Item>
        <Form.Item label="Enter Capacity Required">
          <Input />
        </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" block onClick={<DemoCalender/>}>CONFIRM AND SAVE DETAILS</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;