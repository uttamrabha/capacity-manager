import React from "react";
import "./App.css";
import { PlusOutlined } from "@ant-design/icons";

import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import DemoForm from "./DemoForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DemoTest from "./DemoTest";
import DemoCalender from "./DemoCalender";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat = (value) =>
  `${dayjs(value)
    .startOf("week")
    .format(weekFormat)} ~ ${dayjs(value)
    .endOf("week")
    .format(weekFormat)}`;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={() => <DemoTest />} />
    </Routes>
  </BrowserRouter>
);

export default App;
