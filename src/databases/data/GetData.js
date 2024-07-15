/* eslint-disable no-unused-vars */
import ProductsData from "./ProductsData.json" with { type: "json" };

export default async function GetData() {
  return await new Promise((resolve, reject) => {
    try {
      resolve(ProductsData);
    } catch (error) {
      reject(error);
    }
  });
}
