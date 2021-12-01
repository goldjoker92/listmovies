import React, {useRef, useEffect} from 'react';
import {gsap} from "gsap";
import'./Header.css';

function Header() {

/* ANIMATION*/

  const appTitle = useRef(null)
  const moveLetters = () => {
      gsap.timeline().fromTo(".letter",
        {
            x: -100,
            opacity: 0,
        },
        {
            x:0,
            opacity: 1,
            stagger:0.33,
            delay:0.7,
        }
      ).to("banner-title", {
          y:45,
          delay:0.7
      })
    
  }

  useEffect(() =>{
      moveLetters()
      console.log(appTitle);
  }, [appTitle]);

    return (
        <header>
            <div className="banner-container">
                <h1 ref={appTitle} className="banner-title">

                    <div className="item">
                        <span className="letter">L</span>
                        <span className="letter">i</span>
                        <span className="letter">s</span>
                        <span className="letter">t</span>
                    </div>
                    <div className="item">
                        <span className="letter">o</span>
                        <span className="letter">f</span>
                    </div>
                   
                                            
                    <div className="item">                              
                        <span className="letter">M</span>
                        <span className="letter">o</span>
                        <span className="letter">v</span>
                        <span className="letter">i</span>
                        <span className="letter">e</span>
                        <span className="letter">s</span>
                    </div>
                 </h1>    
            </div>
        <div className="search">
            <form>
               <label for="categorie"><strong>Catégorie</strong></label>
                <select id="categorie"className="categorie">
                <option value="Comedy">Comedy</option>
                <option value="Thriller">Thriller</option>
                <option value="Animation">Animation</option>
                <option value="Drame">Drame</option>
                </select>
   
                <input type="submit" value="Submit"/>
            </form>
        </div>
    </header>
    )
}

export default Header

