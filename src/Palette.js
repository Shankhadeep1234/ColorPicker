import React, { Component } from "react";

import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
  state = { level: 500, format: "hex" };

  changeLevel = level => {
    this.setState({ level });
  };

  changeFormat = val => {
    this.setState({ format: val });
  };

  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;

    const ColorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        {/* navbar will go here */}
        <div className="Palette-colors">{ColorBoxes}</div>
        {/* footer will go here */}
      </div>
    );
  }
}

export default Palette;
