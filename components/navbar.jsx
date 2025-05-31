import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function navBar({ toggleModal }) {
  const cart = useContext(CartContext)
  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  )
  return (
    <div className="container border mx-auto w-full max-w-full">
      <div className="py-3 px-6 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        <div>  
             {/* Search   */}
             
        </div>
        <img src="/images/logo.png" alt="Logo" className="block" />
          <div className="relative">
            <button onClick={toggleModal}>
              <svg
                className="h-10 w-10 text-indigo-500"
                fill="none"
                viewBox="0 0 30 30"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            <small className="rounded-full bg-red-400 h-4 w-4 text-center text-white absolute -top-2 left-5 text-xs">
              {productCount}
            </small>
          </div>
    
      </div>
    </div>
  )
}

export default navBar
