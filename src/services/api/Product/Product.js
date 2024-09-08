export const getSearchProduct = async (value) => {
  const url = "http://localhost:5000/api";

  try {
    const response = await fetch(
      `${url}/products?productinfo.productname=${value}`
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
