import "./introduction.scss";

export default function Introduction() {
  return (
    <div className="introduction" id="intro">
      <div className="greeting">Hi, I'm Kevin Kirby. (test)</div>
      <div className="role">
        Full-Stack Web Developer with a&nbsp;
        <i className="frontendWord">frontend</i>&nbsp;focus.
      </div>
      <div className="shapeContainer">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
        <div className="circle6"></div>
        <div className="circle7"></div>
        <div className="circle8"></div>
        <div className="circle9"></div>
        <div className="circle10"></div>
        <div className="circle11"></div>
        <div className="circle12"></div>
        <div className="circle13"></div>

        <div className="triangle-topleft"></div>
      </div>
      <div className="designsContainer">
        <img className="design" src="public/taxi-715.png"></img>
      </div>
      <img
        src="public/icons8-diagonal-arrow-64.png"
        className="diagonalArrow"
      ></img>
    </div>
  );
}
