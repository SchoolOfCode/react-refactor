import React, { Component } from "react";

import css from "./Toggle.module.css";

class Toggle extends Component {
  render() {
    const { isOn, handleClick } = this.props;
    return (
      <div
        className={`${css.container} ${isOn ? css.active : ""}`}
        onClick={handleClick}
      >
        <div className={css.switch} />
      </div>
    );
  }
}

export default Toggle;
