import React, {Component} from "react";
import Questions from "./questions.js";

class HeaderComp extends Component {

  render() {
    const bgurl = process.env.PUBLIC_URL + "/images/" + this.props.bgImage;
    console.log(bgurl);
    const headerStyle = {
      backgroundColor: "rgba(255,255,255,.50)",
      paddingTop: "40px",
      paddingBottom: "40px",
      backgroundImage: "url("+bgurl+")",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "initial",
      transition: "background-image 500ms ease-in-out",
      minHeight: "100vh"
    }
    return(
      <div className="container-fluid" style={headerStyle}>
        <Questions />

      </div>
    )
  }

}

export default HeaderComp;
