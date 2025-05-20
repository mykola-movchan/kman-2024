function populateDesserts(data) {
  const gridContainer = document.querySelector('section.menu');

  data.forEach(dessert => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.info = `${dessert.name} ${dessert.price}`;

    card.innerHTML = `
      <img src="${dessert.image.desktop}" alt="${dessert.name}">
      <button class="add red-hat-text-600">
        <img src="images/icon-add-to-cart.svg" alt=""> Add to Cart
      </button>
      <span class="category red-hat-text-400">${dessert.category}</span>
      <h3 class="name red-hat-text-700">${dessert.name}</h3>
      <h4 class="price red-hat-text-600">${dessert.price.toFixed(2)}</h4>
    `;

    gridContainer.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('data.json') // adjust path if needed
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load JSON');
      }
      return response.json();
    })
    .then(data => {
        console.log(data);
      populateDesserts(data);
    })
    .catch(error => {
      console.error('Error loading JSON data:', error);
    });
});
