import TicketsTop from '../../companents/TicketsTop/TicketsTop';
import Table from '../../containers/Table/Table';

import '../Tickets/main.scss'

const Tickets = () => {
    return (
        <div className="tickets">
            <TicketsTop title="Tickets"/>
            <Table/>
        </div>
    )
}

export default Tickets;