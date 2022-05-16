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
          <input type="text" id="name" minLength={6} maxLength={25} required />
        </div>
        <div>
          <h3>Phone number:</h3>
          <div className="phone-numb">
            <span>
              {"("}
              <input type="tel" id="phone1" minLength={3} maxLength={3} placeholder="###" pattern="[0-9]{3}" required />
              {")"}
              <input
                type="tel"
                id="phone2"
                minLength={4}
                maxLength={4}
                placeholder="####"
                pattern="[0-9]{4}"
                required
              />
              {"-"}
              <input
                type="tel"
                id="phone3"
                minLength={4}
                maxLength={4}
                placeholder="####"
                pattern="[0-9]{4}"
                required
              />
            </span>
          </div>
        </div>
        <div>
          <h3>Email:</h3>
          <input type="email" id="email" minLength={6} maxLength={30} placeholder="email@gmail.com" required />
        </div>
        <div>
          <h3>Home address:</h3>
          <input type="text" id="address" minLength={6} maxLength={30} placeholder="City, address" required />
        </div>
      </div>
      {!buyerData ? (
        <button type="submit" className="submit-button">
          Submit
        </button>
      ) : null}
    </form>
  );
};

export default CartForm;
