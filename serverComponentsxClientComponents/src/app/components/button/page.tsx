'use client'

import { useState } from "react"

export default function Button() {
  const [component, setComponent] = useState("Server Componente");

  function handleChangeComponent () {
      if(component === "Server Componente"){
            setComponent("Client Component")
      }
      
      if(component === "Client Component"){
            setComponent("Server Component")
      }
  }

  return (
      <div>
            <button className="bg-blue-500 p-2 rounded-md mb-4" onClick={handleChangeComponent}>Alterar Componente</button>
            <h3>Componente: {component}</h3>
      </div>
  )
}