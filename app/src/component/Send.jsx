import { useRef } from "react";
import { IoSend } from "react-icons/io5";

const SendingArea = ({ commenthandelar, setcmtbox }) => {
  const comment = useRef();

  const handelar = () => {
    if (comment.current.value !== "") {
      const value = comment.current.value;
      commenthandelar(value);
      comment.current.value = "";
      setcmtbox(false);
    }
  }
  return <div className="mb-3 comment">
    <textarea className="form-control" id="exampleFormControlTextarea1" style={{ width: "19vw" }} placeholder='Comment here' rows="2" ref={comment}></textarea>
    <div className="icon" onClick={handelar} ><IoSend /></div>
  </div>
}

export default SendingArea;