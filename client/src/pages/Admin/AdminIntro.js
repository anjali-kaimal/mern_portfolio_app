import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

function AdminIntro() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  // calling the API to change the values
  const onFinish = async (values) => {
    try {
      // show loading
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intro._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        // this is an antd component
        message.success(response.data.message);
      } else {
        // this is an antd component
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.intro}
      >
        {/* This name needs to be same as mongo name */}
        <Form.Item name={"welcomeText"} label="Welcome Text">
          {/* textbox */}
          <input placeholder="Welcome Text" />
        </Form.Item>

        <Form.Item name={"firstName"} label="First Name">
          {/* textbox */}
          <input placeholder="First Name" />
        </Form.Item>

        <Form.Item name={"lastName"} label="Last Name">
          {/* textbox */}
          <input placeholder="Last Name" />
        </Form.Item>

        <Form.Item name={"caption"} label="Caption">
          {/* textbox */}
          <input placeholder="Caption" />
        </Form.Item>

        <Form.Item name={"description"} label="Description">
          {/* textbox */}
          <textarea placeholder="Description" />
        </Form.Item>

        <div className="flex justify-end width-full">
          <button className="px-10 py-2 bg-primary text-white" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
