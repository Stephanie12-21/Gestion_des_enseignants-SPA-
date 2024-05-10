
import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { UilEye } from "@iconscout/react-unicons";
import axios from 'axios';

const Viewer = ({ matricule }) => {
  const [modal2Open, setModal2Open] = useState(false);
  const [teacherData, setTeacherData] = useState(null);

  useEffect(() => {
    if (modal2Open) {
      fetchTeacherData();
    }
  }, [modal2Open]);

  const fetchTeacherData = async () => {
    try {
      const response = await axios.get(`http://localhost:80/api/prof/${matricule}`);
      if (response.data) {
        setTeacherData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleViewerClick = () => {
    setModal2Open(true);
  };

  return (
    <>
      <Button 
        className="button" 
        onClick={handleViewerClick} 
        icon={<UilEye size="22" className="view" />} 
      />
                                                
      <Modal
        title="Toutes les informations correspondantes"
        centered
        visible={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        {teacherData && (
          <>
            <p>
              <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Matricule :</span>
              &nbsp;&nbsp;&nbsp;
              {teacherData.matricule}
            </p>
            <p>
              <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Nom : </span> 
              &nbsp;&nbsp;&nbsp;
              {teacherData.nom}
            </p>
            <p>
              <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Taux horaire :</span> 
              &nbsp;&nbsp;&nbsp;
              {teacherData.tauxhoraire} Ar/h
            </p>        
            <p>
              <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Nombre d'heures :</span> 
              &nbsp;&nbsp;&nbsp;
              {teacherData.nbheure}
            </p>        
            <p>
              <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Prestation :</span> 
              &nbsp;&nbsp;&nbsp;
              {teacherData.tauxhoraire * teacherData.nbheure}Ar
            </p>
          </>
        )}
      </Modal>
    </>
  );
}

export default Viewer;









