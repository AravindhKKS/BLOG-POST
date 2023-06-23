import "./upload.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2016/09/17/08/24/drought-1675729__340.jpg"
        alt=""
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate"> 1 hour ago</span>
      </div>
      <p className="postDisc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
        repellendus perspiciatis tempora quod, sint nihil fugiat eum deleniti,
        enim assumenda debitis alias qui beatae distinctio quia inventore animi.
        Officia, ducimus?Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Laborum cupiditate iusto eum animi maxime eos dolores ullam? Sed,
        libero repellendus, non ullam, porro enim incidunt est ea sunt sint
        mollitia.
      </p>
    </div>
  );
}
