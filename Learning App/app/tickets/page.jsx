import { Suspense } from "react"
import Link from "next/link"

// Components
import TicketList from "./TicketList"
import Loading from "../loading"

const TicketListPage = () => {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets</small></p>
                </div>
            </nav>
            <Suspense fallback={<Loading/>}>
                <div className="flex justify-center my-8">
                    <Link href="/tickets/create">
                        <button className="btn-primary">New Ticket</button>
                    </Link>
                </div>
                <TicketList />
		    </Suspense>
        </main>
    )
}

export default TicketListPage