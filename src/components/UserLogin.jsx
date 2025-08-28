import { MdLockOutline, MdOutlineMailLock } from "react-icons/md";
import { userlogin } from "../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useState } from "react";

const UserLogin = () => {
  const navigate = useNavigate();

  const data = {
    email: "",
    password: "",
  };

  const [inputData, setInputData] = useState(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await userlogin(inputData);
      if (result.status == 200) {
        toast.success("Login Successfully..");
        const token = jwtDecode(result.data);
        const userRole =
          token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        const userId =
          token[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
          ];

          const userName =
          token[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
          ];

        Cookies.set("role", userRole, { expires: 1 });
        Cookies.set("userId", userId, { expires: 1 });
        Cookies.set("userName", userName, { expires: 1 });

        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Invalid username or password.");
      } else {
        toast.error("Something went wrong.");
      }
    }
  };

  return (
    <section className="w-full h-screen flex justify-center items-center bg-[url(../src/assets/images/loginBg8.png)] bg-center bg-contain">
      <div className="md:w-[400px]  bg-white/30 shadow-lg rounded-2xl">
        <form
          className="w-full text-center border border-gray-300/60 rounded-2xl px-8"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center mt-10 text-5xl text-primary font-semibold">
            Grocefy
          </h1>
          <h1 className="text-gray-900 text-xl mt-5 font-medium">Login</h1>
          <p className="text-gray-500 text-sm mt-2">
            Please sign in to continue
          </p>
          <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <span>
              <MdOutlineMailLock />
            </span>
            <input
              type="email"
              placeholder="Email id"
              className="autofill-fix bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
              required
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>

          <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <span>
              <MdLockOutline />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
              required
              value={inputData.password}
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            />
          </div>
          <div className="mt-5 text-left text-primary">
            <a className="text-sm" href="#">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-2 w-full h-11 rounded-full text-white bg-primary hover:opacity-90 transition-opacity"
          >
            Login
          </button>
          <p className="text-gray-500 text-sm mt-3 mb-11">
            Don’t have an account?{" "}
            <a className="text-primary" href="#">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default UserLogin;
