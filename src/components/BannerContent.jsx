import React from "react";
class BannerContent extends React.Component{
    render(){
        return(
            <div className="flex flex-col items-center">
                <h1 className="text-[40px] font-medium w-[600px] text-center pt-20">Interested? Shop This Plant Collection!</h1>
                <p className="text-[16px] text-gray-600 w-[760px] text-center pt-8">Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
                <button className="w-40 h-12 rounded-[50px] bg-red-400 text-white font-medium text-xs tracking-widest my-8">GO TO SHOP</button>
                </div>
        )
    }
}
export default BannerContent;