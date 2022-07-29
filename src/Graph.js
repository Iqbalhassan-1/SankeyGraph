import React from "react";
import Chart from "react-google-charts";
export const data = [
  ["From", "To", "value"],
  ["Transport", "Aérien", 754],
  ["Transport", "Routier", 75696],
  ["Transport", "Ferroviaire", 616],
  ["Transport", "Navigation intérieure", 494],

  ["Autres secteurs", "Commercial/Institutionnel", 19130],
  ["Autres secteurs", "Résidentiel", 325043],
  ["Autres secteurs", "Agriculture / Foresterie/ Pêche", 367],

  ["Commercial/Institutionnel", "Charbon minéral", 1],
  ["Commercial/Institutionnel", "Produits pétroliers", 640],
  ["Commercial/Institutionnel", "Biomasse, Biocarburant et déchets", 14510],
  ["Commercial/Institutionnel", "Charbon de bois", 3978.47],

  ["Résidentiel", "Charbon minéral", 783],
  ["Résidentiel", "Produits pétroliers", 11591],
  ["Résidentiel", "Biomasse, Biocarburant et déchets", 273381],
  ["Résidentiel", "Charbon de bois", 39286.39],

  ["Agriculture / Foresterie/ Pêche", "Produits pétroliers", 367],

  ["Aérien", "Produits pétroliers", 754],
  ["Routier", "Produits pétroliers", 75696],
  ["Ferroviaire", "Produits pétroliers", 616],
  ["Navigation intérieure", "Produits pétroliers", 494],
];

// ["Brazil", "Portugal", 5],
// ["Brazil", "France", 0],
// ["Brazil", "Spain", 0],
// ["Brazil", "England", 0],
// ["Canada", "Portugal", 0],
// ["Canada", "France", 5],
// ["Canada", "England", 0],
// ["Mexico", "Portugal", 0],
// ["Mexico", "France", 0],
// ["Mexico", "Spain", 5],
// ["Mexico", "England", 0],
// ["USA", "Portugal", 0],
// ["USA", "France", 0],
// ["USA", "Spain", 0],
// ["USA", "England", 5],
// ["Portugal", "Angola", 2],
// ["Portugal", "Senegal", 0],
// ["Portugal", "Morocco", 0],
// ["Portugal", "South Africa", 3],
// ["France", "Angola", 0],
// ["France", "Senegal", 3],
// ["France", "Mali", 3],
// ["France", "Morocco", 3],
// ["France", "South Africa", 0],
// ["Spain", "Senegal", 0],
// ["Spain", "Morocco", 3],
// ["Spain", "South Africa", 0],
// ["England", "Angola", 0],
// ["England", "Senegal", 0],
// ["England", "Morocco", 2],
// ["England", "South Africa", 7],
// ["South Africa", "China", 5],
// ["South Africa", "India", 0],
// ["South Africa", "Japan", 3],
// ["Angola", "China", 5],
// ["Angola", "India", 0],
// ["Angola", "Japan", 3],
// ["Senegal", "China", 5],
// ["Senegal", "India", 0],
// ["Senegal", "Japan", 3],
// ["Mali", "China", 5],
// ["Mali", "India", 0],
// ["Mali", "Japan", 3],
// ["Morocco", "China", 5],
// ["Morocco", "India", 0],
// ["Morocco", "Japan", 3]
var colors = [
  "#a6cee3",
  "#b2df8a",
  "#fb9a99",
  "#fdbf6f",
  "#cab2d6",
  "#ffff99",
  "#0f78b4",
  "#33a02c",
];

var options = {
  width: 1000,
  sankey: {
    node: {
      label: {
        fontName: "Times-Roman",
        fontSize: 12,
        color: "#000",
        bold: true,
        italic: false,
      },
      interactivity: true, // Allows you to select nodes.
      labelPadding: 6, // Horizontal distance between the label and the node.
      nodePadding: 10, // Vertical distance between nodes.
      width: 5, // Thickness of the node.
      colors: colors,
    },
  },
};

const Graph = () => {
  return (
    <div>
      <Chart
        chartType="Sankey"
        width="000%"
        height="500px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Graph;
