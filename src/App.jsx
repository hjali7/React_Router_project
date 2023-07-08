import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Home ,About ,Products ,Login ,Error ,ShareLayout , SingleProducts ,Dashboard, ShareLayOutProducts } from './pages/imports'
import './App.css'
import { useState } from 'react'
function App() {
  const [user , setUser] = useState()
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShareLayout />} >
          <Route index element={<Home />}/>
          <Route path='about' element={<About />} />
        <Route path='products' element={<ShareLayOutProducts />}>
          <Route  index element={<Products />} />
          <Route path=':productId' element={<SingleProducts />} />
        </Route>
          <Route path='error' element={<Error />} />
          <Route path='login' element={<Login setUser={setUser}/>} />
          <Route path='dashboard' element={<Dashboard user={user} />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
