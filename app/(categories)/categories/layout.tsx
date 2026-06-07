import React from 'react'

const CategoriesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className='max-w-4xl mx-auto p-4'>
    <p>Categories Layout</p>
    {children}
    </section>
  )
}

export default CategoriesLayout