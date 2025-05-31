"use client"

import NavBar from "../components/navbar"
import ProductList from "../components/productList"
import BasketCart from "../components/modals/basketCart"
import { useState } from "react"
import { CartProvider } from "../context/CartContext"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  function toggleModal(): void {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <CartProvider>
      <NavBar toggleModal={toggleModal} />
      <ProductList />
      <BasketCart isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </CartProvider>
  )
}
