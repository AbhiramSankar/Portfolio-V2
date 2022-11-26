import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import ScrollDown from '../ScrollDown'
import myWork from '../../assets/data/myWork.json'
import myCertificates from '../../assets/data/myCertificates.json'
import './index.scss'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faGitlab,
  faItchIo,
} from '@fortawesome/free-brands-svg-icons'
import {
  faFile,
  faLink,
  faWindowMaximize,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const MyWork = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const [workSlideScreen, setWorkSlideScreen] = useState(null)
  const [certSlideScreen, setCertSlideScreen] = useState(null)
  const [workSlideScreenClass, setWorkSlideScreenClass] = useState('hide')
  const [certSlideScreenClass, setCertSlideScreenClass] = useState('hide')
  const [drag, setDrag] = useState(false)
  let myWorkArray = 'My Work'.split('')
  let myCertArray = 'My Certifications'.split('')

  const { sectionCount } = useSelector(
    (state) => state.navigation
  )

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 4000)
  }, [])

  useEffect(() => {
    console.log(workSlideScreen)
  }, [workSlideScreen])

  return (
    <div className={`container ${sectionCount === 0 || sectionCount % 2 !== 0 ? 'tagThemeRed' : 'tagThemeWhite'}`}>
      <section
        id="mywork"
        className="scroll workPage"
        data-section-name="workPage"
        icon-name="faBriefcase"
      >
        <div className="textZone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={myWorkArray}
              index={15}
            />
          </h1>
          <div className="sectionContent">
            <p>Hello there!</p>
          </div>
        </div>
        <div className="workScreenContainer">
          <div className="workScreen scroll-active">
            <Slider
              className="workScreenSlider"
              // infinite={true}
              arrows={false}
              // centerMode={true}
              // adaptiveHeight={true}
              rows={3}
              slidesPerRow={3}
              dots={true}
              beforeChange={() => {
                setDrag(true)
              }}
              afterChange={() => {
                setDrag(false)
              }}
            >
              {myWork.data.map((data) => (
                <div className="workIconContainer" key={data.title}>
                  <div
                    className="workIconWrapper"
                    onClick={() => {
                      if (drag === false) {
                        setWorkSlideScreen(data)
                        setWorkSlideScreenClass('show')
                      }
                    }}
                  >
                    <img
                      id={data.title}
                      className="workIcon"
                      src={require(`../../assets/img/work_icons/${data.img}`)}
                      alt="workIcon"
                    />
                    <div className="workIconTitle">{data.title}</div>
                  </div>
                </div>
              ))}
            </Slider>
            {workSlideScreen !== null ? (
              <div className={`workDetail ${workSlideScreenClass}`}>
                <div className="workDetailTitleWrapper">
                  <h1 className="workDetailTitle">{workSlideScreen.title}</h1>

                  <div className="workDetailSub">
                    <div className="workDetailDateWrapper">
                      <div className="workDetailDateTitle"> COMPLETED ON:</div>
                      <div className="workDetailDate">
                        {workSlideScreen.completed_on}
                      </div>
                    </div>

                    {workSlideScreen.mentor ? (
                      <div className="workDetailMentorWrapper">
                        <div className="workMentorHead">MENTOR:</div>
                        <div className="workMentor">
                          {workSlideScreen.mentor}
                        </div>
                      </div>
                    ) : null}

                    <div
                      className="workDetailLinksWrapper"
                      style={
                        workSlideScreen.mentor
                          ? { backgroundColor: 'rgba(22, 26, 33, 0.5)' }
                          : null
                      }
                    >
                      <div className="workDetailLinks">LINKS:</div>
                      <div className="workDetailLinkIcon">
                        {Object.keys(workSlideScreen.links).map(
                          (key, index) => {
                            let icon = ''
                            if (key === 'report') {
                              icon = faFile
                            } else if (key === 'github') {
                              icon = faGithub
                            } else if (key === 'gitlab') {
                              icon = faGitlab
                            } else if (key === 'itch_io') {
                              icon = faItchIo
                            } else if (key === 'site') {
                              icon = faWindowMaximize
                            }
                            return (
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href={workSlideScreen.links[key]}
                                key={key}
                              >
                                <FontAwesomeIcon icon={icon} />
                              </a>
                            )
                          }
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="workDetailClose">
                    <FontAwesomeIcon
                      className="faIcon"
                      icon={faXmarkCircle}
                      onClick={() => {
                        setWorkSlideScreenClass('close')
                      }}
                    />
                  </div>
                </div>
                <div className="workDetailBodyWrapper">
                  <img
                    className="workDetailImg"
                    src={require(`../../assets/img/work_bg/${workSlideScreen.img}`)}
                    alt="workBG"
                  />
                  <div className="workDetailBlend"></div>
                  <div className="workDetailBody">
                    <div className="workDetailSkillContainer">
                      <div className="workDetailSkillHead">SKILLS:</div>
                      <div className="workDetailSkillBody">
                        {workSlideScreen.skills.map((skill) => (
                          <span className="workDetailSkill">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div className="workDetailTextContainer">
                      {Object.values(workSlideScreen.text).map((text) => (
                        <p>{text}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <ScrollDown />
      </section>

      <section
        id="mycert"
        className="scroll certPage"
        data-section-name="certPage"
        icon-name="faAward"
      >
        <div className="textZone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={myCertArray}
              index={15}
            />
          </h1>
          <div className="sectionContent">
            <p>Hello there!</p>
          </div>
        </div>
        <div className="certScreenContainer">
          <div className="certScreen scroll-active">
            <Slider
              className="certScreenSlider"
              // infinite={true}
              arrows={false}
              // centerMode={true}
              // adaptiveHeight={true}
              rows={3}
              slidesPerRow={3}
              dots={true}
              beforeChange={() => {
                setDrag(true)
              }}
              afterChange={() => {
                setDrag(false)
              }}
            >
              {myCertificates.data.map((data) => (
                <div className="certIconContainer" key={data.title}>
                  <div
                    className="certIconWrapper"
                    onClick={() => {
                      if (drag === false) {
                        setCertSlideScreen(data)
                        setCertSlideScreenClass('show')
                      }
                    }}
                  >
                    <img
                      id={data.title}
                      className="certIcon"
                      src={require(`../../assets/img/cert_icons/${data.cert_icon}`)}
                      alt="certIcon"
                    />
                    <div className="certIconTitle">{data.title}</div>
                  </div>
                </div>
              ))}
            </Slider>
            {certSlideScreen !== null ? (
              <div className={`certDetail ${certSlideScreenClass}`}>
                <div className="certDetailTitleWrapper">
                  <h1 className="certDetailTitle">{certSlideScreen.title}</h1>

                  <div className="certDetailSub">
                    <div className="certDetailDateWrapper">
                      <div className="certDetailDateTitle"> COMPLETED ON:</div>
                      <div className="certDetailDate">
                        {certSlideScreen.completed_on}
                      </div>
                    </div>
                    <div className="certDetailOrganizationWrapper">
                      <div className="certOrganizationHead">
                        ISSUING ORGANIZATION:
                      </div>
                      <div className="certOrganization">
                        {certSlideScreen.issuing_organization}
                      </div>
                    </div>
                    <div className="certDetailMentorWrapper">
                      <div className="certMentorHead">MENTOR:</div>
                      <div className="certMentor">
                        {certSlideScreen.mentors}
                      </div>
                    </div>
                  </div>
                  <div className="certDetailClose">
                    <FontAwesomeIcon
                      className="faIcon"
                      icon={faXmarkCircle}
                      onClick={() => {
                        setCertSlideScreenClass('close')
                      }}
                    />
                  </div>
                </div>
                <div className="certDetailBodyWrapper">
                  <img
                    className="certDetailImg"
                    src={require(`../../assets/img/cert/${certSlideScreen.cert_img}`)}
                    alt="certBG"
                  />
                  <div className="certDetailBlend"></div>
                  <div className="certDetailBody">
                    <div className="certDetailBodyContent">
                      <div className="certDetailInstituteWrapper">
                        {certSlideScreen.issuing_institute ? (
                          <span className="certInstituteHead">
                            ISSUING INSTITUTE:
                          </span>
                        ) : null}
                        {certSlideScreen.issuing_institute ? (
                          <span className="certInstitute">
                            {certSlideScreen.issuing_institute}
                          </span>
                        ) : null}

                        {certSlideScreen.grade_achieved ? (
                          <span className="certInstituteHead">
                            GRADE ACHIEVED:
                          </span>
                        ) : null}
                        {certSlideScreen.grade_achieved ? (
                          <span className="certInstitute">
                            {certSlideScreen.grade_achieved}
                          </span>
                        ) : null}

                        <span className="certInstituteHead">ISSUE DATE:</span>
                        <span className="certInstitute">
                          {certSlideScreen.issue_date}
                        </span>

                        <span className="certInstituteHead">
                          EXPIRATION DATE:
                        </span>
                        <span className="certInstitute">
                          {certSlideScreen.expiration_date}
                        </span>

                        <span className="certInstituteHead">
                          CREDENTIAL ID:
                        </span>
                        <span className="certInstitute">
                          {certSlideScreen.credential_id}
                        </span>

                        <span className="certInstituteHead">
                          CREDENTIAL URL:
                        </span>
                        <span className="certInstitute">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={certSlideScreen.credential_url}
                          >
                            <FontAwesomeIcon icon={faLink} /> Click Here
                          </a>
                        </span>
                      </div>
                      <div className="certImageWrapper">
                        <img
                          className="certImage"
                          src={require(`../../assets/img/cert/${certSlideScreen.cert_img}`)}
                          alt="certBG"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MyWork
