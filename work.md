<main className="mx-auto max-w-300 px-7 pt-16 pb-20">

  <div className="flex min-h-125">

    {/* =========================================
        LEFT MENU CATEGORY
    ========================================= */}
    <aside className="w-40 shrink-0 border-r border-gray-300 pr-5">

      <h2 className="mb-4 text-[10px] font-medium text-[#FC8019]">
        Recommended
      </h2>

      <div className="space-y-3">

        <button className="block w-full text-left text-[10px] text-gray-600 hover:text-[#FC8019]">
          Breakfast Box
        </button>

        <button className="block w-full text-left text-[10px] text-gray-600 hover:text-[#FC8019]">
          Lunch Box
        </button>

        <button className="block w-full text-left text-[10px] text-gray-600 hover:text-[#FC8019]">
          Combo Box
        </button>

        <button className="block w-full text-left text-[10px] text-gray-600 hover:text-[#FC8019]">
          Biriyani Box
        </button>

      </div>

    </aside>


    {/* =========================================
        MIDDLE - FOOD / RECOMMENDED
    ========================================= */}
    <section className="flex-1 px-8">

      <div className="flex items-start justify-between">

        {/* FOOD INFORMATION */}
        <div className="max-w-90">

          <h2 className="text-[12px] font-medium text-[#202020]">
            {recipesItem.name}
          </h2>

          <p className="mt-3 text-[10px] font-medium text-black">
            ₹200
          </p>

          <p className="mt-3 text-[9px] leading-4 text-gray-400">
            {recipesItem.description}
          </p>

        </div>


        {/* FOOD IMAGE + ADD BUTTON */}
        <div className="relative mr-5">

          <img
            src={recipesItem.image}
            alt={recipesItem.name}
            className="h-20 w-20 rounded-lg object-cover"
          />

          <button
            onClick={() => addToCart(recipe)}
            className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-md bg-white px-4 py-2 text-[9px] font-medium text-[#FC8019] shadow-md hover:bg-[#FC8019] hover:text-white"
          >
            
            <FaPlus size={7}/>
            Add +
          </button>

        </div>

      </div>


      {/* INGREDIENTS */}
      <div className="mt-12">

        <h2 className="text-[12px] font-medium">
          Ingredients
        </h2>

        <div className="mt-3 space-y-2">

          {recipe.ingredients?.slice(0, 5).map(
            (ingredient, index) => (
              <p
                key={index}
                className="text-[9px] text-gray-400"
              >
                • {ingredient}
              </p>
            )
          )}

        </div>

      </div>

    </section>


    {/* =========================================
        RIGHT - CART
    ========================================= */}
    <aside className="w-70 shrink-0">

      {/* CART HEADER */}
      <div className="flex items-center justify-between">

        <h2 className="text-[14px] font-medium text-[#202020]">
          Cart
        </h2>

        <span className="text-[9px] text-gray-500">
          {cart.reduce(
            (total, item) => total + item.quantity,
            0
          )}{" "}
          Items
        </span>

      </div>


      {/* CART CONTENT */}
      <div className="mt-7">

        {cart.length === 0 ? (

          <p className="text-[10px] text-gray-400">
            Your cart is empty
          </p>

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
                  {item.cuisine}
                </span>
              </p>


              {/* ITEM */}
              <div className="mt-2 flex items-start justify-between">

                <div className="flex gap-3">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 rounded-md object-cover"
                  />

                  <div className="max-w-30">

                    <p className="text-[10px] leading-4 text-[#202020]">
                      {item.name}
                    </p>

                    <p className="mt-1 text-[9px] text-gray-400">
                      ₹{item.price}
                    </p>

                  </div>

                </div>


                {/* QUANTITY */}
                <div className="flex items-center gap-2">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    className="text-[11px] text-gray-500 hover:text-[#FC8019]"
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
                    className="text-[11px] text-gray-500 hover:text-[#FC8019]"
                  >
                    +
                  </button>

                </div>

              </div>

            </div>

          ))

        )}

      </div>


      {/* =========================================
          SUBTOTAL
      ========================================= */}
      <div className="mt-10 border-t border-gray-100 pt-5">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-[13px] font-medium">
              Subtotal
            </h2>

            <p className="mt-1 text-[8px] text-gray-400">
              Extra charges may apply
            </p>

          </div>

          <span className="text-[13px] font-medium">
            ₹{subtotal}
          </span>

        </div>


        {/* CHECKOUT */}
        <button
          disabled={cart.length === 0}
          className="mt-5 h-[34px] w-full rounded-md bg-[#FC8019] text-[11px] font-medium text-white transition hover:bg-[#e87513] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Checkout
        </button>

      </div>

    </aside>

  </div>

</main>