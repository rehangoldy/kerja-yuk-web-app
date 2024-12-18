import { Bell } from "lucide-react"
import { Link } from "react-router-dom"



export function Header() {
    return (
        <div className="container mx-auto max-w-lg">
            <header className="flex items-start justify-between items-center p-4">
                <h1 className="text-2xl font-bold text-red-500">Kerja Yuk!</h1>
                <button className="p-2">
                    <Link to={"/notification"}>
                        <Bell className="w-6 h-6 text-gray-600" />
                    </Link>

                </button>
            </header>
        </div>

    )
}