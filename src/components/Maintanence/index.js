import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setMaintenance } from '../../redux/nav'
import './index.scss'
const Maintanence = () => { 
  const dispatch = useDispatch()
  const [vis, setVis] = useState('textAnimate')
  return (
    <div>
      <div className="maintPage">
        <div>Sorry...the website is down for maintanence...for now...</div>
        <div>Please wait for me bring it back to life</div>
        <div>If you want to know about me...</div>
        <a  target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1u3e4Y36kjIDVrM3Tu0G6CMDgeA09G0E2/view?usp=sharing" className="cvBtn">
          <span className="contactButtonText">Here's My CV</span>
        </a>
      </div>
      <div className="maintInput">
        <button onClick={() => {setVis(!vis)}}></button>
        <input id='code' onChange={() => {dispatch(setMaintenance(document.getElementById('code').value))}} style={{visibility: (vis === true ? 'visible' : 'hidden')}} type="text" />
      </div>
    </div>
  )
}
export default Maintanence
