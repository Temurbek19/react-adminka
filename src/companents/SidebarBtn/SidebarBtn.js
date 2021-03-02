import '../SidebarBtn/main.scss'

const SidebarBtn = ({title, icon}) => {
    return (
        <button className="sidebar-btn">
            <div className="btn-icon">{icon}</div>
            <span>{title}</span>
        </button>
    )
}

export default SidebarBtn;