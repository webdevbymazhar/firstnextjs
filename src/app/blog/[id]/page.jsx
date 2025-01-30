"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    let params = useParams()
  return (
   <p>{JSON.stringify(params.id)}</p>
  )
}

export default page