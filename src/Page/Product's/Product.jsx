import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'


function Product() {
    const [data, setData] = useState([])
    const [hidden, setHidden] = useState()
    const navigate=useNavigate()
    const{setdetails}=useContext(UserContext)
    useEffect(() => {
        axios.get('https://amazon-clone-backend-roan.vercel.app/Category')
            .then(res => {
                setHidden('hidden')
                setData(res.data)
            })
    })
    const [topping, setTopping] = useState("Medium")

    const onOptionChange = e => {
        setTopping(e.target.value)
    }
    // console.log(topping)
  

    return (
        <div className='bg-slate-800'>
            <div className='px-10 text-lg font-bold py-4'>All product</div>
            <div>
                <div className="drawer ">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn  drawer-button ml-7 bg-black">Fillter</label>
                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <section className='bg-white text-black w-3/4 md:w-2/4  h-screen flex justify-start pl-6 pt-20 items-start flex-col'>
                            <h1 className='text-xl font-bold text-left '>Filter</h1>
                            <hr className='w-4/5 border-2 border-slate-700 my-6 ' />
                            <div className='w-full flex flex-col justify-center gap-4 '>


                                <div className='flex gap'>
                                    <input
                                        type="radio"
                                        name="topping"
                                        value="woman"
                                        id="woman"
                                        checked={topping === "woman"}
                                        onChange={onOptionChange}
                                    />
                                    <label htmlFor="woman">Woman</label>
                                </div>
                                <div className='flex gap'>
                                    <input
                                        type="radio"
                                        name="topping"
                                        value="man"
                                        id="man"
                                        checked={topping === "man"}
                                        onChange={onOptionChange}
                                    />
                                    <label htmlFor="man">Man</label>
                                </div>
                                <div className='flex gap'>
                                    <input
                                        type="radio"
                                        name="topping"
                                        value="kid"
                                        id="kid"
                                        checked={topping === "kid"}
                                        onChange={onOptionChange}
                                    />
                                    <label htmlFor="kid">kid</label>
                                </div>
                                <div className='flex gap'>
                                    <input
                                        type="radio"
                                        name="topping"
                                        value="plant"
                                        id="plant"
                                        checked={topping === "plant"}
                                        onChange={onOptionChange}
                                    />
                                    <label htmlFor="plant">Plant</label>
                                </div>
                                <div className='flex gap'>
                                    <input
                                        type="radio"
                                        name="topping"
                                        value="book"
                                        id="book"
                                        checked={topping === "book"}
                                        onChange={onOptionChange}
                                    />
                                    <label htmlFor="book">Book</label>
                                </div>
                                <div className='flex gap'>
                                    <input
                                        type="radio"
                                        name="topping"
                                        value="topsale"
                                        id="topsale"
                                        checked={topping === "topsale"}
                                        onChange={onOptionChange}
                                    />
                                    <label htmlFor="topsale">Topsale</label>
                                </div>

2






                            </div>
                            <div>
                                <h1 className='text-xl font-bold text-left'>Category</h1>

                            </div>
                            <div>
                                <h1 className='text-xl font-bold text-left'>Price</h1>

                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-4 "
            >
                {/*   ✅ Product card 1 - Starts Here 👇 */}
                {data.map(res => {
                    
                    const handleDetails=()=>{
                        setdetails(res)
                        navigate('/private/Details')
                    }


                    return <div className="w-72 bg-white shadow-md  duration-500 hover:scale-105 hover:shadow-xl my-2" onClick={handleDetails}>
                        <a href="#">
                            <img
                                src={res.image}
                                className="h-60 w-72 object-cover "
                            />
                            <div className="px-4 py-3 w-72">
                                <p className="text-lg font-bold text-black truncate block capitalize">
                                    {res.title}
                                </p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                                        {res.price}
                                    </p>

                                    <del>
                                        <p className="text-sm text-gray-600 cursor-auto ml-2">$1299</p>
                                    </del>
                                    <div className="ml-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="currentColor"
                                            className="bi bi-bag-plus"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                            />
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                })}

                {/*   🛑 Product card 1 - Ends Here  */}





            </section>
            {/* next section */}

            <div className={`w-full h-screen flex justify-center items-center ${hidden}`} >
                <span className="loading loading-ring loading-lg size-56"></span>
            </div>
        </div>
    )
}

export default Product