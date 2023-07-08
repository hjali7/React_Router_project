import { Link } from 'react-router-dom'
import './css/error.css'
function Error() {
  return (
    <div className='error_container'>
      <h3>404</h3>
      <p>Page not found.</p>
      <p>please reload this page</p>
      <Link to='/' >
        <button className='btn'>back home</button>
      </Link>
    </div>
  )
}

export default Error