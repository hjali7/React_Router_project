import { Outlet } from 'react-router-dom'

function ShareLayOutProducts() {
  return (
    <>
        <h2>Products</h2>
        <Outlet />
    </>
  )
}

export default ShareLayOutProducts