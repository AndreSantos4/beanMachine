// script.js
const defaultImg = 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png'; // imagem padrão

const products = [
  // Bebidas
  { id: 1, name: 'Smothie Ananás e Coco', category: 'drink', price: 60, menuAllowed: ['lunch'], ingredients: ['Água','Gasosa','Gelo','Leite','Hortelã'] },
  { id: 2, name: 'Smothie Frutos Vermelhos', category: 'drink', price: 60, menuAllowed: ['lunch'], ingredients: ['Água','Gasosa','Gelo','Morango','Frutos Vermelhos','Hortelã'], img:'https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-cherry-strawberry-vanilla-smoothie-with-a-solid-png-image_12734226.png'},
  { id: 3, name: 'Sumo de Laranja Natural', category: 'drink', price: 50, menuAllowed: ['brunch', 'lunch'], ingredients: ['Água','Gasosa','Gelo','Lima','Laranja','Hortelã'], img:'https://static.vecteezy.com/system/resources/thumbnails/036/258/856/small/ai-generated-fresh-orange-fruit-juice-isolated-on-transparent-background-free-png.png'},
  { id: 4, name: 'Sumo Tropical', category: 'drink', price: 50, menuAllowed: ['brunch', 'lunch'], ingredients: ['Água','Gasosa','Gelo','Leite','Manga'] },
  { id: 5, name: 'Limonada', category: 'drink', price: 50, menuAllowed: ['brunch', 'lunch'], ingredients: ['Água','Gasosa','Gelo','Lima','Limão','Hortelã'], img:'https://png.pngtree.com/png-clipart/20240418/original/pngtree-summer-healthy-lemonade-png-image_14879001.png'},
  // Cafés
  { id: 6, name: 'Café Expresso', category: 'drink', price: 40, ingredients: ['Café','2x Água'] },
  { id: 7, name: 'Caramel Machiatto', category: 'drink', price: 45, ingredients: ['Gelo','Café','Água','Leite'] },
  { id: 8, name: 'Frapuccino Mocha', category: 'drink', price: 45, ingredients: ['Gelo','Café','Água','Leite'] },
  // Bebida com álcool
  { id: 9, name: 'Cerveja Artesanal', category: 'drink', price: 50, ingredients: ['Cachaça','Cevada','Água','Gelo'] },
  { id: 10, name: 'Mimosa', category: 'drink', price: 60, ingredients: ['Vodka','Gelo','Água','Morango'] },
  { id: 11, name: 'Bellini', category: 'drink', price: 60, ingredients: ['Vodka','Gelo','Água','Manga'] },
  // Comidas Lunch
  { id: 12, name: 'Double Cheese Bacon', category: 'food', price: 110, menuAllowed: ['lunch'], ingredients: ['Pão','Cheddar','Bacon','Tomate','Hambúrguer','Alface'] },
  { id: 13, name: 'Strogonoff de Frango', category: 'food', price: 110, menuAllowed: ['lunch'], ingredients: ['Sal','Asinhas de Frango','Natas','Arroz','Cogumelos','Batata'] },
  { id: 14, name: 'Bife à BeanMachine', category: 'food', price: 110, menuAllowed: ['lunch'], ingredients: ['Sal','Natas','Ovos','Arroz','Batata','Carne'] },
  { id: 15, name: 'Bacalhau com natas', category: 'food', price: 110, menuAllowed: ['lunch'], ingredients: ['Sal','Cebola','Natas','Oregãos','Peixe','Batata'] },
  { id: 16, name: 'Polvo à Lagareiro', category: 'food', price: 110, menuAllowed: ['lunch'], ingredients: ['Sal','Cebola','Oregãos','Alho','Peixe','Batata'] },
  { id: 17, name: 'Ramen Spicy Chicken', category: 'food', price: 110, menuAllowed: ['lunch'], ingredients: ['Sal','Camarão','Asinhas de Frango','Tomate','Noodles','Ovos'] },
  // Sobremesas Lunch
  { id: 18, name: 'Cheesecake Oreo', category: 'dessert', price: 60, menuAllowed: ['lunch'], ingredients: ['Farinha','Natas','Leite','Bolacha','Açúcar'] },
  { id: 19, name: 'Gelado Açai', category: 'dessert', price: 60, menuAllowed: ['lunch'], ingredients: ['Morango','Natas','Banana','Leite','Açúcar'] },
  { id: 20, name: 'Panna Cotta Silvestre', category: 'dessert', price: 60, menuAllowed: ['lunch'], ingredients: ['Farinha','Natas','Frutos Vermelhos','Leite','Açúcar'] },
  { id: 21, name: 'Pudim Flan', category: 'dessert', price: 60, menuAllowed: ['lunch'], ingredients: ['Farinha','Natas','Ovos','Leite','Açúcar'] },
  // Comidas Brunch
  { id: 22, name: 'Quiche Lorraine', category: 'food', price: 80, menuAllowed: ['brunch'], ingredients: ['Sal','Farinha','Bacon','Leite','Ovos'] },
  { id: 23, name: 'Tosta de Pulled Pork', category: 'food', price: 80, menuAllowed: ['brunch'], ingredients: ['Carne de Porco','Tomate','Pão','Alface','Cheddar','Sal'] },
  { id: 24, name: 'Tosta de Frango', category: 'food', price: 80, menuAllowed: ['brunch'], ingredients: ['Tomate','Asinha de Frango','Cheddar','Sal','Pão','Alface'] },
  { id: 25, name: 'Ovos mexidos e Bacon', category: 'food', price: 80, menuAllowed: ['brunch'], ingredients: ['Sal','Oregãos','Bacon','Leite','Ovos'] },
  { id: 26, name: 'Ovos Rotos', category: 'food', price: 80, menuAllowed: ['brunch'], ingredients: ['Sal','Oregãos','Bacon','Batatas','Ovos'] },
  // Menus
  { id: 100, name: 'Menu Brunch', category: 'menu', price: 120, menuType: 'brunch', ingredients: [] },
  { id: 101, name: 'Menu Lunch', category: 'menu', price: 180, menuType: 'lunch', ingredients: [] },
];

let filteredProducts = [...products];
let cart = [];
let selectedMenuItems = { food: null, drink: null, dessert: null };

function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  filteredProducts.forEach(product => {
    const imgSrc = product.img || defaultImg;
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img class="product-img" src="${imgSrc}" alt="${product.name}">
      <p>${product.name}</p>
      <small>${product.category.charAt(0).toUpperCase() + product.category.slice(1)} • ${product.price}$</small>
      <button onclick="addToCart(${product.id})">Adicionar</button>
    `;
    grid.appendChild(card);
  });
}

function filterCategory(category) {
  if (category === 'all') filteredProducts = [...products];
  else filteredProducts = products.filter(p => p.category === category);
  renderProducts();
}

function searchProducts() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  filteredProducts = products.filter(p => p.name.toLowerCase().includes(query));
  renderProducts();
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product.category === 'menu') {
    // Reset selections when opening modal
    selectedMenuItems = { food: null, drink: null, dessert: null };
    document.getElementById('modal').dataset.menuId = id;
    renderMenuSelection();
    document.getElementById('modal').style.display = 'flex';
  } else {
    const existing = cart.find(item => item.id === product.id && !item.included);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    updateCart();
  }
}

function renderMenuSelection() {
  const menuId = parseInt(document.getElementById('modal').dataset.menuId);
  const menu = products.find(p => p.id === menuId);
  if (!menu) {
    return;
  }
  const menuType = menu.menuType;

  const menuItems = document.getElementById('menuItems');
  menuItems.innerHTML = '';

  // Título do modal baseado no tipo de menu
  const modalTitle = document.querySelector('#modal h3');
  if (menuType === 'lunch') {
    modalTitle.textContent = 'Seleciona 1 Comida, 1 Bebida e 1 Sobremesa';
  } else {
    modalTitle.textContent = 'Seleciona 1 Comida e 1 Bebida';
  }

  // Comida
  const foodItems = products.filter(p => p.menuAllowed && p.menuAllowed.includes(menuType) && p.category === 'food');
  if (foodItems.length) {
    const foodSection = document.createElement('div');
    foodSection.className = 'menu-section';
    foodSection.innerHTML = `
      <h4 class="menu-section-title">🍽️ Comida</h4>
      <div class="menu-options"></div>
    `;
    
    const foodGrid = foodSection.querySelector('.menu-options');
    foodItems.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'menu-option-card' + (selectedMenuItems.food === item.id ? ' selected' : '');
      btn.onclick = () => {
        selectedMenuItems.food = item.id;
        renderMenuSelection();
        updateMenuButton();
      };
      btn.innerHTML = `
        <img src="${item.img || defaultImg}" alt="${item.name}">
        <span class="menu-option-name">${item.name}</span>
      `;
      foodGrid.appendChild(btn);
    });
    menuItems.appendChild(foodSection);
  }

  // Bebida
  const drinkItems = products.filter(p => p.menuAllowed && p.menuAllowed.includes(menuType) && p.category === 'drink');
  if (drinkItems.length) {
    const drinkSection = document.createElement('div');
    drinkSection.className = 'menu-section';
    drinkSection.innerHTML = `
      <h4 class="menu-section-title">🥤 Bebida</h4>
      <div class="menu-options"></div>
    `;
    
    const drinkGrid = drinkSection.querySelector('.menu-options');
    drinkItems.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'menu-option-card' + (selectedMenuItems.drink === item.id ? ' selected' : '');
      btn.onclick = () => {
        selectedMenuItems.drink = item.id;
        renderMenuSelection();
        updateMenuButton();
      };
      btn.innerHTML = `
        <img src="${item.img || defaultImg}" alt="${item.name}">
        <span class="menu-option-name">${item.name}</span>
      `;
      drinkGrid.appendChild(btn);
    });
    menuItems.appendChild(drinkSection);
  }

  // Sobremesa só para Lunch
  if (menuType === 'lunch') {
    const dessertItems = products.filter(p => p.menuAllowed && p.menuAllowed.includes('lunch') && p.category === 'dessert');
    if (dessertItems.length) {
      const dessertSection = document.createElement('div');
      dessertSection.className = 'menu-section';
      dessertSection.innerHTML = `
        <h4 class="menu-section-title">🍰 Sobremesa</h4>
        <div class="menu-options"></div>
      `;
      
      const dessertGrid = dessertSection.querySelector('.menu-options');
      dessertItems.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'menu-option-card' + (selectedMenuItems.dessert === item.id ? ' selected' : '');
        btn.onclick = () => {
          selectedMenuItems.dessert = item.id;
          renderMenuSelection();
          updateMenuButton();
        };
        btn.innerHTML = `
          <img src="${item.img || defaultImg}" alt="${item.name}">
          <span class="menu-option-name">${item.name}</span>
        `;
        dessertGrid.appendChild(btn);
      });
      menuItems.appendChild(dessertSection);
    }
  }

  updateMenuButton();
}

function updateMenuButton() {
  const menuId = parseInt(document.getElementById('modal').dataset.menuId);
  const menu = products.find(p => p.id === menuId);
  const addBtn = document.getElementById('addMenuBtn');
  
  if (menu.menuType === 'lunch') {
    addBtn.disabled = !(selectedMenuItems.food && selectedMenuItems.drink && selectedMenuItems.dessert);
  } else {
    addBtn.disabled = !(selectedMenuItems.food && selectedMenuItems.drink);
  }
}

function addMenuToCart() {
  const menuId = parseInt(document.getElementById('modal').dataset.menuId);
  const menu = products.find(p => p.id === menuId);
  const included = [];
  if (selectedMenuItems.food) included.push(products.find(p => p.id === selectedMenuItems.food));
  if (selectedMenuItems.drink) included.push(products.find(p => p.id === selectedMenuItems.drink));
  if (menu.menuType === 'lunch' && selectedMenuItems.dessert) included.push(products.find(p => p.id === selectedMenuItems.dessert));

  const existing = cart.find(item =>
    item.id === menu.id &&
    item.included &&
    item.included[0]?.id === included[0]?.id &&
    item.included[1]?.id === included[1]?.id &&
    (menu.menuType !== 'lunch' || item.included[2]?.id === included[2]?.id)
  );
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...menu, included, qty: 1 });
  }
  closeModal();
  updateCart();
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  selectedMenuItems = { food: null, drink: null, dessert: null };
}

function updateCart() {
  const list = document.getElementById('cartList');
  list.innerHTML = '';
  let total = 0;
  cart.forEach((item, idx) => {
    let includedNames = '';
    if (item.included) {
      item.included.forEach(sub => {
        includedNames += `<br><small style="margin-left:10px;">- ${sub.name}</small>`;
      });
    }
    list.innerHTML += `
      <div>
        <p>
          <b>${item.name}</b>
          <span style="float:right">${item.price}$</span>
        </p>
        ${includedNames}
        <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
          <button onclick="changeQty(${idx}, -1)" style="background:#222b40;color:#fff;border:none;border-radius:4px;width:28px;height:28px;font-size:18px;cursor:pointer;">−</button>
          <input type="number" min="1" value="${item.qty}" onchange="setQty(${idx}, this.value)" style="width:40px;text-align:center;border-radius:4px;border:none;padding:4px;">
          <button onclick="changeQty(${idx}, 1)" style="background:#222b40;color:#fff;border:none;border-radius:4px;width:28px;height:28px;font-size:18px;cursor:pointer;">+</button>
        </div>
      </div>
    `;
    total += item.price * item.qty;
  });
  document.querySelector('.cart-footer button').innerText = `Concluir (${total}$)`;
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty < 1) {
    cart.splice(idx, 1);
  }
  updateCart();
}

function setQty(idx, value) {
  const qty = Math.max(1, parseInt(value) || 1);
  cart[idx].qty = qty;
  updateCart();
}

function goToPreparation() {
  let html = '';
  cart.forEach(item => {
    html += `<div class="product-divider">
      <b>${item.qty}x ${item.name}</b>`;
    
    // Para menus, mostra os items incluídos
    if (item.included && item.included.length) {
      item.included.forEach(sub => {
        html += `<br><span style="margin-left:16px;font-weight:500;">- ${sub.name}</span>`;
        if (sub.ingredients && sub.ingredients.length) {
          html += `<ul class="ingredient-list">`;
          sub.ingredients.forEach(ing => {
            html += `<li>${ing}</li>`;
          });
          html += `</ul>`;
        }
      });
    } 
    // Para items individuais, mostra os ingredientes diretamente
    else if (item.ingredients && item.ingredients.length) {
      html += `<ul class="ingredient-list">`;
      item.ingredients.forEach(ing => {
        html += `<li>${ing}</li>`;
      });
      html += `</ul>`;
    }
    html += `</div>`;
  });
  document.getElementById('productionList').innerHTML = html || '<p style="text-align:center;">Nenhum produto no carrinho.</p>';
  document.getElementById('productionModal').style.display = 'flex';
}

function closeProduction() {
  document.getElementById('productionModal').style.display = 'none';
}

// NOVO MODAL DE RESUMO DO PEDIDO
function completeOrder() {
  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  // Remove qualquer modal de resumo antigo antes de abrir um novo
  closeOrderSummary();
  const summaryHtml = `
    <div class="order-summary-modal" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(20,24,40,0.85);display:flex;align-items:center;justify-content:center;z-index:200;">
      <div style="background:#23243a;padding:40px 32px;border-radius:20px;max-width:500px;width:95vw;box-shadow:0 8px 32px #0006;position:relative;">
        <button onclick="closeOrderSummary()" style="position:absolute;top:18px;right:24px;background:none;border:none;color:#fff;font-size:32px;cursor:pointer;">×</button>
        <h2 style="text-align:center;color:#6fcf97;">Resumo do Pedido</h2>
        <div style="margin-bottom:24px;">
          ${cart.map(item => `<p style="font-size:18px;margin:8px 0;"><b>${item.qty}x ${item.name}</b> <span style="float:right;">${item.price}$</span></p>`).join('')}
        </div>
        <h3 style="text-align:center;color:#fff;">Total: <span style="color:#6fcf97;">${total}$</span></h3>
        <button onclick="resetOrder()" class="reset-button" style="width:100%;margin-top:24px;">Resetar</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', summaryHtml);
}

function closeOrderSummary() {
  const modal = document.querySelector('.order-summary-modal');
  if (modal) modal.remove();
}

function resetOrder() {
  cart = [];
  filteredProducts = [...products];
  renderProducts();
  updateCart();
  closeOrderSummary();
  // Garante que todos os modais estejam fechados
  closeModal();
  closeProduction();
}

renderProducts();
