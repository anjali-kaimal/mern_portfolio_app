import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

function AdminContact() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  // calling the API to change the values
  const onFinish = async (values) => {
    try {
      // show loading
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contact._id,
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
        initialValues={portfolioData.contact}
      >
        {/* This name needs to be same as mongo name */}
        <Form.Item name={"name"} label="Name">
          {/* textbox */}
          <input placeholder="Name" />
        </Form.Item>

        <Form.Item name={"email"} label="Email ID">
          {/* textbox */}
          <input placeholder="Email ID" />
        </Form.Item>

        <Form.Item name={"mobile"} label="Mobile number">
          {/* textbox */}
          <input placeholder="Mobile Number" />
        </Form.Item>

        <Form.Item name={"country"} label="Country">
          {/* textbox */}
          <input placeholder="Country" />
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

export default AdminContact;
