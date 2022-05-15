import "./cartForm.css";

const CartForm = ({ buyerData, setBuyerData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const buyer = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      address: e.target.address.value,
    };
    setBuyerData(buyer);
  };

  return (
    <form className={!buyerData ? "buyer-form" : "buyer-form form-disabled"} onSubmit={handleSubmit}>
      <div className="form-fields">
        <div>
          <h3>Name:</h3>
          <input type="text" id="name" required />
        </div>
        <div>
          <h3>Phone number:</h3>
          <input type="text" id="phone" placeholder="(011)1234-5678" required />
        </div>
        <div>
          <h3>Email:</h3>
          <input type="email" id="email" placeholder="email@gmail.com" required />
        </div>
        <div>
          <h3>Home address:</h3>
          <input type="text" id="address" placeholder="City, address" required />
        </div>
      </div>
      {!buyerData ? <button type="submit">Submit</button> : null}
    </form>
  );
};

export default CartForm;
