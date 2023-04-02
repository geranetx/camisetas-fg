import React from "react";
import Cartwidget from "./cartwidget/cartwidget.js";
import { useEffect, useState } from "react";
import { getCategories } from "../asyncMock.js";
import { Link } from "react-router-dom";



function Navbar() {
  const [categories, setCategories] = useState ([])

useEffect(() => {
getCategories()
    .then(response => {
      setCategories(response)

})
}, [])

return (
      <nav style={{display: 'flex', justifyContent: "space-around", alignItems: "center"}}>
        <h1>Inicio</h1>
        <div>
        {
        categories.map(cat => {
          return (
          <Link key={cat.id} to={'/category/${cat.slug}'}>{cat.description}</Link>
          )
         })
        }
        
         </div>
        <Cartwidget/>
          
      </nav>
    )
  }

export default Navbar







