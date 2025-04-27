const BaseUrl = "https://api.coingecko.com/api/v3/"
const APIKey = "CG-TpvsdZs5pP7Dim9MsHqrxueK"

const getCoinList = (pages, currency) => `${BaseUrl}coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${pages}&x_cg_demo_api_key=${APIKey}`
const searchCoin = (query) => `${BaseUrl}search?query=${query}&x_cg_demo_api_key=${APIKey}`
const marketChart = (coin) => `${BaseUrl}coins/${coin}/market_chart?vs_currency=usd&days=7`

export { getCoinList, searchCoin, marketChart }