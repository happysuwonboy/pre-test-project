import React, { useEffect, useState } from 'react'
import { Product } from 'types';

const useFetchProducts = (searchQuery : string = '') => {
  
  const [products, setProducts] = useState<Product[]>([] as Product[])

  useEffect(() => {
    fetch(`https://dummyjson.com/products${searchQuery ? '/search?q=' + searchQuery : ''}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.products)
      })
      .catch(err => {
        console.error(`error occured while fetching data : ${err}`)
      })
  },[searchQuery])

  return products
}

export default useFetchProducts;