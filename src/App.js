import {Container, Navbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Products from './Sharp/Products';
import CartBtn from './Cart/CartBtn';
import Cart from './Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About/About';
function App() {
  const[state,setState]=useState(false)

  const router= createBrowserRouter([
    {path:'/',element:<Products/>},{
      path:'/About',element:<About/>
    }
  ])

  return (<>
      <CartProvider >
    <Navbar bg="success" expand="lg">

     <Container>
        <Navbar.Brand href="#"> E-Commerce</Navbar.Brand>
        
        <Navbar href="#">Home </Navbar>
         <Navbar href="#">about </Navbar>
         
        <Navbar href="#"><CartBtn onClick={()=>setState(true)}></CartBtn>  </Navbar>
      </Container>

    </Navbar>

      {state &&  <Cart onClose={()=>setState(false)}/>}
    
      <RouterProvider router={router}/>
  
     {/* <Products />   */}
      </CartProvider>
  
     </>
      
    
  );
}

export default App;
