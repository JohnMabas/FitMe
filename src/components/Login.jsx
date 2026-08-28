import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("foodAppUser"));

    if (!savedUser) {
      alert("Please create an account first.");
      navigate("/signup");
      return;
    }

    if (email !== savedUser.email || password !== savedUser.password) {
      alert("Invalid email or password.");
      return;
    }

    // Login successful
    localStorage.setItem("foodAppLoggedIn", "true");

    navigate("/home");
  };

  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-cover
        bg-center
        px-5
      "
      // style={{
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2000&q=80')",
      // }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div
        className="
          relative
          z-10
          w-full
          max-w-md
          rounded-2xl
          bg-white
          p-7
          shadow-2xl
        "
      >
        <div className="mb-7 text-center">
          <h1 className="text-3xl font-bold text-[#FC8019]">FitMe</h1>

          <p className="mt-1 text-sm text-gray-500">Welcome back</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
                w-full
                rounded-lg
                border
                border-gray-300
                px-4
                py-3
                text-sm
                outline-none
                focus:border-[#FC8019]
              "
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="
                w-full
                rounded-lg
                border
                border-gray-300
                px-4
                py-3
                text-sm
                outline-none
                focus:border-[#FC8019]
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              rounded-lg
              bg-[#FC8019]
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#e87513]
            "
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/" className="font-semibold text-[#FC8019]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
