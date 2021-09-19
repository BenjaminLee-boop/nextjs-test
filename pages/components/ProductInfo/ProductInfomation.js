import OptionsSelector from "./OptionsSelector";

function ProductInfomation({ data }) {
  console.log(data);
  return (
    <div className="px-5 pt-5">
      <div>
        <h1 className="text-2xl font-sans">{data.title}</h1>
        <p>
          {`$${data.priceRange.maxVariantPrice.amount} ${data.priceRange.maxVariantPrice.currencyCode}`}
        </p>
        <p className="mt-4">{data.description}</p>
      </div>
      {data.options.map((option, index) => (
        <OptionsSelector options={option} key={index}></OptionsSelector>
      ))}

      <div className="mt-5">
        <button className=" px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfomation;
