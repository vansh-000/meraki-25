export default function HomeSponsors() {
  return (
    <div
      className="relative flex items-center justify-center h-screen overflow-hidden bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-8 md:px-16 lg:px-24 md:bg-contain w-full"
      style={{
        backgroundImage: "url('/images/backgrounds/sponsors_left.jpeg')",
        backgroundSize: "100% 100%", 
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden max-h-screen">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 text-white text-center md:text-left">
            <p className="text-lg sm:text-xl md:text-2xl mt-5 md:mt-0 lg:text-3xl tracking-wide leading-relaxed">
              We extend our sincere thanks to our sponsors, whose generous
              support fuels the success of{" "}
              <span className="font-bold text-blue-300">MERAKI</span>. We deeply
              appreciate their commitment to innovation and technology.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col sm:flex-row md:flex-col items-center justify-center gap-6 lg:gap-8">
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-50 h-50 md:w-55 md:h-55 lg:w-65 lg:h-65 flex items-center justify-center 
    bg-transparent transition-all duration-300 
    shadow-lg hover:shadow-2xl rounded-xl md:self-end transform hover:-translate-y-2"
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="./../logos/unstop.png"
                  alt="Sponsor 1"
                  className="w-full h-full rounded-xl object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
