interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

const productList: Product[] = [
  {
    id: "1",
    title: "Mixed Fruits Chocolates Pack",
    price: 30,
    image: "/images/5.jpg",
  },
  {
    id: "2",
    title: "Organic Apple Juice Pack",
    price: 40,
    image: "/images/6.jpg",
  },
  {
    id: "3",
    title: "Mixed Almond nuts juice Pack",
    price: 25,
    image: "/images/7.jpg",
  },
  {
    id: "4",
    title: "Mixed Fruits Chocolates Pack",
    price: 30,
    image: "/images/8.jpg",
  },
  {
    id: "5",
    title: "Ground Nuts Oil Pack",
    price: 48,
    image: "/images/1.jpg",
  },
  {
    id: "6",
    title: "Organic Litchi Juice Pack",
    price: 72,
    image: "/images/2.jpg",
  },
  {
    id: "7",
    title: "Crunchy Banana Chips",
    price: 68,
    image: "/images/3.jpg",
  },
  {
    id: "8",
    title: "Crunchy Potato Chips",
    price: 50,
    image: "/images/4.jpg",
  },
]

export default productList
