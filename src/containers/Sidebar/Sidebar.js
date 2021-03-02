import { Link } from 'react-router-dom';

import SidebarBtn from '../../companents/SidebarBtn/SidebarBtn';
import {
    OverviewIcon,
    TicketsIcon,
    IdeasIcon,
    ContactsIcon,
    AgentsIcon,
    ArticlesIcon,
    SettingsIcon,
    SubIcon
} from '../../assets/icons/Icons';

import MainLogo from '../../assets/images/icon/logo.svg';

import './main.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <a href="javascript:void(0)" className="logo-holder">
                <img src={MainLogo} alt="" className="sidebar-logo"/>
                <span>Dashboard Kit</span>
            </a>

            <Link to="/overview">
                <SidebarBtn title="Overview" icon={<OverviewIcon/>}/>
            </Link>
            <Link to="/tickets">
                <SidebarBtn title="Tickets" icon={<TicketsIcon/>}/>
            </Link>
            <Link to="/ideas">
                <SidebarBtn title="Ideas" icon={<IdeasIcon/>}/>
            </Link>
            
            <SidebarBtn title="Contacts" icon={<ContactsIcon/>}/>
            <SidebarBtn title="Agents" icon={<AgentsIcon/>}/>
            <SidebarBtn title="Articles" icon={<ArticlesIcon/>}/>
            <div className="sidebar-border"></div>
            <SidebarBtn title="Settings" icon={<SettingsIcon/>}/>
            <SidebarBtn title="Subscription" icon={<SubIcon/>}/>
        </div>
    )
}

export default Sidebar;