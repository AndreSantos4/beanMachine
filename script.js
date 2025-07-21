// script.js
const defaultImg = 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png'; // imagem padrão

const products = [
  // Bebidas
  { id: 1, name: 'Smothie Ananás e Coco', category: 'drink', price: 60, menuAllowed: ['lunch'], ingredients: ['Água','Gasosa','Gelo','Leite','Hortelã'], img:'https://i.ibb.co/PZShrqdd/Smothie-Ananas.png' },
  { id: 2, name: 'Smothie Frutos Vermelhos', category: 'drink', price: 60, menuAllowed: ['lunch'], ingredients: ['Água','Gasosa','Gelo','Morango','Frutos Vermelhos','Hortelã'], img:'https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-cherry-strawberry-vanilla-smoothie-with-a-solid-png-image_12734226.png'},
  { id: 3, name: 'Sumo de Laranja Natural', category: 'drink', price: 50, menuAllowed: ['brunch', 'lunch'], ingredients: ['Água','Gasosa','Gelo','Lima','Laranja','Hortelã'], img:'https://i.ibb.co/cKPBzt4Z/Smothie-Frutos.png'},
  { id: 4, name: 'Sumo Tropical', category: 'drink', price: 50, menuAllowed: ['brunch', 'lunch'], ingredients: ['Água','Gasosa','Gelo','Leite','Manga'], img:'https://i.ibb.co/0yzQG38M/Sumo-Tropical.png' },
  { id: 5, name: 'Limonada', category: 'drink', price: 50, menuAllowed: ['brunch', 'lunch'], ingredients: ['Água','Gasosa','Gelo','Lima','Limão','Hortelã'], img:'https://i.ibb.co/xSjYBmSS/Limonada.png'},
  // Cafés
  { id: 6, name: 'Café Expresso', category: 'drink', price: 40, ingredients: ['Café','2* Água'], img:'https://i.ibb.co/5gnNg1zH/Expresso.png' },
  { id: 7, name: 'Caramel Machiatto', category: 'drink', price: 45, ingredients: ['Gelo','Café','Água','Leite'], img:'https://i.ibb.co/s0kF2nf/Caramel-Machiato.png' },
  { id: 8, name: 'Frapuccino Mocha', category: 'drink', price: 45, ingredients: ['Gelo','Café','Água','Leite'], img:'https://i.ibb.co/7FQ82ps/Frapuccino-Moch.png' },
  // Bebida com álcool
  { id: 9, name: 'Cerveja Artesanal', category: 'drink', price: 50, ingredients: ['Cachaça','Cevada','Água','Gelo'], img:'https://i.ibb.co/mCbxsYvC/Cerveja.png' },
  { id: 10, name: 'Mimosa', category: 'drink', price: 60, ingredients: ['Vodka','Gelo','Água','Morango'], img:'https://i.ibb.co/7JqJG0kq/Mimosa.png' },
  { id: 11, name: 'Bellini', category: 'drink', price: 60, ingredients: ['Vodka','Gelo','Água','Manga'], img:'https://i.ibb.co/rG0JPMwV/Bellini.png' },
  // Comidas Lunch
  { id: 12, name: 'Double Cheese Bacon', category: 'food', price: 110, menuAllowed: ['lunch'], ingredients: ['Pão','Cheddar','Bacon','Tomate','Hambúrguer','Alface'], img:'https://i.ibb.co/23QMcps5/Double-Chesse.png' },
  { id: 13, name: 'Strogonoff de Frango', category: 'food', price: 110, menuAllowed: ['lunch'], ingredients: ['Sal','Asinhas de Frango','Natas','Arroz','Cogumelos','Batata'], img:'https://i.ibb.co/fdQCD8p0/Strogonoff.png' },
  { id: 14, name: 'Bife à BeanMachine', category: 'food', price: 110, menuAllowed: ['lunch'], ingredients: ['Sal','Natas','Ovos','Arroz','Batata','Carne'], img:'https://i.ibb.co/NdsrNNhC/Bife-Bean.png' },
  { id: 15, name: 'Bacalhau com natas', category: 'food', price: 110, menuAllowed: ['lunch'], ingredients: ['Sal','Cebola','Natas','Oregãos','Peixe','Batata'], img:'https://i.ibb.co/39qYk1Jb/Bacalhau-Natas.png' },
  { id: 16, name: 'Polvo à Lagareiro', category: 'food', price: 110, menuAllowed: ['lunch'], ingredients: ['Sal','Cebola','Oregãos','Alho','Peixe','Batata'], img:'https://i.ibb.co/wFhwCHjQ/Polvo.png' },
  { id: 17, name: 'Ramen Spicy Chicken', category: 'food', price: 110, menuAllowed: ['lunch'], ingredients: ['Sal','Camarão','Asinhas de Frango','Tomate','Noodles','Ovos'], img:'https://i.ibb.co/TBYSszBM/Ramen.png' },
  // Sobremesas Lunch
  { id: 18, name: 'Cheesecake Oreo', category: 'dessert', price: 60, menuAllowed: ['lunch'], ingredients: ['Farinha','Natas','Leite','Bolacha','Açúcar'], img:'https://i.ibb.co/JRyJt3Qr/Oreo-Cheesecake.png' },
  { id: 19, name: 'Gelado Açai', category: 'dessert', price: 60, menuAllowed: ['lunch'], ingredients: ['Morango','Natas','Banana','Leite','Açúcar'], img:'https://i.ibb.co/cXSp9JkW/Acai.png' },
  { id: 20, name: 'Panna Cotta Silvestre', category: 'dessert', price: 60, menuAllowed: ['lunch'], ingredients: ['Farinha','Natas','Frutos Vermelhos','Leite','Açúcar'], img:'https://i.ibb.co/VcCRLHQc/Panna-Cota.png' },
  { id: 21, name: 'Pudim Flan', category: 'dessert', price: 60, menuAllowed: ['lunch'], ingredients: ['Farinha','Natas','Ovos','Leite','Açúcar'], img:'https://i.ibb.co/1tkspYBB/Pudim-Flan.png' },
  // Comidas Brunch
  { id: 22, name: 'Quiche Lorraine', category: 'food', price: 80, menuAllowed: ['brunch'], ingredients: ['Sal','Farinha','Bacon','Leite','Ovos'], img:'https://i.ibb.co/4g7gZZCt/Quiche-Lorraine.png' },
  { id: 23, name: 'Tosta de Pulled Pork', category: 'food', price: 80, menuAllowed: ['brunch'], ingredients: ['Carne de Porco','Tomate','Pão','Alface','Cheddar','Sal'], img:'https://i.ibb.co/xt6x4S9C/Tosta-Pulled-Pork.png' },
  { id: 24, name: 'Tosta de Frango', category: 'food', price: 80, menuAllowed: ['brunch'], ingredients: ['Tomate','Asinha de Frango','Cheddar','Sal','Pão','Alface'], img:'https://i.ibb.co/Kx7cbwr5/Tosta-Frango.png' },
  { id: 25, name: 'Ovos mexidos e Bacon', category: 'food', price: 80, menuAllowed: ['brunch'], ingredients: ['Sal','Oregãos','Bacon','Leite','Ovos'], img:'https://i.ibb.co/6RqZ4Wtk/Ovos-Mexidos-Bacon.png' },
  { id: 26, name: 'Ovos Rotos', category: 'food', price: 80, menuAllowed: ['brunch'], ingredients: ['Sal','Oregãos','Bacon','Batatas','Ovos'], img:'https://i.ibb.co/spT9vHvP/ovos-rotos.png'},
  // Menus
  { id: 100, name: 'Menu Brunch', category: 'menu', price: 120, menuType: 'brunch', ingredients: [], img:'https://cdn.discordapp.com/attachments/1369977254691606592/1396160243905593476/MENU_BRUNCH_1.png?ex=687d130d&is=687bc18d&hm=f155cdae7225a3a43f251c7f4805b68dc1a4871a47bb3f00ffbf28ed0b259690&' },
  { id: 101, name: 'Menu Lunch', category: 'menu', price: 180, menuType: 'lunch', ingredients: [], img:'https://cdn.discordapp.com/attachments/1369977254691606592/1396160243691688038/MENU_BRUNCH_2.png?ex=687d130d&is=687bc18d&hm=b78479f43bbae043b8629519c9f89e6bc3543a9af6e02edaf8fe131fbe9a1d66&' },
  { id: 102, name: 'Menu Indonésia ESPECIAL', category: 'menu', price: 200, menuType: 'indonesia', 
    fixedItems: [
      { type: 'appetizer', name: 'Entrada Indonésia', ingredients: ['Sal', 'Cebola', 'Camarão'] },
      { type: 'food', productId: 26 }, // Ovos Rotos
      { type: 'drink', name: 'Bebida Indonésia', ingredients: ['Água', 'Gasosa', 'Gelo', 'Manga'] },
      { type: 'dessert', name: 'Sobremesa Indonésia', ingredients: ['Açúcar', 'Leite', 'Natas'] },
      { type: 'coffee', productId: 6 }
    ],
    ingredients: []
  },
];

let filteredProducts = [...products];
let cart = [];
let selectedMenuItems = { food: null, drink: null, dessert: null };

function calculateIngredientsNeeded() {
  const foodIngredients = {};
  const drinkIngredients = {};
  
  cart.forEach(cartItem => {
    const quantity = cartItem.qty;
    
    if (cartItem.category === 'menu') {
      if (cartItem.fixedItems) {
        cartItem.fixedItems.forEach(fixedItem => {
          if (fixedItem.productId) {
            const product = products.find(p => p.id === fixedItem.productId);
            if (product && product.ingredients) {
              const targetObj = (product.category === 'food' || product.category === 'dessert') ? foodIngredients : drinkIngredients;
              product.ingredients.forEach(ingredient => {
                const parts = ingredient.split('x');
                const ingredientName = parts.length > 1 ? parts[1].trim() : ingredient;
                const ingredientQty = parts.length > 1 ? parseInt(parts[0]) : 1;
                
                targetObj[ingredientName] = (targetObj[ingredientName] || 0) + (ingredientQty * quantity);
              });
            }
          } else if (fixedItem.ingredients) {
            const targetObj = (fixedItem.type === 'drink') ? drinkIngredients : foodIngredients;
            fixedItem.ingredients.forEach(ingredient => {
              const parts = ingredient.split('x');
              const ingredientName = parts.length > 1 ? parts[1].trim() : ingredient;
              const ingredientQty = parts.length > 1 ? parseInt(parts[0]) : 1;
              
              targetObj[ingredientName] = (targetObj[ingredientName] || 0) + (ingredientQty * quantity);
            });
          }
        });
      } else if (cartItem.included) {
        cartItem.included.forEach(item => {
          if (item.ingredients) {
            const targetObj = (item.category === 'food' || item.category === 'dessert') ? foodIngredients : drinkIngredients;
            item.ingredients.forEach(ingredient => {
              const parts = ingredient.split('x');
              const ingredientName = parts.length > 1 ? parts[1].trim() : ingredient;
              const ingredientQty = parts.length > 1 ? parseInt(parts[0]) : 1;
              
              targetObj[ingredientName] = (targetObj[ingredientName] || 0) + (ingredientQty * quantity);
            });
          }
        });
      }
    } else if (cartItem.ingredients) {
      const targetObj = (cartItem.category === 'food' || cartItem.category === 'dessert') ? foodIngredients : drinkIngredients;
      cartItem.ingredients.forEach(ingredient => {
        const parts = ingredient.split('*');
        console.log(ingredient);
        console.log(parts);
        const ingredientName = parts.length > 1 ? parts[1].trim() : ingredient;
        const ingredientQty = parts.length > 1 ? parseInt(parts[0]) : 1;
        
        targetObj[ingredientName] = (targetObj[ingredientName] || 0) + (ingredientQty * quantity);
      });
    }
  });
  
  return { food: foodIngredients, drink: drinkIngredients };
}

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
    
    if(product.price > 0){
      grid.appendChild(card);
    }
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
    if (product.fixedItems) {
      const existing = cart.find(item => item.id === product.id && item.fixedItems);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ ...product, qty: 1 });
      }
      updateCart();
    } else {
      selectedMenuItems = { food: null, drink: null, dessert: null };
      document.getElementById('modal').dataset.menuId = id;
      renderMenuSelection();
      document.getElementById('modal').style.display = 'flex';
    }
  } else {
    const existing = cart.find(item => item.id === product.id && !item.included && !item.fixedItems);
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
    if (item.fixedItems) {
      // Menu com itens fixos
      item.fixedItems.forEach(fixedItem => {
        if (fixedItem.productId) {
          const product = products.find(p => p.id === fixedItem.productId);
          includedNames += `<br><small style="margin-left:10px;">- ${product ? product.name : fixedItem.name}</small>`;
        } else {
          includedNames += `<br><small style="margin-left:10px;">- ${fixedItem.name}</small>`;
        }
      });
    } else if (item.included) {
      // Menu com seleção
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
          <input type="number" min="1" value="${item.qty}" onchange="setQty(${idx}, this.value)" style="width:max;text-align:center;border-radius:4px;border:none;padding:4px;">
          <button onclick="changeQty(${idx}, 1)" style="background:#222b40;color:#fff;border:none;border-radius:4px;width:28px;height:28px;font-size:18px;cursor:pointer;">+</button>
        </div>
      </div>
    `;
    total += item.price * item.qty;
  });
  
  // Adicionar lista de ingredientes necessários separada por categoria
  const ingredientsNeeded = calculateIngredientsNeeded();
  if (Object.keys(ingredientsNeeded.food).length > 0 || Object.keys(ingredientsNeeded.drink).length > 0) {
    let ingredientsList = '<div style="background:#181c2f;padding:12px;border-radius:8px;margin-top:16px;">';
    ingredientsList += '<h3 style="margin:0 0 8px 0;color:#fff;display:flex;align-items:center;gap:8px;"><i class="fas fa-utensils"></i>Ingredientes Necessários</h3>';
    // Ingredientes de Comida
    if (Object.keys(ingredientsNeeded.food).length > 0) {
      ingredientsList += '<h4 style="margin:0 0 8px 0;color:#f2c94c;display:flex;align-items:center;gap:8px;"><i class="fas fa-hamburger"></i>Comida:</h4>';
      Object.entries(ingredientsNeeded.food).forEach(([ingredient, count]) => {
        ingredientsList += `<small style="display:block;margin:2px 0 2px 24px;">${count}x ${ingredient}</small>`;
      });
    }
    
    // Ingredientes de Bebida
    if (Object.keys(ingredientsNeeded.drink).length > 0) {
      ingredientsList += '<h4 style="margin:8px 0 8px 0;color:#56ccf2;display:flex;align-items:center;gap:8px;"><i class="fas fa-glass-water"></i>Bebidas:</h4>';
      Object.entries(ingredientsNeeded.drink).forEach(([ingredient, count]) => {
        ingredientsList += `<small style="display:block;margin:2px 0 2px 24px;">${count}x ${ingredient}</small>`;
      });
    }
    
    ingredientsList += '</div>';
    list.innerHTML += ingredientsList;
  }
  
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

function resetOrder() {
  cart = [];
  filteredProducts = [...products];
  renderProducts();
  updateCart();
  closeModal();
}

renderProducts();
