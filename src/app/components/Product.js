const Product = ({ name, description, price }) => {
    return (
      <div className="border p-4 rounded shadow">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{description}</p>
        <p className="text-green-500 font-bold">${price}</p>
      </div>
    );
  };
  
  export default Product;
  