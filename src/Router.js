import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { routes } from "./routes";



const Router = () => {
  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.explore} element={<Search />} />
        <Route path="*" element={<PageNotFound/> } />
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default Router;