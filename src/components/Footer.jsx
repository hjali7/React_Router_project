import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='footer_container'>
      <div className="footer_container_links">
        <h4>social links</h4>
        <Link to='https://github.com/' className='links'>Git Hub</Link>
        <Link to='https://google.com/' className='links'>Google</Link>
        <Link to='https://Linkedin.com/' className='links'>Linkedin</Link>
        <Link to='https://discord.com//' className='links'>Discord</Link>
      </div>
      <div className="footer_container_article">
        <h4>article for read more</h4>
        <Link to='https://reactrouter.com/en/main' className='links'>Router</Link>
        <Link to='https://reactrouter.com/en/main' className='links'>Matrial Ui</Link>
        <Link to='https://reactrouter.com/en/main' className='links'>Redux</Link>
        <Link to='https://reactrouter.com/en/main' className='links'>React</Link>
      </div>
      <div className="footer_containr_docx">
        <h4>Language and framework  </h4>
        <Link to='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>JAVASCRIPT</Link>
        <Link to='https://react.dev/'  className='links'>REACT JS</Link>
        <Link to='https://web.dev/learn/css/' className='links'>CSS</Link>
      </div>
    </div>
      <div className="footer-copy">
        {"&copy;2023 All rights reserved by __):" }
      </div>
    </>
  )
}

export default Footer