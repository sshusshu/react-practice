import { useRef } from "react"

export default function Buttons({onUpload,isDone,saveUrl,fileRef}){
   
    return(
        <>
        <div className="btn-wrap">
            <div className= {isDone?"upload-btn hide":"upload-btn"}>
                <input className="upload-name" value="파일선택" disabled="disabled" />
                <label htmlFor="ex_file" className="primary" >Upload</label>
                <input type="file" id="ex_file" className="upload-hidden" onChange={onUpload} ref={fileRef}/>
            </div>
            <div className= {isDone?"download-btn":"download-btn hide"}>
                <button className="download"><a href={saveUrl?saveUrl:''} download="sshu's drawing.jpg">Download</a></button>
                <button>SNS 공유</button>
                <button>SNS 공유</button>
            </div>
        </div>
        </>
    )
};