const CartForm = () => {
  return (
    <div className="form-container">
      <h2>Buyer information</h2>
      <p>(mandatory)</p>
      <form>
        <div>
          <h3>Name:</h3>
          <input type="text" required />
        </div>
        <div>
          <h3>Email:</h3>
          <input type="email" placeholder="email@gmail.com" required />
        </div>
        <div>
          <h3>Phone number:</h3>
          <input type="text" placeholder="(011)1234-5678" required />
        </div>
        <div>
          <h3>Home address:</h3>
          <input type="text" placeholder="City, address" required />
        </div>
      </form>
    </div>
  );
};

export default CartForm;
