import React from 'react'
import { useNavigate } from 'react-router-dom'

function DetalsCard({data}) {
    const navigate=useNavigate()
    const handleDetails=()=>{
        navigate('/private/Details')
       }
    return (
        <div onClick={handleDetails}>
            <div className="w-80 bg-white shadow rounded">
                <div
                    className="h-48 w-full flex flex-col justify-between p-4 bg-zinc-950   bg-contain bg-no-repeat bg-center"
                    style={{
                        backgroundImage:
                            `url(${data.image})`
                    }}
                >
                    <div className="flex justify-between">
                       
                    </div>
                    <div>
                        <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                            available
                        </span>
                    </div>
                </div>
                <div className="p-4 flex flex-col items-center">
                  
                    <h1 className="text-gray-800 text-center mt-1">{data.title}</h1>
                    <p className="text-center text-gray-800 mt-1">${data.price}</p>
                    <div className="inline-flex items-center mt-2">
                        <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20 12H4"
                                />
                            </svg>
                        </button>
                        <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                            2
                        </div>
                        <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </button>
                    </div>
                    <button className="py-2 px-4 bg-orange-400 text-white rounded hover:bg-orange-500 active:bg-orange-600 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                        Add To Cart
                       
                    </button>
                </div>
            </div>           
    </div >
  )
}

export default DetalsCard