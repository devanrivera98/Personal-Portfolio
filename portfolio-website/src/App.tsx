import './App.css'
import { HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header'
import HomePage from './HomePage'

function App() {
  const helmetContext = {};

  return (
    <>
    <HelmetProvider context={helmetContext}>
    <Header />
    <HomePage/>
    </HelmetProvider>
      {/* <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes> */}
    </>
  )
}

export default App
