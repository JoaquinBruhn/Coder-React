const CustOnClick = ({ func, message, param }) => {
  const action = () => {
    func(param);
  };

  return <button onClick={action}>{message}</button>;
};

export default CustOnClick;
