import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './index.scss'

const TimeLine = (props) => {
  return (
    <VerticalTimeline className="timeLine" lineColor="rgba(22, 26, 33, 1)">
      {props.data.map((data, index) => (
        <VerticalTimelineElement
          key={index}
          className="timelineCards"
          textClassName="timelineCardText"
          contentStyle={{
            background: 'rgba(22, 26, 33, 1)',
            color: 'rgba(247, 247, 249, 1)',
          }}
          contentArrowStyle={{
            borderRight: '7px solid  rgba(247, 247, 249, 1)',
          }}
          date={data.years}
          dateClassName="timelineCardDate"
          icon={
            data.type === 'Education' ? (
              <FontAwesomeIcon icon={faGraduationCap} />
            ) : (
              <FontAwesomeIcon icon={faBriefcase} />
            )
          }
          iconStyle={{
            background: 'rgba(161, 11, 11, 1)',
            color: 'rgba(247, 247, 249, 1)',
          }}
          iconClassName="timelineCardIcon"
        >
          <div className="cardContainer">
            <div className="cardText">
              <h3 className="cardTitle">
                {data.type === 'Education' ? data.course : data.position}
              </h3>
              <div className="cardLoc">{data.location}</div>
              {data.type === 'Education' ? (
                <div className="cardGrade">
                  <strong>{data.grade_type}: </strong>
                  {data.grade}
                </div>
              ) : null}
            </div>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export default TimeLine
