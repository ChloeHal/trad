import React from 'react';

type WordPair = [string, string];

const wordList: WordPair[] = [
  ['pomme', 'apple'],
  ['banane', 'banana'],
  ['chat', 'cat'],
  ['chien', 'dog'],
  ['maison', 'house'],
  ['voiture', 'car'],
  ['arbre', 'tree'],
  ['fleur', 'flower'],
  ['jardin', 'garden'],
  ['livre', 'book'],
  ['ordinateur', 'computer'],
  ['téléphone', 'phone'],
  ['musique', 'music'],
  ['film', 'movie'],
  ['jeu', 'game'],
  ['rue', 'street'],
  ['ville', 'city'],
  ['pays', 'country'],
  ['mer', 'sea'],
  ['rivière', 'river'],
  ['montagne', 'mountain'],
  ['ciel', 'sky'],
  ['soleil', 'sun'],
  ['lune', 'moon'],
  ['étoile', 'star'],
  ['nuage', 'cloud'],
  ['pluie', 'rain'],
  ['neige', 'snow'],
  ['vent', 'wind'],
  ['feu', 'fire'],
  ['herbe', 'grass'],
  ['terre', 'earth'],
  ['air', 'air'],
  ['nourriture', 'food'],
  ['eau', 'water'],
  ['lait', 'milk'],
  ['thé', 'tea'],
  ['café', 'coffee'],
  ['bière', 'beer'],
  ['vin', 'wine'],
  ['fromage', 'cheese'],
  ['pain', 'bread'],
  ['beurre', 'butter'],
  ['sucre', 'sugar'],
  ['sel', 'salt'],
  ['poivre', 'pepper'],
  ['oeuf', 'egg'],
  ['viande', 'meat'],
  ['poisson', 'fish'],
  ['légume', 'vegetable'],
  ['fruit', 'fruit'],
];

const WordList: React.FC = () => {
  return (
    <div>
      <h2>Liste de mots</h2>
      <ul>
        {wordList.map((pair, index) => (
          <li key={index}>
            <span>{pair[0]}</span> - <span>{pair[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
