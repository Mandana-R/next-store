import productData from "../app/data/data"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
function productItemModal({ id }) {
  const getData = productData.find((item) => item.id === id)
  const cart = useContext(CartContext)

  return (
    <>
      <div className="relative bg-gray-100 border-gray-800 rounded-lg pl-6 py-6 flex flex-row pr-24 mt-3">
        {/* Delete button */}
        <button
          className="absolute top-2 right-2 rounded-full bg-gray-400 text-white w-5 h-5 flex items-center justify-center"
          onClick={() => cart.deleteProductFromCart(id)}
        >
          <svg
            className="w-3 h-3"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Product content */}
        <img src={getData.image} className="w-[85px] border rounded-md p-0" />
        <div className="space-y-2 ml-8">
          <p>{getData.title}</p>
          <p>Price : {getData.price}$</p>
          <div className="bg-white rounded-lg p-1 space-x-4">
            <button onClick={() => cart.addProductToCart(id)}>+</button>
            <span>{cart.getProductquantity(id)}</span>
            <button onClick={() => cart.removeProductFromCart(id)}>-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default productItemModal
