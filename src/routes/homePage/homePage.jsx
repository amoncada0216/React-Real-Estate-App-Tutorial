import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Culpa amet fugiat adipisicing nisi sit in id aute aute id velit.
            Sint velit cillum adipisicing ad ad sint est qui nulla deserunt
            minim ipsum. Cillum cupidatat non ullamco tempor.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img
          src="/bg.png"
          alt=""
        />
      </div>
    </div>
  );
}
