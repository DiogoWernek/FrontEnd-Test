import "./BadgeMin.css"

import { Clock } from "phosphor-react"


function BadgeMin(){
  return(
    <div className='badge-min'>
      <Clock />
      <p>7 MIN DE LEITURA</p>
    </div>
  )
}

export default BadgeMin