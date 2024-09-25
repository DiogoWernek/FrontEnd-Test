import { CalendarBlank, Clock, ThumbsUp } from 'phosphor-react'
import './BalloonFooter.css'

function BalloonFooter() {
  return(
    <div className='badges-footer'>
      <div className='badge-date-footer'>
        <CalendarBlank />
      <p>01/SETEMBRO/2024</p>
    </div>

    <div className='badge-min-footer'>
        <Clock />
        <p>7 MIN DE LEITURA</p>
    </div>

    <div className='div-button-footer'>
      <button className='like-button-footer'><ThumbsUp /><span>35</span></button>
    </div>
  </div>  
  )
}

export default BalloonFooter