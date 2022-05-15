import "./spinner.css";

const Spinner = ({ look = "lds-ring" }) => {
  return (
    <div className={look}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
