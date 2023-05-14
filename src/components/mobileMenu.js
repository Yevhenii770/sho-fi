import Earth from "../svg/earth-svgrepo-com.svg";
import MobileModal from "./mobileModal";

const MobileMenu = ({ show, togleModal }) => {
  return (
    <>
      <button type="button" onClick={togleModal}>
        <Earth />
      </button>
      {show && <MobileModal onClose={togleModal} />}
    </>
  );
};

export default MobileMenu;
