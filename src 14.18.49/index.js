import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './assets/scss/style.scss';
import Carts from './pages/carts/Carts';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/register/Register';
import Search from './pages/search/Search';
import HomeTemplate from './templates/homeTemplate/HomeTemplate';
import UserTemplate from './templates/userTemplate/UserTemplate';
import { Provider } from 'react-redux';
 
// import Login from './pages/login'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
   <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='detail' element={<Detail />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='carts' element={<Carts />}></Route>
        <Route path='search' element={<Search />}></Route>
        <Route path='*' element={<Navigate to="" />}></Route>
      </Route>

      <Route path='users' element={<UserTemplate />}>
          <Route index element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          {/* Gõ /users/không có link => về lại users */}
          <Route path='*' element={<Navigate to="/users" />}></Route>

      </Route>

    </Routes>
  </BrowserRouter>

 </Provider>
);