import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "wood",
      price: 100,
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    },
    {
      id: 2,
      name: "metal",
      price: 200,
      image: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg",
    },
    {
      id: 3,
      name: "steel",
      price: 300,
      image:
        "https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg",
    },
    {
      id: 4,
      name: "coding",
      price: 300,
      image:
        "https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg",
    },
  ];

  if (req.query.search) {
    const searchTerm = req.query.search.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.includes(searchTerm)
    );
    res.send(filteredProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3300;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
