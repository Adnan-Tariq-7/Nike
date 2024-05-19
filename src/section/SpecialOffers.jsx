import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section
      id="sepcial_offers"
      className="flex flex-wrap items-center max-lg:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain" />
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h1>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticaously crafted footwear
          is designed to elevate your experience, providing you unmatched
          quality, innovation, and touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detials and execllence ensure your statisfaction.
          Our dedication to detials and execllence ensure your statisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight}/>
          <Button label="Learn more" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
