import "./BadgeDate.css"

import { CalendarBlank } from "phosphor-react"


function BadgeDate(){
  return(
    <div className='badge-date'>
      <CalendarBlank />
      <p>01/SETEMBRO/2024</p>
    </div>
  )
}

export default BadgeDate