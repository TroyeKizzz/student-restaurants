export default {
  restaurants: [
    {
      campus: "TAMK",
      description: "Restaurants near TAMK main campus",
      kitchens: [{ name: "Campusravita", customerId: 97603, kitchenId: 1 }],
    },
    {
      campus: "TAU",
      description: "Restaurants on Tampere University main campus",
      kitchens: [
        { name: "Yliopiston Ravintola", customerId: 93077, kitchenId: 13 },
        { name: "Frenckell", customerId: 93077, kitchenId: 33 },
      ],
    },
    {
      campus: "TAYS",
      description: "Restaurants at Tampere University Hospital",
      kitchens: [
        {
          name: "Pikante Finn-Medi",
          customerId: 96887,
          kitchenId: 1,
          lang: "fi",
        },
        {
          name: "Pikante Misteli",
          customerId: 96887,
          kitchenId: 4,
          lang: "fi",
        },
      ],
    },
    {
      campus: "TTY",
      description: "Restaurants near Hervanta Campus",
      kitchens: [
        {
          name: "Newton",
          customerId: 93077,
          kitchenId: 6,
        },
      ],
    },
  ],
  weekdays: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thirsday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  colors: {
    main: "#1e81b0",
  },
};
