const SankeyDataB = [
  {
    level: 1, /// specifies which column
    nodes: [
      {
        id: "1",
        nodeLabel: "énergétiques",
        color: "red", // will be used in the edges gradient color
        image:
          "https://physicsworld.com/wp-content/uploads/2018/11/green-energy-732214615-Shutterstock_lassedesignen-.jpg", // icon for the node
        edges: [
          {
            nodeId: "7",
            edgeWeight: 60520,
          },
          {
            nodeId: "8",
            edgeWeight: 26764,
          },
          {
            nodeId: "9",
            edgeWeight: 100572,
          },
          {
            nodeId: "10",
            edgeWeight: 8555,
          },
        ],
      },

      {
        id: "2",
        nodeLabel: "construction",
        color: "#FFD301", // will be used in the edges gradient color
        image:
          "https://img.freepik.com/free-vector/flat-engineering-construction-illustrated_23-2148892788.jpg?t=st=1658815706~exp=1658816306~hmac=061e1e27dfaf2b00c744647ed8188dd28c965b52c9dc390e3b5c2b9cbc9d74d8&w=1380", // icon for the node
        edges: [
          {
            nodeId: "18",
            edgeWeight: 2830,
          },

          {
            nodeId: "20",
            edgeWeight: 4581,
          },
          {
            nodeId: "21",
            edgeWeight: 13624,
          },
          {
            nodeId: "22",
            edgeWeight: 12890,
          },
          {
            nodeId: "23",
            edgeWeight: 5,
          },
        ],
      },
      {
        id: "3",
        nodeLabel: "Transport",
        color: "#484BF2", // will be used in the edges gradient color
        image:
          "https://img.freepik.com/free-vector/warehouse-worker-transporting-goods-freight-shipping-types-business-logistics-smart-logistics-technologies-commercial-delivery-service-concept-pinkish-coral-bluevector-isolated-illustration_335657-1728.jpg?t=st=1658819008~exp=1658819608~hmac=8de09f2f59bb468b07d8059121a6bacab60e7ffeafc94f8260895c854eab4653&w=1380", // icon for the node
        edges: [
          {
            nodeId: "11",
            edgeWeight: 754,
          },
          {
            nodeId: "12",
            edgeWeight: 75696,
          },
          {
            nodeId: "13",
            edgeWeight: 616,
          },
          {
            nodeId: "14",
            edgeWeight: 2,
          },
        ],
      },
      {
        id: "4",
        nodeLabel: "Autres",
        color: "#1C79A4", // will be used in the edges gradient color
        image:
          "https://img.freepik.com/free-vector/isometric-industrial-cleaning-icon-set_98292-7079.jpg?t=st=1658819209~exp=1658819809~hmac=95d887a7b96dcf341f2be5db5bf1dc8766e5a3aceeaf0439d7fb0385ae8e5357&w=826", // icon for the node
        edges: [
          {
            nodeId: "15",
            edgeWeight: 19130,
          },
          {
            nodeId: "16",
            edgeWeight: 325043,
          },
          {
            nodeId: "17",
            edgeWeight: 3,
          },
        ],
      },
      {
        id: "5",
        nodeLabel: "maritimes",
        color: "#936E6F", // will be used in the edges gradient color
        image:
          "https://img.freepik.com/free-photo/aerial-view-container-cargo-ship-sea_335224-735.jpg?t=st=1658819334~exp=1658819934~hmac=e209a835a91b11928b4ed69fe1b2a1e6464e4373524e16e511a55a91605eb5c6&w=1380", // icon for the node
        edges: [
          {
            nodeId: "20",
            edgeWeight: 1778,
          },
        ],
      },
      {
        id: "6",
        nodeLabel: "aériens",
        color: "#494445", // will be used in the edges gradient color
        image:
          "https://img.freepik.com/free-photo/aerial-sunrise-view-venice-beach-pier-near-santa-monica_181624-38374.jpg?t=st=1658819496~exp=1658820096~hmac=f9f4cbc3b4a485189068b46fc7720ced611413b09294d18e0323ac27c60b0718&w=1060", // icon for the node
        edges: [
          {
            nodeId: "20",
            edgeWeight: 3,
          },
        ],
      },
    ],
  },
  {
    level: 2,
    nodes: [
      {
        id: "7",
        nodeLabel: "d'électricité",
        color: "#203129",
        image:
          "https://img.freepik.com/free-photo/high-voltage-post-high-voltage-tower_1127-3215.jpg?t=st=1658820088~exp=1658820688~hmac=39f8de2acd50eb62a1b7bf9f2bd52078230f2238b6e23c82a9885728f3537e06&w=1380",
        edges: [
          {
            nodeId: "18",
            edgeWeight: 1082,
          },
          {
            nodeId: "19",
            edgeWeight: 403,
          },
          {
            nodeId: "20",
            edgeWeight: 29100,
          },
          {
            nodeId: "21",
            edgeWeight: 23,
          },
          {
            nodeId: "22",
            edgeWeight: 1260,
          },
        ],
      },
      {
        id: "8",
        nodeLabel: "pétroliers",
        color: "#A7A98D",
        image:
          "https://img.freepik.com/free-psd/tanker-truck-mockup_358694-5511.jpg?t=st=1658820165~exp=1658820765~hmac=be89895493e6636326b82700d316bf8515fb0d0f973ad23b0b676f59681a7f95&w=1380",
        edges: [
          {
            nodeId: "19",
            edgeWeight: 23,
          },
        ],
      },
      {
        id: "9",
        nodeLabel: "charbon de bois",
        color: "#BAB3B6",
        image:
          "https://img.freepik.com/free-photo/fire-flames-from-wood-ember-grill-bbq-picnic-fume-firewood-outdoor_169016-1929.jpg?t=st=1658820346~exp=1658820946~hmac=387f79eeeef79952459b2f22fb4656a1b06947922fb0660898c500c87e571f63&w=900",
        edges: [
          {
            nodeId: "22",
            edgeWeight: 100572,
          },
        ],
      },
      {
        id: "10",
        nodeLabel: "Autre industries",
        color: "#F0A537",
        image:
          "https://img.freepik.com/free-photo/modern-factory-industrial-zone-blue-sky_181624-6369.jpg?t=st=1658820504~exp=1658821104~hmac=ae6495017fa87ddaa71849df683b55e13d7dcaf44e3d6226b09240d2b9c2e426&w=1380",
        edges: [
          {
            nodeId: "18",
            edgeWeight: 6,
          },
          {
            nodeId: "20",
            edgeWeight: 3004,
          },
          {
            nodeId: "21",
            edgeWeight: 5155,
          },
          {
            nodeId: "22",
            edgeWeight: 388,
          },
        ],
      },
      {
        id: "11",
        nodeLabel: "	Aérien",
        color: "#8BB7C3",
        image:
          "https://img.freepik.com/free-photo/wind-energy-with-wind-turbines-background_53876-124631.jpg?t=st=1658820615~exp=1658821215~hmac=63b328e289c258bb050cb6582bd22fce1b2e5aff495e9e8cb4cbb855d9a7f58f&w=1380",
        edges: [
          {
            nodeId: "20",
            edgeWeight: 754,
          },
        ],
      },
      {
        id: "12",
        nodeLabel: "Routier",
        color: "#0A0D5E",
        image:
          "https://img.freepik.com/free-photo/sunny-forward-journey-transportation-transport-new_1417-904.jpg?t=st=1658820826~exp=1658821426~hmac=757a22a487404a1aa1a00bdcab921c245be3dba19b4a508969fdf251028b81ec&w=1380",
        edges: [
          {
            nodeId: "20",
            edgeWeight: 75696,
          },
        ],
      },
      {
        id: "13",
        nodeLabel: "Ferroviaire",
        color: "#61DAFF",
        image:
          "https://img.freepik.com/free-photo/railway_1136-330.jpg?t=st=1658820877~exp=1658821477~hmac=b9071d5dee1de85fa6d404b2d2516613ed5622236e81ca1751347d6a107b1399&w=1380",
        edges: [
          {
            nodeId: "20",
            edgeWeight: 616,
          },
        ],
      },
      {
        id: "14",
        nodeLabel: "Navigation intérieure",
        color: "#F0800E",
        image:
          "https://img.freepik.com/free-photo/young-woman-with-map-railway-station_23-2147952958.jpg?t=st=1658820951~exp=1658821551~hmac=0263bb2e4ed2080b7c9400e756f8666eb7539fb5a0e3e8f61c5eafcd4119f3b6&w=1380",
        edges: [
          {
            nodeId: "20",
            edgeWeight: 494,
          },
        ],
      },
      {
        id: "15",
        nodeLabel: "Commercial/Institutionnel",
        color: "",
        image:
          "https://img.freepik.com/free-photo/large-modern-office-building_1127-3072.jpg?t=st=1658821008~exp=1658821608~hmac=59e5b340942dd283d4b8ef08dfdf07a9ac2dcae8b3a2c46d1ab9d670847cad6a&w=1380",
        edges: [
          {
            nodeId: "18",
            edgeWeight: 1,
          },
          {
            nodeId: "20",
            edgeWeight: 640,
          },
          {
            nodeId: "22",
            edgeWeight: 14510,
          },
          {
            nodeId: "23",
            edgeWeight: 3979,
          },
        ],
      },
      {
        id: "16",
        nodeLabel: "Résidentiel",
        color: "",
        image:
          "https://img.freepik.com/free-photo/residential-house-process-building_23-2147694705.jpg?t=st=1658821136~exp=1658821736~hmac=ff883b961c7ff22ce9aff9cb755f311fdd5cdf93dba29e57c5b8e3ad43bb25c2&w=1380",
        edges: [
          {
            nodeId: "18",
            edgeWeight: 783,
          },

          {
            nodeId: "20",
            edgeWeight: 11591,
          },

          {
            nodeId: "22",
            edgeWeight: 273381,
          },
          {
            nodeId: "23",
            edgeWeight: 39286,
          },
        ],
      },
      {
        id: "17",
        nodeLabel: "Agriculture / Foresterie/ Pêche",
        color: "",
        image:
          "https://img.freepik.com/free-photo/agriculture-food-production-concept-with-tractor-machine-silos-irrigation-system_342744-565.jpg?t=st=1658821214~exp=1658821814~hmac=76d5f069b6641226b774f27ea88b48e6bd079e5636e9f376bd9d3ebb82c4c769&w=1380",
        edges: [
          {
            nodeId: "20",
            edgeWeight: 367,
          },
        ],
      },
    ],
  },
  {
    level: 3,
    nodes: [
      {
        id: "18",
        nodeLabel: "Charbon minéral",
        color: "",
        image:
          "https://img.freepik.com/free-photo/toy-figurine-simulated-coal-mining_1205-10141.jpg?t=st=1658821297~exp=1658821897~hmac=21a3e988cec367e4ec9140807a3eec09f2d43d6f2916b01e6255e6fefd2ca976&w=1380",
      },

      {
        id: "19",
        nodeLabel: "Pétrole brut",
        color: "",
        image:
          "https://img.freepik.com/free-vector/-oil-barrels-with-crude-sign-spill-oil-floor-isolated-white-background_1308-44626.jpg?t=st=1658821358~exp=1658821958~hmac=83336628dba7878c4744362ace83818170bd22112ad3efde666be1bde6ebf5d8&w=1380",
      },

      {
        id: "20",
        nodeLabel: "Produits pétroliers",
        color: "",
        image:
          "https://img.freepik.com/free-psd/argan-oil-products-mockup_23-2149287506.jpg?t=st=1658821493~exp=1658822093~hmac=67fc14f0ce551bfc0af8ed9e5c7d6dee363f790eb2ddc72abe0dfcd3fa22ef09&w=740",
      },
      {
        id: "21",
        nodeLabel: "Gaz naturel",
        color: "",
        image: "https://cdn-icons-png.flaticon.com/512/1224/1224688.png?w=826",
      },

      {
        id: "22",
        nodeLabel: "Biomasse, Biocarburant et déchets",
        color: "",
        image:
          "https://img.freepik.com/free-vector/gradient-biofuel-illustration_23-2149420260.jpg?t=st=1658821755~exp=1658822355~hmac=ac12d72e0c2141b037d993ee75c368791cf1d3c1b32cabe8f800257caf5dddda&w=826",
      },

      {
        id: "23",
        nodeLabel: "Charbon de bois",
        color: "",
        image:
          "https://img.freepik.com/free-photo/heap-coal-as-background-top-view_1205-10143.jpg?t=st=1658821827~exp=1658822427~hmac=cfa023810672dde59bf59b09e42be84a1eb688310243e436af7df66ff9ac838f&w=1380",
      },
    ],
  },
];

const SankeyDataA = [
  {
    level: 1, /// specifies which column
    nodes: [
      {
        id: "1",
        nodeLabel: "Industries",
        color: "red", // will be used in the edges gradient color
        image:
          "https://physicsworld.com/wp-content/uploads/2018/11/green-energy-732214615-Shutterstock_lassedesignen-.jpg", // icon for the node
        edges: [
          {
            nodeId: "10",
            edgeWeight: 60520,
          },
          {
            nodeId: "9",
            edgeWeight: 26764,
          },
          {
            nodeId: "8",
            edgeWeight: 100572,
          },
          {
            nodeId: "7",
            edgeWeight: 8555,
          },
        ],
      },

      {
        id: "2",
        nodeLabel: "Manufacture",
        color: "#FFD301", // will be used in the edges gradient color
        image:
          "https://img.freepik.com/free-vector/flat-engineering-construction-illustrated_23-2148892788.jpg?t=st=1658815706~exp=1658816306~hmac=061e1e27dfaf2b00c744647ed8188dd28c965b52c9dc390e3b5c2b9cbc9d74d8&w=1380", // icon for the node
        edges: [
          {
            nodeId: "23",
            edgeWeight: 2830,
          },

          {
            nodeId: "22",
            edgeWeight: 4581,
          },
          {
            nodeId: "21",
            edgeWeight: 4581,
          },
          {
            nodeId: "20",
            edgeWeight: 13624,
          },
          {
            nodeId: "18",
            edgeWeight: 5,
          },
        ],
      },
      {
        id: "3",
        nodeLabel: "Transport",
        color: "#484BF2", // will be used in the edges gradient color
        image:
          "https://img.freepik.com/free-vector/warehouse-worker-transporting-goods-freight-shipping-types-business-logistics-smart-logistics-technologies-commercial-delivery-service-concept-pinkish-coral-bluevector-isolated-illustration_335657-1728.jpg?t=st=1658819008~exp=1658819608~hmac=8de09f2f59bb468b07d8059121a6bacab60e7ffeafc94f8260895c854eab4653&w=1380", // icon for the node
        edges: [
          {
            nodeId: "14",
            edgeWeight: 754,
          },
          {
            nodeId: "13",
            edgeWeight: 75696,
          },
          {
            nodeId: "12",
            edgeWeight: 616,
          },
          {
            nodeId: "11",
            edgeWeight: 2,
          },
        ],
      },
      {
        id: "4",
        nodeLabel: "Autres",
        color: "#1C79A4", // will be used in the edges gradient color
        image:
          "https://img.freepik.com/free-vector/isometric-industrial-cleaning-icon-set_98292-7079.jpg?t=st=1658819209~exp=1658819809~hmac=95d887a7b96dcf341f2be5db5bf1dc8766e5a3aceeaf0439d7fb0385ae8e5357&w=826", // icon for the node
        edges: [
          {
            nodeId: "17",
            edgeWeight: 19130,
          },
          {
            nodeId: "16",
            edgeWeight: 325043,
          },
          {
            nodeId: "15",
            edgeWeight: 367,
          },
        ],
      },
      {
        id: "5",
        nodeLabel: "maritimes",
        color: "#936E6F", // will be used in the edges gradient color
        image:
          "https://img.freepik.com/free-photo/aerial-view-container-cargo-ship-sea_335224-735.jpg?t=st=1658819334~exp=1658819934~hmac=e209a835a91b11928b4ed69fe1b2a1e6464e4373524e16e511a55a91605eb5c6&w=1380", // icon for the node
        edges: [
          {
            nodeId: "17",
            edgeWeight: 2778,
          },
        ],
      },
      {
        id: "6",
        nodeLabel: "aériens",
        color: "#494445", // will be used in the edges gradient color
        image:
          "https://img.freepik.com/free-photo/aerial-sunrise-view-venice-beach-pier-near-santa-monica_181624-38374.jpg?t=st=1658819496~exp=1658820096~hmac=f9f4cbc3b4a485189068b46fc7720ced611413b09294d18e0323ac27c60b0718&w=1060", // icon for the node
        edges: [
          {
            nodeId: "17",
            edgeWeight: 40902,
          },
        ],
      },
    ],
  },
  {
    level: 2,
    nodes: [
      {
        id: "7",
        nodeLabel: "d'électricité",
        color: "yellow",
        image:
          "https://img.freepik.com/free-photo/high-voltage-post-high-voltage-tower_1127-3215.jpg?t=st=1658820088~exp=1658820688~hmac=39f8de2acd50eb62a1b7bf9f2bd52078230f2238b6e23c82a9885728f3537e06&w=1380",
        edges: [
          {
            nodeId: "18",
            edgeWeight: 1082,
          },
          {
            nodeId: "19",
            edgeWeight: 29100,
          },
          {
            nodeId: "20",
            edgeWeight: 444,
          },
          {
            nodeId: "21",
            edgeWeight: 28674,
          },
          {
            nodeId: "22",
            edgeWeight: 1260,
          },
        ],
      },
      {
        id: "8",
        nodeLabel: "pétroliers",
        color: "",
        image:
          "https://img.freepik.com/free-psd/tanker-truck-mockup_358694-5511.jpg?t=st=1658820165~exp=1658820765~hmac=be89895493e6636326b82700d316bf8515fb0d0f973ad23b0b676f59681a7f95&w=1380",
        edges: [
          {
            nodeId: "19",
            edgeWeight: 26763,
          },
        ],
      },
      {
        id: "9",
        nodeLabel: "charbon de bois",
        color: "#BAB3B6",
        image:
          "https://img.freepik.com/free-photo/fire-flames-from-wood-ember-grill-bbq-picnic-fume-firewood-outdoor_169016-1929.jpg?t=st=1658820346~exp=1658820946~hmac=387f79eeeef79952459b2f22fb4656a1b06947922fb0660898c500c87e571f63&w=900",
        edges: [
          {
            nodeId: "22",
            edgeWeight: 100572,
          },
        ],
      },
      {
        id: "10",
        nodeLabel: "Autre industries",
        color: "yellow",
        image:
          "https://img.freepik.com/free-photo/modern-factory-industrial-zone-blue-sky_181624-6369.jpg?t=st=1658820504~exp=1658821104~hmac=ae6495017fa87ddaa71849df683b55e13d7dcaf44e3d6226b09240d2b9c2e426&w=1380",
        edges: [
          {
            nodeId: "18",
            edgeWeight: 6,
          },
          {
            nodeId: "20",
            edgeWeight: 3004,
          },
          {
            nodeId: "21",
            edgeWeight: 5155,
          },
          {
            nodeId: "22",
            edgeWeight: 388,
          },
        ],
      },
      {
        id: "11",
        nodeLabel: "	Aérien",
        color: "",
        image:
          "https://img.freepik.com/free-photo/wind-energy-with-wind-turbines-background_53876-124631.jpg?t=st=1658820615~exp=1658821215~hmac=63b328e289c258bb050cb6582bd22fce1b2e5aff495e9e8cb4cbb855d9a7f58f&w=1380",
        edges: [
          {
            nodeId: "22",
            edgeWeight: 7554,
          },
        ],
      },
      {
        id: "12",
        nodeLabel: "Routier",
        color: "yellow",
        image:
          "https://img.freepik.com/free-photo/sunny-forward-journey-transportation-transport-new_1417-904.jpg?t=st=1658820826~exp=1658821426~hmac=757a22a487404a1aa1a00bdcab921c245be3dba19b4a508969fdf251028b81ec&w=1380",
        edges: [
          {
            nodeId: "20",
            edgeWeight: 75696,
          },
        ],
      },
      {
        id: "13",
        nodeLabel: "Ferroviaire",
        color: "blue",
        image:
          "https://img.freepik.com/free-photo/railway_1136-330.jpg?t=st=1658820877~exp=1658821477~hmac=b9071d5dee1de85fa6d404b2d2516613ed5622236e81ca1751347d6a107b1399&w=1380",
        edges: [
          {
            nodeId: "20",
            edgeWeight: 616,
          },
        ],
      },
      {
        id: "14",
        nodeLabel: "Navigation intérieure",
        color: "yellow",
        image:
          "https://img.freepik.com/free-photo/young-woman-with-map-railway-station_23-2147952958.jpg?t=st=1658820951~exp=1658821551~hmac=0263bb2e4ed2080b7c9400e756f8666eb7539fb5a0e3e8f61c5eafcd4119f3b6&w=1380",
        edges: [
          {
            nodeId: "20",
            edgeWeight: 494,
          },
        ],
      },
      {
        id: "15",
        nodeLabel: "Commercial/Institutionnel",
        color: "blue",
        image:
          "https://img.freepik.com/free-photo/large-modern-office-building_1127-3072.jpg?t=st=1658821008~exp=1658821608~hmac=59e5b340942dd283d4b8ef08dfdf07a9ac2dcae8b3a2c46d1ab9d670847cad6a&w=1380",
        edges: [
          {
            nodeId: "18",
            edgeWeight: 1,
          },
          {
            nodeId: "20",
            edgeWeight: 640,
          },
          {
            nodeId: "22",
            edgeWeight: 14510,
          },
          {
            nodeId: "23",
            edgeWeight: 3979,
          },
        ],
      },
      {
        id: "16",
        nodeLabel: "Résidentiel",
        color: "yellow",
        image:
          "https://img.freepik.com/free-photo/residential-house-process-building_23-2147694705.jpg?t=st=1658821136~exp=1658821736~hmac=ff883b961c7ff22ce9aff9cb755f311fdd5cdf93dba29e57c5b8e3ad43bb25c2&w=1380",
        edges: [
          {
            nodeId: "18",
            edgeWeight: 783,
          },

          {
            nodeId: "20",
            edgeWeight: 11591,
          },

          {
            nodeId: "22",
            edgeWeight: 273381,
          },
          {
            nodeId: "23",
            edgeWeight: 39286,
          },
        ],
      },
      {
        id: "17",
        nodeLabel: "Agriculture / Foresterie/ Pêche",
        color: "blue",
        image:
          "https://img.freepik.com/free-photo/agriculture-food-production-concept-with-tractor-machine-silos-irrigation-system_342744-565.jpg?t=st=1658821214~exp=1658821814~hmac=76d5f069b6641226b774f27ea88b48e6bd079e5636e9f376bd9d3ebb82c4c769&w=1380",
        edges: [
          {
            nodeId: "20",
            edgeWeight: 367,
          },
        ],
      },
    ],
  },
  {
    level: 3,
    nodes: [
      {
        id: "18",
        nodeLabel: "Charbon minéral",
        color: "red",

        image:
          "https://img.freepik.com/free-photo/toy-figurine-simulated-coal-mining_1205-10141.jpg?t=st=1658821297~exp=1658821897~hmac=21a3e988cec367e4ec9140807a3eec09f2d43d6f2916b01e6255e6fefd2ca976&w=1380",
      },

      {
        id: "19",
        nodeLabel: "Pétrole brut",
        color: "green",

        image:
          "https://img.freepik.com/free-vector/-oil-barrels-with-crude-sign-spill-oil-floor-isolated-white-background_1308-44626.jpg?t=st=1658821358~exp=1658821958~hmac=83336628dba7878c4744362ace83818170bd22112ad3efde666be1bde6ebf5d8&w=1380",
      },

      {
        id: "20",
        nodeLabel: "Produits pétroliers",
        color: "red",

        image:
          "https://img.freepik.com/free-psd/argan-oil-products-mockup_23-2149287506.jpg?t=st=1658821493~exp=1658822093~hmac=67fc14f0ce551bfc0af8ed9e5c7d6dee363f790eb2ddc72abe0dfcd3fa22ef09&w=740",
      },
      {
        id: "21",
        nodeLabel: "Gaz naturel",
        color: "green",

        image: "https://cdn-icons-png.flaticon.com/512/1224/1224688.png?w=826",
      },

      {
        id: "22",
        nodeLabel: "Biomasse, Biocarburant et déchets",
        color: "red",

        image:
          "https://img.freepik.com/free-vector/gradient-biofuel-illustration_23-2149420260.jpg?t=st=1658821755~exp=1658822355~hmac=ac12d72e0c2141b037d993ee75c368791cf1d3c1b32cabe8f800257caf5dddda&w=826",
      },

      {
        id: "23",
        nodeLabel: "Charbon de bois",
        color: "green",

        image:
          "https://img.freepik.com/free-photo/heap-coal-as-background-top-view_1205-10143.jpg?t=st=1658821827~exp=1658822427~hmac=cfa023810672dde59bf59b09e42be84a1eb688310243e436af7df66ff9ac838f&w=1380",
      },
    ],
  },
];

export const SankeyData = [
  SankeyDataB,
  SankeyDataA,
  SankeyDataB,
  SankeyDataA,
  SankeyDataB,
  SankeyDataA,
  SankeyDataB,
  SankeyDataA,
  SankeyDataB,
  SankeyDataA,
  SankeyDataB,
  SankeyDataA,
  SankeyDataB,
  SankeyDataA,
  SankeyDataB,
  SankeyDataA,
];
