import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("foodAppUser", JSON.stringify(user));

    navigate("/login");
  };

  return (
    <div className="min-h-screen">


    <div
      className="
        relative
        flex
        min-h-[calc(100vh-70px)]
        items-center
        bg-cover
        bg-center
        px-6
        py-10
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=80')",
      }}
    >

      <div className="absolute inset-0 bg-black/60" />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-6xl
          items-center
          justify-between
          gap-12
        "
      >

        <div className="hidden max-w-xl text-white lg:block">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#FC8019]">
            Welcome to FitMe
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Fresh food,
            <br />
            delivered to
            <br />
            <span className="text-[#FC8019]">
              your doorstep.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-200">
            Discover delicious meals, explore amazing
            restaurants, and order your favorite food
            whenever you want. Create your FitMe account
            and make your next meal just a few clicks away.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FC8019]">
                ✓
              </div>

              <p className="text-sm text-gray-200">
                Discover delicious meals
              </p>

            </div>


            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FC8019]">
                ✓
              </div>

              <p className="text-sm text-gray-200">
                Order from your favorite restaurants
              </p>

            </div>


            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FC8019]">
                ✓
              </div>

              <p className="text-sm text-gray-200">
                Schedule your meals with ease
              </p>

            </div>

          </div>

        </div>

        <div
          className="
            w-full
            max-w-md
            rounded-2xl
            bg-white
            p-7
            shadow-2xl
            lg:p-8
          "
        >

          <div className="mb-6 text-center">

            <h1 className="text-3xl font-bold text-[#FC8019]">
              FitMe
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Create your account
            </p>

          </div>



          <form
            onSubmit={handleSignup}
            className="space-y-4"
          >

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

            <div>

              <label className="mb-1 block text-sm font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
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

    </div>

  </div>
  );
}
