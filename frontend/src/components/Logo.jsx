import logo from "../assets/owl-svgrepo-com.svg";

function Logo({ className }) {
  return (
    <>
      <img src={logo} alt="logo" id="logo" className={className} />
    </>
  );
}

export default Logo;
