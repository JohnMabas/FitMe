
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Save signup information locally
    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "foodAppUser",
      JSON.stringify(user)
    );

    // After signup -> Login
    navigate("/login");
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
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=80')",
      }}
    >

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/60" />


      {/* SIGNUP CARD */}

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

        {/* LOGO */}

        <div className="mb-6 text-center">

          <h1 className="text-3xl font-bold text-[#FC8019]">
            Foodie
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Create your account
          </p>

        </div>


        {/* FORM */}

        <form
          onSubmit={handleSignup}
          className="space-y-4"
        >

          {/* NAME */}

          <div>

            <label className="mb-1 block text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Enter your name"
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


          {/* EMAIL */}

          <div>

            <label className="mb-1 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
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


          {/* PASSWORD */}

          <div>

            <label className="mb-1 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Create a password"
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


          {/* CONFIRM PASSWORD */}

          <div>

            <label className="mb-1 block text-sm font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              placeholder="Confirm your password"
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


          {/* SIGNUP BUTTON */}

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
            Create Account
          </button>

        </form>


        {/* LOGIN */}

        <p className="mt-6 text-center text-sm text-gray-500">

          Already have an account?{" "}

          <Link
            to="/login"
            className="font-semibold text-[#FC8019]"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}