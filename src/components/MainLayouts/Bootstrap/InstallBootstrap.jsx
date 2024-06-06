'use client'
import React from 'react'
import { useEffect } from 'react'

export default function InstallBootstrap() {

    useEffect(() => {
      import ("bootstrap/dist/js/bootstrap.min.js");
    }
    , []);
  return (
    <div>
      
    </div>
  )
}
