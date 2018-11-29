const mongoose = require('mongoose');
const faker = require('faker');

const products = require('./controllers/products');
const types = require('./controllers/types');

const Product = (name, salePrice, costPrice, type, images) =>
  products.create({
    name,
    salePrice,
    costPrice,
    type,
    images
  });
const Type = (description, initials, icon) => types.create({
  initials,
  description,
  icon
});
const images = (index) => ([
  `https://picsum.photos/800/380?image=${index * 10 + 1}`,
  `https://picsum.photos/800/380?image=${index * 10 + 2}`,
  `https://picsum.photos/800/380?image=${index * 10 + 3}`,
  `https://picsum.photos/800/380?image=${index * 10 + 4}`,
])

mongoose.connect(process.env.DB_URL).then(async () => {

  const all = [
    await Type("grocery", "GR", "rest"),
    await Type("drinks", "DR", "coffee"),
    await Type("beauty", "BE", "shop"),
    await Type("electro", "EL", "laptop"),
    await Type("books", "BO", "book"),
    await Type("food", "FO", "home")
  ]

  console.log(all)

  console.log(await Product(faker.commerce.productName(), 105, 100, all[0]._id, images(0)))
  console.log(await Product(faker.commerce.productName(), 120, 100, all[1]._id, images(1)))
  console.log(await Product(faker.commerce.productName(), 120, 100, all[3]._id, images(2)))

  for (let index = 0; index < 20; index++) {
    const name = faker.commerce.productName();
    const costPrice = faker.commerce.price();
    const salePrice = costPrice * (index / 20 + 1);
    const type = all[index % 6]
    console.log(await Product(name, salePrice, costPrice, type._id, images(index + 3)));
  }

  process.exit();
});
