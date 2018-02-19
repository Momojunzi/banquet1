import React, {Component} from 'react';

class Thanks extends Component {

  render() {
    const thanksStyle = {
      height: this.props.state.thanksHeight,
      opacity: this.props.state.thanksOpacity,
      transition: this.props.state.transitionIn,
      border: "solid black 1px",
      backgroundColor: "white",
      paddingTop: "20px",
      borderRadius: "2.5%"
    }
    return(
      <div style={thanksStyle} className="row justify-content-center">
        <h1 className="textCenter">Thanks</h1>
        <h3 className="textCenter">For Taking The Time to Fill Out The Survey!</h3>
        <p className="textCenter">I Look forward to seeing you at the banquet!</p>
      </div>
    )
  }
}

export default Thanks;
