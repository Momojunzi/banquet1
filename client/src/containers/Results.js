import React, {Component} from 'react';
import axios from 'axios';

class Results extends Component {
  state = {
    result: []
  }

  componentDidMount () {
    this.getResults();
  }

  getResults = () =>{
    axios.get('/api/getIdeas')
      .then(result =>{
        this.setState({result: result.data})
      })
  }

  render() {
    const tdStyle = {
      borderRight: "1px solid gainsboro"
    }

    const thStyle = {
      borderLeft: "1px solid gainsboro",
      borderRight: "1px solid gainsboro"
    }

    const tableStyle = {
      backgroundColor: "white",
      borderBottom: "1px solid gainsboro"
    }

    const resultsStyle = {
      paddingTop:"15px",
      paddingRight: "10px",
      paddingLeft: "10px",
      backgroundColor: "grey",
      border: "solid black 1px"
    }
    return(
      <div style={resultsStyle}>
        <table className="table" style={tableStyle}>
          <thead>
            <tr>
              <th scope="col" style={thStyle}>agent</th>
              <th scope="col" style={thStyle}>month</th>
              <th scope="col" style={thStyle}>day</th>
              <th scope="col" style={thStyle}>time</th>
              <th scope="col" style={thStyle}>location</th>
              <th scope="col" style={thStyle}>event type</th>
              <th scope="col" style={thStyle}>comment</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
          {this.state.result.map(function(result){
            return(
              <tr>
                <th scope="row" style={thStyle}>{result.agent}</th>
                <td style={tdStyle}>{result.month}</td>
                <td style={tdStyle}>{result.day}</td>
                <td style={tdStyle}>{result.time}</td>
                <td style={tdStyle}>{result.location}</td>
                <td style={tdStyle}>{result.eventType}</td>
                <td style={tdStyle}>{result.comment}</td>
              </tr>
            )
          })}
        </table>
      </div>
    )
  }
}

export default Results;
