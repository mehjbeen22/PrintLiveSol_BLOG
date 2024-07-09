import PrinterSetupGuide from "./PrinterSetupGuide";
import Disclaimer from "./Disclaimer";
import { Link } from "react-router-dom";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import BuildIcon from "@mui/icons-material/Build";

const Home = () => {
  return (
    <div className="md:mt-0 mt-40">
      <div className="relative bg-black 700 py-40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/multi-function-printer-machine_127657-16535.jpg?w=900')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  text-white">
          <h1 className="  text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
            How to set up your Printer
          </h1>
          <p className="text-lg md:text-2xl animate__animated animate__fadeInUp">
            Your trusted partner for all printer solutions
          </p>

          <p className="text-xl mb-10">
            Click Printer Setup for step by step guidance on how to setup ,
            configure and register your printer
          </p>

          <Link
            to="/printersetupissue"
            className="bg-blue-600 mt-5 p-2 rounded "
          >
            Printer Setup
          </Link>
        </div>
      </div>

      <section className="bg-white py-10">
        <p className="text-2xl font-bold text-center mb-8">
          Instant Support on live chat
        </p>

        <div className="flex justify-center gap-8">
          <div className="text-center">
            <div className="bg-black rounded-full w-24 h-24 flex items-center justify-center text-white text-4xl mx-auto mb-4">
              <HeadsetMicIcon sx={{ fontSize: "3rem" }} />
            </div>
            <p className="text-lg font-semibold">Contact</p>
          </div>

          <div className="text-center">
            <div className="bg-black rounded-full w-24 h-24 flex items-center justify-center text-white text-4xl mx-auto mb-4">
              <ChatIcon sx={{ fontSize: "3rem" }} />
            </div>
            <p className="text-lg font-semibold">Chat</p>
          </div>

          <div className="text-center">
            <div className="bg-black rounded-full w-24 h-24 flex items-center justify-center text-white text-4xl mx-auto mb-4">
              <SettingsSuggestIcon sx={{ fontSize: "3rem" }} />
            </div>
            <p className="text-lg font-semibold">Setup & install</p>
          </div>

          <div className="text-center">
            <div className="bg-black rounded-full w-24 h-24 flex items-center justify-center text-white text-4xl mx-auto mb-4">
              <BuildIcon sx={{ fontSize: "3rem" }} />
            </div>
            <p className="text-lg font-semibold">Diagnose & Fix</p>
          </div>
        </div>
      </section>
      <PrinterSetupGuide />
      <Disclaimer />
    </div>
  );
};

export default Home;
