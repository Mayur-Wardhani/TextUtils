import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "Success")
    }

    const handleLowClick = () => {
        console.log("Lowercase was clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "Success")
    }

    const handleOnChange = (event) => {
        console.log("on change")
        setText(event.target.value)
        
    }

    const handleCopy = () => {
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "Success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed", "Success");
    }

    const clearText = () => {
        setText("")
        props.showAlert("Text Cleared", "Success")
    }

    const[text, setText] = useState("")  
  return (
    <>
    <div className = "container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
    </div>

    <button disabled = {text.length===0} className='btn btn-outline-primary brn-primary mx-2 my-1'  onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled = {text.length===0} className='btn btn-outline-primary brn-primary mx-2 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled = {text.length===0} className='btn btn-outline-primary brn-primary mx-2 my-1' onClick={clearText}>Clear Text</button>
    <button disabled = {text.length===0} className='btn btn-outline-primary brn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
    <button disabled = {text.length===0} className='btn btn-outline-primary brn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
   </div>
   <div className="container my-3">
    <h2> Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split.length} mintues reading time</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Nothing to preview"}</p>
   </div>
   </>
  )
}
