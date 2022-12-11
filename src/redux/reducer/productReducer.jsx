import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arrProduct: [
    {id:1,name:'nike 1',price:1000,image:'https://picsum.photo/id/1/200/200'}
  ]
}

const productReducer = createSlice({
  name: second,
  initialState,
  reducers: {}
});

export const {} = productReducer.actions

export default productReducer.reducer