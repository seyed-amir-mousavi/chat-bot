import React , {useEffect} from 'react';
import style from './loading.module.css'


const Loading = () => {

    useEffect(() => {

        const elements = document.getElementsByClassName(style.section)[0].childNodes

        for( let i = 0 ; i < elements.length ; i++){
            if( i%2 === 0){
                elements[i].classList.add(style.divL)
            }
            else{
                if(i === 9)
                    elements[i].style.opacity = 0
                else
                    elements[i].classList.add(style.divR)
            }
        }

    }, []);

    return ( 
        <>
            <section className={style.section}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={style.logoContainer}><label className={style.logo}>GS</label></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </section>
        </>
    );
}

export default Loading;