import React from 'react'
import Allproducts from '../data'
import {Link , useParams} from 'react-router-dom'

function SingleProducts() {
  const {productId} = useParams()
  console.log(productId)
  return (
    <div>
      
    </div>
  )
}

export default SingleProducts