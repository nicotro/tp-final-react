import { useParams } from "react-router-dom"

export const withParams = (Composant) => props => {
    const params = useParams()
    return (
        <Composant {...props} params={params} />
    )
}