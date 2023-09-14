import logo from "../images/react.png";

function Header() {
    return (<div><MainHeader></MainHeader><SubHeader></SubHeader></div>)
  }
  
  function MainHeader() {
    return (
      <div className="pt-2 ps-1 py-2">
        <img src={logo} alt="" style={{height : "35px"}}></img>
        <span className='heading1'>React Course - Project TaskOpedia</span>
      </div>
    )
  }
  const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgray",
  };
  
  function SubHeader() {
    return (
      <p className="text-center" style={subHeaderStyle}>This will be an exciting course</p>
    )
  }

  export default Header;