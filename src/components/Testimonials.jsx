import React from "react";
import Img1 from "../img/user1-free-img.jpg"
class Testimonials extends React.Component {
    render() {
        return(
        <div className="w-11/12 mx-auto flex mt-24 gap-16">
            <div>
                <h1 className="text-4xl font-semibold">Testimonials</h1>
                <p className="text-[14px] pt-8 pb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex gap-10">
                <div className="w-[230px] h-[288px]">
                <img src={Img1} alt="" className="w-[100%] rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px]" />
                </div>
                <div className="w-[266px] pt-14">
                    <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>

                    <h2 className="mt-6 text-lg font-medium">Sarah Jones</h2>

                    <p className="text-xs">Interior Designer</p>
                </div>
            </div>
            </div>
            <div>
            <div className="flex gap-10">
                <div className="w-[230px] h-[288px]">
                <img src="/img/testimonial-2.jpg" alt="" className="w-[100%] rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px]" />
                </div>
                <div className="w-[266px] pt-14">
                    <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>

                    <h2 className="mt-6 text-lg font-medium">Jessica Foxx</h2>

                    <p className="text-xs">Student</p>
                </div>
            </div>

            <div className="flex mt-16 gap-10">
                <div className="w-[230px] h-[288px]">
                <img src="/img/user3-free-img.jpg" alt="" className="w-[100%] rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px]" />
                </div>
                <div className="w-[266px] pt-14">
                    <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>

                    <h2 className="mt-6 text-lg font-medium">Briana Luke</h2>

                    <p className="text-xs">Student</p>
                </div>
            </div>
            </div>

        </div>
        )
    }}
export default Testimonials;