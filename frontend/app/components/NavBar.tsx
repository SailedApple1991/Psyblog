import { Button, Dropdown, Navbar } from "flowbite-react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Menu } from "~/api/strapi";
import { useSiteContent } from "~/components/SiteContentContext";
import { CustomMenuChIcon, CustomMenuEnIcon } from "~/utils/custom/customIcons";

export interface NavBarProps {
  menuItems: Menu[];
}

export default function NavBar(props: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { loginButtonLabel, registerButtonLabel } = useSiteContent();
  const { menuItems } = props;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // const handleItemClick = (value:string) => {
  //   switch(value){
  //     case "en":
  //         redirect("/en/carousel");
  //     break;
  //   }
  //   setIsOpen(false);
  // };
  const handleButtonBlur = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div>
        <Navbar className="bg-[#EDE7E0]" fluid rounded>
          <Navbar.Brand href=""></Navbar.Brand>
          <Button
            size="xs"
            className="lg:w-1/8 xl:w-1/10 hidden items-center justify-center  bg-[#A18771] md:flex md:w-1/6"
          >
            {registerButtonLabel}
          </Button>

          <Button
            outline
            size="xs"
            className="lg:w-1/8 xl:w-1/10 hidden items-center justify-center  bg-[#A18771] md:flex md:w-1/6"
          >
            {loginButtonLabel}
          </Button>
          <div className="flex items-center md:order-2">
            <div className="custom-dropdown">
              <Button
                color="light"
                onClick={handleToggle}
                outline={false}
                onBlur={handleButtonBlur}
                className={`dropdown-toggle focus:ring-5 focus-black-300 text-gray-900 dark:text-white ${
                  isOpen ? "active" : ""
                }`}
              >
                {isOpen ? <CustomMenuChIcon /> : <CustomMenuEnIcon />}
              </Button>
              <style>
                {`
      .focus\:ring-cyan-300:focus{
        --tw-ring-color:none;
      }
              .custom-dropdown .dropdown-toggle {
                background: none;
                border: none;
                outline: none;
                padding: 0;
                box-shadow: none;
              }
              .custom-dropdown .dropdown-toggle.active {
                border: none;
                box-shadow: none;
              }
              .custom-dropdown .dropdown-menu {
                /* Dropdown menu styles */
              }
              .custom-dropdown .dropdown-item {
                /* Dropdown item styles */
              }
              .custom-dropdown .dropdown-toggle:focus,
              .custom-dropdown .dropdown-toggle:active {
                background-color: transparent;
                color: inherit;
                --tw-ring-color:none;
              }
              .custom-dropdown .dropdown-toggle:focus:not(:focus-visible),
              .custom-dropdown .dropdown-toggle:active:not(:focus-visible) {
                outline: none;
                box-shadow: none;
                border-color: transparent;
              }
        `}
              </style>
            </div>
          </div>
          <div className="hidden w-full items-center justify-between md:order-3 md:flex md:w-auto">
            <Dropdown inline label={<AiOutlineMenu />} arrowIcon={false}>
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            {menuItems.map((menu) => (
              <Navbar.Link href={menu.url}>{menu.text}</Navbar.Link>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
