import React from 'react'

function Header() {
    return (
        <div className='w-full h-[70px] rounded-[10px] !mb-[100px] bg-blue-500 flex justify-between items-center px-[20px]' >
            <div className='font-bold text-[25px]'>Crypto App</div>
            <div className=' text-[20px] font-medium'><span className='text-black font-bold'>React | </span>Saba Aghajani</div>
        </div>
    )
}

export default Header