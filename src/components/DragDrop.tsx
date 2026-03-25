/* eslint-disable prettier/prettier */
import { useNavigate } from "react-router-dom"

function DragDrop() {
    const navigate = useNavigate()
    return <div>Drag and Drop
    <button type="button" onClick={() => navigate('/')}>Return to homepage</button>
</div>
        

}

export default DragDrop