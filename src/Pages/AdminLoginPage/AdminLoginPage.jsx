import userEvent from "@testing-library/user-event";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "AdminLoginPage.css";

const AdminLoginPage = (props) => {
  const auth = props.auth;
  const setAdmin = props.setAdmin;

  const handleSubmit = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password).then((user) => {
      return user ? setAdmin(user) : null;
    });
  };

  return (
    <div>
      <input type="email" id="email" name="password" className="text" />
      <input type="password" id="password" name="password" />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default AdminLoginPage;
