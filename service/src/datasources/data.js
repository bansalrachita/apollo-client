module.exports = {
  users: [
    {
      id: "1",
      rating: 1,
      username: "Ron",
      email: "ron@gmail.com",
      preferredName: "Ron",
      summary:
        "I'm interested in trying asian cuisines and looking for a good chat.",
      createdOn: new Date(),
      lastModifiedOn: new Date(),
      city: "bellevue",
      state: "WA",
      country: "united states",
      restaurants: ["1"]
    },
    {
      id: "2",
      rating: 4,
      username: "Rahul",
      email: "rahul@gmail.com",
      preferredName: "Rahul",
      summary:
        "I'm interested in trying italian/asian cuisines and looking for a good chat.",
      createdOn: new Date(),
      lastModifiedOn: new Date(),
      city: "bellevue",
      state: "WA",
      country: "united states",
      restaurants: ["1", "2"]
    },
    {
      id: "3",
      username: "Rodrique",
      email: "rodrique@gmail.com",
      preferredName: "Rodrique",
      summary:
        "I'm interested in trying mexican cuisines and looking for a good chat.",
      createdOn: new Date(),
      lastModifiedOn: new Date(),
      city: "bellevue",
      state: "WA",
      country: "united states",
      restaurants: ["3"]
    }
  ],
  invitations: [
    {
      id: "r-1",
      sender: "u-1",
      receiver: "u-2",
      accepted: true,
      summary: "Hey! join me for the lunch @Pho Basil",
      location: "110th ave, bellevue",
      restaurant: "Pho Basil",
      time: "07-05-2019",
      createdOn: "04-05-2019"
    }
  ],
  restaurants: {
    result: {
      data: [
        {
          geo: {
            lon: -122.195912,
            lat: 47.619839
          },
          hours: "",
          address: {
            city: "Bellevue",
            formatted: "1020 108th Ave NE Bellevue, WA 98004",
            street: "1020 108th Ave NE",
            state: "WA",
            postal_code: "98004"
          },
          restaurant_phone: "(425) 455-4273",
          restaurant_id: 411055,
          price_range: "$$",
          menus: [],
          price_range_100: 2,
          cuisines: [],
          restaurant_name: "Bar Code"
        },
        {
          geo: {
            lon: -122.193594,
            lat: 47.619374
          },
          hours: "",
          address: {
            city: "BELLEVUE",
            formatted: "11000 NE 10th St BELLEVUE, WA 98004",
            street: "11000 NE 10th St",
            state: "WA",
            postal_code: "98004"
          },
          restaurant_phone: "(425) 452-8722",
          restaurant_id: 269772,
          price_range: "$",
          menus: [],
          price_range_100: 1,
          cuisines: [],
          restaurant_name: "Danube Bistro"
        },
        {
          geo: {
            lon: -122.196118,
            lat: 47.619817
          },
          hours: "",
          address: {
            city: "Bellevue",
            formatted: "1020 108th Ave NE, Ste 100 Bellevue, WA 98004",
            street: "1020 108th Ave NE, Ste 100",
            state: "WA",
            postal_code: "98004"
          },
          restaurant_phone: "(425) 455-4278",
          restaurant_id: 3218831,
          price_range: "$$",
          menus: [],
          price_range_100: 2,
          cuisines: [],
          restaurant_name: "1Hundred Bistro & Bar"
        },
        {
          geo: {
            lon: -122.196337,
            lat: 47.619535
          },
          hours: "",
          address: {
            city: "BELLEVUE",
            formatted: "1015 108th Ave Ne BELLEVUE, WA 98004",
            street: "1015 108th Ave Ne",
            state: "WA",
            postal_code: "98004"
          },
          restaurant_phone: "(425) 633-2362",
          restaurant_id: 303185,
          price_range: "$",
          menus: [],
          price_range_100: 1,
          cuisines: ["American", "Breakfast", "Eclectic &amp; International"],
          restaurant_name: "Cafe Cesura"
        },
        {
          geo: {
            lon: -122.193595,
            lat: 47.618688
          },
          hours: "",
          address: {
            city: "BELLEVUE",
            formatted: "938 110th Ave NE BELLEVUE, WA 98004",
            street: "938 110th Ave NE",
            state: "WA",
            postal_code: "98004"
          },
          restaurant_phone: "(425) 452-9602",
          restaurant_id: 3586,
          price_range: "$",
          menus: [],
          price_range_100: 1,
          cuisines: ["Italian"],
          restaurant_name: "Andiamo Bellevue"
        },
        {
          geo: {
            lon: -122.193135,
            lat: 47.618725
          },
          hours: "",
          address: {
            city: "Bellevue",
            formatted: "938 110th Ave NE Bellevue, WA 98004",
            street: "938 110th Ave NE",
            state: "WA",
            postal_code: "98004"
          },
          restaurant_phone: "(425) 467-0867",
          restaurant_id: 335362,
          price_range: "$$$",
          menus: [],
          price_range_100: 3,
          cuisines: [],
          restaurant_name: "Chutneys"
        }
      ]
    },
    numResults: 25,
    page: 1,
    pages: 6,
    morePages: true
  }
};
