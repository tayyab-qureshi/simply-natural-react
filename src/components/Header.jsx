import React from "react";
import Nav from "./Nav";
import HeaderContent from "./HeaderContent";
class Header extends React.Component {
    render() {
        return (
            <header className="h-[88vh] rounded-b-[80px]">
                <Nav />
                <HeaderContent />

            </header>
        )
    }
}
export default Header;