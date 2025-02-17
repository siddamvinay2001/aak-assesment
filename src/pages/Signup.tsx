import { useState } from "react";
import Dropdown from "../components/ui/Dropdown";
import { CountryDropdown } from "react-country-region-selector";
import { userSchema } from "../zod/userSchema";
import { z } from "zod";
import { useRegisterUserMutation } from "../store/authApi";
import Loader from "../components/ui/Loader";
import { useNavigate } from "react-router-dom";
import Alert from "../components/ui/Alert";
import PasswordInput from "../components/ui/Password";
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
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const userData = {
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      user_type: items[userType].value as string,
      username: formData.get("username") as string,
      createPassword: formData.get("createPassword") as string,
      confirmPassword: formData.get("confirmPassword") as string,
      password: formData.get("createPassword") as string,
      email: formData.get("email") as string,
      country: country as string,
    };
    try {
      userSchema.parse(userData);
      const response = await registerUser({ userData }).unwrap();
      if (response.status === "successful") {
        setAlert({
          showAlert: true,
          success: true,
          message: response.message,
        });
      } else {
        setAlert({
          showAlert: true,
          success: false,
          message: response.message,
        });
      }
    } catch (err: unknown) {
      if (err instanceof z.ZodError) {
        const formErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          if (error.path[0]) {
            formErrors[error.path[0]] = error.message;
          }
        });
        setErrors(formErrors);
      } else if (isErrorWithData(err)) {
        setAlert({
          showAlert: true,
          success: false,
          message: err.data as string,
        });
      } else {
        setAlert({
          showAlert: true,
          success: false,
          message: "An unexpected error occurred.",
        });
      }
    }
  };

  function isErrorWithData(err: unknown): err is { data?: string } {
    return typeof err === "object" && err !== null && "data" in err;
  }

  const [userType, setUserType] = useState<number>(0);
  const [country, setCountry] = useState<string>("");
  const [alert, setAlert] = useState<Record<string, string | boolean>>({
    showAlert: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();
  if (isLoading)
    return (
      <div className="bg-slate-300 flex h-screen justify-center items-center w-full">
        <Loader />
      </div>
    );
  return (
    <>
      <div className="bg-slate-300 flex min-h-screen flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        {alert.showAlert && (
          <Alert
            isSuccess={alert.success as boolean}
            message={alert.message as string}
            handleAlert={
              alert.success
                ? () => navigate("/login", { replace: true })
                : () => {
                    setAlert({
                      showAlert: false,
                      message: "",
                      success: false,
                    });
                  }
            }
          />
        )}
        <div className="bg-white shadow-lg h-auto md:w-3/4 max-w-2xl	rounded py-8 px-12">
          <div className="text-center">
            {errors.response_error && (
              <p className="text-red-500 text-md">{errors.response_error}</p>
            )}
            <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-blue-700">
              AAK
            </h2>
            <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sigup your account
            </h2>
          </div>

          <div className="mt-10">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div>
                <label
                  htmlFor="userType"
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
                <PasswordInput
                  id="createPassword"
                  name="createPassword"
                  label="Create Password"
                  error={errors.createPassword}
                />
                <div className="mt-6">
                  <PasswordInput
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    error={errors.confirmPassword}
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
                <div className="w-auto">
                  <CountryDropdown
                    className="w-full rounded-sm outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 "
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
