import TicketDetails from "./TicketDetails"

const TicketDetailsPage = ({ params }) => {

    return (
        <main>
            <TicketDetails ticketId={ params.id }/>
        </main>
    )
}

export default TicketDetailsPage