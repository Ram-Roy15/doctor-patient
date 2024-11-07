import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvier";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const displayName = form.username.value;
    const photoURL = form.url.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const newUser = { displayName, photoURL, email, password, confirm };
    console.log(newUser);

    try {
      const specialCharacters = /[!@#$%^&*()_+\-=$$$${};':"\\|,.<>//?]+/;
      if (password.length < 6) {
        toast.error(
          "Password must be at least 6 characters, upper case, and lower case, special characters, numbers and"
        );
        return;
      } else if (!/[A-Z]/.test(password)) {
        toast.error("Password must be at least one Upper characters");
        return;
      } else if (!/[a-z]/.test(password)) {
        toast.error("Password must be at least one smaller characters");
        return;
      } else if (!specialCharacters.test(password)) {
        toast.error("Password must be at least one special characters");
        return;
      } else if (password !== confirm) {
        toast.error("Password does not match. Please try again.");
        return;
      } else if (!/[0-9]/.test(password)) {
        toast.error("Password must be at least one number");
        return;
      } else {
        await createUser(email, password);
        Swal.fire({
          title: "Good job!",
          text: "You have successfully created a new account",
          icon: "success",
        });
        navigate("/login");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This account already exists. Try with another account.",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Volunteer | Register</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="bg-white flex items-center justify-center dark:bg-gray-900">
        <div className="hidden  bg-cover lg:block lg:w-full">
          <img src={"https://i.ibb.co/wJvXkt1/image.png"} alt="" />
        </div>
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex justify-center mx-auto"></div>

            <div className="flex items-center justify-center mt-6">
              <a
                href="#"
                className="w-2/3 pb-4 font-bold text-xl text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
              >
                User Registration
              </a>
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>

              <input
                type="email"
                required
                name="email"
                placeholder="Email Address"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="relative flex items-center mt-6">
              <input
                type="url"
                name="url"
                placeholder="Photo URL"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>

              <input
                type="password"
                name="password"
                required
                placeholder="Enter a password"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>

              <input
                type="password"
                required
                placeholder="Confirm Password"
                name="confirm"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Register
              </button>

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <a
                  href="#"
                  className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
                >
                  or login with Social Media
                </a>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
              </div>
            </div>
            <div className="mt-6 text-center ">
              <Link
                to={"/login"}
                href="#"
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
