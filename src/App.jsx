import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { House } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import { Contact2 } from 'lucide-react'
import { BookType } from 'lucide-react'
import ProductDetails from './components/ProductDeatails'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log()
  })

  return (
    <>
      <div className='w-screeen min-h-screen flex flex-col gap-4 bg-black '>
        {/* Navbar div*/}
        <div className='bg-gray-500 p-2 flex justify-between items-center'>
          <div>
            <ul className='text-black flex gap-3 '>
              <li className='cursor-pointer hover:text-white hover:font-bold hover:underline underline-offset-4 decoration-2 duration-200 flex gap-1'><House></House>Home</li>
              <li className='cursor-pointer hover:text-white hover:font-bold hover:underline underline-offset-4 decoration-2 duration-200 flex gap-1'><ShoppingCart></ShoppingCart>Product</li>
              <li className='cursor-pointer hover:text-white hover:font-bold hover:underline underline-offset-4 decoration-2 duration-200 flex gap-1'><BookType></BookType>About Us</li>
              <li className='cursor-pointer hover:text-white hover:font-bold hover:underline underline-offset-4 decoration-2 duration-200 flex gap-1'><Contact2></Contact2>Contact US</li>
            </ul>
          </div>
          <div className='flex gap-2'>
            <button className='border p-2 cursor-pointer hover:bg-blue-800 hover:text-white hover:font-bold hover:scale-90 duration-200 rounded-2xl'>Login</button>
            <button className='border p-2 cursor-pointer hover:bg-green-500 hover:text-white hover:font-bold hover:scale-90 duration-200 rounded-2xl'>Sign up</button>
          </div>
        </div>
        <div>
          <ProductDetails/>
        </div>
      </div>
    </>
  )
}

export default App
