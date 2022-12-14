import React from 'react'
import "../styles/footer.scss";

function Footer() {
  return (
   <footer>
    <div>
      <h1>Follow Us</h1>
    </div>
    <div className="content">
      <div className="icons">
        <a href='https://github.com'>GitHub</a>
        <a href='https://instagram.com'>Instagram</a>
        <a href='https://linkedin.com'>LinkedIn</a>
        <a href='https://slack.com'>Slack</a>
        <a href='https://youtube.com'>YouTube</a>
      </div>
      <div>
        <p>Copyright @ 2022 all rights are reserved.</p>
      </div>
    </div>
   </footer>
  )
}

export default Footer
