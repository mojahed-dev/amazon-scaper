async function scrapeAmazon() {
    const keyword = document.getElementById('keyword').value;
    const response = await fetch(`/api/scrape?keyword=${encodeURIComponent(keyword)}`);
    const data = await response.json();
  
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    data.forEach(product => {
      const cardDiv = document.createElement('div');
      cardDiv.className = 'col-md-4'; // Bootstrap 4 column class
      cardDiv.innerHTML = `
        <div class="card mb-4 shadow-sm">
          <img src="${product.image}" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">Rating: ${product.rating}</p>
            <p class="card-text">Reviews: ${product.reviews}</p>
          </div>
        </div>
      `;
      resultsDiv.appendChild(cardDiv);
    });
  }
  