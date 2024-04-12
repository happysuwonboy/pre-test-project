import React, { useEffect, useState } from 'react'
import { Product } from '../types/index';


const useFetchProduct = (id : string = '1') => {

const [product, setProduct] = useState<Product>({} as Product)

useEffect(()=>{
    fetch('https://dummyjson.com/products/' + id)
    .then(response => response.json())
    .then(data => setProduct(data))
    .catch(err => console.error(`error occured while fetching data : ${err}`))
},[id])

  return product

}

export default useFetchProduct