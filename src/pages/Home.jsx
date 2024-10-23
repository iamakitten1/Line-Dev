import Courses from '../components/Courses'
import Experts from '../components/Experts'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Navbar from '../components/Navbar'
import News from '../components/News'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <MainSection />
      <Experts/>
      <Courses/>
      <News/>
      <Footer/>
    </div>
  )
}

export default Home