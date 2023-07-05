import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Home ,About ,Products ,Login ,Error ,ShareLayout } from './pages/imports'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShareLayout />} >
          <Route index element={<Home />}/>
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='error' element={<Error />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
