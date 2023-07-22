import React from 'react'
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'

function Main() {
  const sectionRef = React.useRef(null);

  function handleScroll() {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main>
      <Promo onScroll={handleScroll} />
      <AboutProject />
      <Techs />
      <AboutMe forwardRef={sectionRef} />
      <Portfolio />
    </main>
  )
}

export default Main