import { FcLike } from "react-icons/fc";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { FaShare } from "react-icons/fa";
const Like = ({ likes, setlikes, cmtbox, setcmtbox }) => {

  const likehandelar = () => {
    const newlike = likes + 1;
    setlikes(newlike);
  }

  const cmthandelar = () => {
    setcmtbox(!cmtbox);
    console.log(cmtbox);
  }

  return <div className="grid text-center likes">
    <div className="g-col-4 like" onClick={likehandelar}><FcLike /></div>
    <div className="g-col-4 cmt" onClick={cmthandelar}><TfiCommentsSmiley /></div>
    <div className="g-col-4 share"><FaShare /></div>
  </div>
}

export default Like;