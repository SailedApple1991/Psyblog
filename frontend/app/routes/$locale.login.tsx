import { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from '@remix-run/react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#EDE7E0]">
      <div className="px-14 py-10 bg-white">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-left">Welcome!</h1>
        <p className="text-sm mb-4 text-left">Please Login.</p>

        <div className="w-72 mb-4">
          <Label htmlFor="username" className="text-lg text-left">
            Username
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

        <div className="w-full mb-6">
          <Label htmlFor="password" className="text-lg text-left">
            Password
          </Label>
          <div className="relative">
            <TextInput
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="text-lg"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handlePasswordToggle}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full mb-6">
          <Link to="/forgot-password" className="text-sm text-left">
            Forgot password?
          </Link>
          <Link to="/auto-login" className="text-sm text-right">
            Auto Login
          </Link>
        </div>

        <Button color="" className="w-full mb-4 bg-[#A18771] text-lg text-white">
          Login
        </Button>

        <Button color="secondary" className="w-full bg-[#EDE7E0] text-lg text-white" href={`/signup`}>
          Register
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Login;
