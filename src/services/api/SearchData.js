export default async function SearchData(request) {
  const url = `http://localhost:5000/api/search?search=${request}`;

  try {
    const response = await fetch(url);
    const product = await response.json();
    console.log(product);
  } catch (error) {
    console.error("Search Error:", error);
  }
}
