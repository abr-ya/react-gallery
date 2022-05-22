import { ReactElement } from "react";

interface IContainer {
  children: ReactElement;
  header?: string;
}

const Container = ({ header, children }: IContainer) => (
  <div className="max-w-[700px] mx-auto my-16 p-4">
    {header && <h1 className="text-2xl font-bold py-2">{header}</h1>}
    {children}
  </div>
);

export default Container;
