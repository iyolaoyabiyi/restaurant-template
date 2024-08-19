const menuTriggers = document.querySelectorAll('#menu > div > a');
const allMenuContainer = document.querySelector('#allMenu > div.row');
const continentalContainer = document.querySelector('#continental > div.row');
const swallowsContainer = document.querySelector('#swallows > div.row');
const soupsContainer = document.querySelector('#soups > div.row');
const grillsContainer = document.querySelector('#grills > div.row');
const sidesContainer = document.querySelector('#sides > div.row');
const breakfastContainer = document.querySelector('#breakfast > div.row');
let menu = {};
const imgDir = './assets/img/';


async function fetchMenu() {
  const result = await fetch('./assets/libs/menu.json');
  const data = await result.json();
  return data.menu;
}
function htmlMenuCard(item) {
  const id = item.name.trim().split(' ').join('').toLowerCase();
  return `
    <div class="menu-item col-md-6 col-lg-4 col-xl-3 p-2">
      <div class="card border-0 bg-primary text-center">
        <img src="${imgDir}fried-rice.jpg" alt="Food" class="food-picture card-img-top">
        <div class="card-header p-0">
          <h2 class="food-name text-uppercase m-0 p-3 text-bg-primary">${item.name}</h2>
        </div>
        <div class="card-body bg-light rounded-bottom">
          <button class="btn text-uppercase dropdown-toggle mb-2" data-bs-toggle="collapse" data-bs-target="#${id}">More Details</button>
          <p id=${id} class="food-details collapse">${item.description}</p>
          <p class="food-price lead fs-3">&#8358;${item.price}</p>
          <button id="${id}Btn" class="btn btn-primary text-uppercase">Place Order</button>
        </div>
      </div>
    </div>
  `;
}

fetchMenu()
  .then(data => {
    menu = data;
    if (!menu) {
      throw new Error('Invalid data')
    }
  })
  .then(() => {
    menu.forEach(item => {
      allMenuContainer.innerHTML += htmlMenuCard(item);
      switch (item.category.toLowerCase()) {
        case "continental":
          continentalContainer.innerHTML += htmlMenuCard(item);
          break;
        case "swallows":
          swallowsContainer.innerHTML += htmlMenuCard(item);
          break;
        case "soups":
          soupsContainer.innerHTML += htmlMenuCard(item);
          break;
        case "grills":
          grillsContainer.innerHTML += htmlMenuCard(item);
          break;
        case "sides":
          sidesContainer.innerHTML += htmlMenuCard(item);
          break;
        case "breakfast":
          breakfastContainer.innerHTML += htmlMenuCard(item);
          break;
        default:
          break;
      }
    });
  })
  .catch((err) => {
    console.log(err)
  })
