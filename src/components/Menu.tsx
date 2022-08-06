import { BsPlus } from 'react-icons/bs';
import {Component} from "react";

class Menu extends Component<{}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="absolute top-[10%] left-[12.5%] h-1/5 w-3/4 m-0 flex flex-col
                        bg-gray-800 text-white shadow-lg text-center">
                <h1 className="text-3xl m-5">Welcome to WeView</h1>
                <h1 className="text-2xl">Click the plus button to make a post</h1>
                <div className="absolute top-[calc(100%-64px)] left-[calc(100%-64px)] h-16 w-16 m-0 flex flex-col
                        bg-gray-900 shadow-lg text-center">
                    <MenuIcon icon={<BsPlus size="32"/>} />
                </div>
            </div>
        );
    }
}

const MenuIcon = ({icon}: {icon: any}) => {
    return(
        <div className="sidebar-icon">
            {icon}
        </div>
    );
}

export default Menu;