// import { removeSessionToken } from "./session-manager";
// import { toast } from "./toast";

// export const errorHandler = (error) => {
//   const message = error.response?.data?.message;
//   if(typeof message === "string"){
//     toast(message);
//   }else if(Array.isArray(message)){
//     for (const element of message) {
//      toast(element);
//     }
// }
//  const statusCode = Number(error.response?.data?.statusCode || 0);
//  if(statusCode === 403){
//   toast("Please Login Again")
//   removeSessionToken();
//  setTimeout(() => {
//    window.location.href ="/"
//  }, timeout);
//  }
// };
