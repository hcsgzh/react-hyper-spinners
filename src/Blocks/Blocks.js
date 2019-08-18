import React from 'react'
import styles from './styles.css'

const Blocks = props => (
  <React.Fragment>
    <style>{styles}</style>
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </React.Fragment>
)

export default Blocks
