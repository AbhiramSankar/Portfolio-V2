import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import LogoAS from '../../assets/img/logo6.png'
import SubLogo from '../../assets/img/SubLogo.png'
import {
  faBriefcase,
  faEnvelope,
  faHome,
  faUser,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import {
  faGithub,
  faGitlab,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const SideBar = () => {
  const [showNav, setShowNav] = useState(false)
  const [closeAnim, setcloseAnim] = useState(false)

  return (
    <div className="navBar">
      <Link className="logo" to="/">
        <img src={LogoAS} alt="logo" />
        <img className="subLogo" src={SubLogo} alt="abhiram" />
      </Link>
      <nav className={`${showNav ? 'mobileShow' : ''} ${closeAnim ? 'closeAnim' : ''}`}>
        <NavLink exact="true" activeclassname="active" to="/" end>
          <FontAwesomeIcon icon={faHome} color="#333f4f" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="aboutLink"
          to="/about-me"
        >
          <FontAwesomeIcon icon={faUser} color="#333f4f" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="workLink"
          to="/my-work"
        >
          <FontAwesomeIcon icon={faBriefcase} color="#333f4f" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contactLink"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#333f4f" />
        </NavLink>
      </nav>
      <ul className={showNav ? 'mobileLinks' : ''}>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/abhiram-sankar/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#333f4f" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AbhiramSankar"
          >
            <FontAwesomeIcon icon={faGithub} color="#333f4f" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gitlab.com/AbhiramSankar"
          >
            <FontAwesomeIcon icon={faGitlab} color="#333f4f" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => {
          if(showNav === true){
            setShowNav(false)
            setcloseAnim(true)
          }else{
            setcloseAnim(false)
            setShowNav(true)
          }
        }}
        icon={faBars}
        color="#a10b0b"
        size="3x"
        className="hamburgerIcon"
      />
    </div>
  )
}

export default SideBar
