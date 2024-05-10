import React, { useState, useEffect } from 'react';
import './Cards.css';
import { CardsData } from '../Data/Data';
import Card from '../Card/Card';

const Cards = () => {
  const [prestations, setPrestations] = useState({});

  useEffect(() => {
    // Récupérez les données depuis l'API
    fetch('http://localhost:80/api/prof/')
      .then(response => response.json())
      .then(data => {
        // Calculez les prestations totale, minimale et maximale
        const prestationTotale = data.reduce((acc, prof) => acc + (prof.tauxhoraire * prof.nbheure), 0);
        const prestationMinimale = Math.min(...data.map(prof => prof.tauxhoraire * prof.nbheure));
        const prestationMaximale = Math.max(...data.map(prof => prof.tauxhoraire * prof.nbheure));

        // Mettez à jour les valeurs des cartes
        updateCardsData(prestationTotale, prestationMinimale, prestationMaximale);

        // Stockez les valeurs des prestations dans l'état
        setPrestations({
          prestationTotale,
          prestationMinimale,
          prestationMaximale
        });
      })
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
  }, []);

  // Fonction pour mettre à jour les données des cartes
  const updateCardsData = (prestationTotale, prestationMinimale, prestationMaximale) => {
    CardsData[0].value = prestationTotale;
    CardsData[1].value = prestationMinimale;
    CardsData[2].value = prestationMaximale;
  };

  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              png={card.png}
              value={card.value}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
