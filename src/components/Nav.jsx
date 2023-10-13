import React from "react";
class Nav extends React.Component {
    render() {
        return (
            <div className="w-11/12 py-3 mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4 justify-between">
                    <img src="/img/plants-store-logo-green.svg" alt="" className="w-[50px]" />
                    <h1 className="text-xl font-medium">Simply Natural</h1>
                </div>
                <div className="flex gap-10">
                <ul className="flex gap-10 text-base">
                    <li className="text-red-400">Home</li>
                    <li className="flex items-center gap-2"><p>Store</p><i class="fa-solid fa-angle-down self-end"></i></li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>My Account</li>
                </ul>

                <div className="flex gap-4">
                    <div className="flex gap-2 items-center text-red-400 text-base font-bold">$0.00<i class="fa-solid fa-bag-shopping"></i></div>
                    <div className="text-base"><i class="fa-solid fa-user"></i></div>
                </div>
                </div>
            </div>
        )
    }
}
export default Nav; 