import { Separator } from "./components/ui/separator";

export default function CredentialsSection() {
  return (
    <>
      <div className="relative left-1/2 right-1/2 w-screen -mx-[50vw] bg-radial from-[#633a01] to-[#4f2c01]">
        <section id="credentials" className="relative z-10">
          <img
            loading="lazy"
            src={"/verfBg.jpg"}
            alt="verf achtergrond"
            className="w-full h-80 object-cover object-center"
          />
        </section>

        <div className="flex flex-col text-white mt-12 items-center justify-center">
          <Separator
            className="mx-2 my-1 py-8 bg-white"
            orientation="vertical"
          />
          <h2 className="font-playfair italic text-xl font-extralight">
            Credentials
          </h2>
        </div>
        <div className="mt-10 pb-20 mx-[5%] sm:mx-[10%] md:mx-[20%] xl:mx-[30%]">
          <div className="pt-6">
            <p className="font-bold text-white">Credentials</p>
            <ul className="list-disc pl-8 pt-3 text-white ">
              <li>
                Evening classes drawing/sketching at Saint-Lukas Institute Ghent
              </li>
              <li>
                Master painter in fine painting techniques at the Meylemans
                Institute Kapellen - 1995
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
