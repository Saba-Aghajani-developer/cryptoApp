import React, { useEffect, useState } from 'react'
import { getCoinList } from "../services/CryptoAPI"
import TableCoins from '../modules/TableCoins'
import Pagination from '../modules/Pagination'
import Search from '../modules/Search'
import Chart from '../modules/Chart'
import Header from '../modules/Header'
function HomePage() {
    const [coins, setCoins] = useState([])
    const [isLoaiding, setIsLoaiding] = useState(true)
    const [pages, setPages] = useState(1)
    const [currency, setCurrency] = useState('usd')
    const [chart, setChart] = useState(null)
    const [dataType, setDataType] = useState('prices')
    const [price, setPrice] = useState('')
    const [ath, setAth] = useState('')
    const [marketCap, setMarketCap] = useState('')
    const [iconCurrency, setIconCurrency] = useState('usd')
    const [icon, setIcon] = useState('')
    const [selectCoinNmae, setSelectCoinNmae] = useState('')

    useEffect(() => {
        setIsLoaiding(true)
        const getData = async () => {
            const res = await fetch(getCoinList(pages, currency));
            const json = await res.json();
            setCoins(json)
            setIsLoaiding(false)
        }
        getData()
    }, [pages, currency])

    useEffect(() => {
        if (currency == 'usd') {
            setIconCurrency('$')
        }
        else if (currency == 'eur') {
            setIconCurrency('€')
        }
        else {
            setIconCurrency('¥')
        }
    }, [currency])

    return (
        <div className='relative '>
            <Header />
            <Search currency={currency} setCurrency={setCurrency} />
            <TableCoins iconCurrency={iconCurrency} setIcon={setIcon} setSelectCoinNmae={setSelectCoinNmae} setPrice={setPrice} setAth={setAth} setMarketCap={setMarketCap} coins={coins} isLoaiding={isLoaiding} setIsLoaiding={setIsLoaiding} currency={currency} dataType={dataType} setChart={setChart} chart={chart} />
            <Pagination pages={pages} setPages={setPages} />
            {!!chart && <Chart iconCurrency={iconCurrency} icon={icon} selectCoinNmae={selectCoinNmae} price={price} ath={ath} markertCap={marketCap} chart={chart} setChart={setChart} setDataType={setDataType} dataType={dataType} />}
        </div>
    )
}

export default HomePage