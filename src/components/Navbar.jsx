import React, { useState } from "react";
import "./Navbar.css";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ChevronUp,
} from "lucide-react";

const servicesData = [
  {
    title: "Haircuts",
    items: [
      {
        name: "Haircut",
        link: "/services/haircuts/haircut",
      },
      {
        name: "Clipper Cut",
        link: "/services/haircuts/clipper-cut",
      },
      {
        name: "Cezanne Bangs",
        link: "/services/haircuts/cezanne-bangs",
      },
    ],
  },

  {
    title: "Hair Color",
    items: [
      {
        name: "Single Process",
        link: "/services/hair-color/single-process",
      },
      {
        name: "Double Process",
        link: "/services/hair-color/double-process",
      },
      {
        name: "Gloss",
        link: "/services/hair-color/gloss",
      },
      {
        name: "Highlights",
        link: "/services/hair-color/highlights",
      },
    ],
  },

  {
    title: "Hair Styling",
    items: [
      {
        name: "Blowout",
        link: "/services/hair-styling/blowout",
      },
    ],
  },

  {
    title: "Hair Treatments",
    items: [
      {
        name: "Cezanne",
        link: "/services/hair-treatments/cezanne",
      },
      {
        name: "K18",
        link: "/services/hair-treatments/k18",
      },
      {
        name: "Strength Cure",
        link: "/services/hair-treatments/strength-cure",
      },
      {
        name: "L'Oreal",
        link: "/services/hair-treatments/loreal",
      },
    ],
  },
];



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [desktopServicesOpen, setDesktopServicesOpen] =
    useState(false);

const [desktopActiveCategory, setDesktopActiveCategory] =
  useState("");

  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  const [mobileActiveCategory, setMobileActiveCategory] =
    useState(null);


  const handleMobileCategory = (title) => {
    setMobileActiveCategory((prev) =>
      prev === title ? null : title
    );
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left desktop-nav">
          <a href="/">Home</a>

          {/* SERVICES */}

          <div
            className="services-dropdown-wrapper"
   

          >
            <button onMouseEnter={() =>
  setDesktopServicesOpen(!desktopServicesOpen)
} className="services-nav-btn">
              Services

              {desktopServicesOpen ? (
                <X size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>

           <div
  className={`services-mega-menu ${
    desktopServicesOpen ? "show" : ""
  }`}
>



    <div className="desktop-services-grid">
      {servicesData.map((category) => (
        <div
          className="desktop-category"
          key={category.title}
        >
          <button
            className={`desktop-category-btn ${
              desktopActiveCategory === category.title
                ? "active"
                : ""
            }`}
            onClick={() =>
              setDesktopActiveCategory(
                desktopActiveCategory ===
                  category.title
                  ? ""
                  : category.title
              )
            }
          >
            <span>{category.title}</span>

            {desktopActiveCategory ===
            category.title ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>

          <div
            className={`desktop-submenu ${
              desktopActiveCategory ===
              category.title
                ? "open"
                : ""
            }`}
          >
            {category.items.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="desktop-service-link"
              >
                {item.name}
              </a>
            ))}

        
          </div>
        </div>
      ))}
    </div>
  
</div>











          </div>

          <a href="/about">About</a>

          <a href="/contact">Contact</a>

 
        </div>

        <div className="nav-logo">
          Miroir Chic
        </div>

        <button className="nav-btn desktop-btn">
          Book My Session
        </button>

        {/* HAMBURGER */}

        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={34} />
        </button>
      </nav>

      {/* MOBILE MENU */}

      <div
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >
        <button
          className="close-btn"
          onClick={() => {
            setMenuOpen(false);
            setMobileServicesOpen(false);
            setMobileActiveCategory(null);
          }}
        >
          <X size={38} />
        </button>

        <div className="mobile-links">
          <a href="/">Home</a>

          {/* MOBILE SERVICES */}

          <div className="mobile-services">
            <button
              className="mobile-services-trigger"
              onClick={() =>
                setMobileServicesOpen(
                  !mobileServicesOpen
                )
              }
            >
              <span>Services</span>

              {mobileServicesOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            <div
              className={`mobile-services-container ${
                mobileServicesOpen
                  ? "open"
                  : ""
              }`}
            >
              <div className="mobile-services-scroll">
                {servicesData.map(
                  (category) => (
                    <div
                      className="mobile-category"
                      key={
                        category.title
                      }
                    >
                      <button
                        className="mobile-category-btn"
                        onClick={() =>
                          handleMobileCategory(
                            category.title
                          )
                        }
                      >
                        <span>
                          {
                            category.title
                          }
                        </span>

                        {mobileActiveCategory ===
                        category.title ? (
                          <ChevronDown
                            size={18}
                          />
                        ) : (
                          <ChevronRight
                            size={18}
                          />
                        )}
                      </button>

                      <div
                        className={`mobile-submenu ${
                          mobileActiveCategory ===
                          category.title
                            ? "open"
                            : ""
                        }`}
                      >
                        {category.items.map(
                          (item) => (
                            <a
                              key={
                                item.name
                              }
                              href={
                                item.link
                              }
                              className="mobile-submenu-link"
                              onClick={() => {
                                setMenuOpen(
                                  false
                                );
                                setMobileServicesOpen(
                                  false
                                );
                                setMobileActiveCategory(
                                  null
                                );
                              }}
                            >
                              {
                                item.name
                              }
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <a href="/about">About</a>

          <a href="/contact">Contact</a>


        </div>

        <button className="mobile-btn">
          Book My Session
        </button>
      </div>
    </>
  );
};

export default Navbar;