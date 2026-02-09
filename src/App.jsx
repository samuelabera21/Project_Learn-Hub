import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import VideoDetails from "./pages/VideoDetails";
import TeachingDetails from "./pages/TeachingDetails";
import KidaseDetail from "./pages/KidaseDetail";
import KidaseTypes from "./pages/KidaseTypes";
import KidaseTypeDetails from "./pages/KidaseTypeDetails";
import KidaseSlideDetail from "./pages/KidaseSlideDetail";




import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import Teachings from "./pages/Teachings";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main layout route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/teachings/kidase" element={<KidaseTypes />} />
          <Route path="/teachings/kidase/:typeId"element={<KidaseTypeDetails />}/>
          <Route  path="/teachings/kidase/:typeId/:slideId"element={<KidaseSlideDetail />}/>

          <Route path="/videos/:id" element={<VideoDetails />} />
          <Route path="/teachings" element={<Teachings />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/teachings/:id" element={<TeachingDetails />} />

<Route path="/teachings/kidase/:slideId" element={<KidaseDetail />} />



        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
