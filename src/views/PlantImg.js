import React,{useState} from 'react';
import p00 from '../assets/plant/p00.png';
import p01 from '../assets/plant/p01.png';
import p02 from '../assets/plant/p02.png';
import p03 from '../assets/plant/p03.png';
import p04 from '../assets/plant/p04.png';
import p05 from '../assets/plant/p05.png';
import p06 from '../assets/plant/p06.png';
import p07 from '../assets/plant/p07.png';
import p08 from '../assets/plant/p08.png';
import p09 from '../assets/plant/p09.png';
import p10 from '../assets/plant/p10.png';
import p11 from '../assets/plant/p11.png';
import p12 from '../assets/plant/p12.png';
import p13 from '../assets/plant/p13.png';
import p14 from '../assets/plant/p14.png';
import p15 from '../assets/plant/p15.png';
import p16 from '../assets/plant/p16.png';
import p17 from '../assets/plant/p17.png';
import p18 from '../assets/plant/p18.png';
import p19 from '../assets/plant/p19.png';
import p20 from '../assets/plant/p20.png';
import p21 from '../assets/plant/p21.png';
import p22 from '../assets/plant/p22.png';
import p23 from '../assets/plant/p23.png';
import p24 from '../assets/plant/p24.png';
import p25 from '../assets/plant/p25.png';
import p26 from '../assets/plant/p26.png';
import p27 from '../assets/plant/p27.png';
import p28 from '../assets/plant/p28.png';
import p29 from '../assets/plant/p29.png';
import p30 from '../assets/plant/p30.png';
import p31 from '../assets/plant/p31.png';
import p32 from '../assets/plant/p32.png';
import p33 from '../assets/plant/p33.png';
import p34 from '../assets/plant/p34.png';
import p35 from '../assets/plant/p35.png';
import p36 from '../assets/plant/p36.png';
import p37 from '../assets/plant/p37.png';
import p38 from '../assets/plant/p38.png';
import p39 from '../assets/plant/p39.png';
import p40 from '../assets/plant/p40.png';
import p41 from '../assets/plant/p41.png';
import p42 from '../assets/plant/p42.png';
import p43 from '../assets/plant/p43.png';
import p44 from '../assets/plant/p44.png';
import p45 from '../assets/plant/p45.png';
import p46 from '../assets/plant/p46.png';
import p47 from '../assets/plant/p47.png';
import p48 from '../assets/plant/p48.png';
import p49 from '../assets/plant/p49.png';
import p50 from '../assets/plant/p50.png';
import p51 from '../assets/plant/p51.png';
const plantStates = [
    p00,
    p01,
    p02,
    p03,
    p04,
    p05,
    p06,
    p07,
    p08,
    p09,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
    p19,
    p20,
    p21,
    p22,
    p23,
    p24,
    p25,
    p26,
    p27,
    p28,
    p29,
    p30,
    p31,
    p32,
    p33,
    p34,
    p35,
    p36,
    p37,
    p38,
    p39,
    p40,
    p41,
    p42,
    p43,
    p44,
    p45,
    p46,
    p47,
    p48,
    p49,
    p50,
    p51,
];
const ms = 100;
const sleep=(ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
}
const PlantImg=(props)=>{
    const [currentState,setCurrentState] = useState(props.happiness);
    const animate = async ()=>{
        const step = currentState>props.happiness?-1:1;
        await sleep(ms);
        setCurrentState(currentState+step);
    }
    if(props.happiness!==currentState){
        animate();
    }
    return(
        <>
        {
            plantStates.map((state,i)=><img key={i} src={state} style={{display:i===currentState?'block':'none'}} alt='plant'/>)
        }
        </>
    );
};
export default PlantImg;