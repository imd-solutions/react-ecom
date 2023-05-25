import axios from "../utilities/axios";

const ProductService = {
  async getAllProducts() {
    const products = await axios.get("/products");
    return products;
  },

  async getProduct(id: number) {
    const products = await axios.get(`/products?id=${id}`);
    return products;
  },

  async getNewProducts() {
    const newProducts = await axios.get("/products?new=true");
    return newProducts;
  },
};

export default ProductService;
