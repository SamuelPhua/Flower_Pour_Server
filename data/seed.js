const products = [
  {
    // name: "Pineapple Balls",
    name: "Pineapple Signature Balls",
    description:
      "Our pineapple balls are the perfect balance of buttery, powdery, melt-in-your mouth crust and tangy sweet pineapple filling. \r\nPerfect for your CNY Indulgence!\r\nAll our cookies are baked to order and will be ready to be delivered to you within 2-4 working days of placing your order.",
    //Note: about and price details below are mocked up with details from Chocolate Chip Cookies
    about: {
      ingredients:
        "Flour, butter, sugar, brown sugar, salt, vanilla essence, baking soda, cinnamon, eggs, chocolate chips, coca powder, rolled oats.",
      allergens: "May contain gluten and tree nuts.",
      packaging:
        "Take your pick between recyclable kraft pouches or BPA-free jars.",
      storage:
        "To preserve freshness, all our cookies are sealed in air-tight sustainable packaging",
    },
    price: [
      {
        weight: "100g",
        packaging: "Kraft Pouch",
        sgdPrice: 5.8,
      },
      {
        weight: "200g",
        packaging: "Kraft Pouch",
        sgdPrice: 11.0,
      },
      {
        weight: "100g",
        packaging: "Bottle",
        sgdPrice: 8.3,
      },
      {
        weight: "150g",
        packaging: "Bottle",
        sgdPrice: 13.0,
      },
      {
        weight: "350g",
        packaging: "Bottle",
        sgdPrice: 29.0,
      },
    ],
    image: [
      { packaging: "main", imageSrc: "" },
      { packaging: "Bottle", imageSrc: "" },
      { packaging: "Kraft Pouch", imageSrc: "" },
    ],
  },
  {
    name: "White Almond Cookie",
    description:
      "Our White Almond Cookies are soft, crumbly and full of nutty almond flavour. \r\nPerfect for your CNY Indulgence!\r\nAll our cookies are baked to order and will be ready to be delivered to you within 2-4 working days of placing your order.",
    //Note: about and price details below are mocked up with details from Chocolate Chip Cookies
    about: {
      ingredients:
        "Flour, butter, sugar, brown sugar, salt, vanilla essence, baking soda, cinnamon, eggs, chocolate chips, coca powder, rolled oats.",
      allergens: "May contain gluten and tree nuts.",
      packaging:
        "Take your pick between recyclable kraft pouches or BPA-free jars.",
      storage:
        "To preserve freshness, all our cookies are sealed in air-tight sustainable packaging",
    },
    price: [
      {
        weight: "100g",
        packaging: "Kraft Pouch",
        sgdPrice: 5.8,
      },
      {
        weight: "200g",
        packaging: "Kraft Pouch",
        sgdPrice: 11.0,
      },
      {
        weight: "100g",
        packaging: "Bottle",
        sgdPrice: 8.3,
      },
      {
        weight: "150g",
        packaging: "Bottle",
        sgdPrice: 13.0,
      },
      {
        weight: "350g",
        packaging: "Bottle",
        sgdPrice: 29.0,
      },
    ],
    image: [
      { packaging: "main", imageSrc: "" },
      { packaging: "Bottle", imageSrc: "" },
      { packaging: "Kraft Pouch", imageSrc: "" },
    ],
  },
  {
    name: "Gingerbread Man",
    description:
      "Our gingerbread man cookies are crunchy and packed full with cinnamon spice goodness.\r\nEach gingerbread man is uniquely shaped in their own way as all are proudly handmade in Singapore.\r\nAll our cookies are baked to order and will be ready to be delivered to you within 2-4 working days of placing your order.",
    //Note: about and price details below are mocked up with details from Chocolate Chip Cookies
    about: {
      ingredients:
        "Flour, butter, sugar, brown sugar, salt, vanilla essence, baking soda, cinnamon, eggs, chocolate chips, coca powder, rolled oats.",
      allergens: "May contain gluten and tree nuts.",
      packaging:
        "Take your pick between recyclable kraft pouches or BPA-free jars.",
      storage:
        "To preserve freshness, all our cookies are sealed in air-tight sustainable packaging",
    },
    price: [
      {
        weight: "100g",
        packaging: "Kraft Pouch",
        sgdPrice: 5.8,
      },
      {
        weight: "200g",
        packaging: "Kraft Pouch",
        sgdPrice: 11.0,
      },
      {
        weight: "100g",
        packaging: "Bottle",
        sgdPrice: 8.3,
      },
      {
        weight: "150g",
        packaging: "Bottle",
        sgdPrice: 13.0,
      },
      {
        weight: "350g",
        packaging: "Bottle",
        sgdPrice: 29.0,
      },
    ],
    image: [
      { packaging: "main", imageSrc: "" },
      { packaging: "Bottle", imageSrc: "" },
      { packaging: "Kraft Pouch", imageSrc: "" },
    ],
  },
  {
    name: "French Sable Cookies",
    description:
      "Our French Sable Cookies are crunchy, fruity and the best snack to have with your favourite coffee or tea.\r\nEnjoy it in 3 flavours: Cranberry Sunflower Seeds, Citrus Chocolate Almond, and Matcha Chocolate Chips.\r\nAll our cookies are baked to order and will be ready to be delivered to you within 2-4 working days of placing your order.",
    //Note: about details below are mocked up with details from Chocolate Chip Cookies
    about: {
      ingredients:
        "Flour, butter, sugar, brown sugar, salt, vanilla essence, baking soda, cinnamon, eggs, chocolate chips, coca powder, rolled oats.",
      allergens: "May contain gluten and tree nuts.",
      packaging:
        "Take your pick between recyclable kraft pouches or BPA-free jars.",
      storage:
        "To preserve freshness, all our cookies are sealed in air-tight sustainable packaging",
    },

    price: [
      {
        weight: "100g",
        packaging: "Kraft Pouch",
        sgdPrice: 6.3,
      },
      {
        weight: "200g",
        packaging: "Kraft Pouch",
        sgdPrice: 12,
      },
    ],
    image: [
      { packaging: "main", imageSrc: "" },
      { packaging: "Bottle", imageSrc: "" },
      { packaging: "Kraft Pouch", imageSrc: "" },
    ],
  },
  {
    // name: "FP Xmas Fruit Cake",
    name: "Xmas Fruit Cake",
    description:
      "Our Xmas Fruit Cake is a holiday favourite featuring nutty and fruity flavours. Mixed nuts and almonds provide a good crunch, and for a citrus kick, the nuts are also soaked in fresh orange juice before topping off the cake with a orange juice glaze.\r\nUsed with Less Sugar, Premium European Butter, and no alcohol.\r\nAll our cookies are baked to order and will be ready to be delivered to you within 2-4 working days of placing your order.",
    about: {
      ingredients:
        "Flour, butter, sugar, brown sugar, salt, vanilla essence, baking soda, cinnamon, eggs, chocolate chips, coca powder, rolled oats",
      allergens: "May contain gluten and tree nuts.",
      packaging:
        "Take your pick between recyclable kraft pouches or BPA-free jars.",
      storage: "",
    },
    //Note: price details below are mocked up with details from Chocolate Chip Cookies

    price: [
      {
        weight: "100g",
        packaging: "Kraft Pouch",
        sgdPrice: 5.8,
      },
      {
        weight: "200g",
        packaging: "Kraft Pouch",
        sgdPrice: 11.0,
      },
      {
        weight: "100g",
        packaging: "Bottle",
        sgdPrice: 8.3,
      },
      {
        weight: "150g",
        packaging: "Bottle",
        sgdPrice: 13.0,
      },
      {
        weight: "350g",
        packaging: "Bottle",
        sgdPrice: 29.0,
      },
    ],
    image: [
      { packaging: "main", imageSrc: "" },
      { packaging: "Bottle", imageSrc: "" },
      { packaging: "Kraft Pouch", imageSrc: "" },
    ],
  },
  {
    name: "Sea Salt Black Sesame Cookie",
    description:
      "The quintessential sea salt cookie but elevated by pairing it with the deep nutty flavors of black sesame.\r\nAll our cookies are baked to order and will be ready to be delivered to you within 2-4 working days of placing your order.",
    about: {
      ingredients:
        "Flour, butter, sugar, brown sugar, salt, vanilla essence, baking soda, cinnamon, eggs, chocolate chips, coca powder, rolled oats.",
      allergens: "May contain gluten and tree nuts.",
      packaging:
        "Take your pick between recyclable kraft pouches or BPA-free jars.",
      storage:
        "To preserve freshness, all our cookies are sealed in air-tight sustainable packaging",
    },
    //Note: price details below are mocked up with details from Chocolate Chip Cookies

    price: [
      {
        weight: "100g",
        packaging: "Kraft Pouch",
        sgdPrice: 5.8,
      },
      {
        weight: "200g",
        packaging: "Kraft Pouch",
        sgdPrice: 11.0,
      },
      {
        weight: "100g",
        packaging: "Bottle",
        sgdPrice: 8.3,
      },
      {
        weight: "150g",
        packaging: "Bottle",
        sgdPrice: 13.0,
      },
      {
        weight: "350g",
        packaging: "Bottle",
        sgdPrice: 29.0,
      },
    ],
    image: [
      { packaging: "main", imageSrc: "" },
      { packaging: "Bottle", imageSrc: "" },
      { packaging: "Kraft Pouch", imageSrc: "" },
    ],
  },
  {
    name: "Macadamia Chocolate Cookies", //details below filled in with details in protoype
    description:
      "Our Macadamia Chocolate Chip Cookies are the perfect blend of crunchy macadamia nut,sweetchocolatechips andchewycrust.\r\nAll our cookies are baked to order and will be ready to be delivered to you within 2-4 working days of placing your order.",
    about: {
      ingredients:
        "Flour, butter, sugar, brown sugar, salt, vanilla essence, baking soda, cinnamon, eggs, chocolate chips, coca powder, rolled oats.",
      allergens: "May contain gluten and tree nuts.",
      packaging:
        "Take your pick between recyclable kraft pouches or BPA-free jars.",
      storage:
        "To preserve freshness, all our cookies are sealed in air-tight sustainable packaging",
    },
    price: [
      {
        weight: "100g",
        packaging: "Kraft Pouch",
        sgdPrice: 6.3,
      },
      {
        weight: "200g",
        packaging: "Kraft Pouch",
        sgdPrice: 12.0,
      },
      {
        weight: "100g",
        packaging: "Bottle",
        sgdPrice: 9.3,
      },
      {
        weight: "150g",
        packaging: "Bottle",
        sgdPrice: 14.0,
      },

      {
        weight: "350g",
        packaging: "Bottle",
        sgdPrice: 31.0,
      },
    ],
    image: [
      { packaging: "main", imageSrc: "" },
      { packaging: "Bottle", imageSrc: "" },
      { packaging: "Kraft Pouch", imageSrc: "" },
    ],
  },
  {
    // name: "Sea Salt Chocolate Chip",
    name: "Sea Salt Chocolate Cookies", //details below filled in with details in protoype
    description:
      "The classic chocolate chip but elevated with sea salt for the perfect balance of sweet and savoury flavour.\r\nAll our cookies are baked to order and will be ready to be delivered to you within 2-4 working days of placing your order.",
    about: {
      ingredients:
        "Flour, butter, sugar, brown sugar, salt, vanilla essence, baking soda, cinnamon, eggs, chocolate chips, coca powder, rolled oats.",
      allergens: "May contain gluten and tree nuts.",
      packaging:
        "Take your pick between recyclable kraft pouches or BPA-free jars.",
      storage:
        "To preserve freshness, all our cookies are sealed in air-tight sustainable packaging",
    },
    price: [
      {
        weight: "100g",
        packaging: "Kraft Pouch",
        sgdPrice: 5.8,
      },
      {
        weight: "100g",
        packaging: "Bottle",
        sgdPrice: 8.3,
      },
      {
        weight: "150g",
        packaging: "Bottle",
        sgdPrice: 13,
      },
      {
        weight: "200g",
        packaging: "Kraft Pouch",
        sgdPrice: 11,
      },
      {
        weight: "350g",
        packaging: "Bottle",
        sgdPrice: 29,
      },
    ],
    image: [
      { packaging: "main", imageSrc: "" },
      { packaging: "Bottle", imageSrc: "" },
      { packaging: "Kraft Pouch", imageSrc: "" },
    ],
  },
  {
    // name: "Double Chocolate Chip Cookies",
    name: "Double Choco Chip Cookies",
    description:
      "Crunchy and packed with cocoa goodness, our double chocolate chip cookies are perfect for anyone looking to satisfy their chocolate cravings!\r\nAll our cookies are baked to order and will be ready to be delivered to you within 2-4 working days of placing your order.",
    about: {
      ingredients:
        "Flour, butter, sugar, brown sugar, salt, vanilla essence, baking soda, cinnamon, eggs, chocolate chips, coca powder, rolled oats.",
      allergens: "May contain gluten and tree nuts.",
      packaging:
        "Take your pick between recyclable kraft pouches or BPA-free jars.",
      storage:
        "To preserve freshness, all our cookies are sealed in air-tight sustainable packaging",
    },
    //Note: price details below are mocked up with details from Chocolate Chip Cookies

    price: [
      {
        weight: "100g",
        packaging: "Kraft Pouch",
        sgdPrice: 5.8,
      },
      {
        weight: "200g",
        packaging: "Kraft Pouch",
        sgdPrice: 11.0,
      },
      {
        weight: "100g",
        packaging: "Bottle",
        sgdPrice: 8.3,
      },
      {
        weight: "150g",
        packaging: "Bottle",
        sgdPrice: 13.0,
      },
      {
        weight: "350g",
        packaging: "Bottle",
        sgdPrice: 29.0,
      },
    ],
    image: [
      { packaging: "main", imageSrc: "" },
      { packaging: "Bottle", imageSrc: "" },
      { packaging: "Kraft Pouch", imageSrc: "" },
    ],
  },
  {
    name: "Chocolate Chip Cookies", //details below filled in with details in protoype
    description:
      "Melt-in-your mouth and packed with chunks of chocolate goodness, our signature chocolate chip cookies are perfect if you are looking to satisfy your sweet tooth!\r\nAll our cookies are baked to order and will be ready to be delivered to you within 2-4 working days of placing your order.",
    about: {
      ingredients:
        "Flour, butter, sugar, brown sugar, salt, vanilla essence, baking soda, cinnamon, eggs, chocolate chips, coca powder, rolled oats.",
      allergens: "May contain gluten and tree nuts.",
      packaging:
        "Take your pick between recyclable kraft pouches or BPA-free jars.",
      storage:
        "To preserve freshness, all our cookies are sealed in air-tight sustainable packaging",
    },
    price: [
      {
        weight: "100g",
        packaging: "Kraft Pouch",
        sgdPrice: 5.8,
      },
      {
        weight: "200g",
        packaging: "Kraft Pouch",
        sgdPrice: 11.0,
      },
      {
        weight: "100g",
        packaging: "Bottle",
        sgdPrice: 8.3,
      },
      {
        weight: "150g",
        packaging: "Bottle",
        sgdPrice: 13.0,
      },
      {
        weight: "350g",
        packaging: "Bottle",
        sgdPrice: 29.0,
      },
    ],
    image: [
      { packaging: "main", imageSrc: "" },
      { packaging: "Bottle", imageSrc: "" },
      { packaging: "Kraft Pouch", imageSrc: "" },
    ],
  },
  {
    name: "Pecan Butterscotch Cookies", //details below filled in with details in protoype
    description:
      "Crunchy cookies packed with nutty and caramel notes.\r\nAll our cookies are baked to order and will be ready to be delivered to you within 2-4 working days of placing your order.",
    about: {
      ingredients:
        "Flour, butter, sugar, brown sugar, salt, vanilla essence, baking soda, cinnamon, eggs, chocolate chips, coca powder, rolled oats.",
      allergens: "May contain gluten and tree nuts.",
      packaging:
        "Take your pick between recyclable kraft pouches or BPA-free jars.",
      storage:
        "To preserve freshness, all our cookies are sealed in air-tight sustainable packaging",
    },
    price: [
      {
        weight: "100g",
        packaging: "Kraft Pouch",
        sgdPrice: 5.8,
      },
      {
        weight: "100g",
        packaging: "Bottle",
        sgdPrice: 8.3,
      },
      {
        weight: "150g",
        packaging: "Bottle",
        sgdPrice: 13,
      },
      {
        weight: "200g",
        packaging: "Kraft Pouch",
        sgdPrice: 11,
      },
      {
        weight: "350g",
        packaging: "Bottle",
        sgdPrice: 29,
      },
    ],
    image: [
      { packaging: "main", imageSrc: "" },
      { packaging: "Bottle", imageSrc: "" },
      { packaging: "Kraft Pouch", imageSrc: "" },
    ],
  },
  {
    name: "Oatmeal Cranberry Cookies", //details below filled in with details in protoype
    description:
      "A healthier choice cookie with a crunchy oatmeal texture and sweetened with cranberries.\r\nAll our cookies are baked to order and will be ready to be delivered to you within 2-4 working days of placing your order.",
    about: {
      ingredients:
        "Flour, butter, sugar, brown sugar, salt, vanilla essence, baking soda, cinnamon, eggs, chocolate chips, coca powder, rolled oats.",
      allergens: "May contain gluten and tree nuts.",
      packaging:
        "Take your pick between recyclable kraft pouches or BPA-free jars.",
      storage:
        "To preserve freshness, all our cookies are sealed in air-tight sustainable packaging",
    },
    price: [
      {
        weight: "100g",
        packaging: "Kraft Pouch",
        sgdPrice: 5.8,
      },
      {
        weight: "100g",
        packaging: "Bottle",
        sgdPrice: 8.3,
      },
      {
        weight: "150g",
        packaging: "Bottle",
        sgdPrice: 13,
      },
      {
        weight: "200g",
        packaging: "Kraft Pouch",
        sgdPrice: 11,
      },
      {
        weight: "350g",
        packaging: "Bottle",
        sgdPrice: 29,
      },
    ],
    image: [
      { packaging: "main", imageSrc: "" },
      { packaging: "Bottle", imageSrc: "" },
      { packaging: "Kraft Pouch", imageSrc: "" },
    ],
  },
];

module.exports = { products };
