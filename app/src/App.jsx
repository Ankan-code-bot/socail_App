
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Comments from "./component/comments";
import Image from "./component/img";
import SendingArea from "./component/Send";
import Like from './component/like';
import Msg from './component/message';

function App() {
  const item = [
  ];
  const [content, setcontent] = useState(item);
  const commenthandelar = (value) => {

    const newComment = [...content, value];
    setcontent(newComment);

  }

  const contentValue = (itemname) => {
    const newItems = content.filter((values) => values !== itemname);
    setcontent(newItems);
  }

  const [likes, setlikes] = useState(0);
  const [cmtbox, setcmtbox] = useState(false);

  return (
    <center>
      <div className="first_container">
        <Image />
        <Like setlikes={setlikes} likes={likes} cmtbox={cmtbox} setcmtbox={setcmtbox}></Like>
        <Msg likes={likes} content={content}></Msg>
        {cmtbox === true && <SendingArea commenthandelar={commenthandelar} setcmtbox={setcmtbox} />}

        {content.map((items, index) => <Comments content={items} key={index} contentValue={contentValue} />)}
      </div>

    </center>
  )
}

export default App;
