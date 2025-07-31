console.log("Website loaded!");
fetch('data/products.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('product-list');
    data.forEach(product => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong>${product.price}</strong>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => console.error('Error loading products:', error));
