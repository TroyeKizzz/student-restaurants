export default {
  restaurants: [
    {
      campus: "TAMK",
      description: "Restaurants near TAMK main campus",
      kitchens: [
        {
          name: "Campusravita",
          customerId: 97603,
          kitchenId: 1,
          coords: { latitude: 61.50401280268069, longitude: 23.80867548011802 },
        },
      ],
    },
    {
      campus: "TAU",
      description: "Restaurants on Tampere University main campus",
      kitchens: [
        {
          name: "Yliopiston Ravintola",
          customerId: 93077,
          kitchenId: 13,
          coords: {
            latitude: 61.494086417488504,
            longitude: 23.77981214615615,
          },
        },
        {
          name: "Frenckell",
          customerId: 93077,
          kitchenId: 33,
          coords: {
            latitude: 61.50011830748414,
            longitude: 23.760973459369037,
          },
        },
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
          coords: {
            latitude: 61.50626811440305,
            longitude: 23.81233262794905,
          },
        },
        {
          name: "Pikante Misteli",
          customerId: 96887,
          kitchenId: 4,
          lang: "fi",
          coords: {
            latitude: 61.50455577058819,
            longitude: 23.81547603321032,
          },
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
          coords: {
            latitude: 61.449219554738086,
            longitude: 23.859071627739457,
          },
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
