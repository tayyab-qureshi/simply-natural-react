import React from "react";
import { FaBox, FaSync } from "react-icons/fa";

class SectionCollection extends React.Component {
    render() {
        return (
            <div className="w-11/12 mx-auto flex flex-col justify-between">
                <div className="flex justify-around w-[100%] py-20">
                    <div className="flex items-center w-1/4 gap-6">
                        <i class="fa-solid fa-spa text-custom-green text-2xl"></i>
                        <div>
                            <h2 className="text-lg font-medium">Plants Collection</h2>
                            <p className="text-base font-light">Any plants for your space</p>
                        </div>
                    </div>
                    <div className="flex items-center w-1/4 gap-6">
                        <FaBox className="text-custom-green text-2xl" />
                        <div>
                            <h2 className="text-lg font-medium">Plants Collection</h2>
                            <p className="text-base font-light">Any plants for your space</p>
                        </div>
                    </div>
                    <div className="flex items-center w-1/4 gap-6">
                        <FaSync className="text-custom-green text-2xl" />

                        <div>
                            <h2 className="text-lg font-medium">Plants Collection</h2>
                            <p className="text-base font-light">Any plants for your space</p>
                        </div>
                    </div>
                </div>
                {/* card section */}
                <div className="flex justify-around w-[100%]">
                    <div className="w-[367px] h-[575px] bg-[#eeedf3] rounded-[20px] hover:shadow-xl">
                        <img src="/img/plant6-free-img.jpg" alt="" className="pt-5" />
                        <h2 className="px-10 text-lg pt-10">Beautiful Plant Varieties</h2>
                        <p className="px-10 text-base font-light pt-3">Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p className="px-10 text-base text-red-400 pt-3">SEE COLLECTION</p>
                    </div>
                    <div className="w-[367px] h-[575px] bg-[#eeedf3] rounded-[20px] hover:shadow-xl">
                        <img src="/img/cactus2-free-img.jpg" alt="" className="pt-5" />
                        <h2 className="px-10 text-lg pt-10">Beautiful Plant Varieties</h2>
                        <p className="px-10 text-base pt-3 font-light">Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p className="px-10 text-base text-red-400 pt-3">SEE COLLECTION</p>
                    </div>
                    <div className="w-[367px] h-[575px] bg-[#eeedf3] rounded-[20px] hover:shadow-xl">
                        <img src="/img/plant4-free-img.jpg" alt="" className="pt-5" />
                        <h2 className="px-10 text-lg pt-10">Beautiful Plant Varieties</h2>
                        <p className="px-10 text-base pt-3 font-light">Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p className="px-10 text-base text-red-400 pt-3">SEE COLLECTION</p>
                    </div>

                </div>
            </div>
        )
    }
}
export default SectionCollection;