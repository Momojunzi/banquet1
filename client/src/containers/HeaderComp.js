import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Questions from "./questions.js";
import Results from "./Results.js";

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
      backgroundSize: "cover",
      transition: "background-image 3000ms",
      minHeight: "100vh"
    }
    return(
      <div className="container-fluid" style={headerStyle}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Questions}/>
              <Route exact path="/results" component={Results}/>
            </Switch>
          </div>
        </Router>


      </div>
    )
  }

}

export default HeaderComp;
