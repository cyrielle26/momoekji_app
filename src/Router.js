import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainLayout } from './layouts/MainLayout';


const Router = () => {
  return (
    <HashRouter>
      <MainLayout/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Search />} />
        <Route path="*" element={<PageNotFound/> } />
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default Router;