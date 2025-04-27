import React, { useEffect, useState } from 'react'
import ChartComponent from './ChartComponent';

function Chart({ chart, setChart, setDataType, dataType, price, ath, markertCap, iconCurrency, icon, selectCoinNmae }) {
    const [convertDtat, setConvertDtat] = useState([])
    const [CheckType, setcheckType] = useState('')
    useEffect(() => {
        if (!!chart) {
            setConvertDtat(chart.map((item) => {
                return {
                    data: item[0],
                    [dataType]: item[1]
                }
            }))
        }
    }, [])
    useEffect(() => {
        setcheckType(dataType)
        if (!!chart) {
            setConvertDtat(chart.map((item) => {
                return {
                    data: item[0],
                    [dataType]: item[1]
                }
            }))
        }
    }, [dataType])

    useEffect(() => {
        console.log(selectCoinNmae);
    }, [chart])
    return (
        <div className='w-[100vw] h-[100vh]  fixed top-0 left-0 backdrop-blur-[3px] flex justify-center items-center'>
            <span className='bg-[#d33636] text-white rounded-[5px] cursor-pointer fixed top-[20px] left-[20px]' onClick={() => setChart(null)}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5" /></svg></span>
            <div className=' w-[800px] min-h-[100px] flex flex-wrap break-words whitespace-normal p-[30px] border border-[#22262e] rounded-[20px] bg-[#18181c]'>
                <div className='w-[760px] flex mx-[20px] mb-[20px] '>
                    <span>{selectCoinNmae}</span>
                    <img className='h-[30px] ml-[10PX]' src={icon} alt={selectCoinNmae} />
                    </div>
                <div className='w-[760px] h-[300px]'>
                    <ChartComponent dataType={dataType} convertDtat={convertDtat} />
                </div>
                <div className=' w-[760px] mt-[15px]'>
                    <button className={`mx-[20px] cursor-pointer text-[#3874ff] border border-[#3874ff] rounded-[5px]  py-[2px] px-[8px] ${dataType === "prices" ? "text-[#fff] bg-[#3874ff]" : "text-#fff bg-inherit"}`} onClick={(e) => setDataType('prices')}> prices </button>
                    <button className={`mx-[20px] cursor-pointer text-[#3874ff] border border-[#3874ff] rounded-[5px]  py-[2px] px-[8px] ${dataType === "market_caps" ? "text-[#fff] bg-[#3874ff]" : "text-#fff bg-inherit"}`} onClick={(e) => setDataType('market_caps')}> market_caps </button>
                    <button className={`mx-[20px] cursor-pointer text-[#3874ff] border border-[#3874ff] rounded-[5px]  py-[2px] px-[8px] ${dataType === "total_volumes" ? "text-[#fff] bg-[#3874ff]" : "text-#fff bg-inherit"}`} onClick={(e) => setDataType('total_volumes')}> total_volumes </button>
                </div>
                <div className=' w-[760px] flex justify-between items-center mx-[20px] mt-[25px]'>
                    <div><span className='text-[#3874ff]'>price: </span> <span> {iconCurrency}{price}</span></div>
                    <div><span className='text-[#3874ff]'>ATH: </span> <span>{iconCurrency}{Math.abs(ath)}</span></div>
                    <div><span className='text-[#3874ff]'>Mrkert Cap: </span> <span>{iconCurrency}{markertCap}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Chart