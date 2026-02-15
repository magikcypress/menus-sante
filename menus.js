// Menus Santé - Recettes de saison adaptées (version enrichie)

(function() {
    'use strict';

    // ==================== DONNÉES DES PRODUITS ====================
    const produits = {
        hiver: {
            legumes: ['Poireaux', 'Carottes', 'Choux', 'Chou-fleur', 'Chou rouge', 'Choux de Bruxelles', 'Endives', 'Épinards', 'Navets', 'Betteraves', 'Courge', 'Butternut', 'Potimarron', 'Potiron', 'Céleri', 'Céleri-rave', 'Panais', 'Topinambours', 'Mâche', 'Cresson', 'Salsifis', 'Rutabaga', 'Oignons', 'Échalotes', 'Ail', 'Pommes de terre', 'Champignons de Paris', 'Radis noir'],
            fruits: ['Pommes', 'Poires', 'Kiwis', 'Oranges', 'Mandarines', 'Clémentines', 'Citrons', 'Bananes', 'Ananas', 'Fruits secs', 'Noix', 'Noisettes', 'Amandes', 'Châtaignes'],
            poissons: ['Cabillaud', 'Lieu noir', 'Merlan', 'Sole', 'Bar', 'Dorade', 'Raie', 'Hareng', 'Maquereau', 'Sardine', 'Huîtres', 'Moules', 'Saint-Jacques', 'Crevettes'],
            viandes: ['Poulet', 'Dinde', 'Canard', 'Bœuf', 'Veau', 'Porc', 'Agneau', 'Lapin', 'Œufs']
        },
        printemps: {
            legumes: ['Asperges', 'Petits pois', 'Fèves', 'Radis', 'Radis roses', 'Artichauts', 'Épinards', 'Carottes nouvelles', 'Navets nouveaux', 'Oignons nouveaux', 'Laitue', 'Roquette', 'Cresson', 'Oseille', 'Blettes', 'Fenouil', 'Concombre', 'Pommes de terre nouvelles', 'Ail frais', 'Champignons'],
            fruits: ['Fraises', 'Rhubarbe', 'Cerises', 'Pommes', 'Kiwis', 'Citrons'],
            poissons: ['Maquereau', 'Sardines', 'Truite', 'Saumon', 'Cabillaud', 'Bar', 'Dorade', 'Turbot', 'Langoustines'],
            viandes: ['Agneau', 'Veau', 'Poulet', 'Lapin', 'Œufs', 'Pintade']
        },
        ete: {
            legumes: ['Tomates', 'Courgettes', 'Aubergines', 'Poivrons', 'Haricots verts', 'Concombre', 'Fenouil', 'Maïs', 'Salades', 'Laitue', 'Roquette', 'Céleri branche', 'Oignons', 'Ail', 'Artichauts', 'Petits pois', 'Fèves', 'Radis', 'Betteraves', 'Carottes', 'Blettes', 'Pâtisson'],
            fruits: ['Pêches', 'Nectarines', 'Abricots', 'Melons', 'Pastèques', 'Prunes', 'Figues', 'Framboises', 'Myrtilles', 'Groseilles', 'Cassis', 'Cerises', 'Fraises', 'Mûres'],
            poissons: ['Sardines', 'Maquereaux', 'Thon', 'Rouget', 'Loup', 'Dorade', 'Anchois', 'Gambas', 'Crevettes', 'Calamars', 'Poulpe'],
            viandes: ['Poulet', 'Dinde', 'Lapin', 'Canard', 'Agneau', 'Bœuf', 'Œufs']
        },
        automne: {
            legumes: ['Champignons', 'Cèpes', 'Girolles', 'Potimarron', 'Potiron', 'Courges', 'Butternut', 'Choux', 'Brocolis', 'Chou-fleur', 'Épinards', 'Poireaux', 'Céleri', 'Betteraves', 'Carottes', 'Navets', 'Panais', 'Topinambours', 'Endives', 'Mâche', 'Salades', 'Fenouil', 'Blettes', 'Rutabaga'],
            fruits: ['Pommes', 'Poires', 'Raisins', 'Coings', 'Noix', 'Noisettes', 'Châtaignes', 'Figues', 'Prunes', 'Kakis', 'Grenades'],
            poissons: ['Moules', 'Saint-Jacques', 'Hareng', 'Maquereau', 'Bar', 'Dorade', 'Sole', 'Turbot', 'Raie', 'Lieu', 'Cabillaud'],
            viandes: ['Canard', 'Gibier', 'Sanglier', 'Chevreuil', 'Biche', 'Faisan', 'Bœuf', 'Veau', 'Porc', 'Poulet', 'Dinde', 'Œufs']
        }
    };

    // ==================== RECETTES ====================
    const recettes = {
        hiver: [
// SOUPES & VELOUTÉS
            { nom: 'Velouté de poireaux', categorie: 'soupe', temps: '30 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'poireaux', qte: 4, unite: ''}, {nom: 'pommes de terre', qte: 2, unite: ''}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'bouillon', qte: 1, unite: 'L'}, {nom: 'beurre', qte: 30, unite: 'g'}], cuisson: { appareil: 'Casserole', intensite: 'Feu moyen puis doux', duree: '25 min' }, etapes: ['Émincer les poireaux et l\'oignon', 'Faire revenir 5 min dans du beurre', 'Ajouter les pommes de terre en dés', 'Couvrir de bouillon, cuire 20 min', 'Mixer et ajouter la crème'] },
            { nom: 'Velouté de butternut', categorie: 'soupe', temps: '35 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'butternut', qte: 800, unite: 'g'}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'muscade', qte: 1, unite: 'pincée'}, {nom: 'bouillon', qte: 75, unite: 'cl'}], cuisson: { appareil: 'Casserole', intensite: 'Feu moyen puis doux', duree: '30 min' }, etapes: ['Éplucher et couper la courge', 'Faire revenir avec l\'oignon', 'Ajouter le bouillon, cuire 25 min', 'Mixer, ajouter crème et muscade'] },
            { nom: 'Soupe de légumes d\'hiver', categorie: 'soupe', temps: '45 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'carottes', qte: 3, unite: ''}, {nom: 'poireaux', qte: 2, unite: ''}, {nom: 'navets', qte: 2, unite: ''}, {nom: 'pommes de terre', qte: 2, unite: ''}, {nom: 'céleri branche', qte: 2, unite: ''}, {nom: 'beurre', qte: 30, unite: 'g'}], cuisson: { appareil: 'Casserole', intensite: 'Feu doux', duree: '35 min' }, etapes: ['Éplucher et couper tous les légumes', 'Faire revenir dans du beurre', 'Couvrir d\'eau, cuire 35 min', 'Mixer ou servir en morceaux'] },
            { nom: 'Soupe à l\'oignon gratinée', categorie: 'soupe', temps: '50 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'oignons', qte: 6, unite: ''}, {nom: 'bouillon de bœuf', qte: 1, unite: 'L'}, {nom: 'vin blanc', qte: 15, unite: 'cl'}, {nom: 'gruyère râpé', qte: 150, unite: 'g'}, {nom: 'pain', qte: 4, unite: 'tranches'}, {nom: 'beurre', qte: 40, unite: 'g'}, {nom: 'farine', qte: 1, unite: 'c. à soupe'}], cuisson: { appareil: 'Casserole + Four', intensite: 'Feu doux puis gril', duree: '35 min + 10 min four' }, etapes: ['Émincer et caraméliser les oignons', 'Déglacer au vin blanc', 'Ajouter le bouillon, mijoter 30 min', 'Verser dans des bols, ajouter pain et fromage', 'Gratiner au four'] },
            { nom: 'Velouté de topinambours', categorie: 'soupe', temps: '40 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'topinambours', qte: 500, unite: 'g'}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'noisettes', qte: 40, unite: 'g'}, {nom: 'bouillon', qte: 75, unite: 'cl'}, {nom: 'beurre', qte: 20, unite: 'g'}], cuisson: { appareil: 'Casserole', intensite: 'Feu moyen puis doux', duree: '30 min' }, etapes: ['Éplucher les topinambours', 'Faire revenir avec l\'oignon', 'Cuire dans le bouillon 25 min', 'Mixer avec la crème', 'Servir avec noisettes concassées'] },
            { nom: 'Velouté de céleri-rave', categorie: 'soupe', temps: '35 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'céleri-rave', qte: 400, unite: 'g'}, {nom: 'pomme de terre', qte: 1, unite: ''}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'ciboulette', qte: 1, unite: 'bouquet'}, {nom: 'bouillon', qte: 75, unite: 'cl'}], cuisson: { appareil: 'Casserole', intensite: 'Feu moyen puis doux', duree: '30 min' }, etapes: ['Éplucher et couper les légumes', 'Faire revenir 5 min', 'Cuire dans le bouillon 25 min', 'Mixer finement', 'Servir avec ciboulette'] },
            { nom: 'Potage Parmentier', categorie: 'soupe', temps: '40 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'poireaux', qte: 3, unite: ''}, {nom: 'pommes de terre', qte: 3, unite: ''}, {nom: 'beurre', qte: 30, unite: 'g'}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'cerfeuil', qte: 1, unite: 'bouquet'}], cuisson: { appareil: 'Casserole', intensite: 'Feu doux', duree: '35 min' }, etapes: ['Émincer les poireaux', 'Faire fondre au beurre', 'Ajouter pommes de terre et eau', 'Cuire 30 min, mixer', 'Ajouter crème et cerfeuil'] },

            // ENTRÉES
            { nom: 'Salade d\'endives aux noix', categorie: 'entree', temps: '15 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'endives', qte: 4, unite: ''}, {nom: 'roquefort', qte: 100, unite: 'g'}, {nom: 'cerneaux de noix', qte: 80, unite: 'g'}, {nom: 'pomme', qte: 1, unite: ''}, {nom: 'huile de noix', qte: 3, unite: 'c. à soupe'}, {nom: 'vinaigre de vin', qte: 1, unite: 'c. à soupe'}], cuisson: { appareil: 'Sans cuisson', intensite: '-', duree: '-' }, etapes: ['Émincer les endives', 'Couper la pomme en dés', 'Émietter le roquefort', 'Mélanger avec les noix', 'Assaisonner'] },
            { nom: 'Salade de mâche aux betteraves', categorie: 'entree', temps: '15 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'mâche', qte: 200, unite: 'g'}, {nom: 'betteraves cuites', qte: 2, unite: ''}, {nom: 'chèvre frais', qte: 100, unite: 'g'}, {nom: 'cerneaux de noix', qte: 60, unite: 'g'}, {nom: 'huile d\'olive', qte: 3, unite: 'c. à soupe'}, {nom: 'vinaigre balsamique', qte: 1, unite: 'c. à soupe'}], cuisson: { appareil: 'Sans cuisson', intensite: '-', duree: '-' }, etapes: ['Laver la mâche', 'Couper les betteraves en dés', 'Ajouter le chèvre émietté', 'Parsemer de noix', 'Assaisonner'] },
            { nom: 'Œufs mimosa', categorie: 'entree', temps: '20 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'œufs', qte: 8, unite: ''}, {nom: 'mayonnaise', qte: 4, unite: 'c. à soupe'}, {nom: 'moutarde', qte: 1, unite: 'c. à café'}, {nom: 'ciboulette', qte: 1, unite: 'bouquet'}, {nom: 'paprika', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Casserole', intensite: 'Eau bouillante', duree: '10 min' }, etapes: ['Cuire les œufs durs', 'Couper en deux, retirer les jaunes', 'Écraser les jaunes avec mayo et moutarde', 'Farcir les blancs', 'Décorer de ciboulette et paprika'] },
            { nom: 'Poireaux vinaigrette', categorie: 'entree', temps: '25 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'poireaux', qte: 8, unite: ''}, {nom: 'huile d\'olive', qte: 4, unite: 'c. à soupe'}, {nom: 'vinaigre de vin', qte: 2, unite: 'c. à soupe'}, {nom: 'moutarde', qte: 1, unite: 'c. à café'}, {nom: 'œuf dur', qte: 2, unite: ''}], cuisson: { appareil: 'Casserole', intensite: 'Eau bouillante', duree: '15-20 min' }, etapes: ['Cuire les poireaux à l\'eau', 'Préparer la vinaigrette', 'Égoutter et laisser tiédir', 'Napper de vinaigrette', 'Servir avec œuf dur émietté'] },
            { nom: 'Velouté de châtaignes', categorie: 'entree', temps: '45 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'châtaignes', qte: 400, unite: 'g'}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'céleri branche', qte: 1, unite: ''}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'lardons', qte: 100, unite: 'g'}, {nom: 'bouillon', qte: 75, unite: 'cl'}], cuisson: { appareil: 'Casserole + Poêle', intensite: 'Feu moyen', duree: '35 min' }, etapes: ['Éplucher les châtaignes', 'Faire revenir oignon et céleri', 'Ajouter châtaignes et bouillon', 'Cuire 30 min, mixer', 'Servir avec lardons grillés'] },
            { nom: 'Terrine de légumes', categorie: 'entree', temps: '1h30', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'carottes', qte: 4, unite: ''}, {nom: 'haricots verts', qte: 200, unite: 'g'}, {nom: 'œufs', qte: 4, unite: ''}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'fromage râpé', qte: 60, unite: 'g'}], cuisson: { appareil: 'Four (bain-marie)', intensite: '160°C', duree: '45 min' }, etapes: ['Cuire les légumes séparément', 'Mixer avec œufs et crème', 'Disposer en couches dans un moule', 'Cuire au bain-marie 45 min', 'Démouler froid'] },

            // PLATS PRINCIPAUX
            { nom: 'Blanquette de poulet', categorie: 'plat', temps: '1h', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'blancs de poulet', qte: 600, unite: 'g'}, {nom: 'carottes', qte: 3, unite: ''}, {nom: 'poireaux', qte: 2, unite: ''}, {nom: 'champignons', qte: 200, unite: 'g'}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'bouillon de volaille', qte: 50, unite: 'cl'}, {nom: 'beurre', qte: 30, unite: 'g'}, {nom: 'farine', qte: 2, unite: 'c. à soupe'}], cuisson: { appareil: 'Cocotte', intensite: 'Feu doux', duree: '45 min' }, etapes: ['Couper le poulet en morceaux', 'Faire revenir dans du beurre', 'Ajouter les légumes émincés', 'Mouiller avec le bouillon', 'Cuire 40 min, lier avec la crème'] },
            { nom: 'Pot-au-feu', categorie: 'plat', temps: '3h', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'bœuf (paleron, gîte)', qte: 800, unite: 'g'}, {nom: 'carottes', qte: 4, unite: ''}, {nom: 'poireaux', qte: 3, unite: ''}, {nom: 'navets', qte: 3, unite: ''}, {nom: 'pommes de terre', qte: 4, unite: ''}, {nom: 'os à moelle', qte: 4, unite: ''}, {nom: 'oignon piqué de clous de girofle', qte: 1, unite: ''}, {nom: 'bouquet garni', qte: 1, unite: ''}, {nom: 'gros sel', qte: 2, unite: 'c. à soupe'}], cuisson: { appareil: 'Grande marmite', intensite: 'Feu doux (frémissement)', duree: '2h30' }, etapes: ['Mettre la viande dans l\'eau froide', 'Porter à ébullition, écumer', 'Ajouter les légumes progressivement', 'Mijoter 2h30', 'Servir avec gros sel et moutarde'] },
            { nom: 'Bœuf bourguignon', categorie: 'plat', temps: '2h30', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'bœuf (paleron ou macreuse)', qte: 800, unite: 'g'}, {nom: 'vin rouge', qte: 50, unite: 'cl'}, {nom: 'carottes', qte: 3, unite: ''}, {nom: 'oignons', qte: 2, unite: ''}, {nom: 'champignons', qte: 200, unite: 'g'}, {nom: 'lardons', qte: 150, unite: 'g'}, {nom: 'bouquet garni', qte: 1, unite: ''}, {nom: 'ail', qte: 2, unite: 'gousses'}, {nom: 'farine', qte: 2, unite: 'c. à soupe'}], cuisson: { appareil: 'Cocotte', intensite: 'Feu doux', duree: '2h' }, etapes: ['Faire mariner la viande dans le vin', 'Faire dorer les morceaux', 'Ajouter les légumes et le vin', 'Mijoter 2h', 'Ajouter champignons en fin de cuisson'] },
            { nom: 'Hachis Parmentier', categorie: 'plat', temps: '1h', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'bœuf haché', qte: 500, unite: 'g'}, {nom: 'pommes de terre', qte: 800, unite: 'g'}, {nom: 'oignons', qte: 2, unite: ''}, {nom: 'tomates concassées', qte: 400, unite: 'g'}, {nom: 'fromage râpé', qte: 100, unite: 'g'}, {nom: 'beurre', qte: 30, unite: 'g'}, {nom: 'lait', qte: 10, unite: 'cl'}], cuisson: { appareil: 'Poêle + Four', intensite: 'Feu moyen puis 200°C', duree: '15 min poêle + 25 min four' }, etapes: ['Préparer une purée de pommes de terre', 'Faire revenir viande et oignons', 'Ajouter les tomates, assaisonner', 'Disposer en couches dans un plat', 'Gratiner au four 25 min'] },
            { nom: 'Rôti de porc aux pommes', categorie: 'plat', temps: '1h30', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'rôti de porc', qte: 800, unite: 'g'}, {nom: 'pommes', qte: 3, unite: ''}, {nom: 'oignons', qte: 2, unite: ''}, {nom: 'cidre', qte: 25, unite: 'cl'}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'beurre', qte: 20, unite: 'g'}, {nom: 'thym', qte: 2, unite: 'branches'}], cuisson: { appareil: 'Cocotte + Four', intensite: '180°C', duree: '1h' }, etapes: ['Saisir le rôti de tous côtés', 'Ajouter oignons et pommes', 'Déglacer au cidre', 'Cuire au four 1h à 180°C', 'Faire la sauce avec la crème'] },
            { nom: 'Escalope de dinde à l\'orange', categorie: 'plat', temps: '30 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'escalopes de dinde', qte: 4, unite: ''}, {nom: 'oranges', qte: 2, unite: ''}, {nom: 'miel', qte: 2, unite: 'c. à soupe'}, {nom: 'sauce soja', qte: 2, unite: 'c. à soupe'}, {nom: 'gingembre frais', qte: 10, unite: 'g'}, {nom: 'huile d\'olive', qte: 2, unite: 'c. à soupe'}], cuisson: { appareil: 'Poêle', intensite: 'Feu moyen-vif', duree: '15 min' }, etapes: ['Poêler les escalopes', 'Préparer la sauce orange-miel', 'Ajouter le gingembre', 'Napper les escalopes', 'Servir avec riz'] },
            { nom: 'Gratin de courge butternut', categorie: 'plat', temps: '45 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'butternut', qte: 800, unite: 'g'}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'comté râpé', qte: 100, unite: 'g'}, {nom: 'muscade', qte: 1, unite: 'pincée'}, {nom: 'ail', qte: 1, unite: 'gousse'}], cuisson: { appareil: 'Casserole + Four', intensite: '200°C', duree: '15 min eau + 20 min four' }, etapes: ['Éplucher et couper la courge', 'Cuire 15 min à l\'eau', 'Disposer dans un plat à gratin', 'Verser la crème assaisonnée', 'Parsemer de fromage et gratiner'] },
            { nom: 'Parmentier de canard', categorie: 'plat', temps: '1h15', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'confit de canard', qte: 4, unite: 'cuisses'}, {nom: 'pommes de terre', qte: 800, unite: 'g'}, {nom: 'oignons', qte: 2, unite: ''}, {nom: 'persil', qte: 1, unite: 'bouquet'}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'beurre', qte: 30, unite: 'g'}, {nom: 'lait', qte: 10, unite: 'cl'}], cuisson: { appareil: 'Poêle + Four', intensite: '200°C', duree: '20 min four' }, etapes: ['Effilocher le confit', 'Faire la purée', 'Faire revenir le canard avec oignons', 'Disposer en couches', 'Gratiner 20 min'] },
            { nom: 'Choucroute garnie', categorie: 'plat', temps: '2h', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'choucroute crue', qte: 800, unite: 'g'}, {nom: 'saucisses de Strasbourg', qte: 4, unite: ''}, {nom: 'lard fumé', qte: 200, unite: 'g'}, {nom: 'pommes de terre', qte: 4, unite: ''}, {nom: 'vin blanc d\'Alsace', qte: 25, unite: 'cl'}, {nom: 'baies de genièvre', qte: 6, unite: ''}, {nom: 'laurier', qte: 2, unite: 'feuilles'}], cuisson: { appareil: 'Cocotte', intensite: 'Feu doux', duree: '1h30' }, etapes: ['Rincer la choucroute', 'Faire revenir avec le lard', 'Ajouter le vin blanc et aromates', 'Cuire 1h30 à feu doux', 'Ajouter saucisses et pommes de terre'] },
            { nom: 'Poulet rôti aux légumes d\'hiver', categorie: 'plat', temps: '1h30', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'poulet entier', qte: 1.5, unite: 'kg'}, {nom: 'carottes', qte: 4, unite: ''}, {nom: 'panais', qte: 2, unite: ''}, {nom: 'oignons', qte: 2, unite: ''}, {nom: 'pommes de terre', qte: 4, unite: ''}, {nom: 'beurre', qte: 40, unite: 'g'}, {nom: 'thym', qte: 3, unite: 'branches'}, {nom: 'ail', qte: 4, unite: 'gousses'}], cuisson: { appareil: 'Four', intensite: '180°C', duree: '1h15' }, etapes: ['Préparer le poulet avec herbes et beurre', 'Disposer les légumes autour', 'Enfourner 1h15 à 180°C', 'Arroser régulièrement', 'Servir avec le jus'] },
            { nom: 'Lapin à la moutarde', categorie: 'plat', temps: '1h15', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'lapin', qte: 1.2, unite: 'kg'}, {nom: 'moutarde de Dijon', qte: 3, unite: 'c. à soupe'}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'oignons', qte: 2, unite: ''}, {nom: 'vin blanc', qte: 20, unite: 'cl'}, {nom: 'thym', qte: 2, unite: 'branches'}, {nom: 'huile d\'olive', qte: 2, unite: 'c. à soupe'}], cuisson: { appareil: 'Cocotte', intensite: 'Feu moyen puis doux', duree: '50 min' }, etapes: ['Badigeonner le lapin de moutarde', 'Faire dorer les morceaux', 'Ajouter oignons et vin blanc', 'Mijoter 45 min', 'Finir avec la crème'] },

            // POISSONS
            { nom: 'Filet de cabillaud au citron', categorie: 'plat', temps: '25 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'filets de cabillaud', qte: 4, unite: ''}, {nom: 'citron', qte: 1, unite: ''}, {nom: 'beurre', qte: 50, unite: 'g'}, {nom: 'câpres', qte: 2, unite: 'c. à soupe'}, {nom: 'persil', qte: 1, unite: 'bouquet'}], cuisson: { appareil: 'Poêle', intensite: 'Feu moyen', duree: '8-10 min' }, etapes: ['Poêler le cabillaud', 'Préparer le beurre citronné', 'Ajouter câpres et persil', 'Napper le poisson', 'Servir immédiatement'] },
            { nom: 'Dos de lieu noir au beurre blanc', categorie: 'plat', temps: '30 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'dos de lieu noir', qte: 4, unite: ''}, {nom: 'échalotes', qte: 3, unite: ''}, {nom: 'vin blanc sec', qte: 15, unite: 'cl'}, {nom: 'beurre', qte: 120, unite: 'g'}, {nom: 'crème fraîche', qte: 5, unite: 'cl'}, {nom: 'vinaigre de vin blanc', qte: 2, unite: 'c. à soupe'}], cuisson: { appareil: 'Four + Casserole', intensite: '180°C', duree: '15 min four' }, etapes: ['Cuire le poisson au four', 'Faire réduire échalotes et vin', 'Monter au beurre froid', 'Ajouter une touche de crème', 'Napper le poisson'] },
            { nom: 'Sole meunière', categorie: 'plat', temps: '20 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'soles', qte: 4, unite: ''}, {nom: 'farine', qte: 50, unite: 'g'}, {nom: 'beurre', qte: 80, unite: 'g'}, {nom: 'citron', qte: 1, unite: ''}, {nom: 'persil', qte: 1, unite: 'bouquet'}], cuisson: { appareil: 'Poêle', intensite: 'Feu moyen-vif', duree: '6-8 min' }, etapes: ['Fariner la sole', 'Cuire au beurre mousseux', 'Arroser de beurre noisette', 'Ajouter jus de citron', 'Parsemer de persil'] },
            { nom: 'Brandade de morue', categorie: 'plat', temps: '45 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'morue salée', qte: 500, unite: 'g'}, {nom: 'pommes de terre', qte: 400, unite: 'g'}, {nom: 'huile d\'olive', qte: 10, unite: 'cl'}, {nom: 'ail', qte: 2, unite: 'gousses'}, {nom: 'crème fraîche', qte: 10, unite: 'cl'}, {nom: 'lait', qte: 15, unite: 'cl'}], cuisson: { appareil: 'Casserole + Four', intensite: 'Feu doux puis 200°C', duree: '20 min + 15 min four' }, etapes: ['Dessaler la morue 24h', 'Pocher et émietter', 'Écraser avec pommes de terre', 'Monter à l\'huile d\'olive', 'Gratiner au four'] },
            { nom: 'Gratin de Saint-Jacques', categorie: 'plat', temps: '30 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'noix de Saint-Jacques', qte: 12, unite: ''}, {nom: 'champignons de Paris', qte: 200, unite: 'g'}, {nom: 'échalotes', qte: 2, unite: ''}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'gruyère râpé', qte: 80, unite: 'g'}, {nom: 'beurre', qte: 30, unite: 'g'}, {nom: 'vin blanc', qte: 10, unite: 'cl'}], cuisson: { appareil: 'Poêle + Four (gril)', intensite: 'Feu vif puis gril', duree: '5 min poêle + 10 min gril' }, etapes: ['Poêler les Saint-Jacques', 'Faire revenir champignons et échalotes', 'Ajouter la crème', 'Disposer dans des coquilles', 'Gratiner 10 min'] },
            { nom: 'Moules marinières', categorie: 'plat', temps: '25 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'moules', qte: 2, unite: 'kg'}, {nom: 'vin blanc sec', qte: 20, unite: 'cl'}, {nom: 'échalotes', qte: 3, unite: ''}, {nom: 'persil', qte: 1, unite: 'bouquet'}, {nom: 'beurre', qte: 30, unite: 'g'}], cuisson: { appareil: 'Grande casserole', intensite: 'Feu vif', duree: '5-7 min' }, etapes: ['Nettoyer les moules', 'Faire revenir les échalotes', 'Ajouter vin et moules', 'Cuire jusqu\'à ouverture', 'Parsemer de persil'] },

            // ACCOMPAGNEMENTS
            { nom: 'Purée de pommes de terre', categorie: 'accompagnement', temps: '30 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'pommes de terre', qte: 800, unite: 'g'}, {nom: 'beurre', qte: 50, unite: 'g'}, {nom: 'lait', qte: 20, unite: 'cl'}, {nom: 'muscade', qte: 1, unite: 'pincée'}, {nom: 'sel', qte: 1, unite: 'c. à café'}], cuisson: { appareil: 'Casserole', intensite: 'Eau bouillante', duree: '20-25 min' }, etapes: ['Cuire les pommes de terre', 'Écraser au presse-purée', 'Ajouter beurre et lait chaud', 'Assaisonner de muscade', 'Servir bien chaud'] },
            { nom: 'Gratin dauphinois', categorie: 'accompagnement', temps: '1h15', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'pommes de terre', qte: 1, unite: 'kg'}, {nom: 'crème fraîche', qte: 30, unite: 'cl'}, {nom: 'lait', qte: 30, unite: 'cl'}, {nom: 'ail', qte: 2, unite: 'gousses'}, {nom: 'muscade', qte: 1, unite: 'pincée'}, {nom: 'beurre', qte: 20, unite: 'g'}], cuisson: { appareil: 'Four', intensite: '150°C', duree: '1h' }, etapes: ['Émincer les pommes de terre', 'Frotter le plat à l\'ail', 'Disposer en couches', 'Verser crème et lait', 'Cuire 1h à 150°C'] },
            { nom: 'Poêlée de choux de Bruxelles', categorie: 'accompagnement', temps: '25 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'choux de Bruxelles', qte: 500, unite: 'g'}, {nom: 'lardons', qte: 100, unite: 'g'}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'beurre', qte: 20, unite: 'g'}, {nom: 'persil', qte: 1, unite: 'bouquet'}], cuisson: { appareil: 'Casserole + Poêle', intensite: 'Eau bouillante puis feu moyen', duree: '10 min + 10 min' }, etapes: ['Cuire les choux à l\'eau', 'Faire revenir les lardons', 'Ajouter oignon et choux', 'Sauter au beurre', 'Parsemer de persil'] },
            { nom: 'Écrasé de panais', categorie: 'accompagnement', temps: '30 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'panais', qte: 600, unite: 'g'}, {nom: 'beurre', qte: 30, unite: 'g'}, {nom: 'crème fraîche', qte: 10, unite: 'cl'}, {nom: 'muscade', qte: 1, unite: 'pincée'}, {nom: 'ciboulette', qte: 1, unite: 'bouquet'}], cuisson: { appareil: 'Casserole', intensite: 'Eau bouillante', duree: '20 min' }, etapes: ['Éplucher et cuire les panais', 'Écraser grossièrement', 'Ajouter beurre et crème', 'Assaisonner', 'Servir avec ciboulette'] },
            { nom: 'Carottes glacées', categorie: 'accompagnement', temps: '25 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'carottes', qte: 600, unite: 'g'}, {nom: 'beurre', qte: 30, unite: 'g'}, {nom: 'sucre', qte: 1, unite: 'c. à soupe'}, {nom: 'persil', qte: 1, unite: 'bouquet'}, {nom: 'bouillon', qte: 25, unite: 'cl'}], cuisson: { appareil: 'Sauteuse', intensite: 'Feu moyen puis doux', duree: '20 min' }, etapes: ['Couper les carottes en rondelles', 'Couvrir de bouillon et beurre', 'Ajouter une pincée de sucre', 'Cuire jusqu\'à évaporation', 'Parsemer de persil'] },
            { nom: 'Purée de céleri-rave', categorie: 'accompagnement', temps: '35 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'céleri-rave', qte: 400, unite: 'g'}, {nom: 'pomme de terre', qte: 200, unite: 'g'}, {nom: 'beurre', qte: 30, unite: 'g'}, {nom: 'crème fraîche', qte: 10, unite: 'cl'}, {nom: 'muscade', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Casserole', intensite: 'Eau bouillante', duree: '25 min' }, etapes: ['Cuire céleri et pommes de terre', 'Écraser ensemble', 'Ajouter beurre et crème', 'Assaisonner de muscade'] },
            { nom: 'Endives braisées', categorie: 'accompagnement', temps: '45 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'endives', qte: 8, unite: ''}, {nom: 'beurre', qte: 30, unite: 'g'}, {nom: 'sucre', qte: 1, unite: 'c. à café'}, {nom: 'citron', qte: 0.5, unite: ''}, {nom: 'bouillon', qte: 15, unite: 'cl'}], cuisson: { appareil: 'Sauteuse avec couvercle', intensite: 'Feu doux', duree: '40 min' }, etapes: ['Faire dorer les endives', 'Ajouter bouillon et sucre', 'Braiser 40 min à couvert', 'Réduire le jus', 'Servir caramélisées'] },
            { nom: 'Chou braisé aux lardons', categorie: 'accompagnement', temps: '40 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'chou vert', qte: 0.5, unite: ''}, {nom: 'lardons', qte: 150, unite: 'g'}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'bouillon', qte: 20, unite: 'cl'}, {nom: 'thym', qte: 2, unite: 'branches'}], cuisson: { appareil: 'Cocotte', intensite: 'Feu doux', duree: '30 min' }, etapes: ['Émincer le chou', 'Faire revenir les lardons', 'Ajouter oignon et chou', 'Mouiller de bouillon', 'Braiser 30 min'] },

            // PLATS RAPIDES
            { nom: 'Omelette aux épinards', categorie: 'plat', temps: '15 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'œufs', qte: 8, unite: ''}, {nom: 'épinards frais', qte: 300, unite: 'g'}, {nom: 'ail', qte: 1, unite: 'gousse'}, {nom: 'beurre', qte: 20, unite: 'g'}, {nom: 'sel', qte: 1, unite: 'pincée'}, {nom: 'poivre', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Poêle', intensite: 'Feu moyen', duree: '10 min' }, etapes: ['Faire tomber les épinards avec l\'ail', 'Battre les œufs, saler, poivrer', 'Verser les œufs sur les épinards', 'Cuire 5 min, replier', 'Servir aussitôt'] },
            { nom: 'Crêpes', categorie: 'plat', temps: '30 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'farine', qte: 250, unite: 'g'}, {nom: 'œufs', qte: 3, unite: ''}, {nom: 'lait', qte: 50, unite: 'cl'}, {nom: 'beurre fondu', qte: 30, unite: 'g'}, {nom: 'sucre', qte: 1, unite: 'c. à soupe'}, {nom: 'sel', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Poêle ou crêpière', intensite: 'Feu moyen-vif', duree: '2 min par crêpe' }, etapes: ['Mélanger farine, œufs et sel', 'Ajouter le lait progressivement', 'Incorporer le beurre fondu', 'Laisser reposer 30 min', 'Cuire les crêpes une par une'] },

            // TARTES & QUICHES
            { nom: 'Tarte aux poireaux', categorie: 'plat', temps: '50 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'pâte brisée', qte: 1, unite: ''}, {nom: 'poireaux', qte: 4, unite: ''}, {nom: 'œufs', qte: 3, unite: ''}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'lardons', qte: 100, unite: 'g'}, {nom: 'beurre', qte: 20, unite: 'g'}], cuisson: { appareil: 'Poêle + Four', intensite: '180°C', duree: '15 min poêle + 35 min four' }, etapes: ['Émincer et faire fondre les poireaux', 'Faire revenir les lardons', 'Mélanger œufs et crème', 'Garnir le fond de tarte', 'Cuire 35 min à 180°C'] },
            { nom: 'Quiche lorraine', categorie: 'plat', temps: '50 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'pâte brisée', qte: 1, unite: ''}, {nom: 'lardons', qte: 200, unite: 'g'}, {nom: 'œufs', qte: 3, unite: ''}, {nom: 'crème fraîche', qte: 25, unite: 'cl'}, {nom: 'gruyère râpé', qte: 80, unite: 'g'}, {nom: 'muscade', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Poêle + Four', intensite: '180°C', duree: '5 min poêle + 35 min four' }, etapes: ['Faire revenir les lardons', 'Battre œufs et crème', 'Disposer lardons et fromage', 'Verser l\'appareil', 'Cuire 35 min à 180°C'] },
            { nom: 'Tarte au potimarron', categorie: 'plat', temps: '1h', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'pâte brisée', qte: 1, unite: ''}, {nom: 'potimarron', qte: 500, unite: 'g'}, {nom: 'chèvre frais', qte: 100, unite: 'g'}, {nom: 'œufs', qte: 2, unite: ''}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'muscade', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Casserole + Four', intensite: '180°C', duree: '20 min casserole + 40 min four' }, etapes: ['Cuire le potimarron', 'Écraser en purée', 'Mélanger avec œufs et crème', 'Ajouter le chèvre émietté', 'Cuire 40 min à 180°C'] },
            { nom: 'Flamiche aux poireaux', categorie: 'plat', temps: '1h', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'pâte feuilletée', qte: 1, unite: ''}, {nom: 'poireaux', qte: 6, unite: ''}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'œufs', qte: 2, unite: ''}, {nom: 'muscade', qte: 1, unite: 'pincée'}, {nom: 'beurre', qte: 30, unite: 'g'}], cuisson: { appareil: 'Poêle + Four', intensite: '200°C', duree: '15 min poêle + 40 min four' }, etapes: ['Faire fondre les poireaux', 'Mélanger avec crème et œufs', 'Étaler la pâte', 'Garnir et refermer', 'Cuire 40 min à 200°C'] },

            // DESSERTS
            { nom: 'Compote pomme-poire', categorie: 'dessert', temps: '25 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'pommes', qte: 4, unite: ''}, {nom: 'poires', qte: 3, unite: ''}, {nom: 'miel', qte: 2, unite: 'c. à soupe'}, {nom: 'cannelle', qte: 1, unite: 'c. à café'}, {nom: 'citron', qte: 0.5, unite: ''}], cuisson: { appareil: 'Casserole', intensite: 'Feu doux', duree: '20 min' }, etapes: ['Éplucher et couper les fruits', 'Cuire à feu doux avec un peu d\'eau', 'Ajouter miel et cannelle', 'Écraser grossièrement', 'Servir tiède ou froid'] },
            { nom: 'Tarte Tatin', categorie: 'dessert', temps: '50 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'pommes', qte: 6, unite: ''}, {nom: 'pâte feuilletée', qte: 1, unite: ''}, {nom: 'beurre', qte: 60, unite: 'g'}, {nom: 'sucre', qte: 100, unite: 'g'}, {nom: 'vanille', qte: 1, unite: 'gousse'}], cuisson: { appareil: 'Poêle allant au four + Four', intensite: 'Feu moyen puis 200°C', duree: '15 min poêle + 25 min four' }, etapes: ['Faire un caramel', 'Disposer les pommes', 'Cuire jusqu\'à coloration', 'Couvrir de pâte', 'Enfourner et retourner'] },
            { nom: 'Clafoutis aux pommes', categorie: 'dessert', temps: '45 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'pommes', qte: 4, unite: ''}, {nom: 'œufs', qte: 3, unite: ''}, {nom: 'farine', qte: 80, unite: 'g'}, {nom: 'lait', qte: 25, unite: 'cl'}, {nom: 'sucre', qte: 60, unite: 'g'}, {nom: 'beurre', qte: 20, unite: 'g'}], cuisson: { appareil: 'Four', intensite: '180°C', duree: '35 min' }, etapes: ['Éplucher et trancher les pommes', 'Battre œufs, sucre, farine', 'Ajouter le lait', 'Disposer les pommes', 'Cuire 35 min à 180°C'] },
            { nom: 'Gâteau aux noix', categorie: 'dessert', temps: '50 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'cerneaux de noix', qte: 150, unite: 'g'}, {nom: 'œufs', qte: 3, unite: ''}, {nom: 'sucre', qte: 100, unite: 'g'}, {nom: 'farine', qte: 80, unite: 'g'}, {nom: 'beurre', qte: 80, unite: 'g'}], cuisson: { appareil: 'Four', intensite: '170°C', duree: '40 min' }, etapes: ['Mixer grossièrement les noix', 'Battre œufs et sucre', 'Incorporer farine et noix', 'Ajouter le beurre fondu', 'Cuire 40 min à 170°C'] },
            { nom: 'Poires au vin', categorie: 'dessert', temps: '45 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'poires', qte: 4, unite: ''}, {nom: 'vin rouge', qte: 50, unite: 'cl'}, {nom: 'sucre', qte: 80, unite: 'g'}, {nom: 'cannelle', qte: 1, unite: 'bâton'}, {nom: 'clous de girofle', qte: 3, unite: ''}], cuisson: { appareil: 'Casserole', intensite: 'Feu doux (frémissement)', duree: '30 min' }, etapes: ['Éplucher les poires entières', 'Faire chauffer le vin avec les épices', 'Pocher les poires 30 min', 'Réduire le sirop', 'Servir nappé'] },
            { nom: 'Crumble aux pommes', categorie: 'dessert', temps: '45 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'pommes', qte: 5, unite: ''}, {nom: 'farine', qte: 120, unite: 'g'}, {nom: 'beurre', qte: 80, unite: 'g'}, {nom: 'sucre', qte: 80, unite: 'g'}, {nom: 'cannelle', qte: 1, unite: 'c. à café'}], cuisson: { appareil: 'Four', intensite: '180°C', duree: '30 min' }, etapes: ['Couper les pommes en morceaux', 'Sabler farine, beurre et sucre', 'Disposer les pommes dans un plat', 'Couvrir de crumble', 'Cuire 30 min à 180°C'] },
            { nom: 'Mousse au chocolat', categorie: 'dessert', temps: '20 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'chocolat noir', qte: 200, unite: 'g'}, {nom: 'œufs', qte: 6, unite: ''}, {nom: 'sucre', qte: 30, unite: 'g'}, {nom: 'beurre', qte: 20, unite: 'g'}], cuisson: { appareil: 'Bain-marie', intensite: 'Feu doux', duree: '5 min (fonte chocolat)' }, etapes: ['Faire fondre le chocolat', 'Séparer blancs et jaunes', 'Mélanger jaunes et chocolat', 'Monter les blancs en neige', 'Incorporer délicatement'] },
            { nom: 'Riz au lait', categorie: 'dessert', temps: '45 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'riz rond', qte: 150, unite: 'g'}, {nom: 'lait entier', qte: 1, unite: 'L'}, {nom: 'sucre', qte: 80, unite: 'g'}, {nom: 'vanille', qte: 1, unite: 'gousse'}, {nom: 'cannelle', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Casserole', intensite: 'Feu très doux', duree: '40 min' }, etapes: ['Faire cuire le riz dans le lait', 'Ajouter sucre et vanille', 'Remuer régulièrement', 'Cuire jusqu\'à consistance crémeuse', 'Saupoudrer de cannelle'] },
            { nom: 'Flan pâtissier', categorie: 'dessert', temps: '1h', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'pâte brisée', qte: 1, unite: ''}, {nom: 'lait', qte: 50, unite: 'cl'}, {nom: 'œufs', qte: 3, unite: ''}, {nom: 'sucre', qte: 100, unite: 'g'}, {nom: 'maïzena', qte: 40, unite: 'g'}, {nom: 'vanille', qte: 1, unite: 'gousse'}], cuisson: { appareil: 'Casserole + Four', intensite: '180°C', duree: '10 min casserole + 45 min four' }, etapes: ['Foncer un moule avec la pâte', 'Faire chauffer le lait avec la vanille', 'Mélanger œufs, sucre et maïzena', 'Verser le lait chaud en remuant', 'Cuire 45 min à 180°C'] },
            { nom: 'Gâteau au yaourt', categorie: 'dessert', temps: '45 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'yaourt nature', qte: 1, unite: ''}, {nom: 'œufs', qte: 3, unite: ''}, {nom: 'sucre', qte: 150, unite: 'g'}, {nom: 'farine', qte: 200, unite: 'g'}, {nom: 'huile', qte: 10, unite: 'cl'}, {nom: 'levure chimique', qte: 1, unite: 'sachet'}], cuisson: { appareil: 'Four', intensite: '180°C', duree: '35 min' }, etapes: ['Utiliser le pot de yaourt comme mesure', 'Mélanger tous les ingrédients', 'Verser dans un moule beurré', 'Cuire 35 min à 180°C'] }
        ],

        printemps: [
// SOUPES
            { nom: 'Velouté d\'asperges', categorie: 'soupe', temps: '35 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'asperges', qte: 500, unite: 'g'}, {nom: 'pomme de terre', qte: 1, unite: ''}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'échalote', qte: 1, unite: ''}, {nom: 'cerfeuil', qte: 1, unite: 'bouquet'}], cuisson: { appareil: 'Casserole', intensite: 'Feu moyen puis doux', duree: '25 min' }, etapes: ['Cuire les asperges', 'Réserver les pointes', 'Mixer avec pomme de terre', 'Ajouter la crème', 'Décorer des pointes'] },
            { nom: 'Soupe de petits pois à la menthe', categorie: 'soupe', temps: '25 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'petits pois', qte: 500, unite: 'g'}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'bouillon', qte: 75, unite: 'cl'}, {nom: 'menthe', qte: 1, unite: 'bouquet'}, {nom: 'crème fraîche', qte: 10, unite: 'cl'}], cuisson: { appareil: 'Casserole', intensite: 'Feu moyen', duree: '15 min' }, etapes: ['Faire revenir l\'oignon', 'Ajouter petits pois et bouillon', 'Cuire 15 min', 'Mixer avec la menthe', 'Servir avec crème'] },
            { nom: 'Gaspacho de fèves', categorie: 'soupe', temps: '20 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'fèves', qte: 500, unite: 'g'}, {nom: 'concombre', qte: 1, unite: ''}, {nom: 'yaourt', qte: 2, unite: ''}, {nom: 'menthe', qte: 10, unite: 'feuilles'}, {nom: 'huile d\'olive', qte: 3, unite: 'c. à soupe'}], cuisson: { appareil: 'Casserole (blanchir)', intensite: 'Eau bouillante', duree: '3 min' }, etapes: ['Écosser les fèves', 'Blanchir 3 min', 'Mixer avec concombre et yaourt', 'Ajouter menthe et huile', 'Servir frais'] },

            // ENTRÉES
            { nom: 'Asperges vinaigrette', categorie: 'entree', temps: '20 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'asperges', qte: 600, unite: 'g'}, {nom: 'huile d\'olive', qte: 4, unite: 'c. à soupe'}, {nom: 'vinaigre', qte: 2, unite: 'c. à soupe'}, {nom: 'moutarde', qte: 1, unite: 'c. à café'}, {nom: 'œuf dur', qte: 2, unite: ''}], cuisson: { appareil: 'Casserole', intensite: 'Eau bouillante', duree: '10-15 min' }, etapes: ['Cuire les asperges', 'Préparer la vinaigrette', 'Égoutter et refroidir', 'Servir avec vinaigrette', 'Ajouter œuf émietté'] },
            { nom: 'Salade de fèves au pecorino', categorie: 'entree', temps: '25 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'fèves', qte: 600, unite: 'g'}, {nom: 'pecorino', qte: 80, unite: 'g'}, {nom: 'menthe', qte: 10, unite: 'feuilles'}, {nom: 'huile d\'olive', qte: 3, unite: 'c. à soupe'}, {nom: 'citron', qte: 1, unite: ''}], cuisson: { appareil: 'Casserole (blanchir)', intensite: 'Eau bouillante', duree: '3-5 min' }, etapes: ['Écosser et blanchir les fèves', 'Retirer la peau', 'Ajouter pecorino en copeaux', 'Assaisonner citron et huile', 'Parsemer de menthe'] },
            { nom: 'Œufs cocotte aux asperges', categorie: 'entree', temps: '20 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'œufs', qte: 4, unite: ''}, {nom: 'asperges', qte: 200, unite: 'g'}, {nom: 'crème fraîche', qte: 10, unite: 'cl'}, {nom: 'parmesan', qte: 40, unite: 'g'}, {nom: 'ciboulette', qte: 6, unite: 'brins'}], cuisson: { appareil: 'Four (bain-marie)', intensite: '180°C', duree: '12 min' }, etapes: ['Cuire les pointes d\'asperges', 'Répartir dans des ramequins', 'Ajouter crème et parmesan', 'Casser les œufs dessus', 'Cuire au bain-marie 12 min'] },
            { nom: 'Artichauts à la barigoule', categorie: 'entree', temps: '45 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'artichauts', qte: 4, unite: ''}, {nom: 'lardons', qte: 100, unite: 'g'}, {nom: 'carottes', qte: 2, unite: ''}, {nom: 'vin blanc', qte: 15, unite: 'cl'}, {nom: 'thym', qte: 3, unite: 'branches'}], cuisson: { appareil: 'Cocotte', intensite: 'Feu doux', duree: '30 min' }, etapes: ['Tourner les artichauts', 'Faire revenir lardons et légumes', 'Ajouter les artichauts', 'Mouiller au vin blanc', 'Braiser 30 min'] },

            // PLATS
            { nom: 'Risotto aux asperges', categorie: 'plat', temps: '40 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'riz arborio', qte: 300, unite: 'g'}, {nom: 'asperges', qte: 400, unite: 'g'}, {nom: 'parmesan', qte: 80, unite: 'g'}, {nom: 'bouillon', qte: 1, unite: 'L'}, {nom: 'vin blanc', qte: 10, unite: 'cl'}, {nom: 'échalote', qte: 2, unite: ''}], cuisson: { appareil: 'Sauteuse', intensite: 'Feu moyen', duree: '20-25 min' }, etapes: ['Cuire les asperges, réserver les pointes', 'Nacrer le riz avec échalote', 'Déglacer au vin', 'Ajouter bouillon louche par louche', 'Finir avec asperges et parmesan'] },
            { nom: 'Navarin d\'agneau printanier', categorie: 'plat', temps: '1h30', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'agneau', qte: 800, unite: 'g'}, {nom: 'carottes nouvelles', qte: 8, unite: ''}, {nom: 'navets', qte: 4, unite: ''}, {nom: 'petits pois', qte: 200, unite: 'g'}, {nom: 'oignons grelots', qte: 12, unite: ''}], cuisson: { appareil: 'Cocotte', intensite: 'Feu doux', duree: '1h20' }, etapes: ['Faire dorer l\'agneau', 'Ajouter les oignons', 'Mouiller de bouillon', 'Cuire 1h puis ajouter légumes', 'Poursuivre 20 min'] },
            { nom: 'Truite aux amandes', categorie: 'plat', temps: '25 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'truite', qte: 4, unite: ''}, {nom: 'amandes effilées', qte: 60, unite: 'g'}, {nom: 'beurre', qte: 50, unite: 'g'}, {nom: 'citron', qte: 1, unite: ''}, {nom: 'persil', qte: 4, unite: 'branches'}], cuisson: { appareil: 'Poêle', intensite: 'Feu moyen', duree: '10-12 min' }, etapes: ['Fariner la truite', 'Cuire au beurre', 'Faire dorer les amandes', 'Ajouter jus de citron', 'Servir avec amandes'] },
            { nom: 'Escalope de veau aux morilles', categorie: 'plat', temps: '35 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'escalopes de veau', qte: 4, unite: ''}, {nom: 'morilles', qte: 150, unite: 'g'}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'échalotes', qte: 2, unite: ''}, {nom: 'vin jaune', qte: 10, unite: 'cl'}], cuisson: { appareil: 'Poêle', intensite: 'Feu moyen-vif puis moyen', duree: '15 min' }, etapes: ['Réhydrater les morilles', 'Poêler les escalopes', 'Faire revenir morilles et échalotes', 'Déglacer au vin', 'Ajouter la crème'] },
            { nom: 'Poulet aux petits pois', categorie: 'plat', temps: '50 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'poulet', qte: 1.2, unite: 'kg'}, {nom: 'petits pois', qte: 400, unite: 'g'}, {nom: 'laitue', qte: 1, unite: ''}, {nom: 'oignons nouveaux', qte: 6, unite: ''}, {nom: 'lardons', qte: 100, unite: 'g'}], cuisson: { appareil: 'Cocotte', intensite: 'Feu doux', duree: '35 min' }, etapes: ['Faire dorer le poulet', 'Ajouter lardons et oignons', 'Mouiller de bouillon', 'Ajouter petits pois et laitue', 'Mijoter 30 min'] },
            { nom: 'Saumon grillé aux herbes', categorie: 'plat', temps: '20 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'saumon', qte: 4, unite: ''}, {nom: 'aneth', qte: 1, unite: 'bouquet'}, {nom: 'citron', qte: 1, unite: ''}, {nom: 'huile d\'olive', qte: 3, unite: 'c. à soupe'}, {nom: 'fenouil', qte: 1, unite: ''}], cuisson: { appareil: 'Four (gril) ou Plancha', intensite: '220°C ou feu vif', duree: '8-10 min' }, etapes: ['Badigeonner le saumon d\'huile', 'Parsemer d\'aneth', 'Griller 8-10 min', 'Servir avec citron', 'Accompagner de fenouil'] },
            { nom: 'Lapin aux olives', categorie: 'plat', temps: '1h15', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'lapin', qte: 1.2, unite: 'kg'}, {nom: 'olives', qte: 150, unite: 'g'}, {nom: 'tomates', qte: 4, unite: ''}, {nom: 'vin blanc', qte: 15, unite: 'cl'}, {nom: 'herbes de Provence', qte: 1, unite: 'c. à soupe'}], cuisson: { appareil: 'Cocotte', intensite: 'Feu moyen puis doux', duree: '1h' }, etapes: ['Faire dorer le lapin', 'Ajouter tomates et vin', 'Cuire 45 min', 'Ajouter les olives', 'Poursuivre 15 min'] },
            { nom: 'Omelette aux fines herbes', categorie: 'plat', temps: '10 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'œufs', qte: 8, unite: ''}, {nom: 'ciboulette', qte: 6, unite: 'brins'}, {nom: 'persil', qte: 4, unite: 'branches'}, {nom: 'cerfeuil', qte: 4, unite: 'branches'}, {nom: 'estragon', qte: 3, unite: 'feuilles'}, {nom: 'beurre', qte: 20, unite: 'g'}], cuisson: { appareil: 'Poêle', intensite: 'Feu moyen', duree: '5 min' }, etapes: ['Battre les œufs', 'Ciseler les herbes finement', 'Mélanger herbes et œufs', 'Cuire au beurre 5 min', 'Replier et servir baveuse'] },
            { nom: 'Quiche aux épinards', categorie: 'plat', temps: '50 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'pâte brisée', qte: 1, unite: ''}, {nom: 'épinards frais', qte: 400, unite: 'g'}, {nom: 'œufs', qte: 3, unite: ''}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'chèvre frais', qte: 100, unite: 'g'}, {nom: 'muscade', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Poêle + Four', intensite: '180°C', duree: '10 min poêle + 35 min four' }, etapes: ['Faire tomber les épinards', 'Foncer un moule avec la pâte', 'Battre œufs et crème', 'Disposer épinards et chèvre', 'Verser l\'appareil et cuire 35 min'] },
            { nom: 'Artichauts vinaigrette', categorie: 'entree', temps: '40 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'artichauts', qte: 4, unite: ''}, {nom: 'huile d\'olive', qte: 4, unite: 'c. à soupe'}, {nom: 'vinaigre de vin', qte: 2, unite: 'c. à soupe'}, {nom: 'moutarde', qte: 1, unite: 'c. à café'}, {nom: 'échalote', qte: 1, unite: ''}, {nom: 'persil', qte: 4, unite: 'branches'}], cuisson: { appareil: 'Casserole', intensite: 'Eau bouillante', duree: '30-40 min' }, etapes: ['Couper la tige des artichauts', 'Cuire dans l\'eau bouillante citronnée', 'Préparer la vinaigrette à l\'échalote', 'Égoutter les artichauts', 'Servir tièdes avec la vinaigrette'] },

            // ACCOMPAGNEMENTS
            { nom: 'Petits pois à la française', categorie: 'accompagnement', temps: '30 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'petits pois', qte: 500, unite: 'g'}, {nom: 'laitue', qte: 1, unite: ''}, {nom: 'oignons nouveaux', qte: 6, unite: ''}, {nom: 'beurre', qte: 30, unite: 'g'}, {nom: 'sucre', qte: 1, unite: 'c. à café'}], cuisson: { appareil: 'Sauteuse avec couvercle', intensite: 'Feu doux', duree: '20 min' }, etapes: ['Émincer oignons et laitue', 'Faire fondre au beurre', 'Ajouter petits pois', 'Mouiller légèrement', 'Cuire 20 min à couvert'] },
            { nom: 'Fèves à la sarriette', categorie: 'accompagnement', temps: '20 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'fèves', qte: 500, unite: 'g'}, {nom: 'sarriette', qte: 4, unite: 'branches'}, {nom: 'ail', qte: 2, unite: 'gousses'}, {nom: 'huile d\'olive', qte: 3, unite: 'c. à soupe'}, {nom: 'citron', qte: 1, unite: ''}], cuisson: { appareil: 'Casserole + Poêle', intensite: 'Eau bouillante puis feu moyen', duree: '5 min + 5 min' }, etapes: ['Écosser les fèves', 'Blanchir et peler', 'Faire revenir à l\'huile', 'Ajouter ail et sarriette', 'Finir au citron'] },
            { nom: 'Carottes nouvelles glacées', categorie: 'accompagnement', temps: '25 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'carottes nouvelles', qte: 600, unite: 'g'}, {nom: 'beurre', qte: 30, unite: 'g'}, {nom: 'sucre', qte: 1, unite: 'c. à soupe'}, {nom: 'persil', qte: 4, unite: 'branches'}, {nom: 'bouillon', qte: 20, unite: 'cl'}], cuisson: { appareil: 'Sauteuse', intensite: 'Feu moyen puis doux', duree: '20 min' }, etapes: ['Garder les fanes courtes', 'Cuire dans bouillon et beurre', 'Ajouter le sucre', 'Réduire jusqu\'à glaçage', 'Parsemer de persil'] },
            { nom: 'Gratin d\'asperges', categorie: 'accompagnement', temps: '30 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'asperges', qte: 500, unite: 'g'}, {nom: 'béchamel', qte: 30, unite: 'cl'}, {nom: 'parmesan', qte: 60, unite: 'g'}, {nom: 'muscade', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Casserole + Four', intensite: '200°C', duree: '10 min eau + 15 min four' }, etapes: ['Cuire les asperges', 'Préparer une béchamel', 'Disposer dans un plat', 'Napper de sauce et fromage', 'Gratiner 15 min'] },

            // DESSERTS
            { nom: 'Tarte aux fraises', categorie: 'dessert', temps: '40 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'pâte sablée', qte: 1, unite: ''}, {nom: 'fraises', qte: 500, unite: 'g'}, {nom: 'crème pâtissière', qte: 30, unite: 'cl'}, {nom: 'sucre glace', qte: 2, unite: 'c. à soupe'}], cuisson: { appareil: 'Four', intensite: '180°C', duree: '20 min (pâte à blanc)' }, etapes: ['Cuire la pâte à blanc', 'Garnir de crème pâtissière', 'Disposer les fraises', 'Saupoudrer de sucre glace'] },
            { nom: 'Charlotte aux fraises', categorie: 'dessert', temps: '30 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'fraises', qte: 400, unite: 'g'}, {nom: 'biscuits cuillère', qte: 200, unite: 'g'}, {nom: 'mousse', qte: 30, unite: 'cl'}, {nom: 'coulis', qte: 15, unite: 'cl'}], cuisson: { appareil: 'Sans cuisson (réfrigérateur)', intensite: '-', duree: '4h au frais' }, etapes: ['Chemiser un moule de biscuits', 'Préparer la mousse aux fraises', 'Alterner mousse et fraises', 'Réfrigérer 4h', 'Servir avec coulis'] },
            { nom: 'Compote de rhubarbe', categorie: 'dessert', temps: '20 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'rhubarbe', qte: 500, unite: 'g'}, {nom: 'sucre', qte: 100, unite: 'g'}, {nom: 'vanille', qte: 1, unite: 'gousse'}, {nom: 'fraises', qte: 150, unite: 'g'}], cuisson: { appareil: 'Casserole', intensite: 'Feu doux', duree: '15 min' }, etapes: ['Couper la rhubarbe', 'Cuire avec sucre et vanille', 'Ajouter les fraises en fin', 'Servir tiède ou froid'] },
            { nom: 'Clafoutis aux cerises', categorie: 'dessert', temps: '45 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'cerises', qte: 400, unite: 'g'}, {nom: 'œufs', qte: 3, unite: ''}, {nom: 'farine', qte: 80, unite: 'g'}, {nom: 'lait', qte: 25, unite: 'cl'}, {nom: 'sucre', qte: 80, unite: 'g'}], cuisson: { appareil: 'Four', intensite: '180°C', duree: '35 min' }, etapes: ['Dénoyauter ou non les cerises', 'Préparer l\'appareil', 'Disposer les cerises', 'Verser l\'appareil', 'Cuire 35 min à 180°C'] },
            { nom: 'Fraises à la crème', categorie: 'dessert', temps: '10 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'fraises', qte: 500, unite: 'g'}, {nom: 'crème fouettée', qte: 20, unite: 'cl'}, {nom: 'sucre', qte: 30, unite: 'g'}, {nom: 'menthe', qte: 8, unite: 'feuilles'}], cuisson: { appareil: 'Sans cuisson', intensite: '-', duree: '-' }, etapes: ['Laver et équeuter les fraises', 'Couper en deux', 'Servir avec crème fouettée', 'Décorer de menthe'] }
        ],

        ete: [
// SOUPES FROIDES
            { nom: 'Gaspacho', categorie: 'soupe', temps: '20 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'tomates', qte: 6, unite: ''}, {nom: 'concombre', qte: 1, unite: ''}, {nom: 'poivron', qte: 1, unite: ''}, {nom: 'huile d\'olive', qte: 4, unite: 'c. à soupe'}, {nom: 'vinaigre', qte: 2, unite: 'c. à soupe'}], cuisson: { appareil: 'Sans cuisson (mixeur)', intensite: '-', duree: '2h au frais' }, etapes: ['Couper tous les légumes', 'Mixer finement', 'Assaisonner', 'Réfrigérer 2h', 'Servir très frais'] },
            { nom: 'Soupe froide de melon', categorie: 'soupe', temps: '15 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'melon', qte: 2, unite: ''}, {nom: 'jambon cru', qte: 4, unite: 'tranches'}, {nom: 'menthe', qte: 1, unite: 'bouquet'}, {nom: 'porto', qte: 5, unite: 'cl'}], cuisson: { appareil: 'Sans cuisson (mixeur)', intensite: '-', duree: '1h au frais' }, etapes: ['Mixer le melon', 'Ajouter un filet de porto', 'Réfrigérer', 'Servir avec jambon', 'Décorer de menthe'] },
            { nom: 'Vichyssoise', categorie: 'soupe', temps: '40 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'poireaux', qte: 4, unite: ''}, {nom: 'pommes de terre', qte: 3, unite: ''}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'ciboulette', qte: 1, unite: 'bouquet'}], cuisson: { appareil: 'Casserole', intensite: 'Feu moyen puis doux', duree: '25 min + 2h au frais' }, etapes: ['Cuire poireaux et pommes de terre', 'Mixer finement', 'Ajouter la crème', 'Réfrigérer', 'Servir avec ciboulette'] },

            // ENTRÉES
            { nom: 'Salade niçoise', categorie: 'entree', temps: '25 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'thon', qte: 200, unite: 'g'}, {nom: 'tomates', qte: 4, unite: ''}, {nom: 'haricots verts', qte: 200, unite: 'g'}, {nom: 'œufs', qte: 4, unite: ''}, {nom: 'olives noires', qte: 100, unite: 'g'}, {nom: 'anchois', qte: 8, unite: 'filets'}], cuisson: { appareil: 'Casserole', intensite: 'Eau bouillante', duree: '10 min (œufs) + 8 min (haricots)' }, etapes: ['Cuire œufs et haricots', 'Couper les légumes', 'Disposer joliment', 'Ajouter thon et anchois', 'Assaisonner'] },
            { nom: 'Tomates mozzarella', categorie: 'entree', temps: '10 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'tomates', qte: 4, unite: ''}, {nom: 'mozzarella', qte: 2, unite: 'boules'}, {nom: 'basilic', qte: 1, unite: 'bouquet'}, {nom: 'huile d\'olive', qte: 4, unite: 'c. à soupe'}, {nom: 'vinaigre balsamique', qte: 2, unite: 'c. à soupe'}], cuisson: { appareil: 'Sans cuisson', intensite: '-', duree: '-' }, etapes: ['Trancher tomates et mozzarella', 'Alterner en rosace', 'Parsemer de basilic', 'Arroser d\'huile', 'Ajouter le balsamique'] },
            { nom: 'Tartare de tomates', categorie: 'entree', temps: '15 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'tomates', qte: 6, unite: ''}, {nom: 'échalote', qte: 1, unite: ''}, {nom: 'basilic', qte: 1, unite: 'bouquet'}, {nom: 'câpres', qte: 2, unite: 'c. à soupe'}, {nom: 'huile d\'olive', qte: 3, unite: 'c. à soupe'}], cuisson: { appareil: 'Sans cuisson', intensite: '-', duree: '-' }, etapes: ['Concasser les tomates', 'Émincer l\'échalote', 'Mélanger tous les ingrédients', 'Assaisonner', 'Servir frais avec toast'] },
            { nom: 'Carpaccio de courgettes', categorie: 'entree', temps: '15 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'courgettes', qte: 3, unite: ''}, {nom: 'parmesan', qte: 80, unite: 'g'}, {nom: 'pignons', qte: 40, unite: 'g'}, {nom: 'citron', qte: 1, unite: ''}, {nom: 'huile d\'olive', qte: 4, unite: 'c. à soupe'}], cuisson: { appareil: 'Sans cuisson', intensite: '-', duree: '-' }, etapes: ['Trancher finement les courgettes', 'Disposer en rosace', 'Ajouter copeaux de parmesan', 'Parsemer de pignons', 'Assaisonner citron et huile'] },
            { nom: 'Melon au jambon', categorie: 'entree', temps: '10 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'melon', qte: 2, unite: ''}, {nom: 'jambon cru', qte: 8, unite: 'tranches'}, {nom: 'figues', qte: 4, unite: ''}, {nom: 'menthe', qte: 8, unite: 'feuilles'}], cuisson: { appareil: 'Sans cuisson', intensite: '-', duree: '-' }, etapes: ['Couper le melon en tranches', 'Enrouler de jambon', 'Ajouter des figues', 'Décorer de menthe'] },

            // PLATS
            { nom: 'Ratatouille', categorie: 'plat', temps: '1h', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'courgettes', qte: 3, unite: ''}, {nom: 'aubergines', qte: 2, unite: ''}, {nom: 'tomates', qte: 5, unite: ''}, {nom: 'poivrons', qte: 2, unite: ''}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'ail', qte: 3, unite: 'gousses'}, {nom: 'herbes de Provence', qte: 2, unite: 'c. à café'}], cuisson: { appareil: 'Poêle + Cocotte', intensite: 'Feu moyen puis doux', duree: '15 min poêle + 30 min cocotte' }, etapes: ['Couper tous les légumes', 'Faire revenir séparément', 'Réunir dans une cocotte', 'Ajouter ail et herbes', 'Mijoter 30 min'] },
            { nom: 'Tian provençal', categorie: 'plat', temps: '1h', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'tomates', qte: 4, unite: ''}, {nom: 'courgettes', qte: 3, unite: ''}, {nom: 'aubergines', qte: 2, unite: ''}, {nom: 'oignon', qte: 2, unite: ''}, {nom: 'thym', qte: 4, unite: 'branches'}, {nom: 'huile d\'olive', qte: 4, unite: 'c. à soupe'}], cuisson: { appareil: 'Four', intensite: '180°C', duree: '45 min' }, etapes: ['Trancher tous les légumes', 'Disposer en rosace', 'Arroser d\'huile d\'olive', 'Parsemer de thym', 'Cuire 45 min à 180°C'] },
            { nom: 'Courgettes farcies', categorie: 'plat', temps: '50 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'courgettes', qte: 4, unite: ''}, {nom: 'viande hachée', qte: 400, unite: 'g'}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'tomate', qte: 2, unite: ''}, {nom: 'riz', qte: 100, unite: 'g'}, {nom: 'herbes de Provence', qte: 1, unite: 'c. à café'}], cuisson: { appareil: 'Poêle + Four', intensite: '180°C', duree: '10 min poêle + 40 min four' }, etapes: ['Évider les courgettes', 'Préparer la farce', 'Remplir les courgettes', 'Disposer dans un plat', 'Cuire 40 min à 180°C'] },
            { nom: 'Poivrons farcis', categorie: 'plat', temps: '1h', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'poivrons', qte: 4, unite: ''}, {nom: 'riz', qte: 150, unite: 'g'}, {nom: 'viande hachée', qte: 400, unite: 'g'}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'tomate', qte: 2, unite: ''}], cuisson: { appareil: 'Poêle + Four', intensite: '180°C', duree: '15 min poêle + 45 min four' }, etapes: ['Évider les poivrons', 'Cuire le riz', 'Préparer la farce', 'Farcir les poivrons', 'Cuire 45 min à 180°C'] },
            { nom: 'Aubergines à la parmigiana', categorie: 'plat', temps: '1h', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'aubergines', qte: 3, unite: ''}, {nom: 'sauce tomate', qte: 50, unite: 'cl'}, {nom: 'mozzarella', qte: 250, unite: 'g'}, {nom: 'parmesan', qte: 80, unite: 'g'}, {nom: 'basilic', qte: 1, unite: 'bouquet'}], cuisson: { appareil: 'Poêle/Gril + Four', intensite: 'Feu vif puis 180°C', duree: '15 min gril + 30 min four' }, etapes: ['Trancher et griller les aubergines', 'Alterner aubergines, sauce, fromage', 'Répéter les couches', 'Gratiner 30 min', 'Parsemer de basilic'] },
            { nom: 'Sardines grillées', categorie: 'plat', temps: '15 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'sardines', qte: 12, unite: ''}, {nom: 'huile d\'olive', qte: 3, unite: 'c. à soupe'}, {nom: 'citron', qte: 2, unite: ''}, {nom: 'persil', qte: 1, unite: 'bouquet'}, {nom: 'ail', qte: 2, unite: 'gousses'}], cuisson: { appareil: 'Barbecue ou Gril', intensite: 'Feu vif', duree: '6 min (3 min/face)' }, etapes: ['Écailler les sardines', 'Badigeonner d\'huile', 'Griller 3 min par face', 'Arroser de citron', 'Parsemer de persillade'] },
            { nom: 'Thon mi-cuit', categorie: 'plat', temps: '15 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'thon', qte: 600, unite: 'g'}, {nom: 'sésame', qte: 50, unite: 'g'}, {nom: 'sauce soja', qte: 4, unite: 'c. à soupe'}, {nom: 'gingembre', qte: 20, unite: 'g'}, {nom: 'wasabi', qte: 2, unite: 'c. à café'}], cuisson: { appareil: 'Poêle', intensite: 'Feu très vif', duree: '2 min (1 min/face)' }, etapes: ['Enrober le thon de sésame', 'Saisir 1 min par face', 'Trancher finement', 'Servir avec sauce soja', 'Accompagner de wasabi'] },
            { nom: 'Brochettes de poulet marinées', categorie: 'plat', temps: '30 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'poulet', qte: 600, unite: 'g'}, {nom: 'poivrons', qte: 2, unite: ''}, {nom: 'oignons', qte: 2, unite: ''}, {nom: 'huile d\'olive', qte: 3, unite: 'c. à soupe'}, {nom: 'épices', qte: 2, unite: 'c. à café'}], cuisson: { appareil: 'Barbecue ou Plancha', intensite: 'Feu moyen-vif', duree: '12-15 min' }, etapes: ['Mariner le poulet', 'Couper les légumes', 'Assembler les brochettes', 'Griller au barbecue', 'Servir avec riz'] },
            { nom: 'Gambas à l\'ail', categorie: 'plat', temps: '15 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'gambas', qte: 20, unite: ''}, {nom: 'ail', qte: 4, unite: 'gousses'}, {nom: 'persil', qte: 1, unite: 'bouquet'}, {nom: 'huile d\'olive', qte: 4, unite: 'c. à soupe'}, {nom: 'piment', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Poêle', intensite: 'Feu vif', duree: '3-4 min' }, etapes: ['Chauffer l\'huile', 'Faire sauter l\'ail', 'Ajouter les gambas', 'Cuire 3 min', 'Parsemer de persil'] },
            { nom: 'Calamars à la plancha', categorie: 'plat', temps: '15 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'calamars', qte: 600, unite: 'g'}, {nom: 'ail', qte: 3, unite: 'gousses'}, {nom: 'persil', qte: 1, unite: 'bouquet'}, {nom: 'citron', qte: 2, unite: ''}, {nom: 'piment', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Plancha ou Poêle', intensite: 'Feu très vif', duree: '3-4 min' }, etapes: ['Nettoyer les calamars', 'Saisir à feu vif', 'Ajouter ail et piment', 'Arroser de citron', 'Servir immédiatement'] },

            // SALADES
            { nom: 'Salade de pâtes', categorie: 'plat', temps: '25 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'pâtes', qte: 350, unite: 'g'}, {nom: 'tomates', qte: 4, unite: ''}, {nom: 'mozzarella', qte: 200, unite: 'g'}, {nom: 'basilic', qte: 1, unite: 'bouquet'}, {nom: 'olives noires', qte: 80, unite: 'g'}], cuisson: { appareil: 'Casserole', intensite: 'Eau bouillante', duree: '10 min (pâtes)' }, etapes: ['Cuire les pâtes al dente', 'Refroidir sous l\'eau', 'Couper tomates et mozzarella', 'Mélanger tous les ingrédients', 'Assaisonner'] },
            { nom: 'Taboulé', categorie: 'plat', temps: '20 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'boulgour', qte: 250, unite: 'g'}, {nom: 'tomates', qte: 4, unite: ''}, {nom: 'concombre', qte: 1, unite: ''}, {nom: 'menthe', qte: 1, unite: 'bouquet'}, {nom: 'persil', qte: 1, unite: 'bouquet'}, {nom: 'citron', qte: 2, unite: ''}], cuisson: { appareil: 'Sans cuisson', intensite: '-', duree: '15 min repos (boulgour)' }, etapes: ['Faire gonfler le boulgour', 'Couper les légumes en dés', 'Hacher les herbes', 'Mélanger le tout', 'Assaisonner au citron'] },
            { nom: 'Salade grecque', categorie: 'entree', temps: '15 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'tomates', qte: 4, unite: ''}, {nom: 'concombre', qte: 1, unite: ''}, {nom: 'feta', qte: 200, unite: 'g'}, {nom: 'olives noires', qte: 100, unite: 'g'}, {nom: 'oignon rouge', qte: 1, unite: ''}], cuisson: { appareil: 'Sans cuisson', intensite: '-', duree: '-' }, etapes: ['Couper les légumes', 'Émietter la feta', 'Ajouter les olives', 'Assaisonner', 'Servir frais'] },

            // DESSERTS
            { nom: 'Tarte aux abricots', categorie: 'dessert', temps: '45 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'abricots', qte: 12, unite: ''}, {nom: 'pâte sablée', qte: 1, unite: ''}, {nom: 'crème d\'amandes', qte: 150, unite: 'g'}, {nom: 'sucre', qte: 30, unite: 'g'}], cuisson: { appareil: 'Four', intensite: '180°C', duree: '35 min' }, etapes: ['Étaler la pâte', 'Garnir de crème d\'amandes', 'Disposer les abricots', 'Saupoudrer de sucre', 'Cuire 35 min à 180°C'] },
            { nom: 'Clafoutis aux cerises', categorie: 'dessert', temps: '45 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'cerises', qte: 500, unite: 'g'}, {nom: 'œufs', qte: 3, unite: ''}, {nom: 'farine', qte: 80, unite: 'g'}, {nom: 'lait', qte: 25, unite: 'cl'}, {nom: 'sucre', qte: 80, unite: 'g'}], cuisson: { appareil: 'Four', intensite: '180°C', duree: '35 min' }, etapes: ['Dénoyauter les cerises', 'Préparer l\'appareil', 'Disposer les cerises', 'Verser l\'appareil', 'Cuire 35 min à 180°C'] },
            { nom: 'Salade de fruits d\'été', categorie: 'dessert', temps: '15 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'pêches', qte: 3, unite: ''}, {nom: 'abricots', qte: 4, unite: ''}, {nom: 'framboises', qte: 125, unite: 'g'}, {nom: 'melon', qte: 1, unite: ''}, {nom: 'menthe', qte: 8, unite: 'feuilles'}], cuisson: { appareil: 'Sans cuisson', intensite: '-', duree: '30 min au frais' }, etapes: ['Couper les fruits', 'Mélanger délicatement', 'Ajouter un peu de sucre', 'Réfrigérer', 'Décorer de menthe'] },
            { nom: 'Sorbet au melon', categorie: 'dessert', temps: '20 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'melon', qte: 2, unite: ''}, {nom: 'sucre', qte: 100, unite: 'g'}, {nom: 'citron', qte: 1, unite: ''}, {nom: 'eau', qte: 10, unite: 'cl'}], cuisson: { appareil: 'Sorbetière ou Congélateur', intensite: '-', duree: '3-4h congélation' }, etapes: ['Mixer le melon', 'Ajouter sirop et citron', 'Turbiner ou congeler', 'Remuer régulièrement', 'Servir en boules'] },
            { nom: 'Panna cotta aux fruits rouges', categorie: 'dessert', temps: '20 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'crème liquide', qte: 50, unite: 'cl'}, {nom: 'sucre', qte: 60, unite: 'g'}, {nom: 'gélatine', qte: 3, unite: 'feuilles'}, {nom: 'vanille', qte: 1, unite: 'gousse'}, {nom: 'fruits rouges', qte: 200, unite: 'g'}], cuisson: { appareil: 'Casserole', intensite: 'Feu doux', duree: '5 min + 4h au frais' }, etapes: ['Chauffer crème et sucre', 'Ajouter gélatine ramollie', 'Verser dans des verrines', 'Réfrigérer 4h', 'Servir avec fruits'] },
            { nom: 'Tarte aux figues', categorie: 'dessert', temps: '40 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'figues', qte: 8, unite: ''}, {nom: 'pâte sablée', qte: 1, unite: ''}, {nom: 'crème pâtissière', qte: 200, unite: 'g'}, {nom: 'miel', qte: 3, unite: 'c. à soupe'}], cuisson: { appareil: 'Four', intensite: '180°C', duree: '20 min (pâte) + 5 min (finition)' }, etapes: ['Cuire la pâte à blanc', 'Garnir de crème', 'Disposer les figues', 'Arroser de miel', 'Passer au four 5 min'] }
        ],

        automne: [
// SOUPES
    { nom: 'Velouté de potimarron', categorie: 'soupe', temps: '35 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'potimarron', qte: 800, unite: 'g'}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'muscade', qte: 1, unite: 'pincée'}, {nom: 'noisettes', qte: 30, unite: 'g'}], cuisson: { appareil: 'Casserole', intensite: 'Feu moyen puis doux', duree: '25 min' }, etapes: ['Couper le potimarron', 'Faire revenir avec l\'oignon', 'Cuire 20 min dans le bouillon', 'Mixer finement', 'Servir avec noisettes'] },
    { nom: 'Velouté de champignons', categorie: 'soupe', temps: '30 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'champignons', qte: 400, unite: 'g'}, {nom: 'échalotes', qte: 2, unite: ''}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'persil', qte: 1, unite: 'bouquet'}, {nom: 'bouillon', qte: 75, unite: 'cl'}], cuisson: { appareil: 'Casserole', intensite: 'Feu moyen', duree: '20 min' }, etapes: ['Émincer les champignons', 'Faire revenir avec échalotes', 'Ajouter le bouillon', 'Cuire 15 min et mixer', 'Finir à la crème'] },
    { nom: 'Soupe de châtaignes', categorie: 'soupe', temps: '50 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'châtaignes', qte: 500, unite: 'g'}, {nom: 'céleri branche', qte: 2, unite: ''}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'lardons', qte: 100, unite: 'g'}], cuisson: { appareil: 'Casserole + Poêle', intensite: 'Feu moyen', duree: '35 min' }, etapes: ['Cuire les châtaignes', 'Faire revenir les légumes', 'Mixer avec le bouillon', 'Ajouter la crème', 'Garnir de lardons'] },
    { nom: 'Soupe au potiron', categorie: 'soupe', temps: '40 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'potiron', qte: 800, unite: 'g'}, {nom: 'pommes de terre', qte: 2, unite: ''}, {nom: 'oignon', qte: 1, unite: ''}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'curry', qte: 1, unite: 'c. à café'}], cuisson: { appareil: 'Casserole', intensite: 'Feu doux', duree: '30 min' }, etapes: ['Couper les légumes', 'Faire revenir', 'Cuire dans le bouillon', 'Mixer et ajouter curry', 'Servir avec crème'] },

    // ENTRÉES
    { nom: 'Salade de lentilles', categorie: 'entree', temps: '30 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'lentilles vertes', qte: 250, unite: 'g'}, {nom: 'échalotes', qte: 2, unite: ''}, {nom: 'moutarde', qte: 1, unite: 'c. à soupe'}, {nom: 'vinaigre de vin', qte: 2, unite: 'c. à soupe'}, {nom: 'persil', qte: 1, unite: 'bouquet'}], cuisson: { appareil: 'Casserole', intensite: 'Feu moyen', duree: '20-25 min' }, etapes: ['Cuire les lentilles', 'Émincer les échalotes', 'Préparer la vinaigrette', 'Mélanger tiède', 'Parsemer de persil'] },
    { nom: 'Salade de champignons crus', categorie: 'entree', temps: '15 min', difficulte: 'Très facile', personnes: 4, ingredients: [{nom: 'champignons de Paris', qte: 300, unite: 'g'}, {nom: 'parmesan', qte: 60, unite: 'g'}, {nom: 'citron', qte: 1, unite: ''}, {nom: 'huile d\'olive', qte: 3, unite: 'c. à soupe'}, {nom: 'roquette', qte: 80, unite: 'g'}], cuisson: { appareil: 'Sans cuisson', intensite: '-', duree: '-' }, etapes: ['Émincer les champignons', 'Arroser de citron', 'Ajouter copeaux de parmesan', 'Assaisonner', 'Servir sur roquette'] },
    { nom: 'Œufs en meurette', categorie: 'entree', temps: '30 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'œufs', qte: 4, unite: ''}, {nom: 'vin rouge', qte: 50, unite: 'cl'}, {nom: 'lardons', qte: 100, unite: 'g'}, {nom: 'oignons', qte: 2, unite: ''}, {nom: 'champignons', qte: 150, unite: 'g'}], cuisson: { appareil: 'Casserole + Poêle', intensite: 'Feu moyen', duree: '20 min' }, etapes: ['Préparer la sauce au vin', 'Faire revenir lardons et champignons', 'Pocher les œufs dans la sauce', 'Servir sur croûtons'] },
    { nom: 'Tartare de champignons', categorie: 'entree', temps: '15 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'champignons de Paris', qte: 400, unite: 'g'}, {nom: 'échalote', qte: 1, unite: ''}, {nom: 'persil', qte: 1, unite: 'bouquet'}, {nom: 'huile de noisette', qte: 2, unite: 'c. à soupe'}, {nom: 'citron', qte: 1, unite: ''}], cuisson: { appareil: 'Sans cuisson', intensite: '-', duree: '-' }, etapes: ['Émincer finement les champignons', 'Ajouter échalote et persil', 'Assaisonner au citron', 'Arroser d\'huile de noisette'] },

    // PLATS
    { nom: 'Risotto aux champignons', categorie: 'plat', temps: '40 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'riz arborio', qte: 320, unite: 'g'}, {nom: 'champignons', qte: 300, unite: 'g'}, {nom: 'parmesan', qte: 80, unite: 'g'}, {nom: 'bouillon', qte: 1, unite: 'L'}, {nom: 'vin blanc', qte: 15, unite: 'cl'}, {nom: 'échalotes', qte: 2, unite: ''}], cuisson: { appareil: 'Sauteuse', intensite: 'Feu moyen', duree: '25 min' }, etapes: ['Faire sauter les champignons', 'Nacrer le riz', 'Déglacer au vin', 'Ajouter bouillon progressivement', 'Finir avec parmesan'] },
    { nom: 'Magret de canard aux figues', categorie: 'plat', temps: '30 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'magret de canard', qte: 2, unite: ''}, {nom: 'figues', qte: 8, unite: ''}, {nom: 'miel', qte: 2, unite: 'c. à soupe'}, {nom: 'vinaigre balsamique', qte: 3, unite: 'c. à soupe'}, {nom: 'thym', qte: 3, unite: ''}], cuisson: { appareil: 'Poêle', intensite: 'Feu moyen puis doux', duree: '15 min' }, etapes: ['Inciser le gras du magret', 'Cuire côté gras 10 min', 'Retourner et cuire 5 min', 'Préparer sauce aux figues', 'Trancher et napper'] },
    { nom: 'Bœuf bourguignon', categorie: 'plat', temps: '2h30', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'bœuf (paleron ou macreuse)', qte: 800, unite: 'g'}, {nom: 'vin rouge', qte: 75, unite: 'cl'}, {nom: 'carottes', qte: 4, unite: ''}, {nom: 'oignons', qte: 2, unite: ''}, {nom: 'champignons', qte: 200, unite: 'g'}, {nom: 'lardons', qte: 150, unite: 'g'}], cuisson: { appareil: 'Cocotte', intensite: 'Feu doux', duree: '2h' }, etapes: ['Faire mariner la viande', 'Faire dorer les morceaux', 'Ajouter légumes et vin', 'Mijoter 2h', 'Ajouter champignons'] },
    { nom: 'Civet de sanglier', categorie: 'plat', temps: '3h', difficulte: 'Difficile', personnes: 4, ingredients: [{nom: 'sanglier (épaule)', qte: 1, unite: 'kg'}, {nom: 'vin rouge', qte: 75, unite: 'cl'}, {nom: 'carottes', qte: 3, unite: ''}, {nom: 'oignons', qte: 2, unite: ''}, {nom: 'lardons', qte: 150, unite: 'g'}, {nom: 'champignons', qte: 200, unite: 'g'}], cuisson: { appareil: 'Cocotte', intensite: 'Feu très doux', duree: '2h30' }, etapes: ['Mariner 24h dans le vin', 'Faire dorer la viande', 'Ajouter la marinade', 'Mijoter 2h30', 'Lier la sauce'] },
    { nom: 'Faisan aux raisins', categorie: 'plat', temps: '1h30', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'faisan', qte: 1, unite: ''}, {nom: 'raisins blancs', qte: 300, unite: 'g'}, {nom: 'cognac', qte: 5, unite: 'cl'}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'oignons', qte: 2, unite: ''}], cuisson: { appareil: 'Cocotte + Four', intensite: '180°C', duree: '1h' }, etapes: ['Faire dorer le faisan', 'Flamber au cognac', 'Ajouter les raisins', 'Cuire au four 1h', 'Finir à la crème'] },
    { nom: 'Poulet aux cèpes', categorie: 'plat', temps: '1h', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'poulet (cuisses ou morceaux)', qte: 1, unite: 'kg'}, {nom: 'cèpes', qte: 300, unite: 'g'}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'ail', qte: 3, unite: 'gousses'}, {nom: 'persil', qte: 1, unite: 'bouquet'}], cuisson: { appareil: 'Cocotte', intensite: 'Feu moyen puis doux', duree: '45 min' }, etapes: ['Faire dorer le poulet', 'Faire sauter les cèpes', 'Réunir et cuire 40 min', 'Ajouter la crème', 'Parsemer de persil'] },
    { nom: 'Gratin de courge', categorie: 'plat', temps: '50 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'courge', qte: 800, unite: 'g'}, {nom: 'crème fraîche', qte: 20, unite: 'cl'}, {nom: 'gruyère râpé', qte: 100, unite: 'g'}, {nom: 'ail', qte: 2, unite: 'gousses'}, {nom: 'muscade', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Casserole + Four', intensite: '200°C', duree: '15 min eau + 20 min four' }, etapes: ['Cuire la courge', 'Écraser grossièrement', 'Ajouter crème et ail', 'Parsemer de fromage', 'Gratiner 20 min'] },
    { nom: 'Saint-Jacques poêlées', categorie: 'plat', temps: '15 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'noix de Saint-Jacques', qte: 12, unite: ''}, {nom: 'beurre', qte: 40, unite: 'g'}, {nom: 'citron', qte: 1, unite: ''}, {nom: 'ciboulette', qte: 1, unite: 'bouquet'}], cuisson: { appareil: 'Poêle', intensite: 'Feu vif', duree: '4 min (2 min/face)' }, etapes: ['Éponger les noix', 'Saisir au beurre 2 min/face', 'Déglacer au citron', 'Parsemer de ciboulette'] },
    { nom: 'Choucroute de la mer', categorie: 'plat', temps: '1h', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'choucroute crue', qte: 600, unite: 'g'}, {nom: 'saumon', qte: 300, unite: 'g'}, {nom: 'cabillaud', qte: 300, unite: 'g'}, {nom: 'crevettes', qte: 200, unite: 'g'}, {nom: 'vin blanc', qte: 25, unite: 'cl'}], cuisson: { appareil: 'Cocotte + Casserole', intensite: 'Feu doux', duree: '40 min choucroute + 10 min poissons' }, etapes: ['Cuire la choucroute au vin', 'Pocher les poissons', 'Disposer sur la choucroute', 'Ajouter les crevettes', 'Servir chaud'] },

    // ACCOMPAGNEMENTS
    { nom: 'Poêlée de champignons', categorie: 'accompagnement', temps: '20 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'champignons variés', qte: 500, unite: 'g'}, {nom: 'ail', qte: 2, unite: 'gousses'}, {nom: 'persil', qte: 1, unite: 'bouquet'}, {nom: 'beurre', qte: 30, unite: 'g'}, {nom: 'échalotes', qte: 2, unite: ''}], cuisson: { appareil: 'Poêle', intensite: 'Feu vif puis moyen', duree: '10-12 min' }, etapes: ['Nettoyer les champignons', 'Faire sauter au beurre', 'Ajouter ail et échalotes', 'Cuire 10 min', 'Parsemer de persil'] },
    { nom: 'Purée de potimarron', categorie: 'accompagnement', temps: '30 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'potimarron', qte: 800, unite: 'g'}, {nom: 'beurre', qte: 30, unite: 'g'}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'muscade', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Casserole', intensite: 'Eau bouillante', duree: '20 min' }, etapes: ['Cuire le potimarron', 'Écraser à la fourchette', 'Ajouter beurre et crème', 'Assaisonner de muscade'] },
    { nom: 'Gratin de brocolis', categorie: 'accompagnement', temps: '35 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'brocolis', qte: 600, unite: 'g'}, {nom: 'béchamel', qte: 30, unite: 'cl'}, {nom: 'gruyère râpé', qte: 80, unite: 'g'}, {nom: 'muscade', qte: 1, unite: 'pincée'}], cuisson: { appareil: 'Casserole + Four', intensite: '200°C', duree: '10 min eau + 15 min four' }, etapes: ['Cuire les brocolis al dente', 'Préparer la béchamel', 'Disposer dans un plat', 'Napper et gratiner 15 min'] },
    { nom: 'Spätzle', categorie: 'accompagnement', temps: '30 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'farine', qte: 300, unite: 'g'}, {nom: 'œufs', qte: 4, unite: ''}, {nom: 'lait', qte: 10, unite: 'cl'}, {nom: 'muscade', qte: 1, unite: 'pincée'}, {nom: 'beurre', qte: 40, unite: 'g'}], cuisson: { appareil: 'Casserole + Poêle', intensite: 'Eau bouillante puis feu moyen', duree: '3 min eau + 5 min poêle' }, etapes: ['Mélanger farine, œufs, lait', 'Passer au presse-spätzle', 'Cuire dans l\'eau bouillante', 'Égoutter et sauter au beurre'] },
    { nom: 'Chou braisé aux marrons', categorie: 'accompagnement', temps: '45 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'chou vert', qte: 1, unite: ''}, {nom: 'marrons cuits', qte: 200, unite: 'g'}, {nom: 'lardons', qte: 100, unite: 'g'}, {nom: 'bouillon', qte: 25, unite: 'cl'}, {nom: 'thym', qte: 3, unite: ''}], cuisson: { appareil: 'Cocotte', intensite: 'Feu doux', duree: '35 min' }, etapes: ['Émincer le chou', 'Faire revenir les lardons', 'Ajouter chou et marrons', 'Mouiller de bouillon', 'Braiser 35 min'] },

    // DESSERTS
    { nom: 'Tarte aux pommes', categorie: 'dessert', temps: '50 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'pommes', qte: 5, unite: ''}, {nom: 'pâte feuilletée', qte: 1, unite: ''}, {nom: 'compote de pommes', qte: 200, unite: 'g'}, {nom: 'beurre', qte: 20, unite: 'g'}, {nom: 'sucre', qte: 40, unite: 'g'}], cuisson: { appareil: 'Four', intensite: '180°C', duree: '35 min' }, etapes: ['Étaler la compote', 'Disposer les pommes en rosace', 'Parsemer de beurre', 'Saupoudrer de sucre', 'Cuire 35 min à 180°C'] },
    { nom: 'Crumble aux poires', categorie: 'dessert', temps: '45 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'poires', qte: 5, unite: ''}, {nom: 'farine', qte: 120, unite: 'g'}, {nom: 'beurre', qte: 80, unite: 'g'}, {nom: 'sucre', qte: 80, unite: 'g'}, {nom: 'noisettes', qte: 50, unite: 'g'}], cuisson: { appareil: 'Four', intensite: '180°C', duree: '30 min' }, etapes: ['Couper les poires', 'Sabler le crumble', 'Ajouter noisettes concassées', 'Disposer sur les poires', 'Cuire 30 min à 180°C'] },
    { nom: 'Gâteau aux châtaignes', categorie: 'dessert', temps: '1h', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'crème de marrons', qte: 250, unite: 'g'}, {nom: 'chocolat noir', qte: 150, unite: 'g'}, {nom: 'œufs', qte: 4, unite: ''}, {nom: 'beurre', qte: 60, unite: 'g'}], cuisson: { appareil: 'Four', intensite: '170°C', duree: '40 min' }, etapes: ['Faire fondre le chocolat', 'Mélanger avec crème de marrons', 'Ajouter jaunes et beurre', 'Incorporer blancs en neige', 'Cuire 40 min à 170°C'] },
    { nom: 'Tarte aux noix', categorie: 'dessert', temps: '50 min', difficulte: 'Moyen', personnes: 4, ingredients: [{nom: 'cerneaux de noix', qte: 200, unite: 'g'}, {nom: 'pâte brisée', qte: 1, unite: ''}, {nom: 'miel', qte: 4, unite: 'c. à soupe'}, {nom: 'crème fraîche', qte: 15, unite: 'cl'}, {nom: 'œufs', qte: 3, unite: ''}], cuisson: { appareil: 'Four', intensite: '170°C', duree: '40 min' }, etapes: ['Foncer un moule', 'Mélanger noix, miel, crème, œufs', 'Verser sur la pâte', 'Cuire 40 min à 170°C'] },
    { nom: 'Compote de coings', categorie: 'dessert', temps: '1h', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'coings', qte: 4, unite: ''}, {nom: 'sucre', qte: 120, unite: 'g'}, {nom: 'vanille (gousse)', qte: 1, unite: ''}, {nom: 'citron', qte: 1, unite: ''}], cuisson: { appareil: 'Casserole', intensite: 'Feu très doux', duree: '45-50 min' }, etapes: ['Éplucher les coings', 'Cuire longuement à feu doux', 'Ajouter sucre et vanille', 'Mixer ou écraser'] },
    { nom: 'Poires Belle-Hélène', categorie: 'dessert', temps: '30 min', difficulte: 'Facile', personnes: 4, ingredients: [{nom: 'poires', qte: 4, unite: ''}, {nom: 'chocolat noir', qte: 150, unite: 'g'}, {nom: 'glace vanille', qte: 4, unite: 'boules'}, {nom: 'amandes effilées', qte: 30, unite: 'g'}], cuisson: { appareil: 'Casserole', intensite: 'Feu doux (frémissement)', duree: '20 min' }, etapes: ['Pocher les poires', 'Préparer sauce chocolat', 'Dresser avec glace', 'Napper de chocolat', 'Parsemer d\'amandes'] }
        ]
    };

    // ==================== GÉNÉRATION DE MENUS ALÉATOIRES ====================
    var jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    var catsMidi = ['plat'];
    var catsSoir = ['soupe', 'entree', 'plat'];

    function getWeekNumber() {
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 1);
        var diff = now - start;
        var oneWeek = 604800000;
        return Math.floor(diff / oneWeek);
    }

    function seededRandom(seed) {
        var s = seed;
        return function() {
            s = (s * 1664525 + 1013904223) & 0xFFFFFFFF;
            return (s >>> 0) / 0xFFFFFFFF;
        };
    }

    function shuffleWithSeed(arr, rng) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(rng() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a;
    }

    function generateWeekMenu(season) {
        var week = getWeekNumber();
        var seasonIndex = ['hiver', 'printemps', 'ete', 'automne'].indexOf(season);
        var seed = week * 100 + seasonIndex + 2026;
        var rng = seededRandom(seed);

        var all = recettes[season];
        var plats = all.filter(function(r) { return r.categorie === 'plat'; });
        var legers = all.filter(function(r) { return r.categorie === 'soupe' || r.categorie === 'entree'; });

        var shuffledPlats = shuffleWithSeed(plats, rng);
        var shuffledLegers = shuffleWithSeed(legers, rng);

        var menu = [];
        var usedNames = {};

        for (var i = 0; i < 7; i++) {
            var midiRecette = shuffledPlats[i % shuffledPlats.length];
            var soirRecette = shuffledLegers[i % shuffledLegers.length];

            menu.push({
                jour: jours[i],
                midi: midiRecette.nom,
                soir: soirRecette.nom
            });
        }

        return menu;
    }

    var menus = {};
    ['hiver', 'printemps', 'ete', 'automne'].forEach(function(s) {
        menus[s] = generateWeekMenu(s);
    });

    // ==================== ÉTAT ====================
    let currentSeason = 'hiver';
    let selectedIngredients = [];

    // ==================== FONCTIONS ====================

    function getAllIngredients(season) {
        var p = produits[season];
        return [].concat(p.legumes, p.fruits, p.poissons, p.viandes);
    }

    function renderIngredientsList(season) {
        var container = document.getElementById('ingredientsList');
        while (container.firstChild) container.removeChild(container.firstChild);

        var ingredients = getAllIngredients(season).slice(0, 30);
        ingredients.forEach(function(ing) {
            var tag = document.createElement('button');
            tag.className = 'ingredient-tag px-3 py-1 rounded-full text-sm border transition';
            if (selectedIngredients.indexOf(ing) >= 0) {
                tag.classList.add('bg-purple-600', 'text-white', 'border-purple-600');
            } else {
                tag.classList.add('bg-white', 'text-gray-700', 'border-gray-300', 'hover:border-purple-400');
            }
            tag.textContent = ing;
            tag.onclick = function() { toggleIngredient(ing); };
            container.appendChild(tag);
        });
    }

    function toggleIngredient(ing) {
        var idx = selectedIngredients.indexOf(ing);
        if (idx >= 0) {
            selectedIngredients.splice(idx, 1);
        } else {
            selectedIngredients.push(ing);
        }
        renderIngredientsList(currentSeason);
    }

    function findRecipesByIngredients() {
        if (selectedIngredients.length === 0) {
            alert('Sélectionne au moins un ingrédient');
            return;
        }

        var results = [];
        var allRecettes = recettes[currentSeason];

        allRecettes.forEach(function(r) {
            var matches = 0;
            selectedIngredients.forEach(function(sel) {
                r.ingredients.forEach(function(ing) {
                    var ingName = typeof ing === 'object' && ing.nom ? ing.nom : ing;
                    if (ingName.toLowerCase().indexOf(sel.toLowerCase()) >= 0) {
                        matches++;
                    }
                });
            });
            if (matches > 0) {
                results.push({ recette: r, score: matches });
            }
        });

        results.sort(function(a, b) { return b.score - a.score; });
        showResults(results.slice(0, 9));
    }

    function showResults(results) {
        var container = document.getElementById('resultsGrid');
        var wrapper = document.getElementById('generateResults');

        while (container.firstChild) container.removeChild(container.firstChild);

        if (results.length === 0) {
            var msg = document.createElement('p');
            msg.className = 'text-gray-500 col-span-3';
            msg.textContent = 'Aucune recette trouvée avec ces ingrédients.';
            container.appendChild(msg);
        } else {
            results.forEach(function(r) {
                container.appendChild(createRecetteCard(r.recette));
            });
        }

        wrapper.classList.remove('hidden');
    }

    function randomRecipe() {
        var all = recettes[currentSeason];
        var r = all[Math.floor(Math.random() * all.length)];
        showRecetteModal(r);
    }

    function getRecipeByName(name) {
        var found = null;
        ['hiver', 'printemps', 'ete', 'automne'].forEach(function(season) {
            recettes[season].forEach(function(r) {
                if (r.nom.toLowerCase() === name.toLowerCase()) {
                    found = r;
                }
            });
        });
        return found;
    }

    function parseTime(timeStr) {
        if (!timeStr) return 0;
        var total = 0;
        var hours = timeStr.match(/(\d+)\s*h/);
        var mins = timeStr.match(/(\d+)\s*min/);
        if (hours) total += parseInt(hours[1]) * 60;
        if (mins) total += parseInt(mins[1]);
        if (!hours && !mins) {
            var num = parseInt(timeStr);
            if (!isNaN(num)) total = num;
        }
        return total;
    }

    function formatTime(minutes) {
        if (minutes >= 60) {
            var h = Math.floor(minutes / 60);
            var m = minutes % 60;
            return m > 0 ? h + 'h' + (m < 10 ? '0' : '') + m : h + 'h';
        }
        return minutes + ' min';
    }

    function renderMenu(season) {
        var container = document.getElementById('menuContent');
        while (container.firstChild) container.removeChild(container.firstChild);

        var totalTime = 0;
        var recipeCount = 0;

        menus[season].forEach(function(jour) {
            var card = document.createElement('div');
            card.className = 'bg-white rounded-xl shadow-md p-4 card';

            var header = document.createElement('div');
            header.className = 'bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-sm inline-block mb-3';
            header.textContent = jour.jour;
            card.appendChild(header);

            // Midi
            var midiRecette = getRecipeByName(jour.midi);
            var midiTime = midiRecette ? midiRecette.temps : null;
            if (midiRecette) {
                totalTime += parseTime(midiTime);
                recipeCount++;
            }

            var midi = document.createElement('div');
            midi.className = 'mb-2';
            var midiLabel = document.createElement('span');
            midiLabel.className = 'text-xs text-gray-400';
            midiLabel.textContent = '🌞 Midi: ';
            midi.appendChild(midiLabel);
            var midiPlat = document.createElement('span');
            midiPlat.className = 'text-sm font-medium text-gray-800 cursor-pointer hover:text-green-600 hover:underline';
            midiPlat.textContent = jour.midi;
            midiPlat.onclick = function(e) {
                e.stopPropagation();
                openRecipeByName(jour.midi);
            };
            midi.appendChild(midiPlat);
            if (midiTime) {
                var midiTimeSpan = document.createElement('span');
                midiTimeSpan.className = 'text-xs text-gray-400 ml-2';
                midiTimeSpan.textContent = '⏱ ' + midiTime;
                midi.appendChild(midiTimeSpan);
            }
            card.appendChild(midi);

            // Soir
            var soirRecette = getRecipeByName(jour.soir);
            var soirTime = soirRecette ? soirRecette.temps : null;
            if (soirRecette) {
                totalTime += parseTime(soirTime);
                recipeCount++;
            }

            var soir = document.createElement('div');
            var soirLabel = document.createElement('span');
            soirLabel.className = 'text-xs text-gray-400';
            soirLabel.textContent = '🌙 Soir: ';
            soir.appendChild(soirLabel);
            var soirPlat = document.createElement('span');
            soirPlat.className = 'text-sm font-medium text-gray-800 cursor-pointer hover:text-green-600 hover:underline';
            soirPlat.textContent = jour.soir;
            soirPlat.onclick = function(e) {
                e.stopPropagation();
                openRecipeByName(jour.soir);
            };
            soir.appendChild(soirPlat);
            if (soirTime) {
                var soirTimeSpan = document.createElement('span');
                soirTimeSpan.className = 'text-xs text-gray-400 ml-2';
                soirTimeSpan.textContent = '⏱ ' + soirTime;
                soir.appendChild(soirTimeSpan);
            }
            card.appendChild(soir);

            container.appendChild(card);
        });

        // Afficher la moyenne
        var avgTime = recipeCount > 0 ? Math.round(totalTime / recipeCount) : 0;
        var statsDiv = document.createElement('div');
        statsDiv.className = 'col-span-full bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 text-center';

        var avgSpan = document.createElement('span');
        avgSpan.className = 'text-gray-600';
        var avgStrong = document.createElement('strong');
        avgStrong.textContent = '📊 Temps moyen par recette : ';
        avgSpan.appendChild(avgStrong);
        avgSpan.appendChild(document.createTextNode(formatTime(avgTime)));
        statsDiv.appendChild(avgSpan);

        container.appendChild(statsDiv);
    }

    function createRecetteCard(r) {
        var card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-md p-4 card cursor-pointer hover:shadow-lg';
        card.onclick = function() { showRecetteModal(r); };

        var title = document.createElement('h3');
        title.className = 'font-bold text-gray-800 mb-2 text-sm';
        title.textContent = r.nom;
        card.appendChild(title);

        var badges = document.createElement('div');
        badges.className = 'flex gap-2 flex-wrap mb-2';

        var catColors = {
            entree: 'bg-green-100 text-green-700',
            plat: 'bg-blue-100 text-blue-700',
            accompagnement: 'bg-yellow-100 text-yellow-700',
            soupe: 'bg-orange-100 text-orange-700',
            dessert: 'bg-pink-100 text-pink-700'
        };

        var catBadge = document.createElement('span');
        catBadge.className = 'px-2 py-0.5 rounded text-xs ' + (catColors[r.categorie] || 'bg-gray-100 text-gray-700');
        catBadge.textContent = r.categorie;
        badges.appendChild(catBadge);

        var tempsBadge = document.createElement('span');
        tempsBadge.className = 'px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600';
        tempsBadge.textContent = '⏱ ' + r.temps;
        badges.appendChild(tempsBadge);

        card.appendChild(badges);

        var ing = document.createElement('p');
        ing.className = 'text-gray-500 text-xs';
        var ingNames = r.ingredients.slice(0, 4).map(function(i) {
            return typeof i === 'object' && i.nom ? i.nom : i;
        });
        ing.textContent = ingNames.join(', ') + '...';
        card.appendChild(ing);

        return card;
    }

    function renderRecettes(season, filter) {
        var container = document.getElementById('recettesContent');
        while (container.firstChild) container.removeChild(container.firstChild);

        var list = recettes[season];
        if (filter) {
            list = list.filter(function(r) { return r.categorie === filter; });
        }

        document.getElementById('recetteCount').textContent = '(' + list.length + ' recettes)';

        list.forEach(function(r) {
            container.appendChild(createRecetteCard(r));
        });
    }

    function renderProduits(season) {
        var p = produits[season];

        ['legumes', 'fruits', 'poissons', 'viandes'].forEach(function(type) {
            var ul = document.getElementById(type);
            while (ul.firstChild) ul.removeChild(ul.firstChild);

            p[type].forEach(function(item) {
                var li = document.createElement('li');
                li.textContent = '• ' + item;
                ul.appendChild(li);
            });
        });
    }

    function showRecetteModal(r) {
        var modal = document.getElementById('recetteModal');
        var content = document.getElementById('modalContent');
        while (content.firstChild) content.removeChild(content.firstChild);

        // Close button
        var closeBtn = document.createElement('button');
        closeBtn.className = 'float-right text-gray-400 hover:text-gray-600 text-xl';
        closeBtn.textContent = '✕';
        closeBtn.onclick = function() { modal.classList.add('hidden'); };
        content.appendChild(closeBtn);

        // Title
        var title = document.createElement('h2');
        title.className = 'text-2xl font-bold text-gray-800 mb-4';
        title.textContent = r.nom;
        content.appendChild(title);

        // Badges
        var badges = document.createElement('div');
        badges.className = 'flex gap-2 mb-4';

        var catBadge = document.createElement('span');
        catBadge.className = 'bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm';
        catBadge.textContent = r.categorie;
        badges.appendChild(catBadge);

        var tempsBadge = document.createElement('span');
        tempsBadge.className = 'bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm';
        tempsBadge.textContent = '⏱ ' + r.temps;
        badges.appendChild(tempsBadge);

        var diffBadge = document.createElement('span');
        diffBadge.className = 'bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm';
        diffBadge.textContent = r.difficulte;
        badges.appendChild(diffBadge);

        content.appendChild(badges);

        // Cuisson
        if (r.cuisson && r.cuisson.appareil !== 'Sans cuisson') {
            var cuissonTitle = document.createElement('h3');
            cuissonTitle.className = 'font-bold text-gray-700 mb-2 mt-4';
            cuissonTitle.textContent = 'Cuisson';
            content.appendChild(cuissonTitle);

            var cuissonBox = document.createElement('div');
            cuissonBox.className = 'bg-orange-50 rounded-xl p-3 sm:p-4 mb-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-sm';

            var appareilDiv = document.createElement('div');
            var appareilLabel = document.createElement('span');
            appareilLabel.className = 'text-gray-500 block';
            appareilLabel.textContent = '🍳 Appareil';
            appareilDiv.appendChild(appareilLabel);
            var appareilVal = document.createElement('span');
            appareilVal.className = 'font-semibold text-gray-800';
            appareilVal.textContent = r.cuisson.appareil;
            appareilDiv.appendChild(appareilVal);
            cuissonBox.appendChild(appareilDiv);

            var intensiteDiv = document.createElement('div');
            var intensiteLabel = document.createElement('span');
            intensiteLabel.className = 'text-gray-500 block';
            intensiteLabel.textContent = '🔥 Intensité';
            intensiteDiv.appendChild(intensiteLabel);
            var intensiteVal = document.createElement('span');
            intensiteVal.className = 'font-semibold text-gray-800';
            intensiteVal.textContent = r.cuisson.intensite;
            intensiteDiv.appendChild(intensiteVal);
            cuissonBox.appendChild(intensiteDiv);

            var dureeDiv = document.createElement('div');
            var dureeLabel = document.createElement('span');
            dureeLabel.className = 'text-gray-500 block';
            dureeLabel.textContent = '⏱ Durée';
            dureeDiv.appendChild(dureeLabel);
            var dureeVal = document.createElement('span');
            dureeVal.className = 'font-semibold text-gray-800';
            dureeVal.textContent = r.cuisson.duree;
            dureeDiv.appendChild(dureeVal);
            cuissonBox.appendChild(dureeDiv);

            content.appendChild(cuissonBox);
        }

        // Nombre de personnes
        var persTitle = document.createElement('h3');
        persTitle.className = 'font-bold text-gray-700 mb-2 mt-4';
        persTitle.textContent = 'Nombre de personnes';
        content.appendChild(persTitle);

        var persBox = document.createElement('div');
        persBox.className = 'flex items-center gap-2 sm:gap-4 mb-4 bg-gray-50 rounded-xl p-3';

        var persLabel = document.createElement('span');
        persLabel.className = 'text-gray-600';
        persLabel.textContent = 'Personnes :';
        persBox.appendChild(persLabel);

        var persValue = document.createElement('span');
        persValue.className = 'text-2xl font-bold text-purple-600 w-8 text-center';
        persValue.id = 'persValue';
        persValue.textContent = '1';
        persBox.appendChild(persValue);

        var persSlider = document.createElement('input');
        persSlider.type = 'range';
        persSlider.min = '1';
        persSlider.max = '12';
        persSlider.value = '1';
        persSlider.className = 'flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600';
        persSlider.id = 'persSlider';
        persBox.appendChild(persSlider);

        content.appendChild(persBox);

        // Ingredients
        var ingTitle = document.createElement('h3');
        ingTitle.className = 'font-bold text-gray-700 mb-2 mt-4';
        ingTitle.textContent = 'Ingrédients';
        content.appendChild(ingTitle);

        var ingList = document.createElement('ul');
        ingList.className = 'list-disc list-inside mb-4 text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-1';
        ingList.id = 'ingredientsList-modal';

        var basePersons = r.personnes || 4;

        function renderIngredients(nbPersons) {
            while (ingList.firstChild) ingList.removeChild(ingList.firstChild);
            r.ingredients.forEach(function(ing) {
                var li = document.createElement('li');
                if (typeof ing === 'object' && ing.nom) {
                    var qty = ing.qte * nbPersons / basePersons;
                    var qtyText = '';
                    if (qty !== Math.floor(qty)) {
                        qtyText = qty.toFixed(1).replace('.0', '');
                    } else {
                        qtyText = qty.toString();
                    }
                    li.textContent = qtyText + ' ' + (ing.unite || '') + ' ' + ing.nom;
                } else {
                    li.textContent = ing;
                }
                ingList.appendChild(li);
            });
        }

        renderIngredients(1);

        persSlider.oninput = function() {
            persValue.textContent = this.value;
            renderIngredients(parseInt(this.value));
        };

        content.appendChild(ingList);

        // Steps
        var stepsTitle = document.createElement('h3');
        stepsTitle.className = 'font-bold text-gray-700 mb-2';
        stepsTitle.textContent = 'Préparation';
        content.appendChild(stepsTitle);

        var stepsList = document.createElement('ol');
        stepsList.className = 'list-decimal list-inside text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base';
        r.etapes.forEach(function(step) {
            var li = document.createElement('li');
            li.textContent = step;
            stepsList.appendChild(li);
        });
        content.appendChild(stepsList);

        modal.classList.remove('hidden');
    }

    function openRecipeByName(name) {
        var found = getRecipeByName(name);
        if (found) {
            showRecetteModal(found);
        } else {
            alert('Recette "' + name + '" non trouvée dans la base de données.');
        }
    }

    function updateSeason(season) {
        currentSeason = season;
        selectedIngredients = [];

        document.querySelectorAll('.season-btn').forEach(function(btn) {
            btn.classList.remove('active', 'bg-green-600', 'text-white');
            btn.classList.add('bg-white', 'text-gray-700');
        });

        var activeBtn = document.querySelector('[data-season="' + season + '"]');
        activeBtn.classList.add('active', 'bg-green-600', 'text-white');
        activeBtn.classList.remove('bg-white', 'text-gray-700');

        var seasonLabels = { hiver: 'Hiver', printemps: 'Printemps', ete: 'Été', automne: 'Automne' };
        document.querySelector('#menuSemaine .text-gray-500').textContent = '(' + seasonLabels[season] + ' - Semaine ' + getWeekNumber() + ')';

        renderIngredientsList(season);
        renderMenu(season);
        renderRecettes(season, '');
        renderProduits(season);

        document.getElementById('generateResults').classList.add('hidden');
        document.getElementById('filterCategorie').value = '';
    }

    function init() {
        // Season buttons
        document.querySelectorAll('.season-btn').forEach(function(btn) {
            btn.onclick = function() { updateSeason(btn.dataset.season); };
        });

        // Generate buttons
        document.getElementById('generateBtn').onclick = findRecipesByIngredients;
        document.getElementById('clearBtn').onclick = function() {
            selectedIngredients = [];
            renderIngredientsList(currentSeason);
            document.getElementById('generateResults').classList.add('hidden');
        };
        document.getElementById('randomBtn').onclick = randomRecipe;

        // Filter
        document.getElementById('filterCategorie').onchange = function() {
            renderRecettes(currentSeason, this.value);
        };

        // Modal close
        document.getElementById('recetteModal').onclick = function(e) {
            if (e.target.id === 'recetteModal') {
                this.classList.add('hidden');
            }
        };

        // Initial render
        updateSeason('hiver');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
