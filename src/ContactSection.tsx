import CustomSection from "./components/CustomSection";
import { FaEnvelope, FaInstagram, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <CustomSection name="Contact" id="contact">
      <div className="w-fit mx-auto mt-8">
        <ul className="text-lg">
          <li className="flex items-center justify-center gap-2">
            <FaInstagram />
            <a
              href="https://www.instagram.com/greetvandewynckele"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 hover:underline"
            >
              @greetvandewynckele
            </a>
          </li>
          <li className="flex items-center justify-center gap-2">
            <FaEnvelope />
            <a
              href="mailto:greet.vdw.gv@gmail.com"
              className="hover:text-blue-500 hover:underline"
            >
              greet.vdw.gv@gmail.com
            </a>
          </li>
          <li className="flex items-center justify-center gap-2">
            <FaPhoneAlt />
            <a
              href="tel:+32475798688"
              className="hover:text-blue-500 hover:underline"
            >
              +32 475 798 688
            </a>
          </li>
        </ul>
      </div>
    </CustomSection>
  );
}
