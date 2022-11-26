import { useEffect, useState, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Profile from '../../assets/img/AboutMe.png'
import myHistory from '../../assets/data/myHistory.json'
import skills from '../../assets/data/skills.json'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'
import './index.scss'
import TimeLine from '../Timeline'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import Loader from '../Loader'
// import { useLocation } from 'react-router-dom'
import ScrollDown from '../ScrollDown'
import { useSelector } from 'react-redux'

// import * as Icon from '@fortawesome/free-solid-svg-icons'

const AboutMe = () => {
  // const location = useLocation()
  const [letterClass, setLetterClass] = useState('textAnimate')
  const [imgIndex, setImgIndex] = useState(0)
  const didAnimate = useRef(false)
  const bgRef = useRef()
  const profileImgRef = useRef()
  let aboutMeArray = 'About Me'.split('')
  let myHistoryArray = 'My History'.split('')
  let skillsArray = 'Skills'.split('')

  const { sectionCount } = useSelector(
    (state) => state.navigation
  )
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 3000)
  }, [])

  useEffect(() => {
    if (didAnimate.current === false) {
      gsap.registerPlugin(DrawSVGPlugin)
      gsap
        .timeline()
        .to(bgRef.current, {
          duration: 1,
          opacity: 1,
        })
        .from('path', {
          drawSVG: 0,
          duration: 5,
        })
      gsap.fromTo(
        profileImgRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          // delay: 4,
          duration: 2,
        }
      )
      return () => {
        didAnimate.current = true
      }
    }
  }, [])
  // console.log(titleArray)
  return (
    <div className={`container ${sectionCount === 0 || sectionCount % 2 !== 0 ? 'tagThemeRed' : 'tagThemeWhite'}`}> 
      <section
        id="about"
        className="scroll aboutPage"
        data-section-name="aboutPage"
        icon-name="faUser"
      >
        <div className="textZone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutMeArray}
              index={15}
            />
          </h1>
          <div className="sectionContent">
            <p>Hello there!</p>
            <p>
              I am Abhiram Sankar, and I am a Full Stack Developer working at
              Ignite Software and Design, and a recent Graduate in from the
              National Institute of Technology, Puducherry with a degree in
              Electronics and Communication Engineering.
            </p>
            <p>
              I enjoy solving problems and puzzles. As a result, despite being
              an Electronics Graduate, I enjoy coding and programming. I enjoy
              the challenge of solving any problem or puzzle that is thrown at
              me. I primarily work with Game Development and Machine Learning,
              and I hope to combine the two to improve user experience. As long
              as there's a problem to solve or a puzzle to solve, it's bound to
              be something I enjoy!
            </p>
          </div>
        </div>
        <div className="profileContainer" ref={bgRef}>
          <img
            ref={profileImgRef}
            className="profileImage"
            src={Profile}
            alt="profile"
          />
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 810 510.45"
          >
            <path
              className="profileSvgContainer"
              d="M535 0 535 10 800 10 800 500.45 10 500.45 10 10 195 10 195 0 0 0 0 510.45 810 510.45 810 0 535 0z"
              fill="none"
            />
          </svg>
        </div>
        <ScrollDown/>
      </section>
      <section
        id="history"
        className="scroll myHistoryPage"
        data-section-name="myHistoryPage"
        icon-name="faClockRotateLeft"
      >
        <div className="textZone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={myHistoryArray}
              index={15}
            />
          </h1>
          <div className="sectionContent">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              unde recusandae nam esse suscipit maxime asperiores ea omnis
              numquam iusto dolorum a assumenda voluptatum corporis, iste
              molestiae accusamus nisi ipsa!
            </p>
          </div>
        </div>
        <div className="historyTimeline">
          <TimeLine data={myHistory.data} />
        </div>
        <ScrollDown/>
      </section>
      <section
        id="skills"
        className="scroll skillsPage"
        data-section-name="skillsPage"
        icon-name="faGear"
      >
        <div className="textZone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              index={15}
            />
          </h1>
          <div className="sectionContent">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              unde recusandae nam esse suscipit maxime asperiores ea omnis
              numquam iusto dolorum a assumenda voluptatum corporis, iste
              molestiae accusamus nisi ipsa!
            </p>
          </div>
        </div>
        <div className="skillCarouselContainer">
          <Slider
            className="skillCarousel"
            infinite={true}
            lazyload={true}
            speed={500}
            slidesToShow={3}
            centerMode={true}
            centerPadding={0}
            autoplay={true}
            autoplaySpeed={3000}
            slidesToScroll={1}
            cssEase="linear"
            beforeChange={(current, next) => {
              setImgIndex(next)
            }}
          >
            {skills.data.map((data, index) => (
              <div
                key={index}
                className={index === imgIndex ? 'slide activeSlide' : 'slide'}
              >
                <div className="cardContent">
                  <h3 className="cardTitle">{data.title}</h3>
                  <div className="cardBody">
                    {data.list.map((item, i) => (
                      <div className="skill" key={i}>
                        <img
                          className="skillImg"
                          src={require(`../../assets/img/skills/${item.img}`)}
                          alt={item.name}
                        />
                        <div className="skillName">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default AboutMe
