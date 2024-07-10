const SearchData = async ({ value, storeValue }) => {
  const url = "http://localhost:5000";

  try {
    const response = await fetch(`${url}/products/search?term=${value}`);
    const products = await response.json();
    storeValue(products);
  } catch (error) {
    console.error("Search Error:", error);
    storeValue([]);
  }
};

export default SearchData;
