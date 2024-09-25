import BadgeDate from '../BadgeDate/BadgeDate'
import BadgeMin from '../BadgeMin/BadgeMin'
import Harry from '../Harry/Harry'
import './Title.css'

function Title(){
  return(
    <div className="title">
    <Harry />
    <h1>DESIGN BETTER. FASTER. TOGETHER.</h1>
    <h2>The digital product design platform powering the world’s best user experiences</h2>
     
      <div className='subtitle'>
        <p>CATEGORIA: <a href="/">POR ONDE COMEÇAR</a></p>
        <BadgeMin />
        <BadgeDate />
      </div>
  </div>
  )
}

export default Title