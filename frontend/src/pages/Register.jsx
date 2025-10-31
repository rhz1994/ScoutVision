import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <h1>Skapa konto</h1>
      <form id="register-form">
        <label htmlFor="username">
          Användarnamn
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Användarnamn"
          />
        </label>
        <label htmlFor="password">
          Lösenord
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Lösenord"
          />
        </label>
        <button>Skapa konto</button>
      </form>
    </div>
  );
}
export default Register;
