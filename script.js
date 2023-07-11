const main = document.querySelector(".products");
let products = [];


const trimText = (value, number) => {
  return value.substring(0, number) + "";
};

const listitems = (image, title, category, price) => {
  let Product = document.createElement("div");
  let Image = document.createElement("img");
  let Title = document.createElement("h2");
  let Category = document.createElement("h4");
  let Price = document.createElement("h3");
  let button = document.createElement("div");

  Product.classList.add("product");
  button.classList.add("sepeteAt");

  Image.src = image;
  Title.textContent = title;
  Category.textContent = category;
  Price.textContent = price + "Tl";
  button.textContent = "Sepete Ekle";
  button.innerHTML += `<i class='fas fa-cart-arrow-down'></i>`;

  Product.appendChild(Image);
  Product.appendChild(Title);
  Product.appendChild(Category);
  Product.appendChild(Price);
  Product.appendChild(button);
  main.appendChild(Product);
};



const getProducts = async () => {
  // ürünleri getirir
  let data = await fetch("https://fakestoreapi.com/products");
  let result = await data.json();
  products = result;
  products.map((item) => {
    listitems(item.image, trimText(item.title, 25), item.category, item.price);
  });
};

getSingleProduct = async () => {
  let data = await fetch("https://fakestoreapi.com/products/1"); // sadece 1. ürünü getirir
  let result = await data.json();
  singleProduct = result;
  listitems(
    singleProduct.image,
    trimText(singleProduct.title, 25),
    singleProduct.category,
    singleProduct.price
  );
};

const getLimitProduct = async () => {
  // limitli getirir 5 tane
  let data = await fetch("https://fakestoreapi.com/products?limit=5");
  let result = await data.json();
  products = result;
  products.map((item) => {
    listitems(item.image, trimText(item.title, 25), item.category, item.price);
  });
};

const sortProducts = (option) => {
  if (option === "artan") {
    getSortProduct(true);
  } else if (option === "azalan") {
    getSortProduct(false);
  }
};

const getSortProduct = async (ascending) => {
  let data = await fetch("https://fakestoreapi.com/products");
  let result = await data.json();

  products = result;
  products.sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
  main.innerHTML = "";
  products.map((item) => {
    listitems(item.image, trimText(item.title, 25), item.category, item.price);
  });
};
 

const getSeweleryProducts = async () => {
  // ürünleri getirir
  let data = await fetch("https://fakestoreapi.com/products/category/jewelery"); // sadece kuyumcuyu getirir
  let result = await data.json();
  products = result;
  main.innerHTML = "";
  products.map((item) => {
    listitems(item.image, trimText(item.title, 25), item.category, item.price);
  });
};
const getElectronicsProducts = async () => {
  // ürünleri getirir
  let data = await fetch("https://fakestoreapi.com/products/category/electronics"); // sadece Elektronik getirir
  let result = await data.json();
  products = result;
  main.innerHTML = "";
  products.map((item) => {
    listitems(item.image, trimText(item.title, 25), item.category, item.price);
  });
};
const getManClothingProducts = async () => {
  // ürünleri getirir
  let data = await  fetch("https://fakestoreapi.com/products/category/men's clothing"); // sadece Erkek Giyim getirir
  let result = await data.json();
  products = result;
  main.innerHTML = "";
  products.map((item) => {
    listitems(item.image, trimText(item.title, 25), item.category, item.price);
  });
};
const getWomenClothingProducts = async () => {
  // ürünleri getirir
  let data = await fetch("https://fakestoreapi.com/products/category/women's clothing"); // sadece Kadın Giyim getirir
  let result = await data.json();
  products = result;
  main.innerHTML = "";
  products.map((item) => {
    listitems(item.image, trimText(item.title, 25), item.category, item.price);
  });
};

getProducts();   


//getWomenClothingProducts(); // kadın 
// getManClothingProducts();  // erkkek 
// getElectronicsProducts(); // elektronik
//getSeweleryProducts();   // kuyumcu
//getLongProduct();       // fiyata gröe azalan
// getSortProduct();     // fiyata göre artan
// getLimitProduct();   // 5 tane limitli
// getProducts();      // tüm ürünler
//getSingleProduct(); // tek ürün
