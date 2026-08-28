import { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

import { useCart } from "./CartContext";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Checkout() {
  const { cart, increaseQuantity, decreaseQuantity, subtotal } = useCart();

  const [orderType, setOrderType] = useState("Subscription");

  const [subscription, setSubscription] = useState("Monthly");

  const [plan, setPlan] = useState("3-Days/Week");

  const [deliveryDate, setDeliveryDate] = useState("");

  const [deliveryTime, setDeliveryTime] = useState("");

  const [note, setNote] = useState("");


  const deliveryFee = 131;
  const taxes = 20;
  const discount = 400;

  const totalBeforeDiscount = Number(subtotal) + deliveryFee + taxes;

  const total = totalBeforeDiscount - discount;


  const handleOrderType = (type) => {
    setOrderType(type);

    if (type !== "Schedule Order") {
      setDeliveryDate("");
      setDeliveryTime("");
    }
  };


  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (orderType === "Schedule Order") {
      if (!deliveryDate) {
        alert("Please select a delivery date.");
        return;
      }

      if (!deliveryTime) {
        alert("Please select a delivery time.");
        return;
      }
    }

    alert(`Payment of $${total} is Successful`);
  };


  const formattedDate = deliveryDate
    ? new Date(`${deliveryDate}T00:00:00`).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-white text-[#202020]">
      <NavBar />

      <div className="px-5 py-5">

        <header className="mx-auto max-w-300 border-b border-gray-300 pb-3">
          <h1 className="text-[16px] font-semibold">Secure Checkout</h1>
        </header>

        <main className="mx-auto flex max-w-300 flex-col gap-8 py-7 lg:flex-row">

          <section className="min-w-0 flex-1">

            <div>
              <div className="mb-4 flex items-center gap-2">
                <FaMapMarkerAlt size={14} className="text-[#FC8019]" />

                <h2 className="text-[17px] font-semibold">Delivery address</h2>
              </div>

              <div className="flex flex-wrap gap-4">

                <button
                  className="
                    w-full
                    rounded-md
                    border
                    hover:bg-[#FC8019]
                    border-[#FC8019]
                    border-dashed
                    p-4
                    text-left
                    text-white
                    sm:h-50
                    sm:w-64
                  "
                >
                  <FaMapMarkerAlt size={13} className="text-gray-500 " />

                  <p className="mt-3 text-[14px] text-gray-500 leading-5">
                    Dno. 12-34-12, YC Apartments, DOOR Colony, Hyderabad,
                    Telangana
                  </p>
                </button>

                <button
                  className="
                    w-full
                    rounded-md
                    hover:bg-[#FC8019]
                    border
                    border-dashed
                    border-[#FC8019]
                    p-4
                    text-left
                    sm:h-50
                    sm:w-64
                  "
                >
                  <FaMapMarkerAlt size={13} className="text-gray-500" />

                  <p className="mt-3 text-[14px] leading-5 text-gray-600">
                    Dno. 12-34-12, YC Apartments, DOOR Colony, Hyderabad,
                    Telangana
                  </p>
                </button>
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center gap-2">
                <FaMapMarkerAlt size={14} className="text-[#FC8019]" />

                <h2 className="text-[16px] font-semibold">Type of Order</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Subscription", "Schedule Order", "Order Now"].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleOrderType(type)}
                    className={`
                      flex
                      items-center
                      gap-2
                      rounded-md
                      border
                      px-3
                      py-2
                      text-[15px]
                      transition

                      ${
                        orderType === type
                          ? "border-[#FC8019] text-[#FC8019]"
                          : "border-gray-300 text-gray-600 hover:border-[#FC8019]"
                      }
                    `}
                  >
                    <FaCalendarAlt size={10} />

                    {type}
                  </button>
                ))}
              </div>

              {orderType === "Subscription" && (
                <div className="mt-6 grid grid-cols-1 gap-7 sm:grid-cols-2">

                  <div>
                    <p className="mb-4 text-[15px] font-medium">
                      Type of subscription ?
                    </p>

                    <div className="flex gap-6">
                      {["Monthly", "Weekly", "Custom"].map((type) => (
                        <button
                          key={type}
                          onClick={() => setSubscription(type)}
                          className={`
                            border-b
                            pb-2
                            text-[13px]

                            ${
                              subscription === type
                                ? "border-[#FC8019] text-[#FC8019]"
                                : "border-gray-400 text-gray-700"
                            }
                          `}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-[13px] font-medium">
                      What's the plan?
                    </p>

                    <div className="flex gap-5">
                      {["3-Days/Week", "5-Days/Week"].map((item) => (
                        <button
                          key={item}
                          onClick={() => setPlan(item)}
                          className={`
                            rounded-md
                            border
                            px-4
                            py-2
                            text-[13px]

                            ${
                              plan === item
                                ? "border-[#FC8019] text-[#FC8019]"
                                : "border-gray-500 text-gray-700"
                            }
                          `}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}


              {orderType === "Schedule Order" && (
                <div className="mt-6 grid grid-cols-1 gap-7 sm:grid-cols-2">

                  <div>
                    <p className="mb-4 text-[13px] font-medium">
                      Date of delivery
                    </p>

                    <div
                      className="
                        flex
                        w-full
                        max-w-70
                        items-center
                        gap-3
                        border-b 
                        border-gray-300
                        px-3
                        py-3
                      "
                    >
                      <FaCalendarAlt size={12} className="text-gray-500" />

                      <input
                        type="date"
                        value={deliveryDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        className="
                          w-full
                          bg-transparent
                          text-[12px]
                          text-gray-600
                          outline-none
                        "
                      />
                    </div>
                  </div>


                  <div>
                    <p className="mb-4 text-[13px] font-medium">
                      Time of delivery
                    </p>

                    <div
                      className="
                        flex
                        w-full
                        max-w-70
                        items-center
                        gap-3
                        rounded-md
                        border-b
                        border-gray-300
                        px-3
                        py-3
                      "
                    >
                      <FaClock size={12} className="text-gray-500" />

                      <input
                        type="time"
                        value={deliveryTime}
                        onChange={(e) => setDeliveryTime(e.target.value)}
                        className="
                          w-full
                          bg-transparent
                          text-[12px]
                          text-gray-600
                          outline-none
                        "
                      />
                    </div>
                  </div>
                </div>
              )}

              {orderType === "Order Now" && (
                <div className="mt-6">
                  <p className="text-[12px] text-gray-500">
                    Your order will be prepared and delivered as soon as
                    possible.
                  </p>
                </div>
              )}
            </div>


            <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2">

              <div>
                <p className="mb-4 text-[13px] font-medium">
                  {orderType === "Schedule Order"
                    ? "Scheduled delivery"
                    : "What time do you want us to deliver?"}
                </p>

                {orderType === "Schedule Order" ? (
                  <div className="text-[12px] text-gray-500">
                    {deliveryDate ? (
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt size={11} />

                        <span>{formattedDate}</span>
                      </div>
                    ) : (
                      <p className="text-gray-400">Select a delivery date</p>
                    )}

                    {deliveryTime && (
                      <div className="mt-2 flex items-center gap-2">
                        <FaClock size={11} />

                        <span>{deliveryTime}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex w-fit items-center gap-3 border-b border-gray-400 pb-2">
                    <FaClock size={10} className="text-gray-500" />

                    <span className="text-[16px] text-gray-500">
                      <input type="time" />
                    </span>

                    <span className="text-[12px] text-[#FC8019]">24 hrs</span>
                  </div>
                )}
              </div>

              <div>
                <p className="mb-4 text-[13px] font-medium">Any Note for us?</p>

                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Type your note here"
                  className="
                    h-20
                    w-full
                    max-w-70
                    resize-none
                    rounded-md
                    border
                    border-gray-400
                    p-3
                    text-[12px]
                    outline-none
                  "
                />
              </div>
            </div>
          </section>

          <aside
            className="
              w-full
              shrink-0
              rounded-md
              bg-[#f8f8f8]
              p-4
              lg:w-96
            "
          >
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] font-medium">Cart</h2>

              <span className="text-[13px] text-gray-600">
                {cart.length} Items
              </span>
            </div>

            <div className="mt-6">
              {cart.length === 0 ? (
                <p className="py-5 text-[16px] text-gray-400">
                  Your cart is empty
                </p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="mb-6">
                    <p className="text-[12px] text-gray-500">
                      from{" "}
                      <span className="text-[#FC8019]">
                        {item.cuisine || "Restaurant"}
                      </span>
                    </p>

                    <div className="mt-2 flex gap-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          h-20
                          w-20
                          shrink-0
                          rounded-md
                          object-cover
                        "
                      />

                      <div className="min-w-0 flex-1">
                        <p className="text-[15px] leading-5">{item.name}</p>

                        <p className="mt-1 text-[13px] text-gray-400">
                          ${item.price}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="
                            text-[16px]
                            font-bold
                            text-black
                            hover:text-[#FC8019]
                          "
                        >
                          −
                        </button>

                        <span className="text-[13px]">{item.quantity}</span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="
                            text-[16px]
                            font-bold
                            text-black
                            hover:text-[#FC8019]
                          "
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="mb-3 text-[20px]">Bill details</p>

              <div className="space-y-2 text-[14px]">
                <div className="flex justify-between">
                  <span>Item Total</span>

                  <span>${subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery Fee</span>

                  <span>${deliveryFee}</span>
                </div>

                <div className="flex justify-between">
                  <span>Taxes and Charges</span>

                  <span>${taxes}</span>
                </div>
              </div>
            </div>

            <div className="mt-5 border-t border-gray-200 pt-4">

              {orderType === "Subscription" && (
                <>
                  <p className="text-[12px] text-gray-600">
                    {subscription} + {plan}
                  </p>
                </>
              )}

              {orderType === "Schedule Order" && (
                <>
                  <p className="text-[12px] text-gray-600">Schedule Order</p>

                  <p className="mt-2 text-[13px] text-gray-600">
                    {formattedDate || "Date not selected"}
                  </p>

                  <p className="mt-1 text-[13px] text-gray-600">
                    {deliveryTime || "Time not selected"}
                  </p>
                </>
              )}

              {orderType === "Order Now" && (
                <p className="text-[12px] text-gray-600">Order Now</p>
              )}
            </div>

            <div className="mt-5 border-t border-gray-200 pt-4">
              <div className="flex justify-between text-[14px]">
                <span>Total</span>

                <span>${totalBeforeDiscount}</span>
              </div>

              <div className="mt-2 flex justify-between text-[14px]">
                <span>Discount</span>

                <span className="text-green-600">${discount}</span>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-[20px] font-semibold">Total</span>

                <span className="text-[20px] font-semibold">${total}</span>
              </div>
            </div>

            <button
              disabled={cart.length === 0}
              onClick={handlePayment}
              className="
                mt-6
                h-11
                w-full
                rounded-md
                bg-[#FC8019]
                text-[12px]
                font-medium
                text-white
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

      <Footer />
    </div>
  );
}
