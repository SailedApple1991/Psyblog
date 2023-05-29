import { Badge, Button, Navbar, Dropdown, Avatar,  } from "flowbite-react";
import { useState } from "react";



export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemClick = (value:string) => {
      console.log(`Selected item: ${value}`);
      setIsOpen(false);
    };
    
    return (
   
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <div>
          
        <Navbar
  fluid
  rounded
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      alt="Flowbite Logo"
      className="mr-3 h-6 sm:h-9"
      src="https://flowbite.com/docs/images/logo.svg"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <div className="flex items-center md:order-2">

  <div className="custom-dropdown">

      <Button color="light" onClick={handleToggle} className={`dropdown-toggle text-gray-900 dark:text-white ${
          isOpen ? 'active' : ''
        }`}>
      <svg
        className="w-5 h-5 mr-2 rounded-full"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 3900 3900"
        >
            <path fill="#b22234" d="M0 0h7410v3900H0z" />
            <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300" />
            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
            <g fill="#fff">
            <g id="d">
                <g id="c">
                <g id="e">
                    <g id="b">
                    <path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                    <use xlinkHref="#a" y="420" />
                    <use xlinkHref="#a" y="840" />
                    <use xlinkHref="#a" y="1260" />
                    </g>
                    <use xlinkHref="#a" y="1680" />
                </g>
                <use xlinkHref="#b" x="247" y="210" />
                </g>
                <use xlinkHref="#c" x="494" />
            </g>
            <use xlinkHref="#d" x="988" />
            <use xlinkHref="#c" x="1976" />
            <use xlinkHref="#e" x="2470" />
            </g>
          {/* SVG paths */}
        </svg>
        English (US)
      </Button>
      {isOpen && (
        <div className="dropdown-menu">
          <Button color="light" onClick={() => handleItemClick('Item 1')} 
          className="dropdown-toggle"
         >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              {/* SVG paths */}
            </svg>
            Item 1
          </Button>
          {/* Other dropdown items */}
        </div>
      )}
      <style>
        {`
          .custom-dropdown .dropdown-toggle {
            background: none;
            border: none;
            outline: none;
            padding: 0;
          }
          .custom-dropdown .dropdown-toggle.active {
            border: none;
          }
          .custom-dropdown .dropdown-menu {
            // Dropdown menu styles
          }
          .custom-dropdown .dropdown-item {
            // Dropdown item styles
          }
        `}
      </style>
    </div>
   
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-3">
    <Dropdown
      inline
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
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
