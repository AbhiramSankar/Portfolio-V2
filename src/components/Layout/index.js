import { Outlet, useLocation } from 'react-router-dom'
import SideBar from '../Sidebar'
import $ from 'jquery'
import jqueryScrollify from 'jquery-scrollify'
import './index.scss'
import { useEffect, useState } from 'react'
import PageNav from '../PageNav'
import Loader from '../Loader'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent, setLoading, setReload, setSectionCount } from '../../redux/nav'
import Maintanence from '../Maintanence'

const Layout = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const { current, isLoading, isReload, maintenance } = useSelector(
    (state) => state.navigation
  )
  const [page, setPage] = useState([])

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    setPage($('.scroll'))
    dispatch(setSectionCount($('.scroll').length))
    $(() => {
      $.scrollify({
        section: '.scroll',
        sectionName: 'section-name',
        easing: 'easeOutExpo',
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        setHeights: true,
        overflowScroll: true,
        updateHash: false,
        touchScroll: false,
        before: () => {
          // console.log(`#${$.scrollify.current()[0].id}Btn`)
          $('.pagNavBtn').removeClass('activeBtn')
          $(`#${$.scrollify.current()[0].id}Btn`).addClass('activeBtn')
        },
      })

      $('.scroll').map((index, sec) => {
        // console.log(sec.getAttribute("data-section-name"))
        $(`.pageNavContainer div:nth-child(${index + 1})`).on('click', () => {
          $.scrollify.move(`#${sec.getAttribute('data-section-name')}`)
        })
      })

      $(window).on('load', () => {
        $('.scroll').map((index, sec) => {
          // console.log(sec.getAttribute("data-section-name"))
          $(`.pageNavContainer div:nth-child(${index + 1})`).on('click', () => {
            $.scrollify.move(`#${sec.getAttribute('data-section-name')}`)
          })
        })
      })

      $('.scroll-active').on('mouseover', () => {
        $.scrollify.disable()
      })

      $('.scroll-active').on('mouseout', () => {
        $.scrollify.enable()
      })

      $(window).on('load', function () {
      if(isReload === false){
        dispatch(setReload(true))
      }
      })
    })
  }, [location, isLoading])

  useEffect(() => {
    if (location.pathname !== current) {
      dispatch(setCurrent(location.pathname))
      // console.log('test')
      if (current !== '') {
        dispatch(setReload(false))
        dispatch(setLoading(true))
      }
    }
  }, [current, location])

  useEffect(() => {
    if (isReload === true) {
      dispatch(setLoading(false))
    }
  }, [isReload])


  useEffect(() => {
    if (isLoading === true) {
      $.scrollify.disable()
    } else {
      $.scrollify.enable()
    }

    if (isLoading === true) {
      setTimeout(() => {
        dispatch(setLoading(false))
      }, 2000)
    }
  }, [isLoading])

  return (
    <div className="App">
      {
        maintenance === true ? 
        <Maintanence/> : null
      }
      <SideBar />
      <div className="page">
        {/* <span className='tags topTags'>
        <span className='topTagHTML'>&lt;html&gt;</span><br />
        &lt;body&gt;
      </span> */}
      {
        isLoading === false ?
        <Outlet /> : null
      }
        <Loader/>
        {/* {isLoading === true ? <Loader /> : null} */}
        {/* <span className='tags bottomTags'>
        &lt;/body&gt;
        <br />
        <span className='bottomTagHTML'>&lt;/html&gt;</span>
      </span> */}
      </div>
      <PageNav page={page} />
    </div>
  )
}

export default Layout
