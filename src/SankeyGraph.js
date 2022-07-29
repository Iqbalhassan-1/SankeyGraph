import React from "react";
import Chart from "react-google-charts";
export const data = [
  ["From", "To", "Value"],
  ["Industries énergétiques", "Production d'électricité", 60520],
  ["Industries énergétiques", "Production de produit pétroliers", 26764],
  ["Industries énergétiques", "Production de charbon de bois", 100572.0],
  ["Industries énergétiques", "Autre industries énergétiques", 8555],

  ["Industries manufacturières et de construction", "Charbon minéral", 2830],
  [
    "Industries manufacturières et de construction",
    "Produits pétroliers",
    4581,
  ],
  ["Industries manufacturières et de construction", "Gaz naturel", 13624.52],
  [
    "Industries manufacturières et de construction",
    "Biomasse, Biocarburant et déchets",
    1289,
  ],
  ["Industries manufacturières et de construction", "Charbon de bois", 5.39],

  ["Transport", "Aérien", 754],
  ["Transport", "Routier", 75696],
  ["Transport", "Ferroviaire", 616],
  ["Transport", "Navigation intérieure", 494],

  ["Autres secteurs", "Commercial/Institutionnel", 19130],
  ["Autres secteurs", "Résidentiel", 325043],
  ["Autres secteurs", "Agriculture / Foresterie/ Pêche", 367],

  ["Soutages maritimes internationaux", "Produits pétroliers", 1778],
  ["Soutages aériens internationaux", "Produits pétroliers", 1778],

  // ["Autres secteurs","	Commercial/Institutionnel", 19130],
  // ["Autres secteurs","Résidentiel",325043],
  // ["Autres secteurs","Agriculture / Foresterie/ Pêche",367],

  // ["Commercial/Institutionnel","Charbon minéral",1],
  // ["Commercial/Institutionnel","Pétrole brut",0],
  // ["Commercial/Institutionnel","Produits pétroliers",640],
  // ["Commercial/Institutionnel","Gaz naturel",0],
  // ["Commercial/Institutionnel","Biomasse, Biocarburant et déchets",14510],
  // ["Commercial/Institutionnel","Charbon de bois", 3978.47],

  // ["Résidentiel","Charbon minéral",  783 ],
  // ["Résidentiel","Pétrole brut",0],
  // ["Résidentiel","Produits pétroliers",11591],
  // ["Résidentiel","Gaz naturel",0],
  // ["Résidentiel","Biomasse, Biocarburant et déchets",273381],
  // ["Résidentiel","Charbon de bois",39286.39 ],

  // ["Agriculture / Foresterie/ Pêche","Charbon minéral",0],
  // ["Agriculture / Foresterie/ Pêche","Pétrole brut",0],
  // ["Agriculture / Foresterie/ Pêche","Produits pétroliers",367],
  // ["Agriculture / Foresterie/ Pêche","Gaz naturel",0],
  // ["Agriculture / Foresterie/ Pêche","Biomasse, Biocarburant et déchets",0],
  // ["Agriculture / Foresterie/ Pêche","Charbon de bois",0.5],

  // ["Transport","Aérien",754],
  // ["Transport","Routier",75696],
  // ["Transport","Ferroviaire",616],
  // ["Transport","Navigation intérieure",494],
  // ["Transport","Transports non spécifié",0],

  ["Production d'électricité", "Charbon minéral", 1082],
  ["Production d'électricité", "Pétrole brut", 403],
  ["Production d'électricité", "Produits pétroliers", 29100],
  ["Production d'électricité", "Gaz naturel", 28674],
  ["Production d'électricité", "Biomasse, Biocarburant et déchets", 1260],
  ["Production d'électricité", "Charbon de bois", 0.5],

  ["Production de produit pétroliers", "Charbon minéral", 0],
  ["Production de produit pétroliers", "Pétrole brut", 26763.34],
  ["Production de produit pétroliers", "Produits pétroliers", 0],
  ["Production de produit pétroliers", "Gaz naturel", 0],
  ["Production de produit pétroliers", "Biomasse, Biocarburant et déchets", 0],
  ["Production de produit pétroliers", "Charbon de bois", 0.5],

  ["Production de charbon de bois", "Charbon minéral", 0],
  ["Production de charbon de bois", "Pétrole brut", 0],
  ["Production de charbon de bois", "Produits pétroliers", 0],
  ["Production de charbon de bois", "Gaz naturel", 0],
  [
    "Production de charbon de bois",
    "Biomasse, Biocarburant et déchets",
    100571.83,
  ],
  ["Production de charbon de bois", "Charbon de bois", 0.5],

  ["Autre industries énergétiques", "Charbon minéral", 6],
  ["Autre industries énergétiques", "Pétrole brut", 0],
  ["Autre industries énergétiques", "Produits pétroliers", 3004],
  ["Autre industries énergétiques", "Gaz naturel", 5155.47],
  ["Autre industries énergétiques", "Biomasse, Biocarburant et déchets", 388],
  ["Autre industries énergétiques", "Charbon de bois", 0.5],

  ["Aérien", "Produits pétroliers", 754],
  ["Routier", "Produits pétroliers", 75696],
  ["Ferroviaire", "Produits pétroliers", 616],
  ["Navigation intérieure", "Produits pétroliers", 494],

  ["Commercial/Institutionnel", "Charbon minéral", 1],
  ["Commercial/Institutionnel", "Produits pétroliers", 640],
  ["Commercial/Institutionnel", "Biomasse, Biocarburant et déchets", 14510],
  ["Commercial/Institutionnel", "Charbon de bois", 3978.47],

  ["Résidentiel", "Charbon minéral", 783],
  ["Résidentiel", "Produits pétroliers", 11591],
  ["Résidentiel", "Biomasse, Biocarburant et déchets", 273381],
  ["Résidentiel", "Charbon de bois", 39286.39],

  ["Agriculture / Foresterie/ Pêche", "Produits pétroliers", 367],

  // ["Aérien","Charbon minéral",1],
  // ["Aérien","Pétrole brut",1],
  // ["Aérien","Produits pétroliers",754],
  // ["Aérien","Gaz naturel",1],
  // ["Aérien","Biomasse, Biocarburant et déchets",1],
  // ["Aérien","Charbon de bois",1],

  // ["Routier","Charbon minéral",0],
  // ["Routier","Pétrole brut",0],
  // ["Routier","Produits pétroliers",75696],
  // ["Routier","Gaz naturel",0],
  // ["Routier","Biomasse, Biocarburant et déchets",0],
  // ["Routier","Charbon de bois",0],

  // ["Ferroviaire","Charbon minéral",0],
  // ["Ferroviaire","Pétrole brut",0],
  // ["Ferroviaire","Produits pétroliers",616],
  // ["Ferroviaire","Gaz naturel",0],
  // ["Ferroviaire","Biomasse, Biocarburant et déchets",0],
  // ["Ferroviaire","Charbon de bois",0],

  // ["Navigation intérieure","Charbon minéral",0],
  // ["Navigation intérieure","Pétrole brut",0],
  // ["Navigation intérieure","Produits pétroliers",494],
  // ["Navigation intérieure","Gaz naturel",0],
  // ["Navigation intérieure","Biomasse, Biocarburant et déchets",0],
  // ["Navigation intérieure","Charbon de bois",0],

  // ["Transports non spécifié","Charbon minéral",0],
  // ["Transports non spécifié","Pétrole brut",0],
  // ["Transports non spécifié","Produits pétroliers",0],
  // ["Transports non spécifié","Gaz naturel",0],
  // ["Transports non spécifié","Biomasse, Biocarburant et déchets",0],
  // ["Transports non spécifié","Charbon de bois",0]
];

var colors = [
  "#734F9C",
  "#A56BE8",
  "#8DE85F",
  "#9C3130",
  "#E85554",
  "#749CD6",
  "#155CC2",
  "#F2E85E",
  "#A6309C",
  "#FF52F2",
  "#F97546",
  "#DB503D",
  "#F25060",
  "#DB3D9C",
  "#F046F9",
  "#73262E",
  "#F49AA3",
  "#F25060",
  "#73484D",
  "#BF3F4C",
  "#B32502",
  "#731801",
  "#F23202",
  "#003002",
  "#00F20C",
  "#005E73",
];
// var colorsNode = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
// '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];
// var colorsNode=[ '#734F9C', '#A56BE8', '#8DE85F', '#9C3130',
// '#E85554', '#749CD6', '#155CC2', '#F2E85E',
// '#A6309C','#FF52F2','#F97546','#DB503D',
// '#F25060','#DB3D9C','#F046F9','#73262E',
// '#F49AA3','#F25060','#73484D','#BF3F4C',
// '#B32502','#731801','#F23202','#003002',
// '#00F20C','#005E73',];

var options = {
  width: 1200,
  height: 600,

  sankey: {
    iterations: 100,

    node: {
      label: {
        fontName: "Times-Roman",
        fontSize: 12,
        color: "#000",
        bold: true,
        italic: false,
      },

      interactivity: true, // Allows you to select nodes.
      labelPadding: 8, // Horizontal distance between the label and the node.
      nodePadding: 40, // Vertical distance between nodes.
      width: 20, // Thickness of the node.
      // colorMode:'gradient',
      colors: colors,

      // colors:colors,
    },
    link: {
      colorMode: "gradient",
      colors: colors,
      // colorMode:'gradient',
      // colors:colors,
      // fill: colors,     // Color of the link.
      // fillOpacity: 0.9,
      // color: { stroke: 'red', strokeWidth:0.1}
    },
  },
};

const Graph = () => {
  return (
    <div>
      <Chart
        chartType="Sankey"
        width="100%"
        height="500px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Graph;
