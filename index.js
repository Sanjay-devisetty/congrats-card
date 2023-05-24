const element = (
  // Write your code here.
  <div className="backgroundContainer">
    <div>
      <h1 className="mainHeading"> Congratulations </h1>
      <div className="bottomBgContainer">
        <img
          className="profileImage"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        />
        <h1 className="nameHeading">Kiran V</h1>
        <p className="description">
          Vishnu institute of Computer Education and Technology Bhimavaram
        </p>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
