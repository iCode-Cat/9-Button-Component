import Buttons from "../components/Buttons"
import React from 'react'

const Home = () => {
    return (
        <>
      <header className="header">
          <p className="header-title">
            Buttons
          </p>
      </header>
      <main className="container">
        <article>
            <Buttons />
        </article>            
      </main>
      <footer className="footer">
          <p>
          created by iCode-Cat - devChallenges.io
          </p>
      </footer>
      </>
    )
}

export default Home
