/* eslint-disable prettier/prettier */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import KnobControl from './KnobControl';
import './PedalDisplay.style.css';

import BtnOffImg from '../../assets/Alpha-Omicron-assets/Push-Button-Off-134x134.webp';
import BtnOnImg from '../../assets/Alpha-Omicron-assets/Push-Button-On-134x134.webp';
import LedOffImg from '../../assets/Alpha-Omicron-assets/LED-Off-119x119.webp';
import LedOnImg from '../../assets/Alpha-Omicron-assets/LED-On-119x119.webp';
import ActOffImg from '../../assets/Alpha-Omicron-assets/Actuator-Off-166x166.webp';
import ActOnImg from '../../assets/Alpha-Omicron-assets/Actuator-On-166x166.webp';
import ChasisImg from '../../assets/Alpha-Omicron-assets/Chasis-1000x1000.webp';

interface ToggleButtonProps {
  isOn: boolean;
  onToggle: () => void;
  onImg: string;
  offImg: string;
  className: string;
  ariaLabel: string;
}

function ToggleButton({
  isOn,
  onToggle,
  onImg,
  offImg,
  className,
  ariaLabel,
}: ToggleButtonProps) {
  return (
    <button
      type="button"
      className={`component interactable ${className}`}
      onClick={onToggle}
      aria-pressed={isOn}
      aria-label={ariaLabel}
    >
      <img src={isOn ? onImg : offImg} alt="" />
    </button>
  );
}

function PedalDisplay() {
  const navigate = useNavigate();
  const [pedalWidth, setPedalWidth] = useState('748px');
  const [isMainOn, setIsMainOn] = useState(false);
  const [isGrowlOn, setIsGrowlOn] = useState(false);
  const [isBiteOn, setIsBiteOn] = useState(false);

  return (
    <div className="pedal-page">
      <div>
        <button
          type="button"
          onClick={() => setPedalWidth('345px')}
          className={pedalWidth === '345px' ? 'active' : ''}
        >
          Mobile Layout
        </button>
        <button
          type="button"
          onClick={() => setPedalWidth('748px')}
          className={pedalWidth === '748px' ? 'active' : ''}
        >
          Tablet Layout
        </button>
        <button
          type="button"
          onClick={() => setPedalWidth('1024px')}
          className={pedalWidth === '1024px' ? 'active' : ''}
        >
          Laptop Layout
        </button>
      </div>

      <div
        id="pedal-container"
        style={{
          width: pedalWidth,
          maxWidth: '90vh', 
          position: 'relative',
          margin: 'auto',
        }}
      >
        <img
          src={ChasisImg}
          className="chasis-image"
          alt="Alpha Omicron Chasis"
        />

        <KnobControl className="blend-knob" />
        <KnobControl className="mod-knob" />
        <KnobControl className="level-knob" />
        <KnobControl className="drive-knob" />

        <ToggleButton
          isOn={isGrowlOn}
          onToggle={() => setIsGrowlOn(!isGrowlOn)}
          onImg={BtnOnImg}
          offImg={BtnOffImg}
          className="push-button growl-btn"
          ariaLabel="Toggle Growl"
        />

        <ToggleButton
          isOn={isBiteOn}
          onToggle={() => setIsBiteOn(!isBiteOn)}
          onImg={BtnOnImg}
          offImg={BtnOffImg}
          className="push-button bite-btn"
          ariaLabel="Toggle Bite"
        />

        <img
          src={isMainOn ? LedOnImg : LedOffImg}
          className="component led led-light"
          alt={`Pedal Status: ${isMainOn ? 'On' : 'Off'}`}
        />

        <ToggleButton
          isOn={isMainOn}
          onToggle={() => setIsMainOn(!isMainOn)}
          onImg={ActOnImg}
          offImg={ActOffImg}
          className="actuator main-actuator"
          ariaLabel="Main Switch"
        />
      </div>
      <button type="button" onClick={() => navigate('/')}>
        Return to homepage
      </button>
    </div>
  );
}

export default PedalDisplay;
