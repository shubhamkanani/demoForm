import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useHistory } from "react-router-dom";
import "react-phone-number-input/style.css";
const { Option } = Select;
function FormData() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "male",
  });
  const onChangeData = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  const onFinish = () => {
    debugger;
    if (!isValidPhoneNumber(formData.mobile)) {
      return;
    }
    const localData = [];
    let data = JSON.parse(localStorage.getItem("Data"));
    if (data && data.length > 0) {
      data.map((item) => {
        localData.push(item);
      });
    }
    localData.push(formData);
    localStorage.setItem("Data", JSON.stringify(localData));
    history.push('/')
  };
  return (
    <div>
      <Form
        style={{ margin: "auto", width: "50%" }}
        layout="vertical"
        onFinish={() => {
          onFinish();
        }}
      >
        <h1>Data Form </h1>
        <Form.Item
          name="name"
          label="Enter Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => onChangeData(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Enter Email"
          rules={[
            {
              type: "email",
            },
            {
              required: true,
            },
          ]}
        >
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => onChangeData(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="mobile"
          label="Enter Mobile Number"
          rules={[
            // {
            //   required: true,
            // },
            {
              validator: (_, value) =>
                isValidPhoneNumber(formData.mobile) && formData.mobile
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("Please Enter Valid Mobile number")
                    ),
            },
          ]}
        >
          <PhoneInput
            placeholder="Enter phone number"
            value={formData.mobile}
            onChange={(value) => {
              onChangeData("mobile", value);
            }}
          />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            value={formData.gender}
            placeholder="Select a option and change input text above"
            onChange={(value) => onChangeData("gender", value)}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormData;
