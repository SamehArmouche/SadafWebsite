import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './NotFound'
import Services from './Services'
import Projects from './Projects'
import Home from './Home'
import Layout from '../components/shared/Layout';

const AppContainer = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" index element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Route>
    </Routes>
  </BrowserRouter>

)

export default AppContainer