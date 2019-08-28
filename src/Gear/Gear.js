import React from 'react'
import styles from './styles.css'

const Gear = props => (
  <React.Fragment>
    {/* <style>{styles}</style> */}
    <div className="lds-gear">
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </React.Fragment>
)

export default Gear
