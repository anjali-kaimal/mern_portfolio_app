import { Form, message } from 'antd';
import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  // calling the API to change the values
  const onFinish = async (values) => {
    try {

      const tempSkills=values.skills.split(",");
      values.skills=tempSkills;
      // show loading
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
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
        initialValues={portfolioData.about}
      >
        {/* This name needs to be same as mongo name */}
        <Form.Item name={"lottieURL"} label="Lottie URL">
          {/* textbox */}
          <input placeholder="Lottie URL" />
        </Form.Item>

        <Form.Item name={"description1"} label="Description 1">
          {/* textbox */}
          <textarea placeholder="Description 1" />
        </Form.Item>

        <Form.Item name={"description2"} label="Description 2">
          {/* textbox */}
          <textarea placeholder="Description 2" />
        </Form.Item>

        <Form.Item name={"skills"} label="Skills">
          {/* textbox */}
          <input placeholder="Skills" />
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

export default AdminAbout