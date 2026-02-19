const buyNow = async (book) => {
  try {
    const response = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: "Harshitha",
        productName: book.title,
        productImage: book.image,
        price: book.price,
        status: "processing",
      }),
    });

    const data = await response.json();
    console.log(data);

    alert("Order Placed Successfully 🎉");
  } catch (error) {
    console.log(error);
  }
};
