"use client"
import React, { useState } from 'react'

const Admin = () => {
    let [count,setcount] = useState(0)
  return (
    <div>
        {count}
      <h1>This is my dashboard page</h1>
    </div>
  )
}

export default Admin
