import { CalendarBlank, Clock, ThumbsUp } from 'phosphor-react'
import './BalloonBadge.css'

function BalloonBadge() {
  return(
    <div className='badges'>
      <div className='badge-dat'>
        <CalendarBlank />
      <p>01/SETEMBRO/2024</p>
    </div>

    <div className='badge-mi'>
        <Clock />
        <p>7 MIN DE LEITURA</p>
    </div>

    <div className='div-button'>
      <button className='like-button'><ThumbsUp /><span>35</span></button>
    </div>
  </div>  
  )
}

export default BalloonBadge