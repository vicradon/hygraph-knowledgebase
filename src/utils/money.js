export const convertCurrencyAPI = (amount, from, to) => {
  const url = `https://api.exchangerate-api.com/v4/latest/${from}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rates[to];
      return amount * rate;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const USDRATE = 670;

export const convertUSD = (amount = 1) => {
  return (USDRATE * 0.99 * amount).toFixed(2);
};
