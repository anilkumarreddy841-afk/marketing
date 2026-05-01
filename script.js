function getPrice() {
    let fruit = document.getElementById("fruit").value;
    let price = 0;

    if (fruit === "apple") {
        price = 100;
    } else if (fruit === "banana") {
        price = 50;
    } else if (fruit === "mango") {
        price = 80;
    }

    document.getElementById("price").innerText = "Price: ₹" + price;

    // Future prediction (simple logic)
    let futurePrice = price + Math.floor(Math.random() * 20);
    document.getElementById("future").innerText = "Future Price: ₹" + futurePrice;
}