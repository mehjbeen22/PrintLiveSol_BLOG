import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DownloadPage from "./pages/download/DownloadPage";
// import JivoChatWidget from "./pages/JivochatWidget";
import SignIn from "./pages/SigninPage";
import SoftwareAndDrivers from "./pages/SoftwareAndDrivers";
import VideoPlayer from "./pages/download/VideoPlayer";

// const RenderJivoChat = ({ children }) => {
//   const location = useLocation();
//   const allowedPaths = ["/", "/printeroffline", "/printersetupissue"];
//   const shouldRenderJivoChat = allowedPaths.includes(location.pathname);
//   return shouldRenderJivoChat ? (
//     <>
//       <JivoChatWidget />
//       {children}
//     </>
//   ) : (
//     children
//   );
// };

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            // <RenderJivoChat>
            <Home />
            // </RenderJivoChat>
          }
        />

        <Route
          path="/downloadDrivers"
          element={
            // <RenderJivoChat>
            <VideoPlayer />
            // </RenderJivoChat>
          }
        />

        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/account" element={<SignIn />} />
        <Route path="/software&drivers" element={<SoftwareAndDrivers />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
