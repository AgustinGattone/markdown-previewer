import React from "react";
import Badge from "react-bootstrap/Badge";
import { marked } from "marked";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  resetText = () =>{
    this.setState({
      ...this.state,
      markdown: "",
    })
  }

  render() {
 
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      border: "inset 4px black",
      backgroundColor: " #56e0ff ",
    };
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#dcdcdc",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      border: "inset 4px black"
    };
    
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                {" "}
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  className="input"
                  placeholder="Insert Markdown code Here." cols="30" rows="5"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >
                </textarea>
              </div>
            </div>

            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
            <div className="col text-center">
              <button
                onClick={this.resetText}
                type="button">
                  Reset Code
                </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}