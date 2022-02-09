import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';

import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min_height">
      <Routes>
          <Route exact path="/" element={<Home />} > </Route>
          <Route path="/company" element={<Company />} > </Route>
          <Route path="/contact" element={<Contact />} > </Route>
          <Route path="/newproject" element={<NewProject />} > </Route>
      </Routes>
      <Footer />
      </Container>
      
    </Router>
  );
}

export default App;
