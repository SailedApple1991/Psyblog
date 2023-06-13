import { useState, CSSProperties } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { AiFillCheckCircle, AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import {MdTimer10} from 'react-icons/md';
import { Link } from '@remix-run/react';
import { useSiteContent} from '../components/SiteContentContext';
type CustomStyleProperties = {
  [key: string]: string | number;
};

const SignUp = () => {

  const siteContent = useSiteContent();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [isPasswordSelected, setIsPasswordSelected] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordInputFocus = () => {
    setIsPasswordSelected(true);
  };

  const handlePasswordInputBlur = () => {
    setIsPasswordSelected(false);
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPasswordToggle = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  const handleValidation = () => {};

  const countdownStyle: CustomStyleProperties = {
    "--value": 60,
  };

  const validatePassword = (password: string) => {
    const hasMinLength = password.length >= 10;
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#?]/.test(password);
    return {
      hasMinLength,
      hasLowercase,
      hasSpecialChar,
    };
  }

  const passwordRequirements = validatePassword(password);

  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwordßs do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = () => {
    validateConfirmPassword();

    // Additional login logic here
  };

  const handleConfirmPasswordBlur = () => {
    validateConfirmPassword();
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#EDE7E0]">
      <div className="bg-white px-14 py-10">
        <div className="mx-auto max-w-md">
          <h1 className="mb-2 text-left text-xl font-bold">Account Sign Up</h1>
          <p className="mb-4 text-left text-sm">
            Please use email for registration.
          </p>

        <div className="w-72 h-30 mb-3 ">
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
            className="text-sm  border border-[#A18771] rounded-xl"
          />
           <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xs"
              onClick={handleValidation}
            >
              Send
            </div>
            
          </div>

        <div className="w-full mb-3">
          <Label htmlFor="authcode" className="text-lg text-left">
            Authentification Code
          </Label>
          <div className="relative">
          <TextInput
            id="auth"
            name="auth"
            type="text"
            placeholder="Enter auth code"
            required
            className="text-sm  border border-[#A18771] rounded-lg"
          />
           <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-sm"
            >
               <span className="countdown">
                <span style={countdownStyle}></span>
                </span>
            </div>
            
          </div>
        </div>

        <div className="w-full mb-3">
          <Label htmlFor="password" className="text-lg text-left">
            {siteContent.PasswordLabel}
          </Label>
          <div className="relative">
            <TextInput
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="text-sm  border border-[#A18771] rounded-lg"
              onFocus={handlePasswordInputFocus}
              onBlur={handlePasswordInputBlur}
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handlePasswordToggle}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
      
      {isPasswordSelected &&(
              <div>
                <h2 className="text-md mb-1 font-semibold text-gray-900 dark:text-white">
                  Password requirements:
                </h2>
                <ul className="max-w-md list-inside space-y-1 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center text-xs">
                    {passwordRequirements.hasMinLength ? (
                      <FaCheckCircle
                        size={13.5}
                        style={{ fill: "#0e9f6e" }}
                        className="ml-0.5 mr-1.5"
                      />
                    ) : (
                      <FaTimesCircle
                        size={13.5}
                        style={{ fill: "#9ca3af" }}
                        className="ml-0.5 mr-1.5"
                      />
                    )}
                    At least 10 characters
                  </li>
                  <li className="flex items-center text-xs">
                    {passwordRequirements.hasLowercase ? (
                      <FaCheckCircle
                        size={13.5}
                        style={{ fill: "#0e9f6e" }}
                        className="ml-0.5 mr-1.5"
                      />
                    ) : (
                      <FaTimesCircle
                        size={13.5}
                        style={{ fill: "#9ca3af" }}
                        className="ml-0.5 mr-1.5"
                      />
                    )}
                    At least one lowercase character
                  </li>
                  <li className="flex items-center text-xs">
                    {passwordRequirements.hasSpecialChar ? (
                      <FaCheckCircle
                        size={13.5}
                        style={{ fill: "#0e9f6e" }}
                        className="ml-0.5 mr-1.5"
                      />
                    ) : (
                      <FaTimesCircle
                        size={13.5}
                        style={{ fill: "#9ca3af" }}
                        className="ml-0.5 mr-1.5"
                      />
                    )}
                    At least one special character, e.g., ! @ # ?
                  </li>
                </ul>
              </div>
            )}
          </div>

        
        <div className="w-full mb-3">
          <Label htmlFor="comfirmPassword" className="text-lg text-left">
          {siteContent.ConfirmPasswordLabel}
          </Label>
          <div className="relative">
            <TextInput
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your password"
              className="text-sm  border border-[#A18771] rounded-lg"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={handleConfirmPasswordBlur}
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handleConfirmPasswordToggle}
            >
              {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
          {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
        </div>
        <div className="w-full mb-3">
          <Label htmlFor="username" className="text-lg text-left">
            Username
          </Label>
          <TextInput
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            required
            className="text-sm  border border-[#A18771] rounded-lg"
          />
        </div>

        <div className="w-full mb-3">
          <Label htmlFor="age" className="text-lg text-left">
            Date of Birth
          </Label>
          <TextInput
            id="birthday"
            name="birthday"
            type="date"
            required
            className="text-sm  border border-[#A18771] rounded-lg"
          />
        </div>

        <Button color="secondary" className="w-full bg-[#EDE7E0] text-lg text-white" onClick={handleLogin}>
         {siteContent.registerButtonLabel}
        </Button>
      </div>
      </div>
    </div>
    </div>
    )
};
export default SignUp;
