import { useState } from "react";
import {
  Button,
  CustomFlowbiteTheme,
  DeepPartial,
  Flowbite,
  FlowbiteButtonTheme,
  FlowbiteColors,
  FlowbiteTheme,
  Label,
  TextInput,
} from "flowbite-react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "@remix-run/react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg- flex h-screen items-center justify-center">
      <div className="bg-white px-14 py-10">
        <div className="mx-auto max-w-md">
          <h1 className="mb-2 text-left text-3xl font-bold">Welcome!</h1>
          <p className="mb-4 text-left text-sm">Please Login.</p>

          <div className="mb-4 w-72">
            <Label htmlFor="username" className="text-left text-lg">
              Usernamex
            </Label>
            <TextInput
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              required
              className="text-lg"
            />
          </div>

          <div className="mb-6 w-full">
            <Label htmlFor="password" className="text-left text-lg">
              Password
            </Label>
            <div className="relative">
              <TextInput
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="text-lg"
              />
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
                onClick={handlePasswordToggle}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
          </div>

          <div className="mb-6 flex w-full justify-between">
            <Link to="/forgot-password" className="text-left text-sm">
              Forgot password?
            </Link>
            <Link to="/auto-login" className="text-right text-sm">
              Auto Login
            </Link>
          </div>

          {/* <Flowbite> */}
          <Button color="primary">Click me</Button>
          {/* </Flowbite> */}

          <Button color="secondary" href={`/signup`}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
