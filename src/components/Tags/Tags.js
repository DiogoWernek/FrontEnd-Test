import { Envelope, FacebookLogo, LinkedinLogo, ThumbsUp, WhatsappLogo, X } from 'phosphor-react'
import './Tags.css'

function Tags(){
  return(
    <div className='tags-container'>
      <div className='tags'>
        <h1> TAGS: </h1>
        <p>VENDAS</p>
        <p>APLICATIVO</p>
        <p>LEGISLAÇÃO</p>
      </div>
      <div className='icons'>
        <WhatsappLogo className='svg' />
        <FacebookLogo className='svg'/>
        <X className='svg'/>
        <LinkedinLogo className='svg' />
        <Envelope className='svg' />
        <button className='button'><ThumbsUp /><span>37</span></button>
      </div>
    </div>
  )
}

export default Tags