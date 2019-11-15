import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
  state = { level: 500 };

  changeLevel = level => {
    this.setState({ level });
  };

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;

    const ColorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>

        {/* navbar will go here */}
        <div className="Palette-colors">{ColorBoxes}</div>
        {/* footer will go here */}
      </div>
    );
  }
}

export default Palette;
