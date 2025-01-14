import { useState } from "react";
import Dropdown from "../components/ui/Dropdown";
import { CountryDropdown } from "react-country-region-selector";
import { userSchema } from "../zod/userSchema";
import { z } from "zod";
import { useRegisterUserMutation } from "../store/authApi";
import Loader from "../components/ui/Loader";
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
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // extracting form data
    setErrors({});
    const formData = new FormData(e.target);
    const userData = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      user_type: items[userType].value,
      username: formData.get("username"),
      createPassword: formData.get("createPassword"),
      confirmPassword: formData.get("confirmPassword"),
      password: formData.get("createPassword"),
      email: formData.get("email"),
      country: country,
    };
    try {
      //validating data with zod for checking valid email id, and checking other basics as password matching etc
      debugger;
      const validate = userSchema.parse(userData);
      const validatedData = JSON.stringify(userData);
      const response = await registerUser({ userData }).unwrap();
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formErrors = {};
        err.errors.forEach((error) => {
          if (error.path[0]) {
            formErrors[error.path[0]] = error.message;
          }
        });
        setErrors(formErrors);
      }
    }
  };

  const [userType, setUserType] = useState<number>(0);
  const [country, setCountry] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  if (isLoading)
    return (
      <div className="bg-slate-300 flex h-screen justify-center items-center w-full">
        <Loader />
      </div>
    );
  return (
    <>
      <div className="bg-slate-300 flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="bg-white h-auto max-w- rounded p-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-blue-700">
              AAK
            </h2>
            <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sigup your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Tell us what type of account you'd be opening.
                </label>
                <div className="mt-2">
                  <Dropdown
                    items={items}
                    dropdownLabel={items[userType].label}
                    setUserType={setUserType}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="fistName"
                    name="first_name"
                    type="text"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                {errors.first_name && (
                  <p className="text-red-500 text-sm mt-1">
                    *{errors.first_name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                {errors.lasteName && (
                  <p className="text-red-500 text-sm mt-1">
                    *{errors.lasteName}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    required
                    autoComplete="username"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                {errors.userName && (
                  <p className="text-red-500 text-sm mt-1">
                    *{errors.userName}
                  </p>
                )}
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
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">*{errors.email}</p>
                )}
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
                  {errors.createPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      *{errors.createPassword}
                    </p>
                  )}
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
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      *{errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Country
                </label>
                <div>
                  <CountryDropdown
                    className="outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 "
                    value={country}
                    onChange={(val) => setCountry(val)}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm mt-1">
                      *{errors.country}
                    </p>
                  )}
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
      </div>
    </>
  );
}
