/* eslint-disable prettier/prettier */
import { useNavigate } from "react-router-dom"

function PedalDisplay() {
    const navigate = useNavigate()
    return <div>
    <button type="button" onClick={() => navigate('/')}>Return to homepage</button>
        
    </div>
}

export default PedalDisplay