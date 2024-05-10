

import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import './AddButton.css';
import Swal from 'sweetalert2';

const AddButton = ({ updateTable }) => {
  const [modal2Open, setModal2Open] = useState(false);
  const [inputs, setInputs] = useState({
    matricule: '',
    nom: '',
    tauxhoraire: '',
    nbheure: ''
  });
  const [formKey, setFormKey] = useState(Date.now());

  const onFinish = () => {
    axios.post('http://localhost:80/api/teacher/save', inputs)
      .then(response => {
        console.log("Données envoyées avec succès !");
        console.log(response.data);
        updateTable();
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Données ajoutées avec succès !',
        });
        setFormKey(Date.now()); // Réinitialiser la clé pour réinitialiser le formulaire
        setModal2Open(false);
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de l'envoi des données :", error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Erreur lors de l\'ajout des données !',
        });
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(prevState => ({ ...prevState, [name]: value }));
  }

  const handleCancel = () => {
    setFormKey(Date.now()); // Réinitialiser la clé pour réinitialiser le formulaire
    setModal2Open(false);
  };

  return (
    <>
      <Button type="primary" icon={<PlusCircleOutlined />} onClick={() => setModal2Open(true)}>
        Ajouter
      </Button>
      <Modal
        key={formKey} // Utiliser une clé aléatoire pour réinitialiser le formulaire
        title="Ajouter un(e) nouvel(le) enseignant(e)"
        centered
        visible={modal2Open}
        onCancel={handleCancel}
        footer={null}
      >
        <Form key={formKey} onFinish={onFinish}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px', width: '100%', fontSize: "15px" }}>
            <label htmlFor="matricule">Matricule:</label>
            <Form.Item name="matricule" rules={[{ required: true, message: 'Veuillez entrer le matricule!' }]}>
              <Input value={inputs.matricule} name="matricule" type="text" onChange={handleChange} style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
            </Form.Item>

            <label htmlFor="nom">Nom:</label>
            <Form.Item name="nom" rules={[{ required: true, message: 'Veuillez entrer le nom!' }]}>
              <Input value={inputs.nom} name="nom" onChange={handleChange} style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
            </Form.Item>

            <label htmlFor="tauxhoraire">Taux Horaire:</label>
            <Form.Item name="tauxhoraire" rules={[{ required: true, message: 'Veuillez entrer le taux horaire!' }]}>
              <Input value={inputs.tauxhoraire} name="tauxhoraire" onChange={handleChange} style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
            </Form.Item>

            <label htmlFor="nbheure">Nombre d'heures:</label>
            <Form.Item name="nbheure" rules={[{ required: true, message: 'Veuillez entrer le nombre d\'heures!' }]}>
              <Input value={inputs.nbheure} name="nbheure" onChange={handleChange} style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
            </Form.Item>

            <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <Button key="submit" htmlType="submit" className="enregistrer-button">
                Enregistrer
              </Button>
              <Button key="cancel" onClick={handleCancel} className="annuler-button">
                Annuler
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddButton;
/*import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import './AddButton.css';
import Swal from 'sweetalert2';

const AddButton = ({ updateTable }) => {
  const [modal2Open, setModal2Open] = useState(false);
  const [inputs, setInputs] = useState({
    matricule: '',
    nom: '',
    tauxhoraire: '',
    nbheure: ''
  });
  const [formKey, setFormKey] = useState(Date.now());
  const onFinish = async () => {
    try {
      const response = await axios.get(`http://localhost:80/api/prof/check/${inputs.matricule}`);
      if (response.data.exists) {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'La matricule existe déjà !',
        });
      } else {
        await axios.post('http://localhost:80/api/prof/save', inputs);
        updateTable();
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Données ajoutées avec succès !',
        });
        setFormKey(Date.now());
        setModal2Open(false);
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Une erreur s\'est produite lors de l\'ajout des données !',
      });
    }
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCancel = () => {
    setFormKey(Date.now());
    setModal2Open(false);
  };

  return (
    <>
      <Button type="primary" icon={<PlusCircleOutlined />} onClick={() => setModal2Open(true)}>
        Ajouter
      </Button>
      <Modal
        key={formKey}
        title="Ajouter un(e) nouvel(le) enseignant(e)"
        centered
        visible={modal2Open}
        onCancel={handleCancel}
        footer={null}
      >
        <Form key={formKey} onFinish={onFinish}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px', width: '100%', fontSize: "15px" }}>
            <label htmlFor="matricule">Matricule:</label>
            <Form.Item name="matricule" rules={[{ required: true, message: 'Veuillez entrer le matricule!' }]}>
              <Input value={inputs.matricule} name="matricule" type="text" onChange={handleChange} style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
            </Form.Item>

            <label htmlFor="nom">Nom:</label>
            <Form.Item name="nom" rules={[{ required: true, message: 'Veuillez entrer le nom!' }]}>
              <Input value={inputs.nom} name="nom" onChange={handleChange} style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
            </Form.Item>

            <label htmlFor="tauxhoraire">Taux Horaire:</label>
            <Form.Item name="tauxhoraire" rules={[{ required: true, message: 'Veuillez entrer le taux horaire!' }]}>
              <Input value={inputs.tauxhoraire} name="tauxhoraire" onChange={handleChange} style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
            </Form.Item>

            <label htmlFor="nbheure">Nombre d'heures:</label>
            <Form.Item name="nbheure" rules={[{ required: true, message: 'Veuillez entrer le nombre d\'heures!' }]}>
              <Input value={inputs.nbheure} name="nbheure" onChange={handleChange} style={{ border: '2px solid #ccc', borderRadius: '4px', padding: '8px' }} />
            </Form.Item>

            <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <Button key="submit" htmlType="submit" className="enregistrer-button">
                Enregistrer
              </Button>
              <Button key="cancel" onClick={handleCancel} className="annuler-button">
                Annuler
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddButton;*/
