import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductDetail: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)}>ProductDetail</div>
  )
}

export default ProductDetail