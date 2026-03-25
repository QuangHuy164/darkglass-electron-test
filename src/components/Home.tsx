/* eslint-disable prettier/prettier */
import { useNavigate } from "react-router-dom"

function Home ()  {
    const navigate = useNavigate()
  return (
    <div>
        <h2>Darkglass Products</h2>
        <button type='button' onClick={() => navigate('/fetch')}>Products Listing</button>
        <button type="button" onClick={() => navigate('/dragdrop')}>Drag and Drop</button>
        <button type="button" onClick={() => navigate('/pedal')}>Display Pedal</button>
    </div>
  )
}

export default Home