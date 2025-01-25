import Logo from './Logo';
import List from './List';
import Inputbox from './Inputbox';
import Icons from './Iconss';
import './Navbar.css';
function Navbar() {
    return (
        <> 
           <div className="navbar">
                <Logo/>
                <List/>
                <Inputbox/>
                <Icons/>
           </div>
        </>
    );
}
export default Navbar;