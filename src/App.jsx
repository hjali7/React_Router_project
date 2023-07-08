import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Home ,About ,Products ,Login ,Error ,ShareLayout , SingleProducts } from './pages/imports'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShareLayout />} >
          <Route index element={<Home />}/>
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProducts />} />
          <Route path='error' element={<Error />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
