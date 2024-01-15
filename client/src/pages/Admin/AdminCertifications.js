import { Form, Input, Modal, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading, reloadData } from "../../redux/rootSlice";
import axios from "axios";

function AdminCertifications() {
  const dispatch = useDispatch();
  // reducer
  const { portfolioData } = useSelector((state) => state.root);
  const { certifications } = portfolioData;

  // for add and edit modal
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit,setSelectedItemForEdit]=React.useState(null);
  const [type="add",setType]=React.useState("add");

  const onFinish=async(values)=>{
    try {
      let response;
      // show loading
      dispatch(ShowLoading());
      if(selectedItemForEdit){
          response = await axios.post("/api/portfolio/update-certifications", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      }
      else{
        response = await axios.post("/api/portfolio/add-certifications", 
        values,
);
      }
      dispatch(HideLoading());
      dispatch(reloadData(true))
      if (response.data.success) {
        // this is an antd component
        message.success(response.data.message);
        setShowAddEditModal(false);
        dispatch(reloadData(true))
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
      } else {
        // this is an antd component
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  }
const onDelete=async(item)=>{
  try {
    // show loading
    dispatch(ShowLoading());
    dispatch(reloadData(true))
        const response = await axios.post("/api/portfolio/delete-certifications", {
        _id: item._id,
      });

    dispatch(HideLoading());
    if (response.data.success) {
      // this is an antd component
      message.success(response.data.message);
      dispatch(reloadData(true))
      setShowAddEditModal(false);
      dispatch(HideLoading());
      dispatch(reloadData(true))
    } else {
      // this is an antd component
      message.error(response.data.message);
    }
  } catch (error) {
    message.error(error.message);
    dispatch(HideLoading());
  }
}
  return (
    <div>

      <div className="flex justify-end">
        <button className="bg-primary px-5 py-2 text-white mb-5"
        onClick={()=>{
          setSelectedItemForEdit(null);
          setShowAddEditModal(true);
          setType("add");
        }}>
          Add Certification
        </button>
      </div>
      {/* using grid */}
      <div className="grid grid-cols-4 gap-5 sm:grid-cols-1">
        {certifications.map((certification) => (
          <div className="shadow border border-gray-400 p-5 gap-5 flex flex-col">
            <h1 className="text-secondary text-3xl font-bold">
              {certification.name}
            </h1>
            <h1 className="text-xl text-fifth">{certification.org}</h1>
            <hr />
            <div className="flex justify-end gap-2 align-bottom">
              <button className="bg-third text-white px-5 py-2" onClick={()=>{
                setSelectedItemForEdit(certification);
                setShowAddEditModal(true);
                setType("edit")
              }}>Edit</button>
              <button className="bg-fifth text-white px-5 py-2" onClick={()=>{
                  onDelete(certification)
              }}>Delete</button>
            </div>
          </div>
        ))}
      </div>

{(type=="add"||selectedItemForEdit)&&(
      <Modal open={showAddEditModal}
      title={selectedItemForEdit?"Edit experience":"Add experience"}
      footer={null}
      onCancel={()=>{setShowAddEditModal(false); setSelectedItemForEdit(null)}} 
      >
        <Form layout="vertical" onFinish={onFinish} initialValues={selectedItemForEdit}>
          <Form.Item name="name" label="Name">
            <input placeholder="Name"/>
          </Form.Item>

          <Form.Item name="org" label="Issuing Organization">
            <input placeholder="Issuing Organization"/>
          </Form.Item>

          <Form.Item name="url" label="Credential URL">
            <input placeholder="Credential URL"/>
          </Form.Item>

          <div className="flex justify-end gap-5">
            <button className="bg-primary text-white px-5 py-2">
              {selectedItemForEdit?"UPDATE":"ADD"}
            </button>
          </div>
        </Form>
      </Modal>)}
    </div>
  );
}

export default AdminCertifications;
