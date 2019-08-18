import React from 'react'
import styles from './styles.css'

const Hourglass = props => (
  <React.Fragment>
    <style>{styles}</style>
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </React.Fragment>
)

export default Hourglass
