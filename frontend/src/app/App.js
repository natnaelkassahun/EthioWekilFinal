import {createBrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { Route , Routes ,RouterProvider,Outlet} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../routes/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ManageAccount from '../components/Account/ManageAccount/ManageAccount';
import MyAccount from '../components/Account/MyAccount/MyAccount';
import Shop from '../components/Shop/Shop';
import Item from '../components/Item/Item';
import ItemView from '../routes/ItemView';
import CategoryView from '../routes/CategoryView';
import SearchView from '../routes/Search';
import CartItemsProvider from '../Context/CartItemsProvider';
import Login from '../components/Authentication/Login/Login';
import Register from '../components/Authentication/Register/Register';
import Wishlist from '../components/Wishlist';
import WishItemsProvider from '../Context/WishItemsProvider';
import SearchProvider from '../Context/SearchProvider';
import React from 'react'
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { LanguageProvider } from '../languages/Language';




function App() {
  const Layout = ()=> {
    return (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
    );
  }
  const router = createBrowserRouter([{
    element: <Layout/>,
    children: [ 
        {
          path: '/',
          element: <Home />
        },
        {
          children: [
             {
                path: '/account/me',
                element: <MyAccount/>
             },
             {
                path: '/account/manage',
                element: <ManageAccount/>
             },
             {
                path: '/account/login',
                element: <Login/>
             },
             {
                path: '/account/register',
                element: <Register/>
             },
             {
                path: '*',
                element: <Login/>
             }
          ]
       },
       {
          path: "/shop",
          element: <Shop />
       },
       {
        path: "/categories",
        element: <FeaturedCategories />
     },
     {
        children: [
          {
                path:"/categories/:id",
                element: <CategoryView />
          }
        ]
      },
       {
           children: [
              {
                 path:"/item/men/:id",
                 element: <ItemView />
              },
              {
                 path:"/item/women/:id",
                 element: <ItemView />
              },
              {
                 path:"/item/kids/:id",
                 element: <ItemView />
              },
              {
                 path:"/item/constraction'/:id",
                 element: <ItemView />
              },
              {
                 path:"/item/furniture'/:id",
                 element: <ItemView />
              },
              {
                 path:"/item/electronics'/:id",
                 element: <ItemView />
              },
              {
                 path:"/item/featured'/:id",
                 element: <ItemView />
              }
           ]
        },
        {
           path:"/wishlist",
           element: <Wishlist />
        },
        {
           path:"/detail",
           element: <Item/>
        },
        {
           path:"/search/*",
           element: <SearchView />
        }
      ]
    }
  ])
  return (
   
       <LanguageProvider>
         <CartItemsProvider>
            <WishItemsProvider>
                <SearchProvider>
                  <RouterProvider router={router}>
                  </RouterProvider>
                </SearchProvider>
            </WishItemsProvider>
         </CartItemsProvider>
       </LanguageProvider>

  );
}

export default App;