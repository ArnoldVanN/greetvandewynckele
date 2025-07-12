import header_image from "@/assets/header_img.jpg";
export default function HeaderSection() {
  return (
    <section id="header" className="pb-12 text-center">
      <div className="relative grid text-center columns-1 items-end justify-center h-[32rem]">
        <p className="z-10 top-[5%] right-[20%] absolute text-white text-lg text-shadow-lg/20">
          Faux marbres, Faux bois, Trompe l'œil
          <br /> directly inspired by nature...
        </p>
        <img
          src={header_image}
          className="max-w-full absolute w-full h-full object-cover mb-4"
          alt="header image"
        />
        <div className="z-10 mb-10">
          <h1 className="text-6xl text-white tracking-[1rem] text-shadow-lg/20 font-light drop-shadow-gray-500 mb-8">
            Greet
            <br /> Vandewynckele
          </h1>
          <p className=" text-gray-600 text-sm font-[550] tracking-[0.8rem]">
            Master decorative painter
          </p>
        </div>
      </div>
    </section>
  );
}
