//======================================================================  import ==============================================================
import { getUserInfo } from "../apis/services/user.service";
// import { errorHandler } from "../libs/error-handler";
import {
  getBrandsRequest,
  getProductsRequest,
} from "../apis/services/sneakers.service";
// import { toast } from "../libs/toast";
import { removeSessionToken } from "../libs/session-manager";
//===================================================================== variables ===============================================================
const userName = document.getElementById("userNameId") as HTMLParagraphElement;
const time = document.getElementById("timeId") as HTMLParagraphElement;
const input = document.getElementById("searchInputId") as HTMLInputElement;
const container = document.getElementById("secondContainer") as HTMLDivElement;
const logOutBtn = document.getElementById("logoutId") as HTMLButtonElement;
const products = document.getElementById("allProductsId") as HTMLDivElement;
const brandsDiv = document.getElementById("brandsId") as HTMLDivElement;

interface product {
  id: number;
  pid: number;
  name: string;
  imageURL: string;
  colors: string;
  sizes: string;
  price: number;
  category: string;
  gender: string;
  brand: string;
}
//===================================================================== username & time =========================================================
const d: Date = new Date();
let brand: string | undefined = undefined;
let searchFlag = input.value;
async function setUserName() {
  try {
    const response = await getUserInfo();
    userName.innerText = response.username;
    if (d.getHours() > 0 && d.getHours() < 12) {
      time.innerText = "Good Morning";
    } else if (d.getHours() > 12 && d.getHours() < 18) {
      time.innerText = "Good Afternoon";
    } else {
      time.innerText = "Good Evening";
    }
  } catch (error) {
    // errorHandler(error);
    console.log(error);
  }
  
}
setUserName();
//========================================================================== LOG OUT ========================================================================
logOutBtn.addEventListener("click", function () {
  removeSessionToken();
  window.location.href = "/";
  console.log("you Logged out");
});
//=========================================================================== get products function ==========================================================
export async function getAllProducts(page: number = 1, brand?: string) {
  try {
    const response = await getProductsRequest(page, brand); //get the response of request to get the products
    const result = response.data; // get the array of products
    // if (brand) {
    //   const filterResult = result.filter((el) => el.brand === brand);
    //   renderSneaker(filterResult);
    // } else {
    renderSneaker(result);
    // }
    pagination(response.totalPages, page); // Pass the current page number to pagination
  } catch (error) {
    // errorHandler(error);
    console.log(error);
  }
}
getAllProducts(1);
//==================================================== sneaker generator
function sneakerGenerator(product: product) {
  return `
        <a href="/productdetail?id=${product.id}" class="item w-full flex flex-col px-1 py-1 my-1 " data-id="${product.id}">

          <img class="rounded-xl w-[182px] h-[162px]" src="${product.imageURL}" alt="${product.brand}" />
          <h2 class="w-full max-w-[142px] h-[19px] font-bold truncate">${product.name}</h2>
          <h3 class="w-[88px] h-[19px] font-semibold">$${product.price}</h3>
        </a>`;
}
//=============================================== render function
async function renderSneaker(list: product[]) {
  products.innerHTML = list.map((el) => sneakerGenerator(el)).join(" ");
}
//================================================ pagination ===========================================================
function pagination(perPage: number, currentPage?: number) {
  const paginationDiv = document.getElementById("pagination") as HTMLDivElement;
  paginationDiv.innerHTML = "";
  for (let i = 1; i <= perPage; i++) {
    const button = document.createElement("button") as HTMLButtonElement;
    button.className =
      "w-10 flex justify-center border-2 mx-1 px-4 py-2 cursor-pointer";
    if (i === currentPage) {
      button.classList.add("bg-black", "text-white");
    }
    button.textContent = String(i);
    button.addEventListener("click", (event) => {
      if (searchFlag) {
        search(i); // Pass the current page number to the search function
      } else {
        getAllProducts(i, brand);
      }
    });
    paginationDiv.appendChild(button);
  }
}
//============================================================== get brands function ==========================================
async function getAllBrands() {
  try {
    const response = await getBrandsRequest(); //getproducts is an axios request
    console.log(response);

    renderBrands(response);
    brandBtn();
  } catch (error) {
    // errorHandler(error);
    console.log(error);
  }
}
getAllBrands();

//======================================= brand generator
function brandGenerator(product: string) {
  return `
         <button
          class="w-full mx-1 h-[39px] px-5 rounded-full flex justify-center items-center border border-black font-bold text-[10px] " data-id="${product}"
        >
          ${product}
        </button>
        `;
}
//========================================== render brand function
async function renderBrands(list: string[]) {
  let html = "";
  // for (let i = 0; i < list.length; i++) {
  //   html += brandGenerator(list[i]);
  // }
  for (const el of list) {
    html += brandGenerator(el);
  }
  brandsDiv.innerHTML += html;
}
//============================== brand filter handler function =====================================================
async function brandBtn() {
  try {
    const allBrands = brandsDiv.children;
    // console.log(allBrands);

    for (let i = 0; i < allBrands.length; i++) {
      allBrands[i].addEventListener("click", async function (event) {
        const items = document.querySelector(".bg-black");
        // console.log(items);
        const target = event.target as HTMLDivElement;
        if (items) {
          items.classList.remove("bg-black");
          items.classList.remove("text-white");
          target.classList.add("bg-black");
          target.classList.add("text-white");
        }

        let dataSetValue = target.dataset.id;
        brand = dataSetValue;
        if (dataSetValue === "All") {
          const response = await getProductsRequest(1);
          const result = response.data;
          console.log("response", result);
          renderSneaker(result);
          pagination(response.totalPages);
        } else {
          const response = await getProductsRequest(1, dataSetValue);
          const result = response.data;
          console.log("response", result);
          renderSneaker(result);
          pagination(response.totalPages);
        }
      });
    }
  } catch (error) {
    // errorHandler(error);
    console.log(error);
  }
}

//==================================== search function ============================================================
async function search(page = 1, brand?: string) {
  input.addEventListener("change", async function (event) {
    let x = String(input.value).toUpperCase();
    try {
      const response = await getProductsRequest(page, undefined, x);
      console.log("res", response);

      const result = response.data;
      console.log("research", result);
      if (result.length) {
        // toast("search Completed", "success");
        setTimeout(() => {
          renderSneaker(result);
        }, 2000);
        pagination(response.totalPages); // Pass the current page number to pagination
      } else {
        container.innerHTML = `
          <div class="w-full h-[40px] flex justify-between px-3 my-6">
            <h2 id="resultFound">Result for "${x}"</h2>
            <h2 id="resultFound">"0 founds"</h2>
          </div>
          <img src="./images/NotFoundError.png" alt="">
        `;
        search(page); // Pass the current page number to search recursively
        renderSneaker(result);
      }
    } catch (error) {
      // errorHandler(error);
      console.log(error);
    }
  });
}
search();
// function debounce(func, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// async function search(page = 1) {
//   const debouncedSearch = debounce(async function (event) {
//     let x = String(input.value).toUpperCase();
//     try {
//       const response = await getProductsRequest(page, undefined, x);
//       const result = response.data;
//       console.log("research", result);
//       if (result.length) {
//         container.innerHTML = ""; // Clear previous search results
//         renderSneaker(result);
//         pagination(response.totalPages, page);
//       } else {
//         container.innerHTML = `
//           <div class="w-full h-[40px] flex justify-between px-3 my-6">
//             <h2 id="resultFound">Result for "${x}"</h2>
//             <h2 id="resultFound">"0 founds"</h2>
//           </div>
//           <img src="./images/NotFoundError.png" alt="">
//         `;
//         pagination(0, page); // Pass 0 as totalPages to hide pagination
//       }
//     } catch (error) {
//       errorHandler(error);
//     }
//   }, 300); // Adjust the delay (in milliseconds) as needed

//   input.addEventListener("input", debouncedSearch);
// }
