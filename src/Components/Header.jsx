import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'



export default function Header() {
    const Location= useLocation();
    const navigate= useNavigate();


function pathMatch(route){
    if(route===Location.pathname){
        return true}
    };

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
<header className="flex justify-between items-center px-3 mx-auto max-w-6xl">

        <div >  

        <img src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" alt="Realtor.com" className="h-5 cursor-pointer"
        onClick={()=> navigate("/")} /> 
        </div>
    <div>
        <ul className="flex space-x-10">
 <li className={`   py-3 text-sm font-semibold text-gray-400 cursor-pointer border-b-[3px] border-b-transparent ${pathMatch    ("/") && "text-black border-b-red-500" }`}
     onClick={()=> navigate("/")} >Home</li>
<li className={`py-3 text-sm font-semibold text-gray-400 cursor-pointer border-b-[3px] border-b-transparent ${pathMatch("/offers") && "text-black border-b-red-500" }`}
    onClick={()=> navigate("/offers")} >Offers</li>
<li className={`py-3 text-sm font-semibold text-gray-400 cursor-pointer border-b-[3px] border-b-transparent ${pathMatch ("/sign-in") && "text-black border-b-red-500" }`}
    onClick={()=> navigate("/sign-in")} >Sign in</li>
            
            
        </ul>
    </div>




    </header>
    </div>
  )
}

