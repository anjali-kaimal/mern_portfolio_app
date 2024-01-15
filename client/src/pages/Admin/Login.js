import { message } from 'antd';
import axios from 'axios';
import React from 'react'
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';

function Login() {
    const [user,setUser]=React.useState({
        username:"",
        password:""
    });
const dispatch=useDispatch();
    const login=async()=>{
        try {
            dispatch(ShowLoading());
            const response=await axios.post("/api/portfolio/admin-login",user);
            dispatch(HideLoading());
            if(response.data.success){
                message.success(response.data.message);
                localStorage.setItem("token",JSON.stringify(response.data));
                window.location.href="/admin";
            }
            else{
                message.error(response.data.message);
            }
        } catch (error) {
            message.error(error.message);
            dispatch(HideLoading());
        }
    }
  return (
   <div className='flex justify-center items-center h-screen bg-primary'>
     <div className='w-96 flex gap-5 p-5 shadow border border-gray-100 flex-col bg-white'>
        <h1 className='text-2xl text-primary'>Portfolio - Admin Login</h1>
        <hr/>
        <h1>Username: <input type="text" value={user.username} onChange={(e)=>{setUser({...user,username:e.target.value})}}/></h1>
        <h1>Password: <input type="password" value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}}/></h1>

        <button className='bg-primary text-white p-2' onClick={login}>Login</button>
    </div>
   </div>
  )
}

export default Login