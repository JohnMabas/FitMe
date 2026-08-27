import { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useCart } from "./CartContext";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Checkout() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    subtotal,
  } = useCart();

  const [orderType, setOrderType] = useState("Subscription");
  const [subscription, setSubscription] = useState("Monthly");
  const [plan, setPlan] = useState("3-Days/Week");

  const deliveryFee = 131;
  const taxes = 20;
  const discount = 400;

  const totalBeforeDiscount = subtotal + deliveryFee + taxes;
  const total = totalBeforeDiscount - discount;

  return (
    <div>
        <div>
            <NavBar/>
        </div>
    <div className="min-h-screen bg-white px-5 py-5 text-[#202020]">
      {/* HEADER */}
      <header className="mx-auto max-w-300 border-b border-gray-300 pb-3">
        <h1 className="text-[16px] font-semibold">
          Secure Checkout
        </h1>
      </header>

      {/* MAIN */}
      <main className="mx-auto flex max-w-300 flex-col gap-8 py-7 lg:flex-row">
        {/* LEFT */}
        <section className="min-w-0 flex-1">
          {/* DELIVERY ADDRESS */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <FaMapMarkerAlt
                size={14}
                className="text-[#FC8019]"
              />

              <h2 className="text-[13px] font-semibold">
                Delivery address
              </h2>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* SELECTED ADDRESS */}
              <button
                className="
                  w-full rounded-md
                  bg-[#FC8019]
                  p-4 text-left text-white
                  sm:w-46
                "
              >
                <FaMapMarkerAlt size={13} />

                <p className="mt-3 text-[9px] leading-4">
                  Dno. 12-34-12, YC Apartments, DOOR
                  Colony, Hyderabad, Telangana
                </p>
              </button>

              {/* ADD ADDRESS */}
              <button
                className="
                  w-full rounded-md
                  border border-dashed border-[#FC8019]
                  p-4 text-left
                  sm:w-46
                "
              >
                <FaMapMarkerAlt
                  size={13}
                  className="text-gray-500"
                />

                <p className="mt-3 text-[9px] leading-4 text-gray-600">
                  Dno. 12-34-12, YC Apartments, DOOR
                  Colony, Hyderabad, Telangana
                </p>
              </button>
            </div>
          </div>

          {/* TYPE OF ORDER */}
          <div className="mt-8">
            <div className="mb-4 flex items-center gap-2">
              <FaMapMarkerAlt
                size={14}
                className="text-[#FC8019]"
              />

              <h2 className="text-[13px] font-semibold">
                Type of Order
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Subscription", "Schedule Order", "Order Now"].map(
                (type) => (
                  <button
                    key={type}
                    onClick={() => setOrderType(type)}
                    className={`
                      flex items-center gap-2 rounded-md
                      border px-3 py-2
                      text-[9px]
                      ${
                        orderType === type
                          ? "border-[#FC8019] text-[#FC8019]"
                          : "border-gray-300 text-gray-600"
                      }
                    `}
                  >
                    <FaCalendarAlt size={10} />
                    {type}
                  </button>
                )
              )}
            </div>
          </div>

          {/* SUBSCRIPTION OPTIONS */}
          {orderType === "Subscription" && (
            <div className="mt-6 grid grid-cols-1 gap-7 sm:grid-cols-2">
              {/* SUBSCRIPTION TYPE */}
              <div>
                <p className="mb-4 text-[9px] font-medium">
                  Type of subscription ?
                </p>

                <div className="flex gap-6">
                  {["Monthly", "Weekly", "Custom"].map(
                    (type) => (
                      <button
                        key={type}
                        onClick={() => setSubscription(type)}
                        className={`
                          border-b pb-2 text-[9px]
                          ${
                            subscription === type
                              ? "border-[#FC8019] text-[#FC8019]"
                              : "border-gray-400 text-gray-700"
                          }
                        `}
                      >
                        {type}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* PLAN */}
              <div>
                <p className="mb-4 text-[9px] font-medium">
                  What's the plan?
                </p>

                <div className="flex gap-5">
                  {["3-Days/Week", "5-Days/Week"].map(
                    (item) => (
                      <button
                        key={item}
                        onClick={() => setPlan(item)}
                        className={`
                          rounded-md border px-4 py-2 text-[9px]
                          ${
                            plan === item
                              ? "border-[#FC8019] text-[#FC8019]"
                              : "border-gray-500 text-gray-700"
                          }
                        `}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          )}

          {/* DELIVERY TIME + NOTE */}
          <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-[9px] font-medium">
                What time do you want us to deliver?
              </p>

              <div className="flex items-center gap-3 border-b border-gray-400 pb-2 w-fit">
                <FaCalendarAlt
                  size={10}
                  className="text-gray-500"
                />

                <span className="text-[9px] text-gray-500">
                  16:30
                </span>

                <span className="text-[9px] text-[#FC8019]">
                  24 hrs
                </span>
              </div>
            </div>

            <div>
              <p className="mb-4 text-[9px] font-medium">
                Any Note for us?
              </p>

              <textarea
                placeholder="Type you note here"
                className="
                  h-20 w-full max-w-70
                  resize-none rounded-md
                  border border-gray-400
                  p-3 text-[9px]
                  outline-none
                  focus:border-[#FC8019]
                "
              />
            </div>
          </div>
        </section>

        {/* ================= RIGHT / CART ================= */}
        <aside
          className="
            w-full shrink-0
            rounded-md bg-[#f8f8f8]
            p-4
            lg:w-64
          "
        >
          {/* CART HEADER */}
          <div className="flex items-center justify-between">
            <h2 className="text-[13px] font-medium">
              Cart
            </h2>

            <span className="text-[8px] text-gray-600">
              {cart.length} Items
            </span>
          </div>

          {/* CART ITEMS */}
          <div className="mt-6">
            {cart.length === 0 ? (
              <p className="py-5 text-[9px] text-gray-400">
                Your cart is empty
              </p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="mb-6"
                >
                  <p className="text-[8px] text-gray-500">
                    from{" "}
                    <span className="text-[#FC8019]">
                      {item.cuisine || "Restaurant"}
                    </span>
                  </p>

                  <div className="mt-2 flex gap-2">
                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-10 w-10
                        shrink-0 rounded-md
                        object-cover
                      "
                    />

                    {/* DETAILS */}
                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] leading-3">
                        {item.name}
                      </p>

                      <p className="mt-1 text-[8px] text-gray-400">
                        ₹{item.price}
                      </p>
                    </div>

                    {/* QUANTITY */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="text-[11px] text-gray-500"
                      >
                        −
                      </button>

                      <span className="text-[9px]">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="text-[11px] text-gray-500"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* BILL DETAILS */}
          <div className="border-t border-gray-200 pt-4">
            <p className="mb-3 text-[9px] text-gray-500">
              Bill details
            </p>

            <div className="space-y-2 text-[8px]">
              <div className="flex justify-between">
                <span>Item Total</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>

              <div className="flex justify-between">
                <span>Taxes and Charges</span>
                <span>₹{taxes}</span>
              </div>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="mt-5 border-t border-gray-200 pt-4">
            <p className="text-[8px] text-gray-600">
              {subscription} + {plan}
            </p>

            <p className="mt-1 text-[8px] text-gray-600">
              16:30 Delivery time
            </p>
          </div>

          {/* TOTAL DETAILS */}
          <div className="mt-5 border-t border-gray-200 pt-4">
            <div className="flex justify-between text-[8px]">
              <span>Total</span>
              <span>
                ₹{totalBeforeDiscount}
              </span>
            </div>

            <div className="mt-2 flex justify-between text-[8px]">
              <span>Discount</span>
              <span className="text-green-600">
                ₹{discount}
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-[14px] font-semibold">
                Total
              </span>

              <span className="text-[14px] font-semibold">
                ₹{total}
              </span>
            </div>
          </div>

          {/* PAYMENT BUTTON */}
          <button
            disabled={cart.length === 0}
            className="
              mt-6 h-9 w-full
              rounded-md
              bg-[#FC8019]
              text-[9px]
              font-medium text-white
              transition
              hover:bg-[#e87513]
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            Proceed To Payment
          </button>
        </aside>
      </main>
    </div>

    <Footer/>
    </div>
  );
}