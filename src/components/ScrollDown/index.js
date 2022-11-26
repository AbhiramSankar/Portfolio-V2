import './index.scss'
const ScrollDown = () => {
    return(
        <div className="mouse_scroll">
		<div className="mouse">
			<div className="wheel"></div>
		</div>
		<div className='scrollDownContainer'>
			<span className='scrollDown'>SCROLL DOWN</span>
		</div>
		{/* <div>
			<span className="m_scroll_arrows one"></span>
			<span className="m_scroll_arrows two"></span>
			<span className="m_scroll_arrows three"></span>
		</div> */}
</div>
    )
}

export default ScrollDown
