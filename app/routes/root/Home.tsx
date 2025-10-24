import Navbar from "~/components/Navbar";
import CustomInput from "~/components/CustomInput";
import CustomButton from "~/components/CustomButton";
import ProductCards from "~/components/ProductCards";

const Home = () => {
  return (
    <main>
      <Navbar />

      <section className="wrapper mt-8">
        <CustomInput icon type="search" text="Search for products..." />

        {/* banner */}
        <div className="relative">
          <img
            className="w-full h-[550px] mt-6 rounded-lg"
            src="assets\images\top-view-black-friday-sales-arrangement-with-tablet.jpg"
            alt=""
            // /assets/images/3d-rendering-cartoon-shopping-cart.jpg
          />

          <span className="absolute left-10 bottom-10 text-white ">
            <h1 className="font-bold text-4xl text-shadow-lg">
              Discover the latest trends
            </h1>
            <p className="mt-2 mb-7 text-3 text-shadow-lg">
              Explore our curated collection of unique and stylish
            </p>
            <CustomButton colored text="shop now" onClick={() => {}} />
          </span>
        </div>

        {/* products */}
        <ProductCards title="Featured Products" />
        <ProductCards title="Categories" />
        <ProductCards title="Trending Now" />
        <ProductCards title="Recently Viewed" />
      </section>
    </main>
  );
};

export default Home;
