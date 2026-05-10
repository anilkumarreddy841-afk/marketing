const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Fruit prices database (sample)
const fruitPrices = {
    apple: 100,
    banana: 50,
    mango: 80
};

// API route
app.get("/price/:fruit", (req, res) => {
    const fruit = req.params.fruit.toLowerCase();

    if (fruitPrices[fruit]) {
        let currentPrice = fruitPrices[fruit];
        let futurePrice = currentPrice + Math.floor(Math.random() * 20);

        res.json({
            fruit: fruit,
            currentPrice: currentPrice,
            futurePrice: futurePrice
        });
    } else {
        res.status(404).json({ message: "Fruit not found" });
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
}); 