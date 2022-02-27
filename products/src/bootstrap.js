import faker from 'faker';

const mount = (element) => {
  let products = '';

  for (let i = 0; i < 4; i++) {
    const name = faker.commerce.productName();
    const price = faker.commerce.price();
    const description = faker.lorem.sentence(10);
    const image = faker.image.image();

    products += `<div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
    <a href="#" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
    <div class="relative pb-48 overflow-hidden">
      <img class="absolute inset-0 h-full w-full object-cover" src="${image}" alt="${name}">
    </div>
    <div class="p-4">
      <h2 class="mt-2 mb-2  font-bold">${name}</h2>
      <p class="text-sm">${description}</p>
      <div class="mt-3 flex items-center">
        <span class="font-bold text-xl">$${price}</span>
      </div>
    </div>
    <div class="p-4 border-t border-b text-xs text-gray-700">
      <span class="flex items-center">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Cart</button>
      </span>        
    </div>
    
  </a>
  </div>`;
  }
  element.innerHTML = products;
};

// Scenario #1
// Running this file in development in isolation
// Using local index.html file
// index.html file HAS an element with an ID of 'dev-products'
// Immediately render app into 'dev-products' element
if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#dev-products');

  // Assuming container does not have an element called #dev-products
  if (element) {
    // Running in isolation
    mount(element);
  }
}

// Scenario #2
// Running this file in Development or Production
// Through the Container App
// No GUARANTEE that an element with 'dev-products- exists
// We do not want to Immediately render the app
export { mount };
