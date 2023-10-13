import React from "react";
import { myArray } from "./CardsArray";
import { AiOutlineStar } from "react-icons/ai";

class FeaturedPlants extends React.Component {
  render() {
    return (
      <div className="w-10/12 mx-auto">
        <div className="flex w-full flex-col items-center pt-20 ">
          <h1 className="text-4xl font-medium">Featured Plants</h1>
          <p className="pt-5 text-sm font-base pb-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {myArray.map((ele, index) => {
            return (
              <div key={index} >
                <div> 
                  <img src={ele.img} alt="" />
                </div>
                <div className="text-sm py-2 font-light">{ele.category}</div>
                <div className="font-medium">{ele.name}</div>
                <div className="flex pt-2">
                  {ele.stars && ele.stars.map((star, starIndex) => {
                    return (
                    <span>
                     <AiOutlineStar />
                    </span>)
                  })
                }
                </div>
                <div className="flex pt-2">
                {
                    ele.oldPrice &&
                    <div className="text-gray-500 line-through mr-2">{ele.oldPrice}</div>}
                <div>{ele.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default FeaturedPlants;
