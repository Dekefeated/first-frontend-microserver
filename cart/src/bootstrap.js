import faker from 'faker';

const mount = (element) => {
  const cartText = `
    <div class="px-4 py-3 text-center text-white border bg-indigo-800 rounded-lg">
      <p>You have <b>${faker.random.number({
        min: 1,
        max: 10,
      })}</b> items in your cart!</p>
    </div>
  `;
  element.innerHTML = cartText;
};

// Scenario #1
// Running this file in development in isolation
// Using local index.html file
// index.html file HAS an element with an ID of 'dev-products'
// Immediately render app into 'dev-products' element
if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#cart-dev');

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
