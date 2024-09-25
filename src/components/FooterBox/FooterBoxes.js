import BalloonFooter from '../BalloonFooter/BalloonFooter'
import './FooterBoxes.css'

function FooterBoxes() {
  return(
    <div className="footer-container">

      <div className='box'>
        <img src="/images/harry.png" alt="Imagem da caixa de mensagem" />
        <h1>DESIGN BETTER. FASTER. TOGETHER.</h1>
        <p>Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII.</p>
        <BalloonFooter />
      </div>

      <div className='box'>
        <img src="/images/harry.png" alt="Imagem da caixa de mensagem" />
        <h1>DESIGN BETTER. FASTER. TOGETHER.</h1>
        <p>Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII.</p>
        <BalloonFooter />
      </div>

      <div className='box'>
        <img src="/images/harry.png" alt="Imagem da caixa de mensagem" />
        <h1>DESIGN BETTER. FASTER. TOGETHER.</h1>
        <p>Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII.</p>
        <BalloonFooter />
      </div>

    </div>
  )
}

export default FooterBoxes