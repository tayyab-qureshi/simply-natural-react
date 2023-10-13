import React from "react";
class HeaderContent extends React.Component{
    render(){
        return(
            <div className="w-11/12 mx-auto py-10">
            <h2 className="text-lg font-medium">Best Qualities Plants</h2>
            <h1 className="text-6xl w-6/12 font-medium my-6 leading-tight">Amazing Variety <br/>Of Plants Starting Just $6</h1>
            <button className="w-36 h-11 rounded-[50px] bg-red-400 text-white font-medium text-xs tracking-widest my-8">SHOP NOW</button>
            </div>
        )
    }
}
export default HeaderContent;