'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cars', [
      {
          description: " change of suspension",
          make: "Nissan",
          model: "Versa",
          estimatedate: "2021/12/01",
          id: 3340,
          image: "https://wheelsandlipstick.com/wp-content/uploads/2015/11/Versa-Blanco-2.jpg"
      },
      {
          description: " motor adjustment",
          make: " Honda ",
          model: "CR-V",
          estimatedate: "",
          id: 3341,
          image: "https://www.honda.mx/assets/img/autos/honda/modelos/crv2021/colores/blanco.png"
      },
      {
          description: " engine tuning ",
          make: "Honda",
          model: "Civic",
          estimatedate: "2020/20/12",
          id: 3342,
          "km": 90000,
          image: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_6287b63ea9d44fae936d27a31f1cb366.jpg"
      },
      {
          description: " oil change ",
          make: " Volkswaguen",
          model: "Tiguan",
          id: 3343,
          "km": 13500,
          image: "http://3.23.108.188/cars/tiguan.jpg"
      },
      {
          id: 3344,
          image: "https://m.media-amazon.com/images/I/71WEI93GOOL._UY560_.jpg"
      },
      {
          id: 3345,
          image: "http://3.23.108.188/cars/vento.jpg"
      },
      {
          description: "Change Transmission (CVT)",
          make: "Chevrolet",
          model: "Aveo NG",
          estimatedate: "2021/09/07",
          id: 3346,
          "km": 33460,
          image: "https://chevrolet.com.gt/wp-content/uploads/2018/12/Chevrolet-Aveo-Color-blanco.png"
      },
      {
          id: 3347,
          image: "https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/cars/2020-spark/colorizer/01-images/2020-spark-blanco.png"
      }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
