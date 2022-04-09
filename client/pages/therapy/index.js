import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import ChartLine from "../../components/therapy/chart";
import {  Avatar, Button } from "antd";

const TherapyIndex = () => {
  const {
    state: { user },
  } = useContext(Context);
  const [ok, setOk] = useState(false);
  const [isGraph, setIsGraph] = useState(false);
  const [isDanger, setIsDanger] = useState(false);
  const [isModerate, setIsModerate] = useState(false);
  const [counter, setCounter] = useState(60);


 
    if(isGraph){      
      setTimeout(function() {
        setOk(true);
      }, 2000);
    }
    
  
  

  return (
    <UserRoute>
      <h1 className="text-center ">Dasboard Terapeut</h1>
      <hr className="text-danger" />
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{minHeight: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Avatar className="avatar-card" style={{ height: "200px", width: "200px", objectFit: "cover", background: '#6c757d', marginRight: '100px' }}>Live VR</Avatar>
          </div>
          <div className="col-md-6" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {isGraph ? <ChartLine />: <Avatar className="avatar-card" style={{ height: "200px", width: "200px", objectFit: "cover", background: '#6c757d' }}>Live Graph</Avatar>}
          </div>
          <hr className="text-danger" />
          <div className="col-md-6 mt-4" >
            <h5 className="text-primary mt-4">Recomandari in timp real</h5>
            <hr/>
            <h6>Anxietate:{isGraph && <span className="result-avatar text-primary">ok</span>}</h6>
            <h6>Adrenalina: {isGraph && <span className="result-avatar text-primary">ok</span>}</h6>
            <h6>Inima: {isGraph && <span className="result-avatar text-primary">ok</span>}</h6>            
            <div className="col-md-6 mt-4" >
            <Button  
              onClick={() => setIsGraph(true)}        
              className="col mt-3"
              size="small"
              type="primary"          
              shape="round"
            >
              Start Simulare
            </Button>
        <Button   
          onClick={() => setIsGraph(false)}       
          className="col mt-3"
          size="small"
          type="danger"          
          shape="round"
        >
          Stop Simulare
        </Button></div>
            
          </div>
          <div className="col-md-6 mt-4"  >
          <h5 className="text-primary mt-4">Rezultate</h5>
            <hr/>
            <h6>Anxietate:</h6>
            <h6>Adrenalina:</h6>
            <h6>Inima:</h6>
            <h6>Recomandam sa:</h6>
          <Button          
          className="col mt-4"
          size="large"
          type="primary"          
          shape="round"
        >
          Salveaza date
        </Button>
          </div>
        </div>
        
      </div>
    </UserRoute>
  );
};

export default TherapyIndex;