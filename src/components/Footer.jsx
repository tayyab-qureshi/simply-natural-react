import React, { Component } from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
class Footer extends Component {
  render() {
    return (
      <>
        <div className="flex px-10 justify-between pt-32 pb-28 w-11/12 mx-auto">
          <div className="flex flex-col items-center gap-8">
            <img
              src="/img/plants-store-logo-green.svg"
              className="h-[100px] w-[100px]" alt =""
            />
            <h1 className="text-2xl font-bold text-gray-600">Simply Natural</h1>
            <div className="flex gap-3">
              <BiLogoFacebook className="text-white bg-gray-600 text-2xl p-1 h-[30px] w-[30px] hover:bg-icn-color cursor-pointer" />
              <BiLogoTwitter className="text-white bg-gray-600 text-2xl p-1 h-[30px] w-[30px] hover:bg-icn-color cursor-pointer" />
              <BiLogoInstagram className="text-white bg-gray-600 text-2xl p-1 h-[30px] w-[30px] hover:bg-icn-color cursor-pointer" />
              <BiLogoLinkedin className="text-white bg-gray-600 text-2xl p-1 h-[30px] w-[30px] hover:bg-icn-color cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Quick Links</h1>
            <div className="text-base text-gray-500 leading-loose">
              <p>Introduction</p>
              <p>know more about us</p>
              <p>Visit Store</p>
              <p>Let's Connect</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Important Links</h1>
            <div className="text-base text-gray-500 leading-loose">
              <p>Privacy Policy</p>
              <p>Shipping Details</p>
              <p>Terms & Condition</p>
              <p>Media Kit</p>
            </div>
          </div>
          <div className="w-[300px] text-xl flex flex-col gap-4">
            <h1 className="text-2xl">
              Get In Touch With Us For The Best Quality Plants & Succulents
            </h1>
            <p className="text-base text-gray-500 leading-loose font-light">
              Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit,
              sed quia non numquam eius modi tempora incidunt lores ta porro
              ame.
            </p>
          </div>
        </div>
        <hr />
        <div className="py-8 flex justify-between px-10 font-medium text-gray-500 w-9/12 mx-auto">
            <p>Copyright © 2023 Simply Natural</p>
            <p>Powered by Simply Natural</p>
        </div>
      </>
    );
  }
}
export default Footer;