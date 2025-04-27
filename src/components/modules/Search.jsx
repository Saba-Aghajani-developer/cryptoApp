import React, { useEffect, useState } from 'react'
import { searchCoin } from '../services/CryptoAPI'
import { RotatingLines } from 'react-loader-spinner'

function Search({ currency, setCurrency }) {
    const [text, setText] = useState("")
    const [coins, setCoins] = useState([])
    const [isLoaiding, setIsLoaiding] = useState(false)
    const controller = new AbortController();
    useEffect(() => {
        setCoins([]);
        if (!text) {
            setIsLoaiding(false)
            return;
        };
        const search = async () => {
            const res = await fetch(searchCoin(text), { signal: controller.signal });
            const json = await res.json();
            setCoins(json.coins)
            setIsLoaiding(false);
        };
        setIsLoaiding(true);
        search()
        return () => controller.abort();
    }, [text])
    return (
        <div className='absolute top-[95px] z-80'>
            <input className={`bg-[#23242e] text-white w-[350px] p-[10px] mr-[20px] rounded-[3px] outline-none`} type="text" placeholder='Search' value={text} onChange={e => setText(e.target.value)} />
            <select className={`bg-[#23242e] text-white px-[10px] py-[10px] rounded-[3px] outline-none`} value={currency} onChange={e => setCurrency(e.target.value)}>
                <option className={`bg-black`} value="usd">USD</option>
                <option className={`bg-black`} value="eur">EUR</option>
                <option className={`bg-black`} value="jpy">JPY</option>
            </select>
            <div>
                {isLoaiding &&
                    (<div className='w-[350px] h-[400px] bg-[#18181c] border border-gray-800 mt-[10px] rounded-[3px] flex justify-center items-start pt-[20px]'>
                        <RotatingLines visible={true}
                            height="50px"
                            width="50px"
                            color="blue"
                            strokeWidth="2"
                            strokeColor='#3874ff'
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass="" />
                    </div>)

                }
                <ul div className={`w-[350px] max-h-[400px] bg-[#18181c] border-[#22262e] overflow-y-scroll rounded-[3px] mt-[20px] scrollbar-custom ${coins.length>0?"border":"border-none"}`}>
                    {coins.map((coin) => (<li className='border-b border-[#22262e] p-[10px] flex ' key={coin.id}>
                        <img className='mr-[10px]' src={coin.thumb} alt={coin.name} />
                        <p className='text-[14px] '>{coin.name}</p>
                    </li>))}
                </ul>
            </div>

        </div >
    )
}

export default Search