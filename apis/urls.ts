interface UrlPaths {
  auth: {
    login: string;
    signup: string;
  };
  user: string;
  sneaker: {
    product: string;
    brand: string;
    detail: string;
  };
}
export const urls : UrlPaths = {
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
  },
  user: "/user",
  sneaker: {
    product: "/sneaker",
    brand: "/sneaker/brands",
    detail: "/sneaker/item/",
  },
};
