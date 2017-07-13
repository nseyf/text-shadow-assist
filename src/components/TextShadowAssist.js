import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

export default class TextShadowAssist extends Component {

constructor(props) {
  super(props);

  this.state = {
    enteredWord: "The quick brown fox jumps over the lazy dog",
    color: "#151515",
    font: "",
    fontWeight: "",
    isItalic: false,
    fontStyle: "",
    fontFamily: "helvetica",
    fontSize: 70,
    shadowLength: 10,
    shadowColor: "",
    shadowValues: 0,
    backgroundColor: "white",
    displayColorPicker: false,
    displayShadowPicker: false,
    displayBackgroundPicker: false,
    }

this.renderShadows = this.renderShadows.bind(this);

}

// Word Input Handler

updateWord(e) {
  this.setState({
    enteredWord: e.target.value
  })
};


updateTextColor(e) {
this.setState({
  color: e.hex
})
}


updateTextShadowColor(e) {
  this.setState({
    shadowColor: e.hex
  }, () => {
    this.renderShadows();
  })
}


// Font sizing handler
updateFontSize(e) {
  this.setState({
    fontSize: parseInt(e.target.value, 10) ? parseInt(e.target.value, 10) : 0
  })
}

//Font Styling

toggleItalic(e) {
  this.state.isItalic ? this.setState({isItalic : false, fontStyle: ""}) : this.setState({isItalic: true, fontStyle: "italic"})
}

boldFontWeight(e) {
  this.setState({
    fontWeight: "bold"
  })
};

normalFontWeight(e) {
  this.setState({
    fontWeight: "500"
  })
}

thinFontWeight(e){
  this.setState({
    fontWeight: "300"
  })
};

//Rendering Shadows

renderShadows() {
        const result = [];
        for(var i=1; i <= this.state.shadowLength; i++) {
          result.push(i + "px " + i + `px 0px ${this.state.shadowColor}`);
        }
        return this.setState({shadowValues: result.join(', ')})
}


updateBackgroundColor(e){
  this.setState({
    backgroundColor: e.hex
  })
}


updateshadowLength(e) {
  this.setState({
    shadowLength: parseInt(e.target.value, 10) ? parseInt(e.target.value, 10) : 0
  }, () => {
    this.renderShadows()
  })
}

// Copying Shadow values to clipboard

copyValues(e) {

    const element = document.createElement('textarea');

    element.value = `text-shadow: ${e.target.value}`

    document.body.appendChild(element);

    element.focus();

    element.setSelectionRange(0, element.value.length);

    document.execCommand('copy');
    document.body.removeChild(element)
  }




    render() {

// Styles

const mainStyle = {
  width: "100%",
  minheight: "350px",
  border: "2px solid #f5f5f5",
  transition: "0.3s",
  overflow: "hidden",
  marginTop: "50px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  background: this.state.backgroundColor
}

const wordStyle = {
  padding: "20px",
  fontFamily: this.state.fontFamily,
  fontStyle: this.state.fontStyle,
  fontSize: `${this.state.fontSize}px`,
  textAlign: "center",
  transition: "0.3s",
  color: this.state.color,
  textShadow: this.state.shadowValues,
  fontWeight: this.state.fontWeight,
  marginBottom: "30px"
}

const wordInputStyle = {
marginTop: "50px",
marginBottom: "25px",
width: "70%",
height: "100px",
color: "grey",
fontSize: "20px",
fontWeight: "100",
overflow: "scroll",
textAlign: "center"
}



const numberInputStyle = {
  fontSize:"40px",
  width:"90px",
  textAlign: "center",
  marginBottom: "5px"
}

// Color Picker style

const popover = {
  position: "absolute",
  zIndex: "3"
}

const cover = {
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
}


      return (
      <div className="container">
      <div style={mainStyle}>
      <h1 className="word"
      style={wordStyle}>{this.state.enteredWord}</h1>
      </div>
      <div className="inputs text-center">
<div className="row">
      <input
      placeholder={this.state.enteredWord}
      style={wordInputStyle}
      onChange={this.updateWord.bind(this)}/>
      <div className="row">
      <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">

      <button className="btn" onClick={() => {this.setState({displayColorPicker: !this.state.displayColorPicker })}}>Text Color</button>
      { this.state.displayColorPicker ? <div style={ popover }>
      <div style={ cover } onClick={ () => { this.setState({displayColorPicker: false})} } />
      <SketchPicker
      color={ this.state.color }
      onChange={this.updateTextColor.bind(this)}
      />
      </div> : null }

      </div>
      <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">
      <button className="btn" onClick={() => {this.setState({displayShadowPicker: !this.state.displayShadowPicker })}}>Shadow Color</button>
      { this.state.displayShadowPicker ? <div style={ popover }>
      <div style={ cover } onClick={ () => { this.setState({displayShadowPicker: false})} } />
      <SketchPicker
      color={ this.state.shadowColor }
      onChange={this.updateTextShadowColor.bind(this)}
      />
      </div> : null }
      </div>
      <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">

      <button className="btn" onClick={() => {this.setState({displayBackgroundPicker: !this.state.displayBackgroundPicker })}}>Background Color</button>
      { this.state.displayBackgroundPicker ? <div style={ popover }>
      <div style={ cover } onClick={ () => { this.setState({displayBackgroundPicker: false})} } />
      <SketchPicker
      color={ this.state.backgroundColor }
      onChange={this.updateBackgroundColor.bind(this)}
      />
      </div> : null }

      </div>
      </div>
<div className="text-center">
<button className="btn"
onClick={this.toggleItalic.bind(this)}>Italicize(toggle)</button>
<button className="btn"
onClick={this.boldFontWeight.bind(this)}>Bold Font Weight</button>
<button className="btn"
onClick={this.thinFontWeight.bind(this)}>Thin Font Weight</button>
<button className="btn"
onClick={this.normalFontWeight.bind(this)}>Reset Font Weight</button>

      <button value={this.state.shadowValues} onClick={this.copyValues.bind(this)} className="btn">Copy Text Shadow Values to Clipboard</button>
</div>

</div>
<div className="row">
      <div className="col-xs-12 col-md-6 col-lg-6 font-sizing-controls">
      <h4>Font Size </h4>
      <input placeholder={this.state.fontSize}
      value={this.state.fontSize}
      style={numberInputStyle}
      onChange={this.updateFontSize.bind(this)}
      onClick={() => {this.setState({fontSize: 0})}}
      />

      <div>
      <button className="btn" style={{margin: "2px"}}
      onClick={()=> {this.setState({fontSize: this.state.fontSize + 1})}}>+</button>
      <button className="btn" style={{margin: "2px"}}
      onClick={()=> {this.setState({fontSize: this.state.fontSize - 1})}}>-</button>
      </div>

      </div>
      <div className="col-xs-12 col-md-6 col-lg-6">
      <h4>Shadow Length</h4>
      <input
      style={numberInputStyle}
      value={this.state.shadowLength}
      placeholder={this.state.shadowLength}
      onChange={this.updateshadowLength.bind(this)}
      onClick={() => {this.setState({shadowLength: 0})}}
      />
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
