import MailPassForm from "components/MailPassForm";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Container from "./elements/Container";

const Signup = (): JSX.Element => {
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const formHandler = async (email: string, pass: string) => {
    try {
      await createUser({ email, pass });
      navigate("/user");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Container header="Sign up for a free account">
      <>
        <div>
          <p className="py-2">
            Already have an account yet?{" "}
            <Link to="/" className="underline">
              Sign in.
            </Link>
          </p>
        </div>
        <MailPassForm formHandler={formHandler} buttonTitle="Sign Up" />
      </>
    </Container>
  );
};

export default Signup;
