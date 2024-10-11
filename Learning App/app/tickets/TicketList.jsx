import Link from "next/link";

const getTickets = async () => {
    const response = await fetch('http://localhost:3005/tickets',
        { next: 
            { revalidate: 0 }
        }
    )
    const result = await response.json()

    return result;
}

const TicketList = async () => {
    const tickets = await getTickets();

    return (
        <>
            { tickets && tickets.length === 0 && (
                <p className="text-center">There are no open tickets</p>
            )}
            { tickets && tickets.map((ticket) => (
                <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
                    <div className="card my-5">
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200) + '...'}</p>
                        <div className={`pill ${ ticket.priority }`}>
                            { ticket.priority} priority
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default TicketList