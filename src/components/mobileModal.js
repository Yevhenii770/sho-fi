import Link from "next/link";
import ReactDOM from "react-dom";
import IconClose from "../svg/icons-close.svg";

export const MobileModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="absolute top-0 left-0 w-full h-[296vh] flex content-center items-center bg-white">
      <div className="p-12 w-full h-[296vh]">
        <button onClick={onClose} className="absolute top-4 right-4">
          <IconClose />
        </button>
        <ul className="inline-grid gap-4">
          <li>
            <Link href="/" onClick={onClose} className="text-5xl">
              Home
            </Link>
          </li>
          <li>
            <Link href="/search" onClick={onClose} className="text-5xl">
              Search
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={onClose} className="text-5xl">
              About-us
            </Link>
          </li>
        </ul>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
export default MobileModal;
