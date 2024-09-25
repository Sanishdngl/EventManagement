import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Event from './Pages/Event';
import Team from './Pages/Team';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Layout from './Components/Layout';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;