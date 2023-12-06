const express = require('express');

const app = express();

const port = 3005;

let products = [
  { id: 1, title: 'apple iphone 5', price: 320 },
  { id: 2, title: 'apple iphone 6', price: 420 },
  { id: 3, title: 'apple iphone 7', price: 520 },
  { id: 4, title: 'apple iphone 8', price: 620 },
];

app.get('/', (req, res) => {
  res.send('welcome to the express server');
});
app.get('/products', (req, res) => {
  res.send({
    products: products,
  });
});
app.get('/products/:id', (req, res) => {
  try {
    const id = Number(req.params.id);
    const product = products.find((product) => product.id === id);
    if (!product) {
      return res
        .status(404)
        .send({ message: `product was not found with this ${id}` });
    }
    res.send({
      product: product,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
