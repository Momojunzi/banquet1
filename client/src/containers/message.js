import React, {Component} from 'react';
import {Video, CloudinaryContext} from 'cloudinary-react';

class Message extends Component {
  render() {

    const vidDivStyle = {
      display: this.props.state.vidDisplay
    }

    const vidStyle = {

      border:"solid black 1px",
      backgroundColor: "white"
    }
    return (
      <div style={vidDivStyle} className="embed-responsive embed-responsive-16by9">
        <video controls style={vidStyle} className="embed-responsive-item" onEnded={this.props.endHandler}>
          <source src="https://res.cloudinary.com/momojunzi/video/upload/ac_aac,af_48000,c_fit,h_480,vs_30s,w_640/v1518662857/banquet1_dqnmb6.mp4" type="video/mp4"/>
          <source src="http://res.cloudinary.com/momojunzi/video/upload/v1518662881/banquet1_bttayb.webm" type="video/webm"/>
        </video>
      </div>
    )
  }
}

export default Message;
