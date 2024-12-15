import img from "../assets/images/off.jpeg";
import { Link } from "react-router-dom";
function AdminForgottenPassword() {
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-900">
      <div className="flex-1 h-full max:min-h-[600px] max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className=" object-cover w-full h-full block"
              src={img}
              alt="Office"
            />
          </div>
          <form className="font-syne flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold  text-gray-200">
                Forgot password
              </h1>

              <div className="label mt-2">
                <span className="label-text text-[15px] text-white">Email</span>
              </div>
              <input
                type="email"
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
              <Link
                className="block w-full px-4 py-2 md:py-3 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-sec font-Jost border border-transparent rounded-lg active:bg-purple-600 hover:bg-sec focus:outline-none focus:shadow-outline-purple"
                href="./login.html"
              >
                Recover Password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminForgottenPassword;
