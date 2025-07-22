import SectionHeading from "./components/SectionHeading";

export default function CVSection() {
  return (
    <section
      id="cv"
      className="min-h-[400px]  mx-[5%] sm:mx-[10%] md:mx-[20%] xl:mx-[30%]  py-16 "
    >
      <SectionHeading>CV</SectionHeading>
      <div className="mt-10">
        <div className="pt-6">
          <p className="font-bold text-amber-950">CV / Art Studies</p>
          <ul className="list-disc pl-8 pt-3">
            <li>Graduated in ergotherapy</li>
            <li>
              Evening classes drawing/sketching at Saint-Lukas Institute Ghent
            </li>
            <li>
              Master painter in fine painting techniques at the Meylemans
              Institute Kapellen: 1995
            </li>
            <li>Recognized Professional artist: CK-2018-05-143</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
