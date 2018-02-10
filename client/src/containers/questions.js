import React, {Component} from 'react';
import axios from 'axios';

class Questions extends Component {
  state = {
    opacity: "0",
    formDisplay: "none",
    btnDisplay: "",
    height: "0px",
    banquetIdea: {}
  }

  submitFormHandler = (event) => {
    event.preventDefault();
    axios.post('/api/createIdea', this.state.banquetIdea)
      .then(response => console.log(response))
  }

  inputChangeHandler = (event) => {
    const state = this.state;
    const target = event.target;
    const value = target.value;
    const inputName = target.id;
    state.banquetIdea[inputName] = value
    this.setState (state.banquetIdea);
  }

  formHeightHandler = (event) => {
    event.preventDefault();
    const height = '';
    const opacity = "1";
    const btnDisplay = "none";

    this.setState({height, opacity});
    this.setState({btnDisplay});
  }
  render() {
    const questDivStyle = {
      opacity: this.state.opacity,
      height: this.state.height,
      paddingTop: "20px",
      paddingBottom: "20px",
      border: "solid black 1px",
      borderRadius: "2.5%",
      backgroundColor: "rgba(255,255,255,.75)",
      transition: "height 500ms 1000ms, opacity 500ms 500ms"
      }

    const btnStyle = {
      display: this.state.btnDisplay
    }

    const inputStyle = {
      height: this.state.height
    }
    return (
      <div className="container-fluid col-md-6">
        <button onClick={this.formHeightHandler}
                className="btn btn-lg btn-success"
                style={btnStyle}>Expand Form</button>
        <form style={questDivStyle} className="">
          <h2>Agent Event Questionaire</h2>
          <div class="form-group row justify-content-center">
            <div className="col-md-10 text-left" style={inputStyle}>
              <label for="agent">Store Number</label>
              <input onChange={this.inputChangeHandler}
                     type="text" class="form-control" id="agent"
                     aria-describedby="store number"
                     placeholder="Enter location number"
              />
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <div className="col-md-10 text-left" style={inputStyle}>
              <label for="location">Where would you prefer to hold the event?</label>
              <select onChange={this.inputChangeHandler}
                      id="location" class="form-control">
                <option selected>San Francisco</option>
                <option>East Bay</option>
                <option>San Jose</option>
                <option>Peninsula</option>
                <option>North Bay</option>
              </select>
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <div className="col-md-10 text-left" style={inputStyle}>
              <label for="day">What day would you prefer to hold the event?</label>
              <select onChange={this.inputChangeHandler}
                      id="day" class="form-control">
                <option selected>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <div className="col-md-10 text-left" style={inputStyle}>
              <label for="time">What time of day would you prefer to hold the event?</label>
              <select onChange={this.inputChangeHandler}
                      id="time" class="form-control">
                <option selected>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <div className="col-md-10 text-left" style={inputStyle}>
              <label for="month">What month would you prefer to hold the event?</label>
              <select onChange={this.inputChangeHandler}
                      id="month" class="form-control">
                <option selected>March</option>
                <option>April</option>
                <option>May</option>
              </select>
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <div className="col-md-10 text-left" style={inputStyle}>
              <label for="eventType">What type of event would your prefer?</label>
              <select onChange={this.inputChangeHandler}
                      id="eventType" class="form-control">
                <option selected>Sporting event</option>
                <option>Dinner and casino</option>
                <option>Dinner and non gambling games</option>
                <option>Competitive activity like go carts or paintball</option>
              </select>
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <div className="col-md-10 text-left" style={inputStyle}>
              <label for="comment">If you have any other ideas or comments please let me know!</label>
              <textarea onChange={this.inputChangeHandler}
                        id="comment" class="form-control"/>
            </div>
          </div>
          <button onClick={this.submitFormHandler}
                  type="submit" style={inputStyle}
                  class="btn btn-primary row justify-content-center"
          >Submit</button>
        </form>
      </div>
    )
  }
}

export default Questions;
