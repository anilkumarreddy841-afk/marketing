async function getPrice() {
    let fruit = document.getElementById("fruit").value;

    try {
        const response = await fetch("http://localhost:3000/price/" + fruit);

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

        document.getElementById("price").innerText =
            "Price: ₹" + data.currentPrice;

        document.getElementById("future").innerText =
            "Future Price: ₹" + data.futurePrice;

    } catch (error) {
        console.error(error);
        alert("Failed to fetch data. Check backend server.");
    }
}