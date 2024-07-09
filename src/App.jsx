import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";
import PrinterSetup from "./pages/PrinterOffline";
import PrinterSetupIssue from "./pages/PrinterSetupIssue";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import DownloadPage from "./pages/download/DownloadPage";
import ScannerSetup from "./pages/ScannerSetup";
// import JivoChatWidget from "./pages/JivochatWidget";

// // Component to conditionally render JivoChatWidget
// const RenderJivoChat = ({ children }) => {
//   // Get the current location using useLocation hook
//   const location = useLocation();

//   // Define an array of paths where JivoChatWidget should be rendered
//   const allowedPaths = ["/", "/printeroffline", "/printersetupissue"];

//   // Check if the current pathname is one of the allowed paths
//   const shouldRenderJivoChat = allowedPaths.includes(location.pathname);

//   // Render children along with JivoChatWidget if shouldRenderJivoChat is true
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
          path="/printeroffline"
          element={
            // <RenderJivoChat>
            <PrinterSetup />
            // </RenderJivoChat>
          }
        />
        <Route
          path="/printersetupissue"
          element={
            // <RenderJivoChat>
            <PrinterSetupIssue />
            // </RenderJivoChat>
          }
        />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/scannersetup" element={<ScannerSetup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/downloadDrivers" element={<DownloadPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
