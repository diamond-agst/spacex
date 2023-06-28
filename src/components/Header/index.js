import React, {useState} from "react";
import Logo from "../Logo";
import "./styles.scss"
import burger from "../../assets/images/burger.png"
import close from "../../assets/images/close.png"

const Header = () => {
    const [open, setOpen] = useState(false)

    return(
        <div className="headerWrapper">
            <div className="headerBlock">
                <div className="logoHeader">
                    <Logo/>
                </div>
                <div className="headerMenu">
                    <div className="menuItem">
                        <p>Главная</p>
                    </div>
                    <div className="menuItem">
                        <p>Технология</p>
                    </div>
                    <div className="menuItem">
                        <p>График полетов</p>
                    </div>
                    <div className="menuItem">
                        <p>Гарантии</p>
                    </div>
                    <div className="menuItem">
                        <p>О компании</p>
                    </div>
                    <div className="menuItem">
                        <p>Контакты</p>
                    </div>
                </div>
                <div className="menuBurger">
                    <img onClick={() => setOpen(!open)} width={25} src={burger}/>
                </div>
            </div>
            <div className={open ? "mobileMenu openMenu" : "mobileMenu"}>
                <div className="menuMobileBlock">
                    <div className="menuItem">
                        <p>Главная</p>
                    </div>
                    <div className="menuItem">
                        <p>Технология</p>
                    </div>
                    <div className="menuItem">
                        <p>График полетов</p>
                    </div>
                    <div className="menuItem">
                        <p>Гарантии</p>
                    </div>
                    <div className="menuItem">
                        <p>О компании</p>
                    </div>
                    <div className="menuItem">
                        <p>Контакты</p>
                    </div>
                </div>
                <div>
                    <img onClick={() => setOpen(!open)} width={20} src={close}/>
                </div>
            </div>
        </div>
    )
}

export default Header;