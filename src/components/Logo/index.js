import React from "react";
import logo from "../../assets/images/logo.png"
import "./styles.scss"

const Logo = () => {
    return(
        <div className="mainLogo">
            <div className="cornerlogo" style={{top: "-2px", left: "-1px", transform: "rotate(90deg)"}}></div>
            <div className="cornerlogo" style={{top: "-2px", right: "-1px", transform: "rotate(180deg)"}}></div>
            <img src={logo}/>
            <div className="cornerlogo" style={{bottom: "-2px", left: "-1px"}}></div>
            <div className="cornerlogo" style={{bottom: "-2px", right: "-1px", transform: "rotate(-90deg)"}}></div>
        </div>
    )
}

export default Logo;