import { Component } from "../../core/index.js";

class OptionSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listShow: false,
    };
  }
  onClickSelectButton() {
    const listShowState = !this.state.listShow;
    this.setState({ listShow: listShowState });
  }
  render() {
    const optionSelectContainer = document.createElement("div");
    optionSelectContainer.setAttribute("class", "selectbox");

    const optionButton = document.createElement("button");
    optionButton.setAttribute("class", "option-btn");
    optionButton.type = "button";
    optionButton.innerText = "옵션을 선택하세요.";
    optionButton.addEventListener("click", this.onClickSelectButton.bind(this));

    const optionList = document.createElement("ul");
    // listShow 가 참이냐 거짓이냐
    if (this.state.listShow) {
      optionList.setAttribute("class", "on");
    }

    this.props.option.forEach((option) => {
      const optionItem = document.createElement("li");
      const additionalFee =
        option.additionalFee > 0 ? `(+${option.additionalFee}원)` : "";
      optionItem.innerText = `${option.optionName} ${additionalFee}`;
      optionList.append(optionItem);
    });

    optionSelectContainer.append(optionButton, optionList);

    return optionSelectContainer;
  }
}
export default OptionSelector;
