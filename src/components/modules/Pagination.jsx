import React from 'react'

function Pagination({ pages, setPages }) {
    return (
        <div className='flex justify-center items-center my-[50px] flex-nowrap'>
            <button className={`bg-[#3874ff] text-white px-[5px] text-[10px] rounded-[5px] w-[80px] h-[28px] ${pages === 1 ? "opacity-50 " : "opacity-100 "}`} onClick={(event) => pages >= 2 ? setPages(page => page - 1) : setPages(1)}>Prevoius Page</button>
            <span className={`${pages === 1 ? 'bg-[#3874ff] ' : 'bg-inherit'} text-[10px] border-[#3874ff] w-[25px] h-[25px] flex justify-center items-center mx-[10px] border rounded-[5px]`}>1</span>
            <span className={`${pages === 2 ? 'bg-[#3874ff] ' : 'bg-inherit'} text-[10px] border-[#3874ff] w-[25px] h-[25px] flex justify-center items-center mx-[10px] border rounded-[5px]`}>2</span>
            {pages > 2 && pages < 9 &&
                <>
                    <span>...</span>
                    <span className={`${pages === pages ? 'bg-[#3874ff] ' : 'bg-inherit'} text-[10px] border-[#3874ff] w-[25px] h-[25px] flex justify-center items-center mx-[10px] border rounded-[5px]`}>{pages}</span>
                </>}
            <span>...</span>
            <span className={`${pages === 9 ? 'bg-[#3874ff] ' : 'bg-inherit'} text-[10px] border-[#3874ff] w-[25px] h-[25px] flex justify-center items-center mx-[10px] border rounded-[5px]`}>9</span>
            <span className={`${pages === 10 ? 'bg-[#3874ff] ' : 'bg-inherit'} text-[10px] border-[#3874ff] w-[25px] h-[25px] flex justify-center items-center mx-[10px] border rounded-[5px]`}>10</span>
            <button className={`bg-[#3874ff] text-white px-[5px] text-[10px] rounded-[5px] w-[80px] h-[28px] ${pages === 10 ? "opacity-50 " : "opacity-100 "}`} onClick={(event) => pages <= 9 ? setPages(page => page + 1) : setPages(10)}>nex Page</button>

        </div>
    )
}

export default Pagination