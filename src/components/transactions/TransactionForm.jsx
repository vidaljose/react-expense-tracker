import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState"

export const TransactionForm = () => {
    const { addTransaction } = useGlobalState()

    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0)
    
    const onSubmit = (e) => {
        e.preventDefault()
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount: +amount
        })
        setAmount(0)
        setDescription("")
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text"
                    placeholder="Enter a description"
                    value={description}
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    onChange={(e) => setDescription(e.target.value)} />
                <input type="number"
                    step="0.01"
                    value={amount}
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter an Amount" />
                <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}