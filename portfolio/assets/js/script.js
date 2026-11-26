/* jshint esversion: 6 */

const coinBtn = document.getElementById('getCoinPrice');
const bitcoinCheckbox = document.getElementById('bitcoinCheckbox');

const stockBtn = document.getElementById('getStockPrice');
const stocksCheckbox = document.getElementById('stocksCheckbox');

const bitcoinFeature = document.getElementById('bitcoinFeature');
const stockFeature = document.getElementById('stockFeature');

coinBtn.addEventListener('click', getCoinPrice);
stockBtn.addEventListener('click', getStockPrice);

// Add event listeners to toggle the checkboxes
bitcoinCheckbox.addEventListener('change', () => {
  if (bitcoinCheckbox.checked) {
    stocksCheckbox.checked = false;
  }
  bitcoinFeature.hidden = !bitcoinCheckbox.checked;
  stockFeature.hidden = !stocksCheckbox.checked;
});

stocksCheckbox.addEventListener('change', () => {
  if (stocksCheckbox.checked) {
    bitcoinCheckbox.checked = false;
  }
  bitcoinFeature.hidden = !bitcoinCheckbox.checked;
  stockFeature.hidden = !stocksCheckbox.checked;
});

function getCoinPrice() {
  const coinPriceElement = document.getElementById('coinPrice');
  coinPriceElement.textContent = 'Loading...';

  fetch('https://api.api-ninjas.com/v1/bitcoin', {
    headers: { 'X-Api-Key': 'lB9QroqT0n3pBN0pmkEtLfwsDjN2sNFlDyiGR1f6' }
  })
  .then(response => response.json())
  .then(data => {
    if (data.price) {
      coinPriceElement.textContent = 'The current Bitcoin price is $' + Number(data.price).toLocaleString();
    } else {
      coinPriceElement.textContent = 'Price not found!';
    }
  })
  .catch(error => {
    console.error('Error fetching price:', error);
    coinPriceElement.textContent = 'Failed to fetch price.';
  });
}

function getStockPrice() {
  const stockPriceElement = document.getElementById('stockPrice');
  const ticker = document.getElementById('ticker').value;

  stockPriceElement.textContent = 'Loading...';

  fetch('https://api.api-ninjas.com/v1/stockprice?ticker=' + ticker, {
    headers: { 'X-Api-Key': 'lB9QroqT0n3pBN0pmkEtLfwsDjN2sNFlDyiGR1f6' }
  })
  .then(response => response.json())
  .then(data => {
    if (data.price) {
      stockPriceElement.textContent = 'The current price of ' + data.name + ' is $' + 
        Number(data.price).toLocaleString('en-US', {minimumFractionDigits: 2});
    } else {
      stockPriceElement.textContent = 'Price not found!';
    }
  })
  .catch(error => {
    console.error('Error fetching price:', error);
    stockPriceElement.textContent = 'Failed to fetch price.';
  });
}
