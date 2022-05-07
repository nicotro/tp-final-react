import { useNavigate } from "react-router-dom"

export const withNavigate = (Composant) => props => {
    const navigate = useNavigate()
    return (
        <Composant {...props} navigate={navigate} />
    )
}