import { MdDelete } from "react-icons/md";
const Comments = ({ content, contentValue }) => {


  return <div className=" rounded-3 comments">
    <p style={{ marginLeft: "1vw", fontSize: "1.1vw" }}>{content}</p>
    <div className="delete" onClick={() => { contentValue(content) }}><MdDelete /></div>
  </div>
}

export default Comments;