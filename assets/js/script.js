const menuTriggers = document.querySelectorAll('#menu > div > a');
const allMenuContainer = document.querySelector('#allMenu > div.row');
const continentalContainer = document.querySelector('#continental > div.row');
const swallowsContainer = document.querySelector('#swallows > div.row');
const soupsContainer = document.querySelector('#soups > div.row');
const grillsContainer = document.querySelector('#grills > div.row');
const sidesContainer = document.querySelector('#sides > div.row');
const breakfastContainer = document.querySelector('#breakfast > div.row');
const faqsContainer = document.querySelector('#faqsContainer');
const dateInput = document.getElementById('bookDate');
const timeInput = document.getElementById('bookTime');

// Options
const imgDir = './assets/img/';
let menu = {};
let faqs = {};

// Tests


// Tests End

async function showOrderModal(itemName) {
  const orderModalEl = document.getElementById('orderModal')
  const orderNameEl = orderModalEl.querySelector('#orderName');
  const orderPriceEl = orderModalEl.querySelector('#orderPrice');
  const orderImgEl = orderModalEl.querySelector('#orderImg');
  const orderModal = new bootstrap.Modal(orderModalEl);

  const data = await fetchContent();
  const menu = data.menu
  const menuItem = menu.find(menu => menu.name === itemName);
  
  orderNameEl.textContent = itemName;
  orderPriceEl.textContent = menuItem.price;
  orderImgEl.setAttribute('src', `${imgDir}closed-dish.jpg`);
  orderImgEl.setAttribute('alt', menuItem.name);
  
  orderModal.show();
}
function setDateLimit(input, days) {
  input.min = new Date().toISOString().split('T')[0];
  input.max = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
}
function setTimeLimit(input, closeTime) {
  const currentDate = new Date();
  input.min = `${currentDate.getHours() < 10 ? 
    `0${currentDate.getHours()}` : currentDate.getHours()
  }:${currentDate.getMinutes()}`;
  input.max = closeTime;
}
function addScrollSpy() {
  const navs = document.querySelectorAll('#mainNav > nav > nav > a');
  const dropnav = document.querySelector('#mainNav [data-bs-toggle="dropdown"]');

  for(const nav of navs) {
    if(nav.classList.contains('active')) {
      return dropnav.classList.add('active');
    } else {
      dropnav.classList.remove('active');
    }
  }
}
window.addEventListener('scroll', addScrollSpy);

async function fetchContent() {
  const result = await fetch('./assets/libs/content.json');
  const data = await result.json();
  return data;
}
function htmlMenuCard(item) {
  const id = item.name.trim().split(' ').join('').toLowerCase();
  return `
    <div class="menu-item col-md-6 col-lg-4 col-xl-3 p-2">
      <div class="card border-0 bg-primary text-center">
        <img src="${imgDir}closed-dish.jpg" alt="Food" class="food-picture card-img-top">
        <div class="card-header p-0">
          <h2 class="food-name text-uppercase m-0 p-3 text-bg-primary">${item.name}</h2>
        </div>
        <div class="card-body bg-light rounded-bottom">
          <button class="btn text-uppercase dropdown-toggle mb-2" data-bs-toggle="collapse" data-bs-target="#${id}">More Details</button>
          <p id=${id} class="food-details collapse">${item.description}</p>
          <p class="food-price lead fs-3">&#8358;${item.price}</p>
          <button 
            id="${id}Btn" 
            class="btn btn-primary text-uppercase"
            data-menu-name="${item.name}"
            onclick="showOrderModal('${item.name}')"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  `;
}
function faqHtml(item) {
  const id = `${item.question.split(/[\s'?.,\\/]/).join("").slice(0)}`;
  return `
    <article class="accordion-item">
      <button data-bs-toggle="collapse" class="accordion-header accordion-button fs-4 text-uppercase" data-bs-target="#${id}">${item.question}</button>
      <p id=${id} class="accordion-collapse collapse p-3 m-0 lead" data-bs-parent="#faqs">${item.answer}</p>
    </article>
  `
}
fetchContent()
  .then(data => {
    menu = data.menu;
    faqs = data.faqs;
    if (!data) {
      throw new Error('Invalid data')
    }
  })
  .then(() => {
    setDateLimit(dateInput, 365);
    setTimeLimit(timeInput, '22:00');
    for(const item of menu) {
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
    }
    faqs.forEach(item => {
      faqsContainer.innerHTML += faqHtml(item);
    });
  })
  .catch((err) => {
    console.log(err)
  })
