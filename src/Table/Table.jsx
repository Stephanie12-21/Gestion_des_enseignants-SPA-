
/*import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import AddButton from "../components/AddButton/AddButton";
import Typography from "@mui/material/Typography";
import Edit from "../components/Edit/Edit";
import Delete from "../components/Delete/Delete";
import Viewer from "../components/Viewer/Viewer";
import { Link } from "react-router-dom";

export default function BasicTable() {
  const [prof, setProf] = useState([]);
  
  useEffect(() => {
    getProfs();
  }, []);

  const getProfs = async () => {
    try {
      const response = await axios.get("http://localhost:80/api/prof/");
      if (response) {
        setProf(response.data);
      }
    } catch (error) {
      console.logo(error);
    }
  };

  const handleEditClick = (matricule) => {
    console.log(matricule);
  };




  return (
    <div className="Table">
      <div className="buttonContainer">
        <AddButton className="addbutton" />
      </div>
      <br />

      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Matricule
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Nom
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Taux Horaire
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Nombre d'heures
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Prestation
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {prof.map((prof, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {prof.matricule}
                </TableCell>
                <TableCell align="center">{prof.nom}</TableCell>
                <TableCell align="center">
                  {prof.tauxhoraire} Ar/h
                </TableCell>
                <TableCell align="center">{prof.nbheure}</TableCell>
                <TableCell align="center">
                  {prof.tauxhoraire * prof.nbheure} Ar
                </TableCell>
                <TableCell align="center" className="Actions">
                  <Viewer matricule={prof.matricule} />
                  <Edit
                    onEditClick={handleEditClick}
                    matricule={prof.matricule}
                  />
                   <Delete 
                   matricule={prof.matricule} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import AddButton from "../components/AddButton/AddButton";
import Typography from "@mui/material/Typography";
import Edit from "../components/Edit/Edit";
import Delete from "../components/Delete/Delete";
import Viewer from "../components/Viewer/Viewer";


export default function BasicTable() {
  const [prof, setProf] = useState([]);
  
  useEffect(() => {
    getProfs();
  }, []);

  const getProfs = async () => {
    try {
      const response = await axios.get("http://localhost:80/api/prof/");
      if (response) {
        setProf(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (matricule) => {
    console.log(matricule);
  };

  const updateTable = () => {
    getProfs(); // Appel de la fonction pour récupérer à nouveau les données de la table
  };

  return (
    <div className="Table">
      <div className="buttonContainer">
       
        <AddButton className="addbutton" updateTable={updateTable} />

      </div>
      <br />

      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Matricule
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Nom
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Taux Horaire
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Nombre d'heures
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Prestation
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {prof.map((prof, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {prof.matricule}
                </TableCell>
                <TableCell align="center">{prof.nom}</TableCell>
                <TableCell align="center">
                  {prof.tauxhoraire} Ar/h
                </TableCell>
                <TableCell align="center">{prof.nbheure}</TableCell>
                <TableCell align="center">
                  {prof.tauxhoraire * prof.nbheure} Ar
                </TableCell>
                <TableCell align="center" className="Actions">
                  <Viewer 
                  matricule={prof.matricule} 
                  
                  />
                  <Edit
                    onEditClick={handleEditClick}
                    matricule={prof.matricule}
                    updateTable={updateTable}
                  />
                  <Delete 
                    matricule={prof.matricule} 
                    updateTable={updateTable} // Passez la fonction updateTable en tant que prop
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

