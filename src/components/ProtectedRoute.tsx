import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

interface IProtectedRoute {
  children: ReactElement;
}

const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const { user } = UserAuth();
  const userID = user.uid;
  console.log("ProtectedRoute, user id: ", userID);
  const navigate = useNavigate();
  if (!userID) {
    setTimeout(() => {
      console.log("Redirect to Main Page");
      navigate("/");
    }, 3500);
  }

  return userID ? (
    children
  ) : (
    <div>
      Страница доступна только после авторизации. Вы будете переадресованы на
      главную страницу.
    </div>
  );
};

export default ProtectedRoute;
