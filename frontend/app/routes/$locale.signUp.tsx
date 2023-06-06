import { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import {MdTimer10} from 'react-icons/md';
import { Link } from '@remix-run/react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPasswordToggle = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  const handleValidation = () => {
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#EDE7E0]">
      <div className="px-24 py-10 bg-white">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-left">Account Sign Up</h1>
        <p className="text-sm mb-4 text-left">Please use email for registration.</p>

        <div className="w-full mb-4">
          <Label htmlFor="email" className="text-lg text-left">
            Email Address
          </Label>
          <div className="relative">
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="text-lg"
          />
           <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xs"
              onClick={handleValidation}
            >
              Send
            </div>
            
          </div>
        </div>

        <div className="w-full mb-4">
          <Label htmlFor="authcode" className="text-lg text-left">
            Authentification Code
          </Label>
          <div className="relative">
          <TextInput
            id="auth"
            name="auth"
            type="number"
            placeholder="Enter auth code"
            required
            className="text-lg"
          />
           <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-sm"
            >
              <MdTimer10 />
            </div>
            
          </div>
        </div>

        <div className="w-full mb-6">
          <Label htmlFor="password" className="text-lg text-left">
            Enter Password
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
        
        <div className="w-full mb-6">
          <Label htmlFor="comfirmPassword" className="text-lg text-left">
            Confirm Password
          </Label>
          <div className="relative">
            <TextInput
              id="confirmpassword"
              name="confirmpassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your password"
              className="text-lg"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handleConfirmPasswordToggle}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
        </div>
        <div className="w-full mb-6">
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
          <Label htmlFor="age" className="text-lg text-left">
            Date of Birth
          </Label>
          <TextInput
            id="birthday"
            name="birthday"
            type="date"
            required
            className="text-lg"
          />
        </div>

        <Button color="secondary" className="w-full bg-[#EDE7E0] text-lg text-white">
          Register
        </Button>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
