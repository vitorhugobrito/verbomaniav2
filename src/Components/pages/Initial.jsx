import React, {useState, useEffect} from 'react'
import style from './layouts/Initial.module.css'


function Initial() {

    const targetColors = ['#050742','#f70019','#191e42'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentColorIndex((prevIndex) =>
            (prevIndex + 1) % targetColors.length
        );
        }, 5000);
        return () => clearInterval(interval);
  }, []);

  function Jogar(){
    window.location.href = '/jogar';
  }

    return (
        <div className={style.containerInitial} style={{backgroundColor: targetColors[currentColorIndex]}}>
            <h1 className={style.title}>VerboMania</h1>
            <button onClick={Jogar} className={style.buttonInitial}><p style={{color: "#fff"}}>Jogar</p></button>
        </div>
    )
}

export default Initial