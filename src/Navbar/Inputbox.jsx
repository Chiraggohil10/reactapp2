import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
function Inputbox() {
  return (
    <div className="inputboxs">
        <IoLocationOutline className="iconssin"/>
        <input type="text" placeholder="Select Location"/>
        <CiSearch className="iconssin"/>
        <input type="text" placeholder="Seach For Services"/>
    </div>
  )
}

export default Inputbox;