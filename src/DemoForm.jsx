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
          <Radio.Group>
            <Radio value="apple"> Permits </Radio>
            <Radio value="pear"> Session Creation </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Parking Operator Name">
          <Input />
        </Form.Item>
        <Form.Item label="Profile Type">
          <Select>
            <Select.Option value="demo">Personal</Select.Option>
            <Select.Option value="demo">Business</Select.Option>
            <Select.Option value="demo">Corporate</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Select Country">
          <Select>
            <Select.Option value="demo">INGENICO_AUSTRIA</Select.Option>
            <Select.Option value="demo">NETS_POSTPAY_SWEDEN</Select.Option>
            <Select.Option value="demo">NMI_ONEPARKING</Select.Option>
            <Select.Option value="demo">AUTOMATION_DENMARK</Select.Option>
            <Select.Option value="demo">GLOBAL_PERMITS</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Product Type">
          <Select>
            <Select.Option value="demo">Pass Master</Select.Option>
            <Select.Option value="demo">Pre-Booking</Select.Option>
            <Select.Option value="demo">STP Product</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item>
          <Button onClick={<DemoCalender/>}>CONFIRM AND SAVE DETAILS</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;