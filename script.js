const frutas = document.querySelector(".fruits");
const bebidas = document.querySelector(".drinks");
const higiene = document.querySelector(".hygiene");

function createCard(produtos) {
  for (let i = 0; i < produtos.length; i++) {
    const product = produtos[i];
    const productCard = createList(product);
    if (product.category == "Frutas") {
      frutas.appendChild(productCard);
    }
    if (product.category == "Bebidas") {
      bebidas.appendChild(productCard);
    }
    if (product.category == "Higiene") {
      higiene.appendChild(productCard);
    }
  }
}
createCard(products);

function createList(itens) {
  const productCard = document.createElement("li");
  const productImg = document.createElement("img");
  const productMain = document.createElement("main");
  const productTitle = document.createElement("h1");
  const productCategory = document.createElement("h5");
  const productPrice = document.createElement("strong");

  productCard.appendChild(productImg);
  productCard.appendChild(productMain);
  productMain.appendChild(productTitle);
  productMain.appendChild(productCategory);
  productMain.appendChild(productPrice);

  productCard.classList = "product";
  productImg.classList = "product-img";
  productMain.classList = "product-main";
  productTitle.classList = "product-title";
  productCategory.classList = "product-category";
  productPrice.classList = "product-price";

  productImg.src =
    itens.image === undefined ? "./img/products/no-img.svg" : itens.image;
  productTitle.innerText = itens.title;
  productCategory.innerText = itens.category;
  productPrice.innerText = itens.price;

  return productCard;
}
