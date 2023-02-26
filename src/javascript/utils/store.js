import { observable } from '../core/observer.js'

export const store = {

  state: observable({
    isLogin:false,
    isSeller:false,
  }),
  setState (newState) {
    for (const [key, value] of Object.entries(newState)) {
        this.state[key] = value;
    }
  }
}
// 해당 값인것만 바꾸고 아닌것은 내버려둬야해
// 