import React from 'react'

const CategoriesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section>
    <p>Categories Layout</p>
    {children}
    </section>
  )
}

export default CategoriesLayout