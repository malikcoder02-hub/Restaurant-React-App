import React from 'react'
import {SecondaryButton} from '../../../common/buttons';


const AboutUs = () => {

  return (
    <section className="bg-[linear-gradient(to_bottom,rgba(0,0,0,60%),rgba(0,0,0,85%)),url('/images/hotel_background.png')] py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* === Images Section Placeholder === */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <img src="/images/highlights.png" alt="About Us" />
        </div>

        {/* === Text Content === */}
        <div className="flex-1">
          <h4 className="text-orange-500 text-lg font-bold mb-2 flex items-center gap-2">
            About Us{" "}
            <span className="w-10 h-px bg-orange-500 inline-block"></span>
          </h4>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 text-white">
            Welcome to <span className="text-orange-500">🍴Restaurant</span>
          </h2>
          <p className=" mb-4 text-xl  text-white">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam ametdiam et eos erat ipsum et lorem et sit, sed stet lorem sit.
          </p>
          <p className=" text-white mb-4 text-xl font-normal">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>

          {/* === Stats Section === */}
          <div className="grid grid-cols-2 gap-8 mt-8 mb-8">
            <div className="grid-cols-[1fr_3fr] grid p-3 items-start justify-center border-l-5 border-gray-400">
              <h3 className="text-5xl font-extrabold text-orange-500 grid-">
                13
              </h3>
              <p className="text-sm text-white">
                Years of
                <br />
                <span className="font-bold text-white text-xl">EXPERIENCE</span>
              </p>
            </div>
            <div className="grid-cols-[1fr_3fr] grid p-3 items-start justify-center border-l-5 border-gray-400 ">
              <h3 className="text-5xl font-extrabold text-orange-500">50</h3>
              <p className="text-sm text-white">
                Popular
                <br />
                <span className="font-bold text-white text-xl">
                  MASTER CHEFS
                </span>
              </p>
            </div>
          </div>

          {/* === Read More Button === */}
          <SecondaryButton>Learn More</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

export default AboutUs
