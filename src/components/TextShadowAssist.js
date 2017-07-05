import React, { Component } from 'react';

export default class TextShadowAssist extends Component {

constructor(props) {
  super(props);

  this.state = {
    enteredWord: "The quick brown fox jumps over the lazy dog",
    color: "#151515",
    font: "",
    fontWeight: "",
    fontSize: 60,
    shadowLength: "",
    shadowColor: "",
    shadowValues: "",
    backgroundColor: "#fff",
  }
}

updateWord(e) {
  this.setState({
    enteredWord: e.target.value
  })
};

updateFontSize(e) {
  this.setState({
    fontSize: parseInt(e.target.value) ? parseInt(e.target.value) : 10
  })
}

boldFont(e) {
  this.setState({
    fontWeight: "bold"
  })
};

generateTextShadow(e) {

}


    render() {

const mainStyle = {
  width: "100%",
  height: "400px",
  border: "1px solid #f5f5f5",
  overflow: "hidden",
  background: this.state.backgroundColor
}

const wordStyle = {
  fontSize: `${this.state.fontSize}px`,
  textAlign: "center",
  color: this.state.color,
  marginTop: "120px",
  fontWeight: this.state.fontWeight
}
const wordInputStyle = {
marginTop: "50px",
marginBottom: "50px",
width: "70%",
height: "100px",
fontSize: "30px",
color: "grey",
textAlign: "center"
}

// need ShadowLength and Shadow Color;

      return (
      <div className="container">
      <h1 style={{fontWeight: "900"}}>Text Shadow Assistant</h1>

      <div className="main" style={mainStyle}>
      <h1 className="word" style={wordStyle}>{this.state.enteredWord}</h1>
      </div>

      <div className="inputs text-center">

      <input style={wordInputStyle} value={this.state.enteredWord} onChange={this.updateWord.bind(this)}/>
          <button onClick={this.boldFont.bind(this)}>Bold</button>

      <div className="font-sizing-controls">

      <input value={this.state.fontSize} style={{fontSize:"40px",width:"90px", textAlign: "center"}} onChange={this.updateFontSize.bind(this)}/>

      <div><button className="btn" style={{margin: "2px"}} onClick={()=> {this.setState({fontSize: this.state.fontSize += 1})}}>+</button>
      <button className="btn" style={{margin: "2px"}} onClick={()=> {this.setState({fontSize: this.state.fontSize -= 1})}}>-</button>
      </div>

      </div> //Sizing Controls

      </div>
      // Input Controls
      </div>
      // Container End
    )
  }
}
