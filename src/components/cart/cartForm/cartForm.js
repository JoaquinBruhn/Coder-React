import "./cartForm.css";

const CartForm = ({ buyerData, setBuyerData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumb = `(${e.target.phone1.value}) ${e.target.phone2.value}-${e.target.phone3.value}`;

    const buyer = {
      name: e.target.name.value,
      phone: phoneNumb,
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
          <div className="phone-numb">
            <span>
              {"("}
              <input type="tel" maxLength={3} minLength={3} id="phone1" placeholder="###" pattern="[0-9]{3}" required />
              {")"}
              <input
                type="tel"
                maxLength={4}
                minLength={4}
                id="phone2"
                placeholder="####"
                pattern="[0-9]{4}"
                required
              />
              {"-"}
              <input
                type="tel"
                maxLength={4}
                minLength={4}
                id="phone3"
                placeholder="####"
                pattern="[0-9]{4}"
                required
              />
            </span>
          </div>
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
