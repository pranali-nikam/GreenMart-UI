import axios from "axios";
import config from "../config";

export async function getProducts() {
  const response = await axios.get(`${config.url}/products/add/1`);
  return response.data;
}

export async function getProductDetails(id) {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
}

// Function to handle file upload
export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    "http://localhost:8080/product/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.fileName; // Adjust according to your backend response
};

// Function to create a product
export const addProduct = async (productData, sellerId) => {
  try {
    const response = await axios.post(
      `${config.url}/products/add/${sellerId}`,
      productData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error creating product: " + error.message);
  }
};

export async function getCategories() {
  try {
    const response = await axios.get(`${config.url}/category/getAllCategory`);
    return response.data; // This will be an array of category objects
  } catch (error) {
    throw new Error("Error fetching categories: " + error.message);
  }
}