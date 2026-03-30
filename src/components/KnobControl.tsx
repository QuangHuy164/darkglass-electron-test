/* eslint-disable prettier/prettier */
import KnobImg from '../../assets/Alpha-Omicron-assets/Knob-189x189.webp'
import './PedalDisplay.style.css'

interface KnobControlProps {
  className: string;
}

export default function KnobControl({ className = '' }: KnobControlProps) {

  return (
    <div  className={`component interactable knob ${className}`}>
      <img src={KnobImg} alt="Knob" style={{width: '100%', display: 'block'}} />
    </div>
  );
}