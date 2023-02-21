export const idCheckAPI = async (id) => {
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

export const signupAPI = async (props) => {
  console.log(props);

  // "username": String, // 아이디
  // "password": String,
  // "password2": String,
  // "phone_number": String, // 전화번호는 010으로 시작하는 10~11자리 숫자
  // "name": String, // 이름
};
