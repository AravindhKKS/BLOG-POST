import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <form className="writeForm">
        <img
          className="writeImg"
          src="https://webfrontend-sc-pd.azureedge.net/-/media/nwnatural/carousel/large/mthood_large.jpg?rev=f3a39388853f476e999af37d4f16267d"
          alt=""
        />
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput input"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell Your Story"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
