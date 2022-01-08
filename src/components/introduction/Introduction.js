import "./introduction.scss";

export default function Introduction() {
  return (
    <div className="introduction" id="intro">
      <div className="greeting">Hi, I'm Kevin Kirby.</div>
      <div className="role">
        Full-Stack Web Developer with a&nbsp;
        <i className="frontendWord">frontend</i>&nbsp;focus.
      </div>
      <div className="shapeContainer">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="triangle-topleft"></div>
      </div>
      <div className="designsContainer">
        <img className="design" src="assets/taxi-715.png"></img>
      </div>
      <img
        src="assets/icons8-spinner-arrow-64.png"
        className="spinnerArrow"
      ></img>
    </div>
  );
}
