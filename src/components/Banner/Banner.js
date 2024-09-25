import "./Banner.css";

function Banner(){
  return(
    <header className="banner">
      <img src="/images/banner.png" alt="Banner Principal" />
      <div className="description">
        <p>MINI-QUADROS FEITOS À MÃO</p>
      </div>
      <div>
        <p className="font">FONTE: NEW YORK TIMES</p>
      </div>
    </header>
  )
}

export default Banner