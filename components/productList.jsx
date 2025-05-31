import ProductItems from "./productItem"
import data from "../app/data/data"

function productList() {
  return (
    <div className="container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between w-full max-w-full mx-auto p-6 gap-8">
      {data.map((item) => {
        return <ProductItems data={item} key={item.id} />
      })}
    </div>
  )
}

export default productList
