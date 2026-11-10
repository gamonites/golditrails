import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import Favorites from "./pages/Favorites";
import HikeDetail from "./pages/HikeDetail";
import Home from "./pages/Home";
import ZonePage from "./pages/ZonePage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hikes/:slug" element={<HikeDetail />} />
          <Route path="/zone" element={<ZonePage />} />
          <Route path="/login" element={<Auth mode="login" />} />
          <Route path="/register" element={<Auth mode="register" />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
