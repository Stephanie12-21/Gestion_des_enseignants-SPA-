<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");


include_once 'db.php';
$objDB = new db;
$conn = $objDB->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
        case "GET":
        // Si l'URL est http://localhost:80/api/prof/, récupérez tous les professeurs
        if ($_SERVER['REQUEST_URI'] === "/api/prof/") {
            $sql = "SELECT * FROM prof";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $profs = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($profs);
        }
        
        // Si l'URL est http://localhost:80/api/prof/${matricule}, récupérez les informations d'un professeur par son matricule
        else {
            $matricule = basename($_SERVER['REQUEST_URI']);
            $sql = "SELECT * FROM prof WHERE matricule = :matricule";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':matricule', $matricule);
            $stmt->execute();
            $prof = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($prof) {
                echo json_encode($prof);
            } else {
                http_response_code(404);
                echo json_encode(["message" => "Aucun professeur trouvé pour ce matricule"]);
            }
        }
        break;
        case "GET":
            // Si l'URL est http://localhost:80/api/prof/check/${matricule}, vérifiez si la matricule existe déjà
            if (preg_match('/^\/api\/prof\/check\/(\d+)$/', $_SERVER['REQUEST_URI'], $matches)) {
                $matricule = $matches[1];
                $sql = "SELECT COUNT(*) AS count FROM prof WHERE matricule = :matricule";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':matricule', $matricule);
                $stmt->execute();
                $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
                if ($result['count'] > 0) {
                    echo json_encode(['exists' => true]);
                } else {
                    echo json_encode(['exists' => false]);
                }
            } else {
                http_response_code(404);
                echo json_encode(["message" => "Endpoint non trouvé"]);
            }
            break;
        
        /*case "GET":
            // Si l'URL est http://localhost:80/api/prof/, récupérez tous les professeurs
            if ($_SERVER['REQUEST_URI'] === "/api/prof/") {
                $sql = "SELECT * FROM prof";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $profs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
                // Initialisation des variables pour calculer les prestations
                $prestations = [];
                $prestation_totale = 0;
                $prestation_minimale = PHP_INT_MAX;
                $prestation_maximale = 0;
        
                // Calcul des prestations
                foreach ($profs as $prof) {
                    $prestation = $prof['tauxhoraire'] * $prof['nbheure'];
                    $prestations[] = $prestation;
                    $prestation_totale += $prestation;
                    $prestation_minimale = min($prestation_minimale, $prestation);
                    $prestation_maximale = max($prestation_maximale, $prestation);
                }
        
                // Stockage des résultats dans un tableau associatif
                $resultats = [
                    "prestation_totale" => $prestation_totale,
                    "prestation_minimale" => $prestation_minimale,
                    "prestation_maximale" => $prestation_maximale,
                    "prestations_individuelles" => $prestations
                ];
        
                echo json_encode($resultats);
            } 
            // Si l'URL est http://localhost:80/api/prof/${matricule}, récupérez les informations d'un professeur par son matricule
            else {
                $matricule = basename($_SERVER['REQUEST_URI']);
                $sql = "SELECT * FROM prof WHERE matricule = :matricule";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':matricule', $matricule);
                $stmt->execute();
                $prof = $stmt->fetch(PDO::FETCH_ASSOC);
                if ($prof) {
                    echo json_encode($prof);
                } else {
                    http_response_code(404);
                    echo json_encode(["message" => "Aucun professeur trouvé pour ce matricule"]);
                }
            }
            break;*/
        

        case "POST":
            $request_body = file_get_contents('php://input');
            $prof = json_decode($request_body);

            if ($prof === null) {
                // Erreur de décodage JSON
                $response = ['status' => 0, 'message' => 'Erreur de décodage JSON'];
            } else {
                $sql = "INSERT INTO prof(matricule, nom, tauxhoraire, nbheure) VALUES(:matricule, :nom, :tauxhoraire, :nbheure)";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':matricule', $prof->matricule);
                $stmt->bindParam(':nom', $prof->nom);
                $stmt->bindParam(':tauxhoraire', $prof->tauxhoraire);
                $stmt->bindParam(':nbheure', $prof->nbheure);

                if ($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Succès de l\'ajout'];
                } else {
                    $response = ['status' => 0, 'message' => 'Échec de l\'ajout'];
                }
            }
            echo json_encode($response); // Ajout de cette ligne pour renvoyer la réponse
            break;

        case "PUT":
        $request_body = file_get_contents("php://input");
        $prof = json_decode($request_body);
        $matricule = basename($_SERVER['REQUEST_URI']);

        if ($prof === null) {
            // Erreur de décodage JSON
            $response = ['status' => 0, 'message' => 'Erreur de décodage JSON'];
        } else {
            $sql = "UPDATE prof SET nom = :nom, tauxhoraire = :tauxhoraire, nbheure = :nbheure WHERE matricule = :matricule";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':matricule', $matricule);
            $stmt->bindParam(':nom', $prof->nom);
            $stmt->bindParam(':tauxhoraire', $prof->tauxhoraire);
            $stmt->bindParam(':nbheure', $prof->nbheure);

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Données du professeur mises à jour avec succès'];
            } else {
                $response = ['status' => 0, 'message' => 'Échec de la mise à jour des données du professeur'];
            }
        }
        echo json_encode($response); // Ajout de cette ligne pour renvoyer la réponse
        break;


        case "DELETE":
            $matricule = basename($_SERVER['REQUEST_URI']);
        
            $sql = "DELETE FROM prof WHERE matricule = :matricule";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':matricule', $matricule);
        
            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Suppression du professeur réussie'];
            } else {
                $response = ['status' => 0, 'message' => 'Échec de la suppression du professeur'];
            }
            echo json_encode($response);
            break;

        case "GET":
                // Calcul de la prestation totale, minimale et maximale des enseignants
                $sql = "SELECT SUM(tauxhoraire * nbheure) AS prestation_totale,
                               MIN(tauxhoraire * nbheure) AS prestation_minimale,
                               MAX(tauxhoraire * nbheure) AS prestation_maximale
                        FROM prof";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $result = $stmt->fetch(PDO::FETCH_ASSOC);
                
                if ($result) {
                    echo json_encode($result);
                } else {
                    http_response_code(404);
                    echo json_encode(["message" => "Aucun enseignant trouvé"]);
                }
                break;
        
           
        

    default:
        $response = ['status' => 0, 'message' => 'Méthode non supportée'];
        echo json_encode($response); // Ajout de cette ligne pour renvoyer la réponse
}

?>
