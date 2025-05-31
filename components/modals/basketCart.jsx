import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ProductModal from "../productItemModal"

function basketCart({ isModalOpen, toggleModal }) {
  const cart = useContext(CartContext)
  console.log(cart.items)
  function closeModal() {
    toggleModal(!isModalOpen)
  }
  return (
    <>
      {isModalOpen ? (
        <>
          <div className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-600 bg-opacity-50">
            <div
              className={`relative w-auto mx-auto max-w-3xl  rounded-lg shadow-lg border-gray-200 border bg-white text-right
    transform transition-transform duration-500 ease-out ${
      isModalOpen ? "translate-x-0" : "translate-x-full"
    }`}
              style={{ top: "0", right: "0", position: "absolute" }}
            >
              {/* Close modal */}
              <button
                onClick={closeModal}
                className="uppercase outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
              >
                <svg
                  className=" text-red-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <line x1="18" y1="6" x2="6" y2="18" />{" "}
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              {/* body Modal */}
              <div className=" relative flex flex-col w-full bg-white outline-none focus:outline-none px-12 pt-0 pb-7 text-center">
                <p className="font-bold text-1xl text-gray-500">My Cart</p>
                <div className="container flex flex-col space-y-2">
                  {/* list product Items */}

                  {cart.items.map((item) => {
                    return <ProductModal id={item.id} key={item.id} />
                  })}
                </div>
                <div className="border-t mt-6 flex flex-row justify-between pt-2 ">
                  <p>Total Price</p>
                  <p>${cart.getTotalPrice()}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default basketCart
