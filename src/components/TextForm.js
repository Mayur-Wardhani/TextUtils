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

    <button className='btn btn-outline-primary brn-primary mx-2'  onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-outline-primary brn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
    <button className='btn btn-outline-primary brn-primary mx-2' onClick={clearText}>Clear Text</button>
   </div>
   <div className="container my-3">
    <h2> Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} mintues reading time</p>
    <h3>Preview</h3>
    <p>{text}</p>
   </div>
   </>
  )
}
