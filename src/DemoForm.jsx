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
          // backgroundColor : '#0e8820',
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
        <Form.Item label="Profile Type">
          <Select>
            <Select.Option value="personal">Personal</Select.Option>
            <Select.Option value="business">Business</Select.Option>
            <Select.Option value="corporate">Corporate</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Select Country">
          <Select defaultValue={'ingenico_austria'} >
            <Select.Option value="ingenico_austria">INGENICO_AUSTRIA</Select.Option>
            <Select.Option value="nets_postpay">NETS_POSTPAY_SWEDEN</Select.Option>
            <Select.Option value="nmi_oneparking">NMI_ONEPARKING</Select.Option>
            <Select.Option value="automation_denmark">AUTOMATION_DENMARK</Select.Option>
            <Select.Option value="global_permits">GLOBAL_PERMITS</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Product Type">
          <Select value={capacity === 'apple' ? 'pass_master' : 'stp_product'}>
            <Select.Option value="pass_master">Pass Master</Select.Option>
            <Select.Option value="pre_booking">Pre-Booking</Select.Option>
            <Select.Option value="stp_product">STP Product</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Capacity Requirement">
          <Select>
            <Select.Option value="continuous">Continuous</Select.Option>
            <Select.Option value="break">Specific Date Ranges</Select.Option>
          </Select>
        </Form.Item>
        <div style={{display: 'flex '}}>
        <Form.Item label="Please select date range for booking slots - ">
          <RangePicker />
        </Form.Item>
        <Form.Item>
          <RangePicker />
        </Form.Item>

        </div>
        <Form.Item>
          <Button onClick={<DemoCalender/>}>CONFIRM AND SAVE DETAILS</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;