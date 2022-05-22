import { useState, FormEvent } from "react";

interface IMailPassForm {
  formHandler: (email: string, pass: string) => void;
  buttonTitle: string;
}

const MailPassForm = ({
  formHandler,
  buttonTitle,
}: IMailPassForm): JSX.Element => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    formHandler(email, pass);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col py-2">
        <label className="py-2 font-medium">Email Address</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3"
          type="email"
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="py-2 font-medium">Password</label>
        <input
          onChange={(e) => setPass(e.target.value)}
          className="border p-3"
          type="password"
        />
      </div>
      <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
        {buttonTitle}
      </button>
    </form>
  );
};

export default MailPassForm;
