import './OverviewTable.scss';

const OverviewTable = ({title, number}) => {
    return (
        <button className="tableButton">
            <h3>{title}</h3>
            <h1>{number}</h1>
        </button>
    )
}

export default OverviewTable;