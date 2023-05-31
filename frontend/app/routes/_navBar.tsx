import { Badge, Button, Navbar, Dropdown, Avatar,  } from "flowbite-react";
import { useState } from "react";
import { CustomChineseIcon, CustomEnglishIcon, CustomMenuEnIcon } from "~/utils/custom/customIcons";
import { Link } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { AiOutlineMenu } from 'react-icons/ai';


export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
  
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
   
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
        <div>
          
        <Navbar className="bg-[#EDE7E0]"
  fluid
  rounded
>
  <Navbar.Brand href="">
  </Navbar.Brand>
  <Button size="xs" className="bg-[#A18771] hidden md:flex items-center justify-center  md:w-1/6 lg:w-1/8 xl:w-1/10">
  Register
</Button>

  <Button outline size="xs" className="bg-[#A18771] hidden md:flex items-center justify-center  md:w-1/6 lg:w-1/8 xl:w-1/10" >
        SignIn
  </Button>
  <div className="flex items-center md:order-2">

  <div className="custom-dropdown">

      <Button color="light" onClick={handleToggle} outline={false} onBlur={handleButtonBlur}className={`dropdown-toggle text-gray-900 dark:text-white focus:ring-5 focus-black-300 ${
          isOpen ? 'active' : ''
          
        }`}
        
        >
      <CustomMenuEnIcon />
      </Button>
      {isOpen && (
                <div className="dropdown-menu absolute z-10 bg-white border border-gray-300 py-1 mt-2">
                <Link
                  to="/en/carousel"
                  className="dropdown-item flex items-center px-4 py-2 text-sm text-gray-700"
                  
                >
                  <CustomEnglishIcon />
                  <span className="whitespace-nowrap">English (US)</span>
                </Link>
                <Link
                  to="/zh-Hans/carousel"
                  className="dropdown-item flex items-center px-4 py-2 text-sm text-gray-700"
                 
                >
                  <CustomChineseIcon />
                  <span className="whitespace-nowrap">中文 (简体)</span>
                </Link>
                <Link
                  to="/zh-Hant/carousel"
                  className="dropdown-item flex items-center px-4 py-2 text-sm text-gray-700"
                  
                >
                  <CustomChineseIcon />
                  <span className="whitespace-nowrap">中文 (繁体)</span>
                </Link>
                {/* Other dropdown items */}
              </div>
            )}
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
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-3">
    <Dropdown
      inline
      label={<AiOutlineMenu/>}
      arrowIcon={false}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      active
      href="/navbars"
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
        </div>

        </div>

        );
}
