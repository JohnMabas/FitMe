import {
  FaRegHeart,
  FaSearch,
  FaStar,
  FaTag,
  FaPlus,
} from "react-icons/fa";

import { useParams, useNavigate } from "react-router";

import NavBar from "./NavBar";
import { useCart } from "./CartContext";
import Footer from "./Footer";

export default function Restaurant({ recipesItem = [] }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Get selected recipe from App.jsx props
  const recipe = recipesItem.find(
    (item) => item.id === Number(id)
  );

  // Cart
  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    subtotal,
  } = useCart();

  //  Recipe not found
  if (!recipe) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-xl font-bold">
          Recipe not found
        </h1>

        <button
          onClick={() => navigate("/")}
          className="mt-4 rounded-lg bg-[#FC8019] px-5 py-2 text-white"
        >
          Go Home
        </button>
      </div>
    );
  }

  const deliveryTime =
    Number(recipe.prepTimeMinutes || 0) +
    Number(recipe.cookTimeMinutes || 0);

  const cartItemsCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Check if current recipe is already in cart
  const currentCartItem = cart.find(
    (item) => item.id === recipe.id
  );

  return (
    <div className="min-h-screen bg-white">

      {/*NAVBAR */}

      <NavBar />


      {/*RESTAURANT HEADE */}

      <section className="bg-[#202020] text-white">

        <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-7">

          <div className="flex flex-col gap-5 py-5 md:flex-row md:items-center">

            {/* IMAGE */}

            <div className="h-31.25 w-full shrink-0 overflow-hidden rounded-lg sm:w-50">

              <img
                src={recipe.image}
                alt={recipe.name}
                className="h-full w-full object-cover"
              />

            </div>


            {/* RESTAURANT INFORMATION */}

            <div className="min-w-0 flex-1">

              <h1 className="text-[18px] font-bold sm:text-[20px]">
                {recipe.name}
              </h1>

              <p className="mt-2 text-[10px] lowercase text-gray-400">
                {recipe.cuisine},{" "}
                {recipe.tags?.[0] || "food"}
              </p>


              {/* INFORMATION */}

              <div className="mt-4 flex items-center">

                {/* RATING */}

                <div className="border-r border-gray-600 pr-5 sm:pr-7">

                  <div className="flex items-center gap-1">

                    <FaStar
                      size={11}
                      className="text-green-500"
                    />

                    <span className="text-[11px]">
                      {recipe.rating}
                    </span>

                  </div>

                  <p className="mt-1 text-[9px] text-gray-400">
                    {recipe.reviewCount || 100}+ ratings
                  </p>

                </div>


                {/* DELIVERY TIME */}

                <div className="border-r border-gray-600 px-5 sm:px-7">

                  <p className="text-[11px]">
                    {deliveryTime} Mins
                  </p>

                  <p className="mt-1 text-[9px] text-gray-400">
                    Delivery Time
                  </p>

                </div>


                {/* COST */}

                <div className="pl-5 sm:pl-7">

                  <p className="text-[11px]">
                    ₹200
                  </p>

                  <p className="mt-1 text-[9px] text-gray-400">
                    Cost for two
                  </p>

                </div>

              </div>

            </div>


            {/* OFFERS */}

            <div className="w-full shrink-0 rounded-xl border border-dashed border-[#FC8019] px-4 py-4 md:w-62.5">

              <h2 className="text-[13px] font-medium text-[#FC8019]">
                Offers
              </h2>

              <div className="mt-3 space-y-2">

                <p className="flex items-center gap-2 text-[9px] leading-4 text-gray-300">

                  <FaTag className="shrink-0 text-amber-300" />

                  <span>
                    50% off up to $100 | Use code TRYNAV
                  </span>

                </p>

                <p className="flex items-center gap-2 text-[9px] leading-4 text-gray-300">

                  <FaTag className="shrink-0 text-amber-300" />

                  <span>
                    20% off | Use code PARTY
                  </span>

                </p>

              </div>

            </div>

          </div>


          {/* SEARCH + FAVOURITE */}

          <div className="relative z-10 flex translate-y-5 items-center gap-3">

            <div className="flex h-9.5 w-full max-w-75 items-center rounded-lg bg-white px-3 shadow-lg">

              <input
                type="text"
                placeholder="Search for dish"
                className="w-full bg-transparent px-1 text-[9px] text-gray-700 outline-none placeholder:text-gray-400"
              />

              <FaSearch
                size={13}
                className="shrink-0 text-gray-500"
              />

            </div>


            <button
              className="
                flex
                h-9.5
                shrink-0
                items-center
                gap-2
                rounded-lg
                bg-white
                px-4
                text-[10px]
                text-gray-500
                shadow-lg
                hover:text-[#FC8019]
              "
            >

              <FaRegHeart size={12} />

              <span className="hidden sm:block">
                Favourite
              </span>

            </button>

          </div>

        </div>

      </section>


      {/* =========================================
          CONTENT
      ========================================= */}

      <main className="mx-auto w-full max-w-300 mb-20 px-4 pt-16 sm:px-6 lg:px-7">

        <div className="flex flex-col lg:flex-row">


          {/* =====================================
              LEFT MENU
          ===================================== */}

          <aside
            className="
              w-full
              border-b
              border-gray-200
              pb-5

              lg:w-[150px]
              lg:shrink-0
              lg:border-b-0
              lg:border-r
              lg:border-gray-300
              lg:pb-0
              lg:pr-5
            "
          >

            <h2 className="mb-4 text-[15px] font-medium text-[#FC8019]">
              Recommended
            </h2>


            <div
              className="
                flex
                gap-6
                overflow-x-auto

                lg:block
                lg:space-y-4
              "
            >

              <button className="shrink-0 text-[15px] text-gray-600 hover:text-[#FC8019] lg:block lg:w-full lg:text-left">
                Breakfast Box
              </button>

              <button className="shrink-0 text-[15px] text-gray-600 hover:text-[#FC8019] lg:block lg:w-full lg:text-left">
                Lunch Box
              </button>

              <button className="shrink-0 text-[15px] text-gray-600 hover:text-[#FC8019] lg:block lg:w-full lg:text-left">
                Combo Box
              </button>

              <button className="shrink-0 text-[15px] text-gray-600 hover:text-[#FC8019] lg:block lg:w-full lg:text-left">
                Biriyani Box
              </button>

            </div>

          </aside>


          {/*FOOD MENU*/}

          <section
            className="
              w-full
              py-7

              lg:flex-1
              lg:px-8
              lg:py-0
            "
          >

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

              {/* FOOD DETAILS */}

              <div className="max-w-105">

                <h2 className="text-[16px] font-medium text-[#202020]">
                  {recipe.name} <span>for 2 - Veg (Save upto Rs.45)</span>
                  
                </h2>

                <p className="mt-3 text-[16px] font-medium text-black">
                  $200
                </p>

                <p className="mt-3 text-[9px] leading-4 text-gray-400">
                  {recipe.description}
                </p>

              </div>


              {/* IMAGE + ADD */}

              <div className="relative mx-auto shrink-0 sm:mx-0">

                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="
                    h-25
                    w-25
                    rounded-lg
                    object-cover
                  "
                />


                {/* ADD BUTTON */}

                <button
                  onClick={() => addToCart(recipe)}
                  className="
                    absolute
                    -bottom-3
                    left-1/2
                    flex
                    -translate-x-1/2
                    items-center
                    gap-1
                    rounded-md
                    bg-white
                    px-4
                    py-2
                    text-[9px]
                    font-medium
                    text-[#FC8019]
                    shadow-md
                    transition

                    hover:bg-[#FC8019]
                    hover:text-white
                  "
                >

                  <FaPlus size={7} />

                  Add +

                </button>

              </div>

            </div>


            {/*CURRENT ITEM QUANTITY*/}

            <div>
              <p className="text-sm mt-5 text-gray-400"> {recipe.name}: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!</p>
            </div>


            {/*INGREDIENTS*/}

            <div className="mt-10">

              <h3 className="text-[16px] font-medium">
                Ingredients
              </h3>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">

                {recipe.ingredients?.map(
                  (ingredient, index) => (

                    <span
                      key={index}
                      className="text-[13px] text-gray-400"
                    >
                      • {ingredient}
                    </span>

                  )
                )}

              </div>

            </div>

          </section>


          {/*CART*/}

          <aside
            className="
              w-full
              border-t
              border-gray-200
              pt-7

              lg:w-70
              lg:shrink-0
              lg:border-t-0
              lg:pt-0
            "
          >

            {/* CART HEADER */}

            <div className="flex items-center justify-between">

              <h2 className="text-[14px] font-medium text-[#202020]">
                Cart
              </h2>

              <span className="text-[9px] text-gray-500">
                {cartItemsCount} Items
              </span>

            </div>


            {/* CART ITEMS */}

            <div className="mt-7">

              {cart.length === 0 ? (

                <div className="py-5">

                  <p className="text-[10px] text-gray-400">
                    Your cart is empty
                  </p>

                  <p className="mt-1 text-[9px] text-gray-300">
                    Click Add + to add a dish
                  </p>

                </div>

              ) : (

                cart.map((item) => (

                  <div
                    key={item.id}
                    className="mb-6"
                  >

                    {/* FROM */}

                    <p className="text-[9px] text-gray-500">

                      from{" "}

                      <span className="text-[#FC8019]">
                        {item.cuisine || "Restaurant"}
                      </span>

                    </p>


                    {/* ITEM */}

                    <div className="mt-2 flex items-start gap-3">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          h-12
                          w-12
                          shrink-0
                          rounded-md
                          object-cover
                        "
                      />


                      {/* NAME */}

                      <div className="min-w-0 flex-1">

                        <p className="text-[10px] leading-4 text-[#202020]">
                          {item.name}
                        </p>

                        <p className="mt-1 text-[9px] text-gray-400">
                          ${item.price}
                        </p>

                      </div>


                      {/* QUANTITY */}

                      <div className="flex shrink-0 items-center gap-3 pt-1">

                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="text-[12px] text-gray-500 hover:text-[#FC8019]"
                        >
                          −
                        </button>

                        <span className="text-[10px]">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="text-[12px] text-gray-500 hover:text-[#FC8019]"
                        >
                          +
                        </button>

                      </div>

                    </div>

                  </div>

                ))

              )}

            </div>


            {/* =====================================
                SUBTOTAL
            ===================================== */}

            <div className="mt-8 border-t border-gray-100 pt-5">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-[13px] font-medium">
                    Subtotal
                  </h3>

                  <p className="mt-1 text-[8px] text-gray-400">
                    Extra charges may apply
                  </p>

                </div>

                <span className="text-[13px] font-medium">
                  ${subtotal}
                </span>

              </div>


              {/* CHECKOUT */}

              <button
                disabled={cart.length === 0}
                className="
                  mt-5
                  h-9
                  w-full
                  rounded-md
                  bg-[#FC8019]
                  text-[11px]
                  font-medium
                  text-white
                  transition

                  hover:bg-[#e87513]

                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                Checkout
              </button>

            </div>

          </aside>

        </div>

      </main>

      <Footer />

    </div>
  );
}