const getProductsAPI = async (page) => {
  //https://openmarket.weniv.co.kr/products/
  try {
    const res = await fetch(
      `https://openmarket.weniv.co.kr/products/?page=${page}`,
      {
        method: "GET",
      }
    );
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.err(err);
    return null;
  }
};

export default getProductsAPI;
