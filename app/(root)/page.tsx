import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Adrian'};

  return (
    //El section podria decirse que es un div mas formal y que abarcaria toda esta parte de la app
    <section className="home">
      <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || 'Guest'}
              subtext="Manage the products you are tracking"
            />
            
          </header>
      </div>
    </section>
  )
}

export default Home