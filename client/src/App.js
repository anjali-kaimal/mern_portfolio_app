import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading, setPortfolioData } from "./redux/rootSlice";
import Admin from "./pages/Admin/Index";
import Login from "./pages/Admin/Login";
function App() {
  const { loading, portfolioData, reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      // store response into const
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(setPortfolioData(response.data));
      dispatch(reloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      console.log(error);
      dispatch(HideLoading());
    }
  };
  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
    console.log(portfolioData);
  }, [portfolioData]);

  // if reload data value is true then call getportfolioData again
  useEffect(() => {
    if(reloadData){
      getPortfolioData();
    }
  }, [reloadData])
  

  return (
    <BrowserRouter>
      {/* if show loading is true show the loader */}
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
