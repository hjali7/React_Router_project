import Allproducts from '../data'
import {Link , useParams} from 'react-router-dom'
import './css/singleproduct.css'

function SingleProducts() {
  const {productId} = useParams()
  const product = Allproducts.find(product => product.id === productId)
  const {name , image} = product
  return (
    <div className='single_container'>
      <h1>{name}</h1>
      <div>
        <img src={image} alt='product image' />
      </div>
      <Link to ='/products'>
        <button type="button" className='btn' style={{marginBottom : '2rem'}}>
          Back To Products List
        </button>
      </Link>
    </div>
  )
}

export default SingleProducts