import React from 'react'
// import Section from '../components/section'
import Socials from '../components/socials'

import style from './1-intro.module.css'


export default () => (
  // <Section title={title} subtitle={subtitle}>

    <div class='row' style={{marginTop: '8rem'}}>
      <div class={style.profile}>
        <img src={require('../images/headshot.jpeg')} alt='Headshot of Bryceson Laing' class={style.headshot} />

        <Socials />
      </div>

      <div class={style.blurb}>
        <h1>Howdy!</h1>
        Howdy!
      </div>
    </div>
      
  // </Section>
)