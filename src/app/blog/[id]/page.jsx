"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {

    let params = useParams()
  return (
    <div>
        {JSON.stringify(params)}
    </div>
  )
}

export default page