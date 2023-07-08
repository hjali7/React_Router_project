import Allproducts from "../data"
import SingleProducts from "./SingleProducts"
import { Link } from "react-router-dom"
import './css/products.css'

function Products() {
  return (
    <div className="products_container">
      <h1>Our Products</h1>
      <div className="products_container_links">
        {Allproducts.map(product => {
          const { name , id } = product
          return (
            <article key={id}>
                <h4>{name}</h4>
                <Link to={`/products/${id}`} className="btn">show more</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Products