import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Header from './components/Header';
import MainSection from './components/MainSection';
import Experts from './components/Experts';
import News from './components/News';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          
            <Route index element={<Home />} />
            <Route path='/header' element={<Header />} />
            <Route path='/main' element={<MainSection />} />
            <Route path='/experts' element={<Experts />} />
            <Route path='/news' element={<News />} />
            <Route path='/footer' element={<Footer />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

