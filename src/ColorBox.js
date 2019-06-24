import React, { Component } from 'react';

export default class ColorBox extends Component {

  /*
  produceOutput = () => {
    if (this.props.opacity >= 0.2) {
      return <ColorBox opacity={this.props.opacity - 0.1} />
    }
  }*/

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {/* I like this format best*/}
        {(() => {
          if (this.props.opacity >= 0.2) {
            return <ColorBox opacity={this.props.opacity - 0.1} />
          }
        })() /* <-- it's an IIFE */}

        {/* You also could put it in a separate method */}
        {/*this.produceOutput()*/}

        {/* The solution branch used a ternary operator, which works, but I
            dislike how it makes you use null.  I think an `if` with no `else`
            is the most human-comprehensible way to write this, plus it keeps us
            within an 80-character line width.
        */}
        {/*this.props.opacity >= 0.2 ?  <ColorBox opacity={/*this.props.opacity - 0.1*/} /> : null*/}
      </div>
    )
  }

}
