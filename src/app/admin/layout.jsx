import Link from 'next/link'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div style={{display:"flex", }}>
      <div style={{height:"100vh",padding:"20px 0", width:"20%", background:"black",display:"flex", flexDirection:"column",justifyContent:"space-between", alignItems:"center"}}>
        <h1 style={{color:"white"}}>Blog App</h1>

        <div style={{display:"flex", flexDirection:"column", gap:"10px", alignItems:"center"}}>
          <Link style={{fontSize:"30px",color:"white", textDecoration:"none"}} href={"/admin"}>Dashboard</Link>
          <Link style={{fontSize:"30px",color:"white", textDecoration:"none"}} href={"/admin/create"}>Create Blog</Link>
          <Link style={{fontSize:"30px",color:"white", textDecoration:"none"}} href={"/admin"}>Blogs</Link>

        </div>

        <button>Log Out</button>
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", width:"100vw"}}>
        {children}
      </div>
    </div>
  )
}

export default Layout
