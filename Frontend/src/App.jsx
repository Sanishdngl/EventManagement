import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Main/Home';
import SearchEvent from './Pages/Main/SearchEvent';
import CreateEvent from './Pages/Main/CreateEvent';
import About from './Pages/About/About';
import Contact from './Pages/Main/Contact';
import Layout from './Components/Layout';
import LoginSignup from './Pages/Main/LoginSignup';

import EducationalEvent from "./Pages/Category/EducationalEvent"; // Adjust this if the file is in the "Pages" folder.




const App = () => {
  return (
    <Router>
      <Layout>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-event" element={<SearchEvent />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginsignup" element={<LoginSignup />} />

          <Route path="/educational-events" element={<EducationalEvent />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;