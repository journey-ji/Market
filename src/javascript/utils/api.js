export const idCheckAPI = async (id) => {
  console.log(id);
  const response = await fetch(
    `https://openmarket.weniv.co.kr/accounts/signup/valid/username/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: id,
      }),
    }
  );

  return response.json();
};
