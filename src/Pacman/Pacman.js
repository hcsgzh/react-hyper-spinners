import React from 'react'
import styles from './styles.css'

const Pacman = props => (
  <React.Fragment>
    {/* <style>{styles}</style> */}
    <div className="lds-pacman">
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  </React.Fragment>
)

export default Pacman
