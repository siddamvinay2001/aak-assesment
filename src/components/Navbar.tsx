import { Link } from "react-router-dom";

export default function Navbar() {
  const isLoggedIn = false;
  return (
    <div className="flex flex-row justify-between p-3 bg-white shadow-lg items-center">
      <div>
        <div className="ml-2">
          <Link
            className="text-blue-600 font-bold font-mono hover:text-blue-400"
            to={"/"}
          >
            AAK
          </Link>
        </div>
      </div>

      <div>
        <div>
          <Link
            className="font-bold font-serif hover:text-slate-700"
            to={"/blogs"}
          >
            Blogs
          </Link>
        </div>
      </div>

      <div className="flex flex-row">
        {isLoggedIn ? (
          <>
            <div>
              <Link to="/profile">Profile</Link>
            </div>
            <div>
              <button>Logout</button>
            </div>
          </>
        ) : (
          <>
            <div className="mr-6 bg-blue-600 text-white rounded-lg p-2 hover:bg-white hover:text-blue-600">
              <Link className="" to="/signup">
                Signup
              </Link>
            </div>
            <div className="mr-6 bg-blue-600 text-white rounded-lg p-2 hover:bg-white hover:text-blue-600 ">
              <Link to="/login">Login</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
