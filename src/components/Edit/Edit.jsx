/*import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { UilEditAlt } from "@iconscout/react-unicons";
import axios from 'axios';

const Edit = ({ matricule, onEditClick }) => {
  const [modal2Open, setModal2Open] = useState(false);
  const [teacherData, setTeacherData] = useState(null);

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

  const handleButtonClick = () => {
    setModal2Open(true);
    fetchTeacherData();
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.put(`http://localhost:80/api/prof/${matricule}`, values);
      if (response.status === 200) {
        console.log("Données mises à jour avec succès !");
        setModal2Open(false); // Fermer le modal après la mise à jour réussie
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données :", error);
    }
  };

  useEffect(() => {
    if (modal2Open && matricule) {
      fetchTeacherData();
    }
  }, [modal2Open, matricule]);

  return (
    <>
      <Button 
        className="button"  
        onClick={handleButtonClick} 
        icon={<UilEditAlt size="20"  className="edit" />}
      />
    
      <Modal
        title={`Modifier les données du professeur ayant le matricule '${matricule}'`}
        centered
        visible={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <br />
        <br />

        {teacherData && (
          <Form onFinish={onFinish} initialValues={teacherData}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px', width: '100%', fontSize:"15px"}}>

              <label htmlFor="nom">Nom:</label>
              <Form.Item name="nom" rules={[{ required: true, message: 'Veuillez entrer le nom!' }]}>
                <Input style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
              </Form.Item>

              <label htmlFor="tauxhoraire">Taux Horaire:</label>
              <Form.Item name="tauxhoraire" rules={[{ required: true, message: 'Veuillez entrer le taux horaire!' }]}>
                <Input style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
              </Form.Item>

              <label htmlFor="nbheure">Nombre d'heures:</label>
              <Form.Item name="nbheure" rules={[{ required: true, message: 'Veuillez entrer le nombre d\'heures!' }]}>
                <Input style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
              </Form.Item>

              <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <Button key="submit" htmlType="submit" className="enregistrer-button">
                  Enregistrer
                </Button>
                <Button key="cancel" onClick={() => setModal2Open(false)} className="annuler-button">
                  Annuler
                </Button>
              </div>
            </div>
          </Form>
        )}

      </Modal>
    </>
  );
}

export default Edit;*/
/*import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { UilEditAlt } from "@iconscout/react-unicons";
import axios from 'axios';

const Edit = ({ matricule, onEditClick, updateTable }) => {
  const [modal2Open, setModal2Open] = useState(false);
  const [teacherData, setTeacherData] = useState(null);

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

  const handleButtonClick = () => {
    setModal2Open(true);
    fetchTeacherData();
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.put(`http://localhost:80/api/prof/${matricule}`, values);
      if (response.status === 200) {
        console.log("Données mises à jour avec succès !");
        setModal2Open(false); // Fermer le modal après la mise à jour réussie
        updateTable(); // Actualiser automatiquement la table
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données :", error);
    }
  };

  useEffect(() => {
    if (modal2Open && matricule) {
      fetchTeacherData();
    }
  }, [modal2Open, matricule]);

  return (
    <>
      <Button 
        className="button"  
        onClick={handleButtonClick} 
        icon={<UilEditAlt size="20"  className="edit" />}
      />
    
      <Modal
        title={`Modifier les données du professeur ayant le matricule '${matricule}'`}
        centered
        visible={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <br />
        <br />

        {teacherData && (
          <Form onFinish={onFinish} initialValues={teacherData}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px', width: '100%', fontSize:"15px"}}>

              <label htmlFor="nom">Nom:</label>
              <Form.Item name="nom" rules={[{ required: true, message: 'Veuillez entrer le nom!' }]}>
                <Input style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
              </Form.Item>

              <label htmlFor="tauxhoraire">Taux Horaire:</label>
              <Form.Item name="tauxhoraire" rules={[{ required: true, message: 'Veuillez entrer le taux horaire!' }]}>
                <Input style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
              </Form.Item>

              <label htmlFor="nbheure">Nombre d'heures:</label>
              <Form.Item name="nbheure" rules={[{ required: true, message: 'Veuillez entrer le nombre d\'heures!' }]}>
                <Input style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
              </Form.Item>

              <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <Button key="submit" htmlType="submit" className="enregistrer-button">
                  Enregistrer
                </Button>
                <Button key="cancel" onClick={() => setModal2Open(false)} className="annuler-button">
                  Annuler
                </Button>
              </div>
            </div>
          </Form>
        )}

      </Modal>
    </>
  );
}

export default Edit;*/

import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { UilEditAlt } from "@iconscout/react-unicons";
import axios from 'axios';
import Swal from 'sweetalert2'; // Importez SweetAlert

const Edit = ({ matricule, onEditClick, updateTable }) => {
  const [modal2Open, setModal2Open] = useState(false);
  const [teacherData, setTeacherData] = useState(null);

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

  const handleButtonClick = () => {
    setModal2Open(true);
    fetchTeacherData();
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.put(`http://localhost:80/api/prof/${matricule}`, values);
      if (response.status === 200) {
        console.log("Données mises à jour avec succès !");
        setModal2Open(false); // Fermer le modal après la mise à jour réussie
        updateTable(); // Actualiser automatiquement la table
        // Afficher SweetAlert en cas de succès
        Swal.fire({
          icon: 'success',
          title: 'Modification réussie!',
          text: 'Les données du professeur ont été mises à jour avec succès.'
        });
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données :", error);
      // Afficher SweetAlert en cas d'erreur
      Swal.fire({
        icon: 'error',
        title: 'Erreur!',
        text: 'Une erreur est survenue lors de la mise à jour des données du professeur. Veuillez réessayer plus tard.'
      });
    }
  };

  useEffect(() => {
    if (modal2Open && matricule) {
      fetchTeacherData();
    }
  }, [modal2Open, matricule]);

  return (
    <>
      <Button 
        className="button"  
        onClick={handleButtonClick} 
        icon={<UilEditAlt size="20"  className="edit" />}
      />
    
      <Modal
        title={`Modifier les données du professeur ayant le matricule '${matricule}'`}
        centered
        visible={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <br />
        <br />

        {teacherData && (
          <Form onFinish={onFinish} initialValues={teacherData}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px', width: '100%', fontSize:"15px"}}>

              <label htmlFor="nom">Nom:</label>
              <Form.Item name="nom" rules={[{ required: true, message: 'Veuillez entrer le nom!' }]}>
                <Input style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
              </Form.Item>

              <label htmlFor="tauxhoraire">Taux Horaire:</label>
              <Form.Item name="tauxhoraire" rules={[{ required: true, message: 'Veuillez entrer le taux horaire!' }]}>
                <Input style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
              </Form.Item>

              <label htmlFor="nbheure">Nombre d'heures:</label>
              <Form.Item name="nbheure" rules={[{ required: true, message: 'Veuillez entrer le nombre d\'heures!' }]}>
                <Input style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
              </Form.Item>

              <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <Button key="submit" htmlType="submit" className="enregistrer-button">
                  Enregistrer
                </Button>
                <Button key="cancel" onClick={() => setModal2Open(false)} className="annuler-button">
                  Annuler
                </Button>
              </div>
            </div>
          </Form>
        )}

      </Modal>
    </>
  );
}

export default Edit;
