let arrayOfProducts;

const goButton = document.getElementById("goButton");
const blushButton = document.getElementById("blush");

window.onload = function () {
  fetchMakeupProducts();
};

//TODO: store json data in an array

const fetchMakeupProducts = () => {
  fetch("http://makeup-api.herokuapp.com/api/v1/products.json?")
    .then((res) => res.json())
    .then((post) => (arrayOfProducts = post));
};

//TODO: create a filter function to filter through

const displayProducts = (arr) => {
  const makeupList = document.getElementById("makeupList");
  arr.map((post, index) => {
    const li = document.createElement("li");
    // const img = document.createElement("img");
    // img.src = post.image_link;
    const text = document.createTextNode(
      `Brand: ${post.brand}, Name: ${post.name}, Rate: ${post.rating}, Price: ${post.price} Product: ${post.product_type}`
    );
    li.appendChild(text);
    // li.appendChild(img);
    makeupList.appendChild(li);
  });
};

const filterBlushArray = (arrayOfProducts) => {
  const blushList = document.getElementById("blushList");
  blushList.innerHTML = "";
  const filteredBlushProducts = arrayOfProducts.filter((item) => {
    return item["product_type"] === "blush";
  });
  console.log(filteredBlushProducts);
  arrayOfProducts = filteredBlushProducts;
  return arrayOfProducts;
};

const filterBronzerArray = (arrayOfProducts) => {
  const filteredBronzerProducts = arrayOfProducts.filter((item) => {
    return item.product_type === "bronzer";
  });

  arrayOfProducts = filteredBronzerProducts;
  return arrayOfProducts;
};

const filterEyebrowArray = (arrayOfProducts) => {
  const filteredEyebrowProducts = arrayOfProducts.filter((item) => {
    return item.product_type === "eyebrow";
  });

  arrayOfProducts = filteredEyebrowProducts;
  return arrayOfProducts;
};

const filterEyelinerArray = (arrayOfProducts) => {
  const filteredEyelinerProducts = arrayOfProducts.filter((item) => {
    return item.product_type === "eyeliner";
  });

  arrayOfProducts = filteredEyelinerProducts;
  return arrayOfProducts;
};

const filterEyeshadowArray = (arrayOfProducts) => {
  const filteredEyeshadowProducts = arrayOfProducts.filter((item) => {
    return item.product_type === "eyeshadow";
  });

  arrayOfProducts = filteredEyeshadowProducts;
  return arrayOfProducts;
};

goButton.addEventListener("click", (e) => {
  displayProducts(arrayOfProducts);
});

blushButton.addEventListener("click", (i) => {
  displayProducts(arrayOfProducts);
});

// TODO: create a function that filters by search parameters
