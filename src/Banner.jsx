import React from "react";
import BannerContent from "./components/BannerContent";
class Banner extends React.Component{
    render(){
        return(
            <div className="banner h-[94vh] mt-32">
                <BannerContent />
            </div>
        )
    }
}
export default Banner;