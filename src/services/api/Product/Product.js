const url = "http://localhost:5000/api";

export const getSearchProduct = async (value) => {
  try {
    const response = await fetch(
      `${url}/products?productinfo.productname=${value.toLocaleUpperCase()}`
    );
    if (!response.ok) {
      throw new Error("The Product that you searching was not fetching");
    }
    const products = await response.json();

    return products;
  } catch (error) {
    console.error(error);
  }
};

export const getAllProduct = async () => {
  try {
    const response = await fetch(`${url}/products`);
    if (!response.ok) {
      throw new Error("The Product that you searching was not fetching");
    }
    const products = await response.json();

    return products;
  } catch (error) {
    console.error(error);
  }
};
