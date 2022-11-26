import './index.scss'
import LogoAS from '../../assets/img/logo6.png'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent, setLoading, setReload } from '../../redux/nav'
import { useEffect, useState } from 'react'

const Loader = () => {
  const { current, isLoading, isReload } = useSelector(
    (state) => state.navigation
  )
  const [loadClass, setLoadClass] = useState('')
  useEffect(()=>{
    if(isLoading === false && isReload === false){
      setLoadClass('loaderExit')
    } else if(isLoading === true && isReload === false){
      setLoadClass('loaderEntry')
    } else if (isReload === true){
      setLoadClass('')
    } else {
      setLoadClass('')
    }
  },[isLoading, isReload])

  return (
    <div
      id="loaderContainer"
      className={`loaderContainer ${loadClass}`}
    >
      <img className="loadingLogo" src={LogoAS} alt="logo" />
      <div className="loadingText">Abhiram is Searching...</div>
      <span className="loader"></span>
    </div>
  )
}

export default Loader
