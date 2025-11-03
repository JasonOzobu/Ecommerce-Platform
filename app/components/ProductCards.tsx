import { FeaturedProducts } from "~/constant";

type ProductCardsProps = {
  title: string;
};

const ProductCards = ({ title }: ProductCardsProps) => {
  return (
    <section className="flex flex-col">
      <h1 className="text-[24px] my-[30px] font-semibold">{title}</h1>

      <div className="w-full  flex-1 flex gap-[45px] mb-[30px]">
        {FeaturedProducts.map((products, index) => (
          <span key={index} className="w-[270px] h-[310px] rounded-[12px]">
            <img
              className="rounded-[12px] w-full h-[270px] object-cover"
              src={products.image}
              alt=""
            />

            <div className="mt-5">
              <h2 className="text-[16px] font-semibold">{products.title}</h2>
              <p className="text-[14px] text-light-200  ">
                {products.description}
              </p>
            </div>
          </span>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
