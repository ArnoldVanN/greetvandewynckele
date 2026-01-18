import CustomSection from "./components/CustomSection";
import { R2_BASE_URL } from "./config";

export default function AboutSection() {
  return (
    <CustomSection id="about" name="About">
      <img src={`${R2_BASE_URL}/about_img.jpg`} alt="About Me" className="mx-auto mt-8" />
      <div className="mt-10 ">
        <p className="text-justify">
          Art is a lifelong passion of mine. My first foray into artistic
          education took place at the Saint-Lucas institute in Ghent, where I
          followed evening classes with a focus on life drawings and landscapes.
          While working as a therapist in a psychiatric institute, I established
          an art studio for its clients. Later on, I earned my diploma for
          master painter at the Meylemans Institute. Over the course of this
          training I learned to apply a variety of old techniques used to
          decorate churches, castles and mansions using high-quality watercolors
          and oil paints.
        </p>
        <p className="pt-3 text-justify">
          I accept small and personal projects such as wood-and marble painting,
          Faux-bronze, turtle and stone, letter painting, "trompe l’oeil" and
          gilding.
        </p>
        <div className="pt-6">
          <p className="font-bold  text-amber-950">My portfolio consists of:</p>
          <ul className="list-disc pl-8 pt-3">
            <li>Faux marble, bronze, tortoiseshell, wood, and stone</li>
            <li>Patinating and polychromies</li>
            <li>Trompe l’oeil and chinoiserie</li>
            <li>Gilding and letter painting</li>
          </ul>
        </div>
      </div>
    </CustomSection>
  );
}
