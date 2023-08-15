import React, { useEffect, useState } from 'react';
import Dashboard from '../dashboard/Dashboard';
import NSServices from '../home/sellers/sellerDetails/sellerDetailsNav/nav-sd-services/NSServices';
import EditUserInfo from '../profile/components/EditUserInfo';
import NewOrdersNav from '../profile/profileDetailsNav/navOrder/NewOrdersNav';
import { Outlet, useNavigate } from 'react-router-dom';



function Admin() {

  const navigate = useNavigate();

    const [component, setComponent]=useState(null);
    //handle onclick 
    const handleOnClick=(comp)=>{
        setComponent(comp)
  
    }

  return (
    <div style={styles.mainConatiner}>
      <div style={styles.container}>
        <div style={styles.leftContainer}>
            <div style={styles.buttonContainer}>
                <p style={styles.adminTitle}>Admin Pannel </p>
                {/* <button style={styles.button} name='dashboard' onClick={()=>handleOnClick("/profile/adminPannel/dashboard")}>Dashboard</button> */}
                <button style={styles.button} name='furnituires' onClick={()=>navigate('/profile/adminPannel/services')}>Furnituires</button>
                <button style={styles.button} name='settings' onClick={()=> navigate('/profile/adminPannel/userinfo')}>Settings</button>
                {/* <button style={styles.button} name='orders' onClick={()=>handleOnClick("orders")}>Orders</button>
                <button style={styles.button} name='users' onClick={()=>handleOnClick("users")}>Users</button> */}
            </div>

        </div>
        <div style={styles.rightContainer}>
        <Outlet />
        {/* {component==="dashboard" && <Dashboard/>}
        {component==="furnituires" && <out>}
        {component === "settings" && (
            <div className="NSetings">
              <div className="edit-profile">
                <div className="up">
                  <div className="seting-nav">
                    <ul></ul>
                  </div>
                </div>
                <div className="down">
                  <EditUserInfo />
                </div>
              </div>
            </div>
          )} */}

          

          


       

        
        </div>

      </div>
    </div>
  )
}

const styles={
    mainConatiner:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
        height:"100vh"
    },
    container:{
        width:"90%",
        height:"90vh",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:"25px",
    },
    leftContainer:{
        width:"20%",
        height:"100%",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:"column",
        borderRadius:"25px 0px 0px 25px",
        backgroundColor:"#98D8AA",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
 
       
    },
    buttonContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        width:"100%",
        height:"50%",
        rowGap:"20px",
    },
    adminTitle:{
        fontSize:"20px",
        fontWeight:"bold",
        textAlign:"center",

    },
    rightContainer:{
        width:"80%",
        height:"100%",
        backgroundColor:"#AFD3E2",
        borderRadius:"0px 25px 25px 0",
        backgroundColor:"white",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        padding:"50px",
        overflow: 'scroll',


    },
    button:{
        borderRadius:"25px",
        border:"0px",
        width:"100px",
        height:"35px"
    },
}

export default Admin
