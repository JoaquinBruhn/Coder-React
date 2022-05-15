const CustOnClick = ({ func, message, param, look = "no-style" }) => {
  const action = () => {
    func(param);
  };

  return (
    <button className={look} onClick={action}>
      {message}
    </button>
  );
};

export default CustOnClick;
