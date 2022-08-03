import { BsPlus } from 'react-icons/bs';

const Menu = () => {
    return(
        <div className="fixed top-[25%] left-1/2 h-16 w-16 m-0 flex flex-col
                        bg-gray-900 text-white shadow-lg text-center">
            <MenuIcon icon={<BsPlus size="32"/>} />
        </div>
    );
};

const MenuIcon = ({icon}: {icon: any}) => {
    return(
        <div className="sidebar-icon">
            {icon}
        </div>
    );
}

export default Menu;