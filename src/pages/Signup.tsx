import { useState } from "react";
import Dropdown from "../components/ui/Dropdown";
import { CountryDropdown } from "react-country-region-selector";

const items = [
  {
    id: 0,
    label: "Researcher",
    value: "researcher",
  },
  {
    id: 1,
    label: "Investor",
    value: "investor",
  },
  {
    id: 2,
    label: "Institution Staff",
    value: "institution_staff",
  },
  {
    id: 3,
    label: "Service Provider",
    value: "service_provider",
  },
];

export default function Signup() {
  const handleFormSubmit: () => void = () => {
    console.log("Form is submitted");
  };

  const [userType, setUserType] = useState<number>(0);

  return (
    <>
      <div className="bg-slate-300 flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-blue-700">
            AAK
          </h2>
          <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sigup your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Tell us what type of account you'd be opening.
              </label>
              <div className="mt-2">
                <Dropdown />
              </div>
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="fistName"
                  name="firstName"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="createPassword"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Create Password
              </label>
              <div className="mt-2">
                <input
                  id="createPassword"
                  name="createPassword"
                  type="password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Country
              </label>
              <div className="">
                <CountryDropdown value={""} onChange={() => {}} />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
