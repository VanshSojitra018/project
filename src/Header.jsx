import React, { useEffect, useState } from "react";
import img from "../src/img/logo-light.png";
import { BsSearch } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";
import { CgMenu } from "react-icons/cg";
import { Link } from "react-router";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSubmenu, setActiveSubmenu] = React.useState(null);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Service",
      path: "#",
      submenu: [{ name: "Services", path: "/service" }],
    },
    {
      name: "Portfolio",
      path: "#",
      submenu: [
        { name: "Portfolio Grid", path: "/portfolioGird" },
        { name: "Portfolio Slider", path: "/portfolioSlider" },
      ],
    },
    {
      name: "Pages",
      path: "#",
      submenu: [
        { name: "Pricing Plans", path: "/PricingPlans" },
        { name: "Our Team", path: "/OurTeam" },
        { name: "Team Member", path: "/TeamMember" },
        { name: "FAQ", path: "/FAQ" },
        { name: "404 Page", path: "/404" },
      ],
    },
    { name: "Contact Us", path: "/ContactUs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  // Prevent body scroll when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSearchOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-footerarrow text-blue-500"
            : "xl:bg-transparent sm:bg-footerarrow text-white"
        }`}
      >
        <div className="container">
          <div className="menu-navbar h-[90px] flex items-center justify-between sm:h-[90px]">
            <div className="header-logo flex items-center justify-center">
              <Link to="/">
                <img src={img} alt="Logo" className="max-h-16" />
              </Link>
            </div>

            <div className="links mx-auto xl:block hidden">
              <ul className="list-none flex flex-row items-center justify-between m-0 p-0">
                <li className="li-menu-1 relative px-4">
                  <Link
                    to="/"
                    className={`flex items-center justify-center font-Jost text-[16px] leading-[90px] font-medium transition-colors duration-300 ${
                      isScrolled
                        ? "text-white hover:text-white"
                        : "text-footerarrow hover:text-footerarrow"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="li-menu relative px-4">
                  <Link
                    to="/about"
                    className={`flex items-center justify-center font-Jost text-[16px] leading-[90px] font-medium transition-colors duration-300 ${
                      isScrolled
                        ? "text-white hover:text-white"
                        : "text-white hover:text-footerarrow"
                    }`}
                  >
                    About Us
                  </Link>
                </li>

                <li className="li-menu relative px-4 group">
                  <a
                    href="#"
                    className={`flex items-center justify-center font-Jost text-[16px] leading-[90px] font-medium transition-colors duration-300 ${
                      isScrolled
                        ? "text-white hover:text-white"
                        : "text-white hover:text-footerarrow"
                    }`}
                  >
                    Service
                    <FiPlus />
                  </a>

                  <ul
                    className="sub-menu list-none absolute top-full left-0 min-w-[18rem] m-0 py-4 px-6 bg-footerarrow z-50
  opacity-0 translate-y-4 pointer-events-none
  transition-all duration-300 ease-in-out
  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
  hover:opacity-100 hover:translate-y-0 hover:pointer-events-auto"
                  >
                    <li className="list-menu">
                      <Link
                        to="/service"
                        className=" py-4 pl-4 relative inline-flex items-center justify-between w-full text-[1rem] font-Jost font-medium text-white"
                      >
                        Services
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="li-menu relative px-4 group">
                  <a
                    href="#"
                    className={`flex items-center justify-center font-Jost text-[16px] leading-[90px] font-medium transition-colors duration-300 ${
                      isScrolled
                        ? "text-white hover:text-white"
                        : "text-white hover:text-footerarrow"
                    }`}
                  >
                    Portfolio
                    <FiPlus />
                  </a>
                  <ul
                    className="sub-menu list-none absolute top-full left-0 min-w-[18rem] m-0 py-4 px-6 bg-footerarrow z-50
  opacity-0 translate-y-4 pointer-events-none
  transition-all duration-300 ease-in-out
  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
  hover:opacity-100 hover:translate-y-0 hover:pointer-events-auto"
                  >
                    <li className="list-menu">
                      <Link
                        to="/portfolioGird"
                        className=" py-4 pl-4 relative inline-flex items-center justify-between w-full text-[1rem] font-Jost font-medium text-white"
                      >
                        Portfolio Grid
                      </Link>
                    </li>
                    <li className="list-menu">
                      <Link
                        to="/portfolioSlider"
                        className=" py-4 pl-4 relative inline-flex items-center justify-between w-full text-[1rem] font-Jost font-medium text-white"
                      >
                        Portfolio Slider
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="li-menu relative px-4 group">
                  <a
                    href="#"
                    className={`flex items-center justify-center font-Jost text-[16px] leading-[90px] font-medium transition-colors duration-300 ${
                      isScrolled
                        ? "text-white hover:text-white"
                        : "text-white hover:text-footerarrow"
                    }`}
                  >
                    Pages
                    <FiPlus />
                  </a>
                  <ul
                    className="sub-menu list-none absolute top-full left-0 min-w-[18rem] m-0 py-4 px-6 bg-footerarrow z-50
  opacity-0 translate-y-4 pointer-events-none
  transition-all duration-300 ease-in-out
  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
  hover:opacity-100 hover:translate-y-0 hover:pointer-events-auto"
                  >
                    <li className="list-menu">
                      <Link
                        to="/PricingPlans"
                        className=" py-4 pl-4 relative inline-flex items-center justify-between w-full text-[1rem] font-Jost font-medium text-white"
                      >
                        Pricing Plans
                      </Link>
                    </li>
                    <li className="list-menu">
                      <Link
                        to="/OurTeam"
                        className=" py-4 pl-4 relative inline-flex items-center justify-between w-full text-[1rem] font-Jost font-medium text-white"
                      >
                        Our Team
                      </Link>
                    </li>
                    <li className="list-menu">
                      <Link
                        to="/TeamMember"
                        className=" py-4 pl-4 relative inline-flex items-center justify-between w-full text-[1rem] font-Jost font-medium text-white"
                      >
                        Team Member
                      </Link>
                    </li>
                    <li className="list-menu">
                      <Link
                        to="/FAQ"
                        className=" py-4 pl-4 relative inline-flex items-center justify-between w-full text-[1rem] font-Jost font-medium text-white"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li className="list-menu">
                      <Link
                        to="/404"
                        className=" py-4 pl-4 relative inline-flex items-center justify-between w-full text-[1rem] font-Jost font-medium text-white"
                      >
                        404 Page
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="li-menu relative px-4 group">
                  <Link
                    to="/ContactUs"
                    className={`flex items-center justify-center font-Jost text-[16px] leading-[90px] font-medium transition-colors duration-300 ${
                      isScrolled
                        ? "text-white hover:text-white"
                        : "text-white hover:text-footerarrow"
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu */}
            <div
              className={`fixed top-0 left-0 w-full h-screen bg-footerarrow text-base flex flex-col xl:hidden items-start justify-start pt-20 px-6 font-medium text-white transition-all duration-500 overflow-y-auto ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <button
                className="absolute top-4 right-4 text-white"
                onClick={closeMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="w-full">
                {navLinks.map((link, i) => (
                  <div key={i} className="w-full border-b border-white/20">
                    {link.submenu ? (
                      // Menu item with submenu
                      <div>
                        <button
                          onClick={() => toggleSubmenu(i)}
                          className="w-full flex items-center justify-between py-4 text-left text-lg font-medium text-white"
                        >
                          {link.name}
                          {activeSubmenu === i ? (
                            <FiMinus className="text-xl text-white" />
                          ) : (
                            <FiPlus className="text-xl text-white" />
                          )}
                        </button>

                        {/* Submenu */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            activeSubmenu === i
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="pl-4 pb-2">
                            {link.submenu.map((sublink, j) => (
                              <Link
                                key={j}
                                to={sublink.path}
                                onClick={closeMenu}
                                className="block py-2 text-base text-white/80 font-normal hover:text-white"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Regular menu item
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className="block py-4 text-lg font-medium text-white"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="search flex items-center">
              <div className="flex gap-3">
                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 xl:hidden">
                  <svg
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`h-6 w-6 cursor-pointer ${
                      isScrolled ? "text-white" : "text-white"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                </div>
                <BsSearch
                  className="text-[24px] leading-6 text-white cursor-pointer transition-colors duration-300"
                  onClick={toggleSearch}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-[#1a1a2e] bg-opacity-95 backdrop-blur-sm transition-all duration-500 ease-in-out ${
          isSearchOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(rgba(9, 175, 244, 0.3) 1px, transparent 1px)",
            backgroundSize: "2rem 2rem",
          }}
        ></div>

        {/* Close Button */}
        <button
          onClick={closeSearch}
          className="absolute top-6 right-6 md:top-8 md:right-8 text-white hover:text-footerarrow transition-colors duration-300 z-10"
        >
          <svg
            className="h-8 w-8 md:h-10 md:w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Search Content */}
        <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto text-center">
            {/* Search Input Container */}
            <div className="relative max-w-2xl mx-auto mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent border-b-2 border-footerarrow text-white text-lg md:text-xl lg:text-2xl font-Jost py-4 px-2 focus:outline-none focus:border-white transition-colors duration-300 placeholder-white/60"
                  autoFocus
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-footerarrow hover:text-white transition-colors duration-300">
                  <BsSearch className="text-2xl md:text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
