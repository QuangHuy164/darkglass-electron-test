/* eslint-disable prettier/prettier */
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

// import KnobImg from '../../assets/Alpha-Omicron-assets/Knob-189x189.webp'
// import BtnOffImg from '../../assets/Alpha-Omicron-assets/Push-Button-Off-134x134.webp';
// import BtnOnImg from '../../assets/Alpha-Omicron-assets/Push-Button-On-134x134.webp';
// import LedOffImg from '../../assets/Alpha-Omicron-assets/LED-Off-119x119.webp';
// import LedOnImg from '../../assets/Alpha-Omicron-assets/LED-On-119x119.webp';
// import ActOffImg from '../../assets/Alpha-Omicron-assets/Actuator-Off-166x166.webp';
// import ActOnImg from '../../assets/Alpha-Omicron-assets/Actuator-On-166x166.webp';
// import ChasisImg from '../../assets/Alpha-Omicron-assets/Chasis-1000x1000.webp';


function PedalDisplay() {
  const navigate = useNavigate();
  const [isMainOn, setIsMainOn] = useState(false);

  return (
     <div>
      <button type="button" onClick={() => navigate('/')}>
        Return to homepage
      </button>

      <button type='button'>
        <img
        // src={isMainOn ? ActOnImg : ActOffImg}
        src='../../assets/Alpha-Omicron-assets/Actuator-On-166x166.webp'
        className="actuator-image"
        alt={isMainOn ? 'Bypass Engaged' : 'Bypass Disengaged'}
      />
      </button>
     </div>)
  //     id="pedal-container"
  //     style={{ width: '748px', position: 'relative', margin: 'auto' }}
  //   
  //     <button type='button'>
  //        <img
  //       src={isMainOn ? LedOnImg : LedOffImg}
  //       className="component led led-light"
  //       alt={isMainOn ? 'Pedal Active' : 'Pedal Inactive'}
  //     />
  //     </button>
     
 
}

export default PedalDisplay;
