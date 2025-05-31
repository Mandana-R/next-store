import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function productItem({ data }) {
  const cart = useContext(CartContext)
  const quantity = cart.getProductquantity(data.id)

  return (
    <div className="relative border rounded-lg flex flex-col">
      <img src={data.image} className="object-cover h-full w-full" />
      <div className="flex-row flex justify-between border-t-2 p-7">
        <p>{data.title}</p>
        {quantity === 0 && <p>{data.price} $</p>}
      </div>
      {quantity !== 0 ? (
        <div className="flex flex-row space-x-4 justify-between mt-0 m-5">
          <div className="bg-gray-200 flex justify-between space-x-4 rounded-lg px-6 py-1 text-gray-800">
            <button onClick={() => cart.addProductToCart(data.id)}>+</button>
            <p className="w-1">{quantity}</p>
            <button onClick={() => cart.removeProductFromCart(data.id)}>
              -
            </button>
          </div>
          <div>{data.price * quantity} $</div>
        </div>
      ) : (
        <button
          className="text-left m-5 mt-0 bg-indigo-500 text-white rounded-full w-36 px-4 py-2"
          onClick={() => cart.addProductToCart(data.id)}
        >
          Add To Basket
        </button>
      )}
    </div>
  )
}

export default productItem
