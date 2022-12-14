import React from 'react'
import "../styles/Home.scss";
import vg from "../assets/2.webp";
import who from "../assets/who-we-are.jpg";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

function Home() {
  return (
    <>
    <div className="home" id="Home">
        <main>
          <h1>TechServe...</h1>
          <p>Solution For All Your Tech problems</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
        <p>We are the one and only solution for the tech problems you face everyday.
            We are leading Tech Company looking forward to inhance Tech and Problem Solving abilities in Children.</p>
        </div>
    </div>
    <div className="home3" id="About">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolores dicta cum, eum nemo consectetur tempore quisquam minima amet, molestiae, eos architecto vel atque nesciunt reprehenderit? Tempora aliquid est unde ut illo possimus quidem omnis blanditiis, iure, optio harum illum totam neque nostrum laudantium architecto veritatis deleniti atque nisi reiciendis.</p>
        </div>
        <img src={who} alt="intro" />
    </div>
    <div className="home4" id="Brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div style={{animationDelay:"0.5s"}}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
          <div style={{animationDelay:"0.7s"}}>
            <AiFillYoutube />
            <p>YouTube</p>
          </div>
          <div style={{animationDelay:"1s"}}>
            <AiFillInstagram />
            <p>instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home
