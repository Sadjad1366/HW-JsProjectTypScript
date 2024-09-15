//======================================================================  import ==============================================================

import {
  getProductsItemRequest,
} from "../apis/services/sneakers.service";

//============================================= variables ===================================
let productDiv = document.getElementById("allProductsId");
let count = 0;
let totalPrice = 0;
const id = new URLSearchParams(window.location.search).get("id");
// console.log("id",id);


  const response = await getProductsItemRequest(id);
const size = response.sizes.split("|");
const color = await response.colors.split("|");
const productContainer = document.getElementById("productDetailContainerId") as HTMLDivElement

// console.log(color);
// console.log(color[0]);
// console.log(color[1]);
// console.log(color[2]);
// console.log(color[3]);
// console.log(color[4]);
// console.log(response.sizes.split("|")[0]);

productContainer.innerHTML = `
        <div class="w-full flex flex-col overflow-x-hidden">
      <!-- shoe photo ------------------------------------------------------------- -->
      <div class="relative">
      <img src="${response.imageURL}" alt="singleshoe" />
         <div id="iconId" class="w-full top-4 left-4 absolute">
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.9998 7.00029C15.9998 7.2655 15.8945 7.51986 15.7069 7.70739C15.5194 7.89493 15.2651 8.00029 14.9998 8.00029H3.41383L7.70783 12.2923C7.80081 12.3853 7.87456 12.4956 7.92488 12.6171C7.9752 12.7386 8.0011 12.8688 8.0011 13.0003C8.0011 13.1318 7.9752 13.262 7.92488 13.3835C7.87456 13.5049 7.80081 13.6153 7.70783 13.7083C7.61486 13.8013 7.50448 13.875 7.383 13.9253C7.26152 13.9757 7.13132 14.0015 6.99983 14.0015C6.86835 14.0015 6.73815 13.9757 6.61667 13.9253C6.49519 13.875 6.38481 13.8013 6.29183 13.7083L0.291834 7.70829C0.198708 7.6154 0.124822 7.50504 0.074409 7.38355C0.0239961 7.26206 -0.00195313 7.13182 -0.00195312 7.00029C-0.00195313 6.86875 0.0239961 6.73851 0.074409 6.61702C0.124822 6.49553 0.198708 6.38518 0.291834 6.29229L6.29183 0.292287C6.47961 0.104514 6.73428 -0.000976562 6.99983 -0.000976562C7.26539 -0.000976562 7.52006 0.104514 7.70783 0.292287C7.89561 0.48006 8.0011 0.734735 8.0011 1.00029C8.0011 1.26584 7.89561 1.52051 7.70783 1.70829L3.41383 6.00029H14.9998C15.2651 6.00029 15.5194 6.10564 15.7069 6.29318C15.8945 6.48072 15.9998 6.73507 15.9998 7.00029Z"
            fill="black"
          />
        </svg>
      </div>
      </div>
      <!-- shoe name --------------------------------------------------- -->
      <div class="w-full flex justify-between px-4 pt-4 pb-2">
        <h2 class="font-bold text-[25px] line-clamp-2">${response.name}</h2>
        <div class="py-2">
        <svg
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4.12201L10.9245 3.01651C8.39996 0.421512 3.77096 1.31701 2.09996 4.57951C1.31546 6.11401 1.13846 8.32951 2.57096 11.157C3.95096 13.8795 6.82196 17.1405 12 20.6925C17.178 17.1405 20.0475 13.8795 21.429 11.157C22.8615 8.32801 22.686 6.11401 21.9 4.57951C20.229 1.31701 15.6 0.420012 13.0755 3.01501L12 4.12201ZM12 22.5C-10.9995 7.30201 4.91846 -4.55999 11.736 1.71451C11.826 1.79701 11.9145 1.88251 12 1.97101C12.0846 1.88259 12.1727 1.79753 12.264 1.71601C19.08 -4.56299 34.9995 7.30051 12 22.5Z"
            fill="#212529"
          />
        </svg>
        </div>
      </div>
      <div class="w-full flex justify-start py-0 px-2">
        <div>
          <p class=" px-8 p-2 rounded-[10px] font-semibold bg-slate-200">
            3456 sold
          </p>
        </div>
           <img class="w-[19px] h-[19px] ml-3 mt-[10px]" src="../images/star-half-filled.png" alt="star" />
        <p class="text-gray-500 px-4 pt-2 rounded-[10px]">4.3 (5,389 reviews)</p>
        <hr />
      </div>
      <hr class="my-1 mx-2" />
      <!-- Description--------------------------------------------------------------------------------------- -->
      <h2 class="font-semibold text-[22px] px-3">Description</h2>
      <p class="mx-2 p-1 line-clamp-2 text-slate-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni enim,
        error nam sapiente pariatur fuga quam optio accusamus vero numquam quia
        dolorem aliquid nihil eum vel mollitia minima natus cum!fgdgdgdg
      </p>
      <!-- Size-Color------------------------------------------------------------------ -->
            <!-- Size---------------------------- -->

      <div class="flex mt-1">
        <div>
          <h2 class="font-semibold text-[22px] px-3">Size</h2>
          <div id="sizeDivId" class="flex">
            <div
              class="size w-full h-[42px] px-2 mx-1 my-3 font-normal text-neutral-400 border-4 rounded-full flex justify-center items-center"
            >
              ${size[0]}
            </div>
            <div
              class="size w-full h-[42px] px-2 mx-1 my-3 font-normal text-neutral-400 border-4 rounded-full flex justify-center items-center"
            >
              ${size[1]}
            </div>
            <div
              class="size w-full h-[42px] px-2 mx-1 my-3 font-normal text-neutral-400 border-4  rounded-full flex justify-center items-center"
            >
               ${size[2]}
            </div>
          </div>
        </div>
            <!-- Color---------------------------- -->
        <div class="w-full px-5 overflow-y-scroll no-scrollbar">
          <h2 class="font-semibold text-[22px] px-3">Color</h2>
          <div id="colorDivId" class="w-full colors flex p-0">
            <div
              class="w-full h-[42px] px-2 mx-1 my-3 font-normal bg-[${color[0]}] border border-black rounded-full flex justify-between items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                class="size-6 text-white w-[24px] h-[24px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
            <div
              class="w-full h-[42px] px-5 mx-1 my-3 font-normal bg-[${color[1]}] border border-black rounded-full flex justify-center items-center"
            ></div>
            <div
              class="w-full h-[42px] px-5 mx-1 my-3 font-normal bg-[${color[2]}] border border-black  rounded-full flex justify-center items-center"
            ></div>
            <div
              class="w-full h-[42px] px-5 mx-1 my-3 font-normal bg-[${color[3]}] border border-black rounded-full flex justify-center items-center"
            ></div>
            <div
              class="w-full h-[42px] px-5 mx-1 my-3 font-normal bg-[${color[4]}] border border-black rounded-full flex justify-center items-center"
            ></div>
          </div>
        </div>
      </div>
      <!-- quantity------------------------------------------------------------------- -->
      <div class="w-full flex pt-0 px-2 my-3 items-center">
        <h2 class="font-semibold text-[22px] px-1">Quantity</h2>
        <div class="w-[55%] h-[50px] ml-2 py-0 bg-slate-300 flex items-center rounded-full">
          <button class="minus w-full text-[40px] px-4 pb-2">-</button>
          <input
          id="countInputId"
            class="w-full h-[50px] font-semibold text-[30px] border-none bg-slate-300"
            type="text"
          />
          <button class="plus w-full text-[40px] px-4 pb-2">+</button>
        </div>
      </div>
      <hr class="mt-1 mb-1 px-2" />
      <!-- final price and ADD to card---------------------------------------- -------------->
      <div class="flex justify-between px-2 my-2">
        <div class=" flex flex-col">
          <p class="text-gray-500 text-base">Total price</p>
          <p id="priceId" class="font-bold text-[20px] mt-2"></p>
        </div>
        <div
          class="w-[70%] py-4 bg-black rounded-full flex justify-center items-center text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <p class=" text-white font-medium text-[18px] px-5">Add to card</p>
        </div>
      </div>
    </div>
    `;


//================================================================== PLUS & MINUS FUNCTIONS ==============================================
//==============================   plus ==========================
function plusFunc() {
  let quantityInput = document.getElementById("countInputId");
  let price = document.getElementById("priceId");

  const plusBtn: = document.querySelector(".plus");
  plusBtn.addEventListener("click", function (event) {
    count++;
    quantityInput.value = count;
    totalPrice = (quantityInput.value) *(response.price);
    price.innerHTML = `$${totalPrice}`;
    console.log(totalPrice);
  });
}

//============================================ minus =============================
function minusFunc() {
  let quantityInput = document.getElementById("countInputId");
  let price = document.getElementById("priceId");
  const minusBtn = document.querySelector(".minus");
  minusBtn.addEventListener("click", function (event) {
    if (quantityInput.value > 0) {
      count--;
      quantityInput.value = count;
      totalPrice = quantityInput.value * response.price;
      price.innerHTML = `$${totalPrice}`;
      console.log(totalPrice);
    }
  });
}
plusFunc();
minusFunc();
// =============================================================== SIZE CLICK HANDLER ===========================================================
function sizeClickChanger() {
  //==============================
  // Select all size elements
  const sizeElements = document.querySelectorAll("#sizeDivId .size");

  sizeElements.forEach((sizeElement) => {
    sizeElement.addEventListener("click", function () {
      sizeElements.forEach((element) =>
        element.classList.remove("selected-size")
      );

      this.classList.add("selected-size");
    });
  });
}
sizeClickChanger();
// =============================================================== SIZE CLICK HANDLER ===========================================================
function colorClickChanger() {
  const colorElements = document.querySelectorAll("#colorDivId > div");
  const tickIcon = document.querySelector("#colorDivId svg");

  colorElements.forEach((colorElement) => {
    colorElement.addEventListener("click", function () {
      colorElements.forEach((element) => {
        element.classList.remove("selected-color");
        element.innerHTML = "";
      });
      this.appendChild(tickIcon);
    });
  });
}
colorClickChanger();
// =============================================================== BACKWARD ARROW HANDLER ===========================================================

document.getElementById("iconId").addEventListener("click",function(){
  window.location.href="/home"
})
