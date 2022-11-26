import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas as Icons } from '@fortawesome/free-solid-svg-icons'


const PageNav = (props) => {
  // console.log(props)
  return (
    <div className='pageNavContainer'>
      {props.page.map((index, section) => {
        // let section = props.page[index]
        let icon = section.getAttribute("icon-name")
        // console.log(icon)
        return(
          <div key={section.id} id={`${section.id}Btn`} className={`pagNavBtn ${index === 0 ? 'activeBtn' : ''}`}>
            <FontAwesomeIcon className='pageNavIcon' icon={Icons[icon]} color="rgba(247, 247, 249, 1)" />
          </div>
        )}
        )
      }
    </div>
  )
}

export default PageNav
