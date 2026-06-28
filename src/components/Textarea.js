import { useState } from "react";

function Textarea(props) {
    const [text, setText] = useState("");
    return (
        <>
            <div className="form-floating container my-3">
                <h2 className="title">Enter your text</h2>
                <textarea  className="form-control my-3" placeholder="Leave a comment here" style ={{backgroundColor: props.mode === "dark" ? "#262f38" : "white", color: props.mode === "dark" ? "white" : "black"}}value = {text} onChange={(e) => {setText(e.target.value)}} id="floatingTextarea"></textarea>
                <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={() => {setText(text.toUpperCase()); props.showAlert("Text converted to uppercase", "success");}}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={() => {setText(text.toLowerCase()); props.showAlert("Text converted to lowercase", "success");}}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={() => {setText(""); props.showAlert("Text cleared", "success");}}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h3>Preview</h3>
                <p>{text}</p>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((word) => word !== "").length} words and {text.length} characters</p>
                <p>{text.split(" ").filter((word) => word !== "").length*0.008} minutes to read</p>
            </div>
        
        </>
    );
}

export default Textarea