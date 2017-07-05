import React, { Component } from 'react';

export default class TextShadowAssist extends Component {

constructor(props) {
  super(props);

  this.state = {
    enteredWord: "The quick brown fox jumps over the lazy dog",
    color: "#151515",
    font: "",
    fontWeight: "",
    fontSize: 50,
    shadowLength: 0,
    shadowColor: "#e34234",
    shadowValues: 0,
    backgroundColor: "#fff",
  }

this.renderShadows = this.renderShadows.bind(this);

}

updateWord(e) {
  this.setState({
    enteredWord: e.target.value
  })
};

updateFontSize(e) {
  this.setState({
    fontSize: parseInt(e.target.value, 10) ? parseInt(e.target.value, 10) : 0
  })
}

boldFont(e) {
  this.setState({
    fontWeight: "bold"
  })
};

renderShadows() {
        const result = [];
        for(var i=1; i <= this.state.shadowLength; i++) {
          result.push(i + "px " + i + `px 0px ${this.state.shadowColor}`);
        }
        return this.setState({shadowValues: result.join(', ')})
}



updateshadowLength(e) {
  this.setState({
    shadowLength: parseInt(e.target.value, 10) ? parseInt(e.target.value, 10) : 0
  }, () => {
    this.renderShadows()
  })
}

// Need to split into one function to render, one to update.


    render() {
// Styles
const mainStyle = {
  width: "100%",
  height: "300px",
  border: "2px solid #f5f5f5",
  overflow: "hidden",
  background: this.state.backgroundColor
}

const wordStyle = {
  fontSize: `${this.state.fontSize}px`,
  textAlign: "center",
  color: this.state.color,
  textShadow: this.state.shadowValues,
  marginTop: "50px",
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

const numberInputStyle = {
  fontSize:"40px",
  width:"90px",
  textAlign: "center",
  marginBottom: "5px"
}


// need ShadowLength and Shadow Color;


      return (
      <div className="container">
      <h1 style={{fontWeight: "900"}}>Text Shadow Assistant</h1>

      <div style={mainStyle}>
      <h1 className="word"
      style={wordStyle}>{this.state.enteredWord}</h1>

      </div>

      <div className="inputs text-center">
<div className="row">
      <input value={this.state.enteredWord}
      style={wordInputStyle}
      onChange={this.updateWord.bind(this)}/>
      <button className="btn"
      onClick={this.boldFont.bind(this)}>Bold</button>
<div className="text-center">
      <button className="btn">Copy Text Shadow Values to Clipboard</button>
</div>
</div>
<div className="row">
      <div className="col-xs-12 col-lg-3 font-sizing-controls">
      <h4>Font Size </h4>
      <input value={this.state.fontSize}
      style={numberInputStyle}
      onChange={this.updateFontSize.bind(this)}/>

      <div>
      <button className="btn" style={{margin: "2px"}}
      onClick={()=> {this.setState({fontSize: this.state.fontSize + 1})}}>+</button>
      <button className="btn" style={{margin: "2px"}}
      onClick={()=> {this.setState({fontSize: this.state.fontSize - 1})}}>-</button>
      </div>

      </div>
      <div className="col-xs-12 col-lg-3">
      <h4>Shadow Length</h4>
      <input
      style={numberInputStyle}
      value={this.state.shadowLength}
      onChange={this.updateshadowLength.bind(this)}/>
      <div>
      <button className="btn" style={{margin: "2px"}}
      onClick={()=> {this.setState({shadowLength: this.state.shadowLength + 1}, () => {
        this.renderShadows()
      })}}>+</button>
      <button className="btn" style={{margin: "2px"}}
      onClick={()=> {this.setState({shadowLength: this.state.shadowLength - 1}, () => {
        this.renderShadows()
      })}}>-</button>
      </div>
      </div>

      </div>
      </div>
      </div>

    )
  }
}
