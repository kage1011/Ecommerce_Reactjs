import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  UserOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import logo from "../assets/images/logo0.png";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/catalog",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    // return () => {
    //     window.removeEventListener("scroll")
    // };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => {
    menuLeft.current.classList.toggle("active");
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left">
              <AppstoreOutlined />
            </i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left">
                <CloseOutlined />
              </i>
            </div>
            <Menu
              mode={window.screen.width > 1024 ? "horizontal":"vertical"}
              // style={headerStyle}
              className={`header__menu__item header__menu__left__item`}
              // onClick={handleOnClick}
              // selectedKeys={keyMenu}}
            >
              {mainNav.map((item, index) => (
                <div key={index} onClick={menuToggle}>
                  <Menu.Item>
                    <Link to={item.path}>
                      <span>{item.display}</span>
                    </Link>
                  </Menu.Item>
                </div>
              ))}
            </Menu>
          </div>
          <div className="header__menu__right">
            {/* <div className="header__menu__item header__menu__right__item">
              <i className="">
                <SearchOutlined />
              </i>
            </div> */}
            <div className="header__menu__item header__menu__right__item">
              <Link to="/cart">
                <i className="">
                  <ShoppingCartOutlined />
                </i>
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <i className="">
                <UserOutlined />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
