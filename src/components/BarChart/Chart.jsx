/*import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const [prestations, setPrestations] = useState([]);

  useEffect(() => {
    // Récupérer les données depuis l'API
    fetch('http://localhost:80/api/prof/')
      .then(response => response.json())
      .then(data => {
        // Calculer les prestations de chaque enseignant
        const prestationsData = data.map(prof => prof.tauxhoraire * prof.nbheure);
        setPrestations(prestationsData);
      })
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
  }, []);

  useEffect(() => {
    // Dessiner l'histogramme une fois que les données sont chargées
    if (prestations.length > 0) {
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: prestations.map((_, index) => `Prof ${index + 1}`),
          datasets: [{
            label: 'Prestations',
            data: prestations,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [prestations]);

  return (
    <div style={{ width: '1250px', height: '350px' }}>
      <canvas id="myChart" width="1250" height="350"></canvas>
    </div>
  );
};

export default ChartComponent;*/
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const [prestations, setPrestations] = useState({});

  useEffect(() => {
    // Récupérer les données depuis l'API
    fetch('http://localhost:80/api/prof/')
      .then(response => response.json())
      .then(data => {
        // Calculer les prestations totale, minimale et maximale
        const prestation_totale = data.reduce((acc, prof) => acc + (prof.tauxhoraire * prof.nbheure), 0);
        const prestation_minimale = Math.min(...data.map(prof => prof.tauxhoraire * prof.nbheure));
        const prestation_maximale = Math.max(...data.map(prof => prof.tauxhoraire * prof.nbheure));

        setPrestations({
          prestation_totale,
          prestation_minimale,
          prestation_maximale
        });
      })
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
  }, []);

  useEffect(() => {
    // Dessiner l'histogramme une fois que les données sont chargées
    if (Object.keys(prestations).length > 0) {
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Prestation minimale', 'Prestation maximale', 'Prestation totale'],
          datasets: [{
            label: 'Prestations',
            data: [prestations.prestation_minimale, prestations.prestation_maximale, prestations.prestation_totale],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [prestations]);

  return (
    <div style={{ width: '900px', height: '350px' }}>
      <canvas id="myChart" width="900" height="350"></canvas>
    </div>
  );
};

export default ChartComponent;
