import React from 'react'

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section>
    <p>Navbar</p>
    {children}
    </section>
  )
}

export default MainLayout