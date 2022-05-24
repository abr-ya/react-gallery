interface IProgressBar {
  progress: number;
}

const ProgressBar = ({ progress }: IProgressBar) => {
  console.log("ProgressBar");

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
