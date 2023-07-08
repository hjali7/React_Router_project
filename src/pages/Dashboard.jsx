import { Link } from "react-router-dom"

function Dashboard({user}) {
  return (
    <div style={{textAlign:'center'}}>
        <h1>{`Welcome ${user.name}`}</h1>
        <Link to='/' className="btn">HOME</Link>
    </div>
  )
}

export default Dashboard