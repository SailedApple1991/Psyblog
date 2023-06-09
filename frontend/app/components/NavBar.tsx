import { Bars3Icon, LanguageIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "@remix-run/react";
import classNames from "classnames";
import { Button, Carousel } from "flowbite-react";
import { useState } from "react";
import { Carousel as CarouselData, Menu } from "~/api/strapi";
import { useSiteContent } from "~/components/SiteContentContext";

export interface NavBarProps {
  menuItems: Menu[];
  carousels: CarouselData[];
  locale: any;
}

export default function NavBar(props: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { loginButtonLabel, registerButtonLabel } = useSiteContent();
  const { menuItems, locale, carousels } = props;

  return (
    <div className="flex justify-between align-middle">
      <div className="flex-none basis-1/6 p-4">Logo</div>

      {/* navbar */}
      <div className="relative flex flex-grow flex-col bg-main-light p-4">
        <div className=" flex justify-between">
          <div className="flex gap-4">
            <Button href={`/${locale}/signup`} color="primary">
              {registerButtonLabel}
            </Button>
            <Button href={`/${locale}/login`} color="primary" outline>
              {loginButtonLabel}
            </Button>
          </div>
          <div className="flex items-center">
            {menuItems.map((menu) => {
              const url = `/${locale}${menu.url}`;
              const active = url === useLocation().pathname;
              return (
                <div>
                  <Link
                    to={url}
                    className={classNames([
                      "mr-4 hover:opacity-80 ",
                      { "text-main": active },
                      { "text-main-inactive": !active },
                    ])}
                  >
                    {menu.text}
                  </Link>
                </div>
              );
            })}
            <LanguageIcon className="ml-4 h-6 w-6 text-black" />
            <Bars3Icon className="ml-2 h-6 w-6 text-black" />
          </div>
        </div>
        {/* carousel */}
        <div className="relative -left-32 mb-16 mt-8 h-96 w-full bg-main-light">
          {carousels.slice(0, 1).map((carousel) => (
            <div
              key={carousel.Title}
              className="relative flex h-full w-full justify-between align-middle"
            >
              <div
                style={{
                  backgroundColor: "#A18771",
                  border: "14px solid #EDE7E0",
                  boxSizing: "border-box",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: "60%",
                  zIndex: -1,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <div style={{ fontSize: "3em", color: "#FFFFFF" }}>
                  {carousel.Title}
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    marginBottom: "0.5em",
                  }}
                >
                  {carousel.TitleCaption}
                </div>
                <div>
                  {(carousel.Body || "").split("\n").map((line: string) => (
                    <div
                      style={{
                        color: "#FFFFFF",
                        fontSize: "0.8em",
                        marginBottom: "0.5em",
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <div style={{ color: "#A18771" }}>{carousel.ImageCaption}</div>
                <img
                  style={{ border: "14px solid #FFFFFF" }}
                  src={
                    "http://localhost:1337" +
                    carousel.Image?.data?.attributes?.formats.small.url
                  }
                  alt={carousel.Image?.data?.attributes?.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // return (
  //   <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
  //     <div>
  //       <Navbar color="primary" fluid rounded>
  //         <Navbar.Brand href=""></Navbar.Brand>

  //         <div className="flex items-center md:order-2">
  //           <div className="custom-dropdown">
  //             <Button
  //               color="light"
  //               onClick={handleToggle}
  //               outline={false}
  //               onBlur={handleButtonBlur}
  //               className={`dropdown-toggle focus:ring-5 focus-black-300 text-gray-900 dark:text-white ${
  //                 isOpen ? "active" : ""
  //               }`}
  //             >
  //               {isOpen ? <CustomMenuChIcon /> : <CustomMenuEnIcon />}
  //             </Button>
  //             <style>
  //               {`
  //     .focus\:ring-cyan-300:focus{
  //       --tw-ring-color:none;
  //     }
  //             .custom-dropdown .dropdown-toggle {
  //               background: none;
  //               border: none;
  //               outline: none;
  //               padding: 0;
  //               box-shadow: none;
  //             }
  //             .custom-dropdown .dropdown-toggle.active {
  //               border: none;
  //               box-shadow: none;
  //             }
  //             .custom-dropdown .dropdown-menu {
  //               /* Dropdown menu styles */
  //             }
  //             .custom-dropdown .dropdown-item {
  //               /* Dropdown item styles */
  //             }
  //             .custom-dropdown .dropdown-toggle:focus,
  //             .custom-dropdown .dropdown-toggle:active {
  //               background-color: transparent;
  //               color: inherit;
  //               --tw-ring-color:none;
  //             }
  //             .custom-dropdown .dropdown-toggle:focus:not(:focus-visible),
  //             .custom-dropdown .dropdown-toggle:active:not(:focus-visible) {
  //               outline: none;
  //               box-shadow: none;
  //               border-color: transparent;
  //             }
  //       `}
  //             </style>
  //           </div>
  //         </div>
  //         <div className="hidden w-full items-center justify-between md:order-3 md:flex md:w-auto">
  //           <Dropdown inline label={<AiOutlineMenu />} arrowIcon={false}>
  //             <Dropdown.Header>
  //               <span className="block text-sm">Bonnie Green</span>
  //               <span className="block truncate text-sm font-medium">
  //                 name@flowbite.com
  //               </span>
  //             </Dropdown.Header>
  //             <Dropdown.Item>Dashboard</Dropdown.Item>
  //             <Dropdown.Item>Settings</Dropdown.Item>
  //             <Dropdown.Item>Earnings</Dropdown.Item>
  //             <Dropdown.Divider />
  //             <Dropdown.Item>Sign out</Dropdown.Item>
  //           </Dropdown>
  //           <Navbar.Toggle />
  //         </div>
  //         <Navbar.Collapse>
  //           {menuItems.map((menu) => (
  //             <Navbar.Link href={menu.url}>{menu.text}</Navbar.Link>
  //           ))}
  //         </Navbar.Collapse>
  //       </Navbar>
  //     </div>
  //   </div>
  // );
}
