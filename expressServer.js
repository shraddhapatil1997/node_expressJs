import express from "express"
import cors from "cors"
import connectDB from "./config/db.js";

const port = 5000;

const app = express();
app.use(cors());

// connectDB()

const images = [
    {
      Id:1,
      Productimg: "/food/manchurian.jpg",
      productName: "Manchurian",
      Price: 200,
      quantity:0
    },
    { Id:2,Productimg: "/food/biryani.jpg", productName: "Biryani", Price: 400 },
    {Id:3, Productimg: "/food/samosa.jpg", productName: "Samosa", Price: 500 },
    { Id:4,Productimg: "/food/spageti.jpeg", productName: "Spageti", Price: 600},
    {Id:5, Productimg: "/food/panipuri.jpg", productName: "Panipuri", Price: 100},
    { Id:6,Productimg: "/food/chicken.jpg", productName: "Chicken", Price: 400 },
  ];

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/images", (req, res) => {
  res.send(images);
});

app.get("/images/:id", (req, res) => {
    images.forEach(product => {
        if(req.params.id == product.id){
            res.send(product);
        }
    });
  res.send(images);
});

app.listen(port, ()=>{
  console.log(`listening on port`);
});
