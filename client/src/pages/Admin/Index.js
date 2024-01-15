import React, { useEffect } from 'react'
import Header from "../../components/Header";
import { Tabs } from 'antd';
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from 'react-redux';
import AdminExperiences from './AdminExperiences';
import AdminMernProjects from "./AdminMernProjects";
import AdminMiniProjects from "./AdminMiniProjects"
import AdminCertifications from './AdminCertifications';
import AdminContact from './AdminContact';

function Admin() {
  const {portfolioData}=useSelector((state)=>state.root);

useEffect(() => {
if(!localStorage.getItem("token")){
  window.location.href="/admin-login";
}
}, [])


  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Intro',
      children: <AdminIntro/>,
    },
    {
      key: '2',
      label: 'About',
      children: <AdminAbout/>,
    },
    {
      key: '3',
      label: 'Experience',
      children: <AdminExperiences/>,
    },
    {
      key: '4',
      label: 'MERN Projects',
      children: <AdminMernProjects/>,
    },
    {
      key: '5',
      label: 'Mini Projects',
      children: <AdminMiniProjects/>,
    },
    {
      key: '6',
      label: 'Certifications',
      children: <AdminCertifications/>,
    },
    {
      key: '7',
      label: 'Contact',
      children: <AdminContact/>,
    },
  ];
  return (
    <div>
        <Header title={"Web Developer Portfolio Admin"}/>
        <h1 className='underline text-primary flex justify-end mr-5 mt-2 text-xl cursor-pointer' onClick={()=>{
          localStorage.removeItem("token");
          window.location.href="/admin-login";
        }}>Logout</h1>
        {portfolioData && ( <div className='mt-2 p-5 text-2xl'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>)}
        </div>
  )
}

export default Admin