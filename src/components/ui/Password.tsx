import { useState } from "react";

interface PasswordInputProps {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
}

export default function PasswordInput({
  id,
  label,
  name,
  placeholder = "Enter password",
  error,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          required
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.94 17.94A10 10 0 0 0 12 5c-7 0-10 7-10 7s3 7 10 7a10 10 0 0 0 5.94-1.94"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">*{error}</p>}
    </div>
  );
}
