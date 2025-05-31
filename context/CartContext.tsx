import { createContext, ReactNode, useState } from "react"
import productList from "../app/data/data"

interface CartProductsType {
  id: string
  quantity: number
}

interface CartContectType {
  items: CartProductsType[]
  getProductquantity: (id: string) => number
  addProductToCart: (id: string) => void
  removeProductFromCart: (id: string) => void
  deleteProductFromCart: (id: string) => void
  getTotalPrice: () => number
}
export const CartContext = createContext<CartContectType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartProduct, setCartProduct] = useState<CartProductsType[]>([])
  function getProductquantity(id: string): number {
    const quantity = cartProduct.find((item) => id === item.id)?.quantity
    if (quantity === undefined) {
      return 0
    }
    return quantity
  }
  function addProductToCart(id: string): void {
    const quantity = getProductquantity(id)
    if (quantity === 0) {
      setCartProduct([...cartProduct, { id: id, quantity: 1 }])
    } else {
      setCartProduct(
        cartProduct.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    }
  }
  function removeProductFromCart(id: string): void {
    const quantity = getProductquantity(id)
    if (quantity === 1) {
      setCartProduct(cartProduct.filter((item) => item.id !== id))
    } else {
      setCartProduct(
        cartProduct.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      )
    }
  }
  function deleteProductFromCart(id: string): void {
    setCartProduct(cartProduct.filter((item) => item.id !== id))
  }
  function getTotalPrice(): number {
    let totalPrice = 0
    cartProduct.forEach((item) => {
      let productItem = productList.find((product) => product.id === item.id)
      if (productItem) {
        totalPrice += productItem.price * item.quantity
      }
    })
    return totalPrice
  }
  const contextValue = {
    items: cartProduct,
    getProductquantity,
    addProductToCart,
    removeProductFromCart,
    deleteProductFromCart,
    getTotalPrice,
  }
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}
