import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import Port from './port'
import Footer from './footer'
import footerImg from './assets/Vector.png'

// importing images
import img1 from './assets/backend.png'
import img2 from './assets/App-dev.png'
import img3 from './assets/frontend.png'
import img4 from './assets/Ecom.png'
import img5 from './assets/Edtech.png'
import img6 from './assets/Sendpay.png'
function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="cardio">
        <h1 id="passions">Additional Passions</h1>
        <div id="cards">
      <Card image={img1} title = {"Back-End Developer"} description = {"(Node JS, Express JS, Mongo DB & ZOD)"} />
      <Card image={img2} title = {"App Developer"} description = {"( JAVA, React Native & Swift )"} />
      <Card image={img3} title = {"Front-End Developer "} description = {"( Java Script, React JS & Next JS )"} />
        </div>
      </div>
      <div className="port-folio-section">
      <h1 id="passions">My Portfolio</h1>
      <div className="port-cards">
        <Port name={"E Commerce Website"} image={img4}  /> 
        <Port name={"Best Learning"} image={img5}  /> 
        <Port name={"Send Pay Website"} image={img6}  /> 

      </div>
        </div>
      <Footer imageFooter={footerImg} />
    </>
  )
}

export default App
