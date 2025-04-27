import React, { useEffect, useRef, useState } from 'react'
import { marketChart } from '../services/CryptoAPI'
import Chart from './Chart';

function TableRow(
    { coin: { id, name, image, symbol, current_price, total_volume, price_change_percentage_24h: prrice_change, ath_change_percentage, market_cap }
        , chartDown
        , chartUp
        , currency
        , dataType
        , setChart
        , chart
        , setPrice
        , setAth
        , setMarketCap
        , iconCurrency
        , setIcon
        , setSelectCoinNmae
    }) {

    const ShowChart = async () => {
        try {
            const res = await fetch(marketChart(id));
            const json = await res.json();
            setChart(json[dataType]);
            setPrice(current_price)
            setAth(ath_change_percentage)
            setMarketCap(market_cap)
            setIcon(image)
            setSelectCoinNmae(name)
        } catch (error) {

        }
    };

    useEffect(() => {
        if (!!chart) {
            ShowChart();
        }
    }, [dataType]);
    return (
        <div className='h-[80px] flex justify-between items-center border-b border-[#22262e]'>
            <div className='flex w-[10%]'>
                <img src={image} alt="coin" className='h-[20px] cursor-pointer' onClick={ShowChart} />
                <span className='mx-[10px] cursor-pointer' onClick={ShowChart}>{symbol.toUpperCase()}</span>
            </div>
            <div className=' w-[20%]'>{name}</div>
            <div className=' w-[10%]'>{iconCurrency} {current_price.toLocaleString()}</div>
            <div className={` w-[10%] ${prrice_change >= 0 ? "text-green-300" : "text-red-600"}`}>{prrice_change.toFixed(2)}%</div>
            <div className=' w-[30%]'>{total_volume.toLocaleString()}</div>
            <div className=' w-[20%]'><img src={prrice_change >= 0 ? chartUp : chartDown} alt="" /></div>
        </div>
    )
}

export default TableRow