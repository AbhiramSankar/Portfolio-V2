import emailjs from '@emailjs/browser'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const contactArray = 'Contact'.split('')
  const { sectionCount } = useSelector((state) => state.navigation)
  const formRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 5100)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'portfolioMail',
        'template_6io3mco',
        formRef.current,
        'Cl3xW26st-H4cONEy'
      )
      .then(
        () => {
          alert('mesasage sent')
          window.location.reload(false)
        },
        () => {
          alert('mesasage failed')
        }
      )
  }

  return (
    <div
      className={`container ${
        sectionCount === 0 || sectionCount % 2 !== 0
          ? 'tagThemeRed'
          : 'tagThemeWhite'
      }`}
    >
      <section className="contactPage">
        <div className="textZone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              index={15}
            />
          </h1>
          <div className="sectionContent">
            <p>Hello there!</p>
          </div>
        </div>

        <div className="contactFormWrapper">
          <form ref={formRef} onSubmit={sendEmail} className="contactForm">
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea name="message" placeholder="Message" required />
              </li>
              <li>
                <button type="submit" className="contactButton">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
