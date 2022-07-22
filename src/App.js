import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./component/home/Home";
import Team from './component/Team/Team'
import PageNotFound from "./component/pagenotfound/PageNotFound";
import Charity from './component/Charity/Charity';
import Contact from './component/Contact/Contact';
import Mint from './component/Mint/Mint'
import ScrollToTop from "./component/ScrollToTop";
import News from "./component/NewsArticles/News";
import Media from "./component/Media/Media";
import Press from "./component/PressRelease/Press";
import Token from "./component/Token/Token";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/news" element={<News />} />
          <Route path="/media" element={<Media />} />
          <Route path="/press" element={<Press />} />
          <Route path="/token" element={<Token />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
