import CustomSection from "./components/SectionHeading";

export default function CVSection() {
  return (
    <CustomSection name="CV" id="cv">
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
    </CustomSection>
  );
}
