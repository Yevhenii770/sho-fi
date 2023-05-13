import Link from "next/link";
import ReactDOM from "react-dom";

export const MobileModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="absolute top-0 left-0 w-full h-full flex content-center items-center bg-white">
      <div className="p-2 w-full h-full">
        <button onClick={onClose}>Close</button>
        <ul className="gap-4">
          <li>
            <Link href="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/search" onClick={onClose}>
              Search
            </Link>
          </li>
        </ul>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
export default MobileModal;
