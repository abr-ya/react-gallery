import MailPassForm from "components/MailPassForm";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Container from "./elements/Container";

const Signin = (): JSX.Element => {
  const { login } = UserAuth();
  const navigate = useNavigate();

  const formHandler = async (email: string, pass: string) => {
    try {
      await login({ email, pass });
      navigate("/user");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Container header="Sign in to your account">
      <>
        <div>
          <p className="py-2">
            Don&apos;t have an account yet?{" "}
            <Link to="/signup" className="underline">
              Sign up.
            </Link>
          </p>
        </div>
        <MailPassForm formHandler={formHandler} buttonTitle="Sign Up" />
      </>
    </Container>
  );
};

export default Signin;
