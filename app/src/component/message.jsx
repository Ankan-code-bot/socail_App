const Msg = ({ likes, content }) => {
  return <div className="card text-bg-success mb-3" style={{ maxWidth: "22rem", marginTop: "2vh" }}>
    <div className="card-body">
      <p className="card-text">Your post is liked by <b>{likes}</b> people and Number of comment is <b>{content.length}</b>.

      </p>

    </div>
  </div >
}

export default Msg;