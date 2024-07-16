import { Link } from "react-router-dom";

const Home = () => {
  const troubleshootingSteps = [
    {
      id: 1,
      image:
        "https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/topic/Windows%2011%20logo.png",
      title: "Scan / Print stopped working after upgrading to Windows 11?",
      description:
        "Try these troubleshooting steps to fix the scan and/or print issues.",
    },
    {
      id: 2,
      image:
        "https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/topic/Printer_2.png",
      title: "How to print, scan and fax",
      description:
        "Click Print Scan Fax for instructions on how to print, scan and fax with your HP Printer using Windows or Mac OS.",
    },
    {
      id: 3,
      image:
        "https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/topic/printeroffline.png",
      title: "Printer offline or print job stuck in queue?",
      description:
        "Use this Windows automated tool to diagnose and fix printer problems such as printer offline and print jobs stuck in queue.",
    },
  ];

  return (
    <main className="mt-20 flex flex-col">
      <section className="flex flex-col md:flex-row items-center h-auto md:h-[16rem] border-b-2 border-gray-300">
        <div className="flex-1 flex flex-col justify-center px-20">
          <h1 className="text-2xl md:text-3xl lg:text-4xl ">
            HP Printer Support
          </h1>
        </div>
        <div className="flex-1 p-6">
          <img
            src="https://i.ibb.co/k4KVR44/image-removebg-preview-35.png"
            alt="HP Printer"
            className="object-cover w-full h-[13rem]"
          />
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="bg-white border-b-2 border-gray-300 ">
        <div className="flex px-10 py-6 flex flex-col md:flex-row  space-y-8 md:space-y-0 md:space-x-8 ">
          <div className="flex-1">
            <img
              src="https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/topic/Printer_feature.png"
              alt="Printer Setup"
              className="w-full h-[500px] rounded-lg shadow-sm "
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl md:text-2xl font-semibold text-[#0096d5] mt-10 ">
              How to Set Up Your Printer
            </h2>
            <br /> <br />
            <p className="text-gray-600 mb-4 font-semibold text-lg">
              Click Printer Setup for step-by-step guidance on
              <br />
              how to set up,configure, and register your printer.
            </p>
            <br />
            <Link
              to="/software&drivers"
              className="bg-[#0096d5] text-white py-2   rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Printer Setup
            </Link>
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}
      <section className=" p-4  max-w-6xl mx-4 sm:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {troubleshootingSteps.map(({ id, image, title, description }) => (
            <div
              key={id}
              className=" px-10 py-20 rounded-lg shadow-sm flex flex-col items-center "
            >
              <div className="mb-4">
                <img
                  src={image}
                  alt={`image${id}`}
                  className="w-full h-[12rem] object-contain "
                />
              </div>
              <div className="text-center">
                <h2 className="text-lg md:text-xl font-semibold text-[#0096d5] mb-2">
                  {title}
                </h2>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;

// import PrinterSetupGuide from "./PrinterSetupGuide";
// import Disclaimer from "./Disclaimer";
// import { Link } from "react-router-dom";
// import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
// import ChatIcon from "@mui/icons-material/Chat";
// import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
// import BuildIcon from "@mui/icons-material/Build";

// const Home = () => {
//   return (
//     <div className="md:mt-0 mt-40">
//       <div className="relative bg-black 700 py-40">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-60"
//           style={{
//             backgroundImage:
//               "url('https://img.freepik.com/premium-photo/multi-function-printer-machine_127657-16535.jpg?w=900')",
//           }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto   sm:px-6 lg:px-8  text-white">
//           <h1 className="  text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
//             How to set up your Printer
//           </h1>
//           <p className="text-lg md:text-2xl animate__animated animate__fadeInUp">
//             Your trusted partner for all printer solutions
//           </p>

//           <p className="text-xl mb-10">
//             Click Printer Setup for step by step guidance on how to setup ,
//             configure and register your printer
//           </p>

//           <Link to="/printersetupissue" className="black mt-5 p-2 rounded ">
//             Printer Setup
//           </Link>
//         </div>
//       </div>

//       <section className="bg-white py-10">
//         <p className="text-2xl font-bold text-center mb-8">
//           Instant Support on live chat
//         </p>

//         <div className="flex justify-center gap-8">
//           <div className="text-center">
//             <div className="bg-black rounded-full w-24 h-24 flex items-center justify-center text-white text-4xl mx-auto mb-4">
//               <HeadsetMicIcon sx={{ fontSize: "3rem" }} />
//             </div>
//             <p className="text-lg font-semibold">Contact</p>
//           </div>

//           <div className="text-center">
//             <div className="bg-black rounded-full w-24 h-24 flex items-center justify-center text-white text-4xl mx-auto mb-4">
//               <ChatIcon sx={{ fontSize: "3rem" }} />
//             </div>
//             <p className="text-lg font-semibold">Chat</p>
//           </div>

//           <div className="text-center">
//             <div className="bg-black rounded-full w-24 h-24 flex items-center justify-center text-white text-4xl mx-auto mb-4">
//               <SettingsSuggestIcon sx={{ fontSize: "3rem" }} />
//             </div>
//             <p className="text-lg font-semibold">Setup & install</p>
//           </div>

//           <div className="text-center">
//             <div className="bg-black rounded-full w-24 h-24 flex items-center justify-center text-white text-4xl mx-auto mb-4">
//               <BuildIcon sx={{ fontSize: "3rem" }} />
//             </div>
//             <p className="text-lg font-semibold">Diagnose & Fix</p>
//           </div>
//         </div>
//       </section>
//       <PrinterSetupGuide />
//       <Disclaimer />
//     </div>
//   );
// };

// export default Home;
