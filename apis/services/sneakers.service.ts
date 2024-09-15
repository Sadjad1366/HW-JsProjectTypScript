import { httpClient } from "../client";
import { urls } from "../urls";

interface GetProductsResponse{
  "total": number,
  "totalPages": number,
  "page": number,
  "perPage": number,
  "data": [
    {
      "id": number,
      "pid": number,
      "name": string,
      "imageURL": string,
      "colors": string,
      "sizes": string,
      "price": number,
      "category": string,
      "gender": string,
      "brand": string
    },
  ]
}

// interface BrandsResponse{
//   brands:[string]
// }
export async function getProductsRequest(page:number, brand?:string, search?:string, limit:number = 10):Promise<GetProductsResponse> {
  const response = await httpClient().get(urls.sneaker.product, {
    params: {
      page: page,
      limit: limit,
      brands: brand,
      search: search,
    },
  });
  return response.data as GetProductsResponse;
}
export async function getBrandsRequest():Promise<string[]> {
  const response = await httpClient().get(urls.sneaker.brand);
  return response.data as string[];
}

export async function getProductsItemRequest(id:string) {
  const response = await httpClient().get(`${urls.sneaker.detail}${id}`);
  return response.data;
}
