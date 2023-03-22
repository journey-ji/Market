namespace 네임1 {
  export type Dog = string;
}
namespace 네임2 {
  export interface Dog {
    name: string;
  }
}

let dog1: 네임1.Dog = "bark";
let dog2: 네임2.Dog = { name: "paw" };
