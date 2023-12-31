import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function About() {
  return (
    <>
      {/* <Navbar type={"about"}/> */}
    <div className="about-page">
      <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        {/* <img
                            src="https://scontent.fkhi4-4.fna.fbcdn.net/v/t39.30808-6/396711268_122098779596097808_366837254929771693_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEFxCvMxvhr2tRngsRaV30oEfPTj3pZx1wR89OPelnHXGYLhxHHsC0x_M7vn6aw823N_uhFam-GxbhajkUmZTKF&_nc_ohc=k2lKObwsH6YAX8t4C42&_nc_zt=23&_nc_ht=scontent.fkhi4-4.fna&oh=00_AfDN3N7gKoeiRWbrDbErHlSp64IMWDMleak4YzUN1WKVMQ&oe=654C3A5E"
                            alt="image"
                        /> */}
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>


       
      {/* Add more content as needed */}
      {/* <Footer /> */}
    </div>
    </>
  );
}

export default About;