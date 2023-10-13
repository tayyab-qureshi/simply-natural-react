import React from "react";
import {MdPhoneEnabled} from "react-icons/md";
class AskforHelp extends React.Component{
    render(){
        return(
            <div>
            <div className="w-11/12 mx-auto flex justify-between gap-16 pt-60">
                <div className="w-8/12 ">
                    <h1 className="text-2xl font-medium">Need help in choosing the right plants?</h1>
                    <div className="flex items-center text-red-400 mt-20 tracking-widest font-semibold text-[14px]">
                    <MdPhoneEnabled />
                    <p className="ml-2">ASK FOR HELP</p>
                    </div>
                </div>

                <div className="text-[14px] font-medium text-gray-500">
                    <p className="leading-loose">Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sedurna malesuada consectetuer.</p>
                    <p className="pt-8 leading-loose">Ornare integer commodo mauris et ligula purus, praesent cubilia laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum tempor quis, turpis luctus dolor sapien vivamus.</p>
                </div>
            </div>
                <hr className="w-[100%] h-[1px] bg-gray-800 mt-20"/>
            </div>
        )
    }
}
export default AskforHelp;