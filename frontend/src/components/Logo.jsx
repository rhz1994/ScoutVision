import logo from "../assets/owl_24dp_BLACK_FILL0_wght400_GRAD0_opsz24.svg";

function Logo({ className }) {
  return (
    <>
      <img src={logo} alt="logo" id="logo" className={className} />
    </>
  );
}

export default Logo;
