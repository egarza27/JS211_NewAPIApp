let arrayOfProducts;

const goButton = document.getElementById("goButton");

const blushButton = document.getElementById("blushButton");

const bronzerButton = document.getElementById("bronzerButton");

const eyeshadowButton = document.getElementById("eyeshadowButton");

const foundationButton = document.getElementById("foundationButton");

const liplinerButton = document.getElementById("liplinerButton");

const lipstickButton = document.getElementById("lipstickButton");

const mascaraButton = document.getElementById("mascaraButton");

window.onload = function () {
  fetchMakeupProducts();
};

const fetchMakeupProducts = () => {
  fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=3&price_less_than=20"
  )
    .then((res) => res.json())
    .then((post) => (arrayOfProducts = post));
};

const displayProducts = (arr) => {
  const makeupList = document.getElementById("makeupList");
  arr.map((post, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = post.image_link;
    const text = document.createTextNode(
      `${post.name}, Rating: ${post.rating}, Price: $${post.price}`
    );
    li.appendChild(text);
    li.appendChild(img);
    makeupList.appendChild(li);
  });
};

const filterBlushArray = (arr) => {
  const blushList = document.getElementById("blushList");
  const filteredBlushProducts = arr.filter((item) => {
    return item["product_type"] === "blush";
  });
  filteredBlushProducts.map((post, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = post.image_link;
    const text = document.createTextNode(
      `${post.name}, Rating: ${post.rating}, Price: $${post.price}`
    );

    li.appendChild(text);
    blushList.appendChild(li);
    li.appendChild(img);
  });
};

const filterBronzerArray = (arr) => {
  const bronzerList = document.getElementById("bronzerList");
  const filteredBronzerProducts = arr.filter((item) => {
    return item["product_type"] === "bronzer";
  });
  filteredBronzerProducts.map((post, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = post.image_link;
    const text = document.createTextNode(
      ` 
      ${post.name}, Rating: ${post.rating}, Price: $${post.price}`
    );
    li.appendChild(text);
    li.appendChild(img);
    bronzerList.appendChild(li);
  });
};

const filterLiplinerArray = (arr) => {
  const liplinerList = document.getElementById("liplinerList");
  const filteredLiplinerProducts = arr.filter((item) => {
    return item["product_type"] === "lip_liner";
  });
  filteredLiplinerProducts.map((post, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = post.image_link;
    const text = document.createTextNode(
      `${post.name}, Rating: ${post.rating}, Price: $${post.price}`
    );
    li.appendChild(text);
    li.appendChild(img);
    liplinerList.appendChild(li);
  });
};

const filterLipstickArray = (arr) => {
  const lipstickList = document.getElementById("lipstickList");
  const filteredLipstickProducts = arr.filter((item) => {
    return item["product_type"] === "lipstick";
  });
  filteredLipstickProducts.map((post, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = post.image_link;
    const text = document.createTextNode(
      `${post.name}, Rating: ${post.rating}, Price: $${post.price}`
    );
    li.appendChild(text);
    li.appendChild(img);
    lipstickList.appendChild(li);
  });
};

const filterMascaraArray = (arr) => {
  const mascaraList = document.getElementById("mascaraList");
  const filteredMascaraProducts = arr.filter((item) => {
    return item["product_type"] === "mascara";
  });
  filteredMascaraProducts.map((post, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = post.image_link;
    const text = document.createTextNode(
      `${post.name}, Rating: ${post.rating}, Price: $${post.price}`
    );
    li.appendChild(text);
    li.appendChild(img);
    mascaraList.appendChild(li);
  });
};

const filterEyeshadowArray = (arr) => {
  const eyeshadowList = document.getElementById("eyeshadowList");
  const filteredEyeshadowProducts = arr.filter((item) => {
    return item["product_type"] === "eyeshadow";
  });
  filteredEyeshadowProducts.map((post, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = post.image_link;
    const text = document.createTextNode(
      `${post.name}, Rating: ${post.rating}, Price: $${post.price}`
    );
    li.appendChild(text);
    li.appendChild(img);
    eyeshadowList.appendChild(li);
  });
};

//*---------------DOM FILTER FUNCTIONS-----------------

goButton.addEventListener("click", (e) => {
  displayProducts(arrayOfProducts);
});

blushButton.addEventListener("click", (e) => {
  filterBlushArray(arrayOfProducts);
});

bronzerButton.addEventListener("click", (e) => {
  filterBronzerArray(arrayOfProducts);
});

liplinerButton.addEventListener("click", (e) => {
  filterLiplinerArray(arrayOfProducts);
});

mascaraButton.addEventListener("click", (e) => {
  filterMascaraArray(arrayOfProducts);
});

eyeshadowButton.addEventListener("click", (e) => {
  filterEyeshadowArray(arrayOfProducts);
});

// TODO: create a function that filters by search parameters
