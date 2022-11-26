import './index.scss'
import LogoA from '../../assets/img/LogoA.png'
import LogoS from '../../assets/img/LogoS.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faFile,
  faUser
} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const helloArray = 'Hello...'.split('')
  const iAmArray = 'I am'.split('')
  const firstNameArray = 'bhiram'.split('') //['b', 'h', 'i', 'r', 'a', 'm']
  const lastNameArray = 'ankar,'.split('') //['a', 'n', 'k', 'a', 'r', ',']
  const jobArray = 'Full Stack Developer.'.split('')

  const { sectionCount } = useSelector(
    (state) => state.navigation
  )

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 5100)
  }, [])

  return (
    <>
    <div className={`container ${sectionCount === 0 || sectionCount % 2 !== 0 ? 'tagThemeRed' : 'tagThemeWhite'}`}>
      <section className='homePage'>
        <div className="textZone">
          <h1>
            {/* <span className={letterClass}>H</span> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={helloArray}
              index={7}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={iAmArray}
              index={14}
            />
            <img src={LogoA} alt="initials" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={firstNameArray}
              index={18}
            />
            <img src={LogoS} alt="initials" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={lastNameArray}
              index={24}
            />
            <div>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                index={31}
              />
            </div>
          </h1>
          <h2>
            Full Stack Developer at Ignite Software and Design / <br />
            National Institute of Technology Puducherry Graduate
          </h2>
          <div class="homeButtons">
          <Link to="/about-me" className="aboutButton">
            <FontAwesomeIcon icon={faUser}/>
            <span className='aboutButtonText'>MORE ABOUT ME</span>
          </Link>
          <Link to="/contact" className="contactButton">
            <FontAwesomeIcon icon={faEnvelope}/>
            <span class="contactButtonText">CONTACT ME</span>
          </Link>
          </div>
        </div>
        <Logo />
      </section>
      
      {/* <span className='tags bottomTags'>
        &lt;/body&gt;
        <br />
        <span className='bottomTagHTML'>&lt;/html&gt;</span>
      </span>  */}
    </div>
    {/* <Loader /> */}
    </>
  )
}

export default Home
