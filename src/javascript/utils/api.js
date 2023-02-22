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

export const sellerChkAPI = async (regiNumber) => {
  const response = await fetch(
    `https://openmarket.weniv.co.kr/accounts/signup/valid/company_registration_number/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company_registration_number: regiNumber,
      }),
    }
  );

  return response.json();
};

export const signupAPI = async (props) => {
  console.log(props);
  const response = await fetch(
    `https://openmarket.weniv.co.kr/accounts/signup/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: props.username, // 아이디
        password: props.password,
        password2: props.password2,
        phone_number: props.phone_number,
        name: props.name,
      }),
    }
  );
  return response.json();
};

export const signupSellerAPI = async (props) => {
  console.log(props);
  const response = await fetch(
    `https://openmarket.weniv.co.kr/accounts/signup_seller/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: props.username, // 아이디
        password: props.password,
        password2: props.password2,
        phone_number: props.phone_number,
        name: props.name,
        company_registration_number: props.company_registration_number,
        store_name: props.store_name,
      }),
    }
  );
  return response.json();
};

export const loginAPI = async (props) => {
  const response = await fetch(
    `https://openmarket.weniv.co.kr/accounts/login/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: props.username, // 아이디
        password: props.password,
        login_type: props.login_type,
      }),
    }
  );
  return response.json();
};
