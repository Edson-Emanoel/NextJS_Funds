import Link from 'next/link'
import React from 'react'

export default function notfound() {
  return (
    <div className='mx-auto mt-10 bg-stone-900 max-w-[550px] px-[50px] py-[50px] rounded-md'>
      <div className='flex items-center gap-5 mb-2'>
            <h1 className='text-2xl'>Página não não encontrada :(</h1> 
            <small className='mt-2 text-red-300'>Erro: 404</small>
      </div>

      <p className='text-lg mb-4'>Essa página que você tentou acessar não existe!</p>
      
      <Link href="/" className='text-blue-400 text-sm'>
            Volte para nossa página principal
      </Link>
    </div>
  )
}