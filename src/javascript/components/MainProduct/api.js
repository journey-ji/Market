const getProductsAPI = async () => {
  //https://openmarket.weniv.co.kr/products/
  try {
    const res = await fetch("https://openmarket.weniv.co.kr/products/", {
      method: "GET",
    });
    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  } catch (err) {
    console.err(err);
    return null;
  }
};

export default getProductsAPI;
