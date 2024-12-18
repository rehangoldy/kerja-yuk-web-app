

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomePage } from "./views/HomePage"
import { NotificationPage } from "./views/NotificationPage"

export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/notification" element={<NotificationPage />} />
            </Routes>
        </Router>

    )
}