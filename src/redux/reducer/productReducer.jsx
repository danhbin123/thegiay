import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arrProduct: [
    { id: 1, name: 'nike 1', price: 1000, image: 'https://picsum.photo/id/1/200/200' }
  ],
  productDetail:{id:1,
    name: 'nike 1'
    ,price:1000,
    image:'https://picsum.photo/id/1/200/200'} 
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getProductDetailAction: (state,action) => {
      state.productDetail = action.payload;
    }
  }
});

export const { getProductDetailAction,getProductAction } = productReducer.actions

export default productReducer.reducer