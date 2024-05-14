import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './NotFound'
import Services from './Services'
import Projects from './Projects'
import Awards from './Awards'
import AboutUs from './AboutUs'
import Home from './Home'
import ContactUs from './ContactUs'
import Talent from './Talent'
import RegisterTalent from './Talent/RegisterTalent'
import Layout from '../components/shared/Layout';

const AppContainer = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" index element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/talents" element={<Talent />} />
      <Route path="/talents/register" element={<RegisterTalent />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Route>
    </Routes>
  </BrowserRouter>

)

export default AppContainer