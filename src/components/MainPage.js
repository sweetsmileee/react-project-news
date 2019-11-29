import React from 'react';
import Block from './Block'
import Article from './Article'
import Health from './Health'
import breakfast from '../img/breakfast.jpeg'
import balls from '../img/balls.jpg'
import walk from '../img/walk.jpg'

function MainPage(props) {
  return (
    <div className="container">

      <h2 className="headingLayout"> Top News </h2>
        <div className="pattern1 pattern">
          <div className="imagetelmo">
            <div className="telmoinfo">
              <img className="telmoimage" src="https://i.udemycdn.com/user/200_H/12514260_337b.jpg" alt="telmo-image"></img>
              <h2 className="telmoH2">Telmo Sampaio</h2>
              <p>I am a self taught Web Developer and I managed to get hired as a Web Developer in Manchester UK, without any college or university degree. My goal with my website and YouTube channel, is to teach people how to code and build websites and ultimately help them get their first job. My website has many premium courses, that will give you all the knowledge you need to apply for your first to be job.</p>
            </div>
          </div>
        </div>
      
        <div className="pattern2 pattern">

          <Article/ >

        <h2 className="headingLayout"> Science </h2>
          <Article/>


          

        </div>

        
      <h2 className="headingLayout"> Technology</h2>

        <div className="pattern3 pattern">
        <h2 className="headingLayout"> Technology</h2>
        {props.cards("technology").map((item, i)=>{
          return <Block key={i} cards={item} />
        } )
        }
 
        </div>
      
        <div className="pattern4 pattern">
        <h2 className="headingLayout"> Entertainment </h2>
        </div>
      
        <div className="pattern5 pattern">


          <Health 
            title = "Burn more fat!"
            content = "Those who exercised before breakfast burned twice the fat!"
            healthimage = {breakfast}
          />
          <Health 
            title = "A walk a day?"
            content = "Just one slow walk a day could lower risk of early death, study finds."
            healthimage = {walk}
          />
          <Health 
            title = "Check your nuts!"
            content = "Man raises awareness of cancer using Chritmas decorations"
            healthimage = {balls}
          />

        <h2 className="headingLayout"> Health</h2>
          <Health />
          <Health />
          <Health />

        </div>
    </div>
  );
}

export default MainPage;
