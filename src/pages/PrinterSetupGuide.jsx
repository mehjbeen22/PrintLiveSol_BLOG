const contentSections = [
  {
    title: "Setting Up Your New Office Printer",
    text: "In today's digital age, having a reliable printer remains crucial for most businesses. Whether you occasionally print important documents or require high-volume printing, a printer is an indispensable tool. Whether you've recently leased or purchased a new office printer—be it a multifunctional powerhouse for a large corporation or a compact desktop model for a startup—proper setup is key to ensuring smooth operation.",
  },
  {
    title: "Simplifying Printer Setup",
    text: "We understand that new technology can sometimes be a bit challenging to configure. That’s why we’ve crafted this guide to walk you through the process. Below, we’ll cover everything you need to know to set up and connect both wireless and traditional wired printers.",
  },
  {
    title: "Wireless Printer Setup: Easy and Convenient",
    steps: [
      "Unbox and Position Your Printer: Place your printer in a suitable location near a power source and your Wi-Fi network.",
      "Power On: Plug in your printer and turn it on.",
      "Connect to Wi-Fi: Access the printer’s control panel to connect it to your wireless network. You may need your network’s SSID and password.",
      "Install Software: Download and install the necessary drivers from the printer manufacturer’s website on your computer.",
      "Add Printer to Your Device: On your computer, navigate to the printer settings and add the new printer.",
      "Test Print: Print a test page to ensure everything is working correctly.",
    ],
  },
  {
    title: "Traditional Wired Printer Setup: Reliable and Stable",
    steps: [
      "Unbox and Position Your Printer: Set your printer up near your computer or network hub.",
      "Power On: Connect your printer to a power source and turn it on.",
      "Connect via USB/Ethernet: Use a USB or Ethernet cable to connect your printer directly to your computer or network.",
      "Install Drivers: Download and install the appropriate drivers from the printer manufacturer’s website.",
      "Add Printer to Your Device: Go to the printer settings on your computer and add the new printer.",
      "Test Print: Print a test page to ensure the setup is correct.",
    ],
  },
  {
    text: "By following these steps, you can ensure your new printer is ready for use, minimizing downtime and enhancing productivity. Happy printing!",
  },
];

const printerSetupContent = [
  {
    title: "How to Set Up a Wireless Printer",
    text: "It’s important to note beforehand that most, if not all, printers will come with a set of instructions to walk you through the setting up process. Every printer brand uses different steps to set up their printers, either through WiFi, Bluetooth or a USB connection, and each printer setup may vary from product to product. Setting up a printer may also differ depending on whether you’re using a Windows or Mac computer. Below, we’ve listed the general steps of setting up a wireless printer that you should be able to follow easily.",
  },
  {
    title: "1. Place the Printer near your Router and Switch it On",
    text: "As most modern printers have WiFi, you’ll be able to connect it to your computer without needing a USB cable. Ensure it’s nearby your router in order to connect it and switch the printer on. If you need a USB cable to connect it, plug it into your laptop or computer and let it automatically search for the printer. Some models may need additional software to get the printer online, and you can check the manual for more information on this. Typically, you’ll find the software needed on the manufacturer’s website.",
  },
  {
    title: "2. Connect the Printer to your Network",
    text: "To connect your printer to your network, all you’ll need to know is the WiFi network name and password. Many printers, especially those used for modern offices, will have a built-in menu display which you can use to connect. Ideally, you should be able to follow the instructions on-screen or refer to the manual to set this up. If both your printer and router support a WPS (WiFi Protected Setup) button, simply push this on the printer and the router to instantly connect the two.",
  },
  {
    title: "3. Add the Printer to a Windows Computer",
    text: "When the printer has been successfully connected to the network, it’s time to add it to your office computers. For Windows devices, click on the start menu and then go to settings. In the settings, you’ll find a devices section where the printers and scanners are. From there, click ‘add a printer or scanner’, and your computer will start scanning for any new devices on the network. When the new printer is discovered, click ‘add device’, and it’ll be added to your computer.",
  },
  {
    title: "4. Add the Printer to a Mac Computer",
    text: "To connect your printer to your Mac computer, you’ll first need to make sure that both the printer and Mac are on the same wireless network. After this, update your Mac to ensure it has all the latest printer information needed. Click the Apple menu and head to system preferences. Here, a menu will be brought up on the screen, so click the ‘printers and scanners’ icon to display a list of connected printers. Click the ‘+’ button to add your new printer to the wireless network.",
  },
  {
    title: "How to Set Up a Wired Printer",
    text: "Though wireless printers are more convenient thanks to their flexibility to print anywhere from your phone, tablet or laptop, wired printers are still commonly used in offices and are slightly easier and quicker to set up.",
  },
  {
    title: "1. Plug in the Power Cable and Switch the Printer On",
    text: "Choosing the location for a wired printer may be a little tricky as it’ll need to be plugged in at all times for it to work while also being near your computer. So, take some time to find and prepare the optimal space and then plug it in and press the power button.",
  },
  {
    title: "2. Connect the USB Cable",
    text: "With both devices turned on, plug in the included USB cable from the printer to the computer. With some printers, plugging it into the computer this way will automatically set up and install the device, so you won’t need to do any more, and it’ll be ready to use.",
  },
  {
    title: "3. Add the Printer",
    text: "If connecting the USB from the printer to the computer doesn’t automatically add the device, you’ll need to do it manually through the settings. This step would be the same as adding a wireless printer to the computer. So, follow the steps above for both Windows and Mac devices and any instructions that may pop up on your screen to install and customize your printer, making it ready to use.",
  },
  {
    text: "If you’re considering upgrading your office printer, take a look at our office printer range for inspiration and get in touch for help in finding the best printer for your business needs.",
  },
];

const PrinterSetupGuide = () => {
  return (
    <div className="bg-gray-100 text-black p-8">
      {contentSections.map((section, index) => (
        <div key={index} className="mb-6">
          {section.title && (
            <h1 className="text-3xl font-bold mb-4 text-gray-600">
              {section.title}
            </h1>
          )}
          {section.text && <p className="mb-4">{section.text}</p>}
          {section.steps && (
            <ol className="list-decimal list-inside mb-4">
              {section.steps.map((step, stepIndex) => (
                <li key={stepIndex} className="mb-2">
                  {step}
                </li>
              ))}
            </ol>
          )}
        </div>
      ))}

      {/* Printer Setup Content */}
      <div className="bg-gray-100 text-black p-8">
        {printerSetupContent.map((section, index) => (
          <div key={index} className="mb-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-600">
              {section.title}
            </h1>
            <p className="mb-4">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrinterSetupGuide;
