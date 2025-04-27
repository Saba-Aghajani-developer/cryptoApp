import React from 'react'
import chartDown from "../../assets/chart-down.svg"
import chartUp from "../../assets/chart-up.svg"
import TableRow from './TableRow'
import { RotatingLines } from 'react-loader-spinner'

function TableCoins({ coins, isLoaiding, currency, dataType, setChart, chart, setPrice, setAth, setMarketCap, iconCurrency ,setIcon , setSelectCoinNmae }) {
  return (

    <>
      {isLoaiding ?
        <div className='w-full h-[100vh] flex justify-center items-center '>
          <RotatingLines visible={true}
            height="60"
            width="60"
            color="blue"
            strokeWidth="3"
            strokeColor='#3874ff'
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass="" />
        </div>
        : <div className='w-full !my-[50px] sm:block md:flex flex-wrap'>
          <div className='w-full flex justify-between border-b'>
            <div className=' w-[10%]'>Coin</div>
            <div className=' w-[20%]'>Name</div>
            <div className=' w-[10%]'>Price</div>
            <div className=' w-[10%]'>24h</div>
            <div className=' w-[30%]'>Total Volume</div>
            <div className=' w-[20%]'></div>
          </div>
          <div className='w-full'>{coins.map((coin) => {
            return <TableRow iconCurrency={iconCurrency} setIcon={setIcon} setSelectCoinNmae={setSelectCoinNmae} setPrice={setPrice} setAth={setAth} setMarketCap={setMarketCap} coin={coin} chartDown={chartDown} chartUp={chartUp} currency={currency} key={coin.id} dataType={dataType} setChart={setChart} chart={chart} />
          })}</div>
        </div>}
    </>
  )
}

export default TableCoins