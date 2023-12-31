import React, { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "../../../../components/serviceCard/ServiceCard";
import ProfileCard from "../../components/ProfileCard";
import "./nservices.scss";
import { Link } from "react-router-dom";
import { API_IP, API_IP_2, ProgressBarContext, UserContext } from "../../../../helper/Context";
import LoadingBar from "react-top-loading-bar";


const api = axios.create({
  baseURL: `http://${API_IP_2}/api/`,
});

function NServices() {
  const [servicesList, setServicesList] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const { progress, setProgress } = useContext(ProgressBarContext);

  useEffect(() => {
    fetchData();
  }, [user]);

  const fetchData = async() => {
    setProgress(10)
    api
      .get(`/fns/all-fns`)
      .then((res) => {
        setServicesList(res.data.services);
        console.log(servicesList)
      })
      .catch((e) => {
        console.log(e,"######");
      });
      setProgress(100)
  };

  return (
    <div className="ProfileDetailsNav">
      <ProfileCard />
      <div className="services">
        <Link to="new" className="add-new-service">
          <i class="fa-solid fa-circle-plus"></i>
          <p>Add New Item</p>
        </Link>
        {servicesList &&
          servicesList.map((item, index) => (
            <ServiceCard
              fnImg={`http://${API_IP_2}/api/${item.fnImg}`}
              title={item.title}
              id={item._id}
              type="2"
            />
          ))}
        <div className="add-new-service add-new-service-h"></div>
        <div className="add-new-service add-new-service-h"></div>
        <div className="add-new-service add-new-service-h"></div>
      </div>
    </div>
  );
}

export default NServices;
