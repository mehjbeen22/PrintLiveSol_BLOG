import ProductFinder from "./ProductFinder";

const SoftwareAndDrivers = () => {
  return (
    <div>
      <ProductFinder />

      <section className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center items-center">
            <img
              src="https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/swd/swd-banner-images/Background%20Product%20Image.png"
              alt="help_img"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
          <div className="flex flex-col justify-center p-6 bg-gray-100 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">
              Need Windows 11 Help?
            </h2>
            <p className="text-gray-700">
              Check on compatibility, upgrades, and available fixes from HP and
              Microsoft.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareAndDrivers;
