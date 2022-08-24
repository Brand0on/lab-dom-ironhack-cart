// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;

  const quantity = product.querySelector('.quantity input').value;

  const multiplication = Number(price) * Number(quantity);
  product.querySelector('.subtotal span').innerText = multiplication;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');

  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  for (i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  //const allProducts = document.querySelectorAll('.product');
  let sumTotal = 0;
  for (i = 0; i < allProducts.length; i++) {
    sumTotal += Number(
      allProducts[i].querySelector('.subtotal span').innerText
    );
  }
  document.querySelector('#total-value span').innerText = sumTotal;

  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove();
}

// ITERATION 5

function createProduct() {
  const nameProduct = document.getElementById('product-name').value;
  const productPrice = document.getElementById('product-price').value;
  const tbody = document.querySelector('#cart tbody');
  const newProduct = document.createElement('tr');
  newProduct.className = 'product';
  newProduct.innerHTML =
    '<td class="name"><span>product name place holder</span></td>' +
    '<td class="price">$<span> price place holder</span></td>' +
    '<td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>' +
    '<td class="subtotal">$<span>0</span></td>' +
    '<td class="action"><button class="btn btn-remove">Remove</button></td>';
  tbody.appendChild(newProduct);

  newProduct.querySelector('.name span').innerText = nameProduct;
  newProduct.querySelector('.price span').innerText = productPrice;
  newProduct
    .querySelector('.btn-remove')
    .addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createNew = document.getElementById('create');
  createNew.addEventListener('click', createProduct);

  const removeButtons = document.querySelectorAll('.btn-remove');

  for (i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }

  //... your code goes here
});
