import axios from 'axios';
import { async } from 'q';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import ShoesCard from '../../components/ShoesCard/ShoesCard'
import { getProductDetailAction } from '../../redux/reducer/productReducer';

const Detail = () => {
  const { productDetail } = useSelector(state => state.productReducer);

  const dispatch = useDispatch();

  const params = useParams();


  const getProductById = async () => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
      method: `GET`
    })
    console.log(result.data.content);

    const action = getProductDetailAction(result.data.content);
    dispatch(action)
  }

  useEffect(() => {
    getProductById()
  }, [params.id])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <img src={productDetail?.image} alt="" />
        </div>
        <div className='col-8'>
          <h3>{productDetail?.name}</h3>
          <p>{productDetail?.price}</p>
          <button className='btn btn-dark'>add to cart <i className='fa fa-cart-plus'></i></button>
        </div>
      </div>
      <div className='mt-2'>
        <h3>Realated Product</h3>
        <div className='row'>
          {productDetail?.relatedProduct?.map((item,index) => {
            return <div className='col-4' key={index}>
               <ShoesCard prod={item}/>    
            </div>
          })}
          <div className='col-4'>
            <ShoesCard prod={productDetail} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail