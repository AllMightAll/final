import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import Basket from './components/basket/Basket'
import Description from './components/Description';

export const AppContext = React.createContext({})

function App() {

const [tyrs, setTyrs] = useState([])

const [overlayItems, setOverlayItems] = useState([])
useEffect (()=>{
  async function axiosData(){
    const tyrsData = await axios.get('https://644b903f17e2663b9df26afd.mockapi.io/tyrs')
    const cartData = await axios.get('https://644b903f17e2663b9df26afd.mockapi.io/cart')

    setTyrs(tyrsData.data)
    setOverlayItems(cartData.data)
  }
  axiosData();
},[])


const deleteItems=(id)=>{
  axios.delete(`https://644b903f17e2663b9df26afd.mockapi.io/cart/${id}`)
  setOverlayItems((objDelete)=> objDelete.filter(item=> item.id !==id))
}

const isAdded=(myId)=>{
  return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
}



return (
    
  <AppContext.Provider
  value={
    {
      tyrs,
      setTyrs,
      overlayItems,
      setOverlayItems,
      isAdded 
    }
  }>

    <div>
     
     <Router>
     <Header/> 
      <Routes>
      
    

    <Route path='/'
                    element={
                        <Home
                        item={tyrs}
                        overlayItems={overlayItems}
                        setOverlayItems={setOverlayItems}
                        />
                    }
                />

   

<Route path='/description'
                element={
                        <Description/>
                    }
                />

        <Route path='/cart'
                element={
                        <Basket
                        totalPrice={
                          overlayItems.reduce((element = overlayItems.length, obj)=>
                          element+obj.price, 0 
                          )
                        }
                        overlayProp={overlayItems}
                        deleteItems={deleteItems}
                        />
                    }
                />


      </Routes>
      </Router> 
   
    
      <Footer/>
     </div>

    </AppContext.Provider>
  );
}

export default App;
