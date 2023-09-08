import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/working" activeStyle>
                        Working
                    </NavLink>
                </NavMenu>
            </nav>
        </>
    );
};
 
export default Navbar;