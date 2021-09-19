import ImageComponent from "./ImageComponent";
import ProductInfomation from "./ProductInfomation";

export default function ProductInfo({ data }) {
  return (
    <div className="grid grid-cols-1 px-20 pb-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <ImageComponent images={data.images.edges} />
      <ProductInfomation data={data}></ProductInfomation>
    </div>
  );
}
