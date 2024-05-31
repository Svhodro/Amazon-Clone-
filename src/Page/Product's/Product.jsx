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
        <div className='bg-slate-800 w-full'>
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
            <div className='w-full flex justify-center items-center flex-wrap  gap-4 sm:gap-6'>
                {/*   ✅ Product card 1 - Starts Here 👇 */}
                {data.map(res => {
                    
                    const handleDetails=()=>{
                        setdetails(res)
                        navigate('/private/Details')
                    }


                    return <div className="w-48 sm:w-72 bg-white shadow-md  duration-500 hover:scale-105 hover:shadow-xl my-2" onClick={handleDetails}>
                        <a href="#">
                            <img
                                src={res.image}
                                className="h-40 sm:h-60 w-full object-cover "
                            />
                            <div className="px-4 py-3 w-full">
                                <p className="text-lg font-bold text-black truncate block capitalize">
                                    {res.title}
                                </p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                                        {res.price}
                                    </p>                                  
                                </div>
                            </div>
                        </a>
                    </div>

                })}

                {/*   🛑 Product card 1 - Ends Here  */}





                </div>
            {/* next section */}

            <div className={`w-full h-screen flex justify-center items-center ${hidden}`} >
                <span className="loading loading-ring loading-lg size-56"></span>
            </div>
        </div>
    )
}

export default Product