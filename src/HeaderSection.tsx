import header_image from "@/assets/header_img.jpg";
export default function HeaderSection() {
  return (
    <section id="header" className="pb-12 text-center">
      <div className="relative h-[36rem]">
        <img
          src={header_image}
          className="max-w-full w-full h-full object-cover object-top mb-4"
          alt="header image"
        />
        <div className="@container">
          <p className="absolute top-[3%] pl-6 text-white @md:text-lg @md:pr-6 @md:left-0 @md:text-right w-full text-shadow-lg/20">
            Faux marbres, Faux bois, Trompe l'œil
            <br /> directly inspired by nature...
          </p>
        </div>
        <div className="absolute top-[13%] px-2 @container w-full text-center">
          <p className="text-lg @lg:text-2xl @xl:text-4xl @2xl:text-6xl text-white tracking-[1rem] text-shadow-lg/20 font-light drop-shadow-gray-500 ">
            Greet <br />
            Vandewynckele
          </p>
        </div>

        <div className="absolute bottom-[5%] @container w-full p-2 text-center">
          <p className=" text-gray-600 text-sm @md:text-md font-[550] @lg:font-[700] tracking-[0.8rem]">
            Master decorative painter
          </p>
        </div>
      </div>
    </section>
  );
}
