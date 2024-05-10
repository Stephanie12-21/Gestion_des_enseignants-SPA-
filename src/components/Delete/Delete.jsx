/*import { ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, Modal } from 'antd';
import { UilTrash } from "@iconscout/react-unicons";
import axios from 'axios';

const Delete = ({ matricule }) => {
    const [modal, contextHolder] = Modal.useModal();

    const handleDeleteClick = () => {
        console.log(matricule);
        confirm();
    };

    const confirm = () => {
        modal.confirm({
            title: 'Confirmation',
            icon: <ExclamationCircleOutlined />,
            centered: true,
            content: 'Confirmez-vous cette suppression?',
            okText: 'Oui',
            cancelText: 'Non',
            onOk: () => deleteProfesseur()
        });
    };

    const deleteProfesseur = async () => {
        try {
            const response = await axios.delete(`http://localhost/api/prof/${matricule}`);
            console.log(response.data);
            // Mettez à jour votre état ou affichez un message de confirmation à l'utilisateur
        } catch (error) {
            console.error("Erreur lors de la suppression du professeur :", error);
            // Affichez un message d'erreur à l'utilisateur
        }
    };

    return (
        <>
            <Button className="button" onClick={handleDeleteClick} icon={<UilTrash size="20" className="delete" />}></Button>
            {contextHolder}
        </>
    );
};

export default Delete;*/
/*import React from 'react';
import { Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { UilTrash } from "@iconscout/react-unicons";
import axios from 'axios';
import Swal from 'sweetalert2';
import Table from '../../Table/Table'

const Delete = ({ matricule }) => {
    const [modal, contextHolder] = Modal.useModal();

    const handleDeleteClick = () => {
        console.log(matricule);
        confirm();
    };

    const confirm = () => {
        modal.confirm({
            title: 'Confirmation',
            icon: <ExclamationCircleOutlined />,
            centered: true,
            content: 'Confirmez-vous cette suppression?',
            okText: 'Oui',
            cancelText: 'Non',
            onOk: () => deleteProfesseur()
        });
    };

    const deleteProfesseur = async () => {
        try {
            const response = await axios.delete(`http://localhost/api/prof/${matricule}`);
            console.log(response.data);
            // Afficher SweetAlert en cas de succès
            Swal.fire({
                icon: 'success',
                title: 'Suppression réussie!',
                text: 'Le professeur a été supprimé avec succès.'
            });
            // Mettez à jour votre état si nécessaire
        } catch (error) {
            console.error("Erreur lors de la suppression du professeur :", error);
            // Afficher SweetAlert en cas d'erreur
            Swal.fire({
                icon: 'error',
                title: 'Erreur!',
                text: 'Une erreur est survenue lors de la suppression du professeur. Veuillez réessayer plus tard.'
            });
        }
    };

    return (
        <>
            <Button className="button" onClick={handleDeleteClick} icon={<UilTrash size="20" className="delete" />}></Button>
            {contextHolder}
        </>
    );
};

export default Delete;

*/

import React from 'react';
import { Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { UilTrash } from "@iconscout/react-unicons";
import axios from 'axios';
import Swal from 'sweetalert2';

const Delete = ({ matricule, updateTable }) => {
    const [modal, contextHolder] = Modal.useModal();

    const handleDeleteClick = () => {
        console.log(matricule);
        confirm();
    };

    const confirm = () => {
        modal.confirm({
            title: 'Confirmation',
            icon: <ExclamationCircleOutlined />,
            centered: true,
            content: 'Confirmez-vous cette suppression?',
            okText: 'Oui',
            cancelText: 'Non',
            onOk: () => deleteProfesseur()
        });
    };

    const deleteProfesseur = async () => {
        try {
            const response = await axios.delete(`http://localhost/api/prof/${matricule}`);
            console.log(response.data);
            // Afficher SweetAlert en cas de succès
            Swal.fire({
                icon: 'success',
                title: 'Suppression réussie!',
            });
            // Mettez à jour votre état si nécessaire
            updateTable(); // Appel de la fonction pour actualiser la table
        } catch (error) {
            console.error("Erreur lors de la suppression du professeur :", error);
            // Afficher SweetAlert en cas d'erreur
            Swal.fire({
                icon: 'error',
                title: 'Erreur!',
            });
        }
    };

    return (
        <>
            <Button className="button" onClick={handleDeleteClick} icon={<UilTrash size="20" className="delete" />}></Button>
            {contextHolder}
        </>
    );
};

export default Delete;
