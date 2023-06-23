import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="singlePostImg"
        />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet.
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>

          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author:<b>Aravinth</b>
        </span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit
        beatae autem sapiente nobis dolore obcaecati aspernatur delectus est
        omnis laboriosam ipsam architecto nihil repudiandae, exercitationem
        explicabo eum tenetur veritatis repellat aperiam, commodi libero. Rem,
        nesciunt placeat. Eius odio natus, enim assumenda incidunt sed, iure
        reiciendis, veritatis delectus dolor quam! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Officia pariatur quis eveniet cupiditate
        maxime! Necessitatibus quisquam doloremque, aspernatur, nihil aliquid
        vel odit tenetur animi consectetur impedit repudiandae ducimus amet
        nostrum praesentium! Non hic dicta blanditiis saepe! Iste voluptates
        commodi ad. Ducimus accusantium necessitatibus odio hic similique
        facilis aspernatur repellendus aperiam!
      </p>
    </div>
  );
}
