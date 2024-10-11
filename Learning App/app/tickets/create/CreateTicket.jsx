'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

const CreateTicket = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (event) => {
        setIsLoading(true)
        event.preventDefault();
        console.log('Values are -->', title, body, priority)
        const newTicket = { title, body, priority, user_email: 'mario@sunshine.es' }
        await fetch('http://localhost:3005/tickets', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(newTicket)
        })
        setIsLoading(false)
        router.refresh();
        router.push('/tickets')
    }

    return (
        <main>
            <h2 className="text-primary">Add a New Ticket</h2>
            <form className="w-1/2" onSubmit={handleSubmit}>
                <label>
                    <span>Title</span>
                    <input required type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
                </label>
                <label>
                    <span>Body</span>
                    <textarea required type="text" value={body} onChange={(event) => setBody(event.target.value)}/>
                </label>
                <label>
                    <span>Priority</span>
                    <select required name="select" value={priority} onChange={(event) => setPriority(event.target.value)}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>
                <button
                    className="btn-primary"
                    disabled={isLoading ? true: false}
                >{
                    isLoading ? 'Adding...' : 'Add Ticket'}
                </button>
            </form>
        </main>
    )
}

export default CreateTicket