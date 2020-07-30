import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
  render() {
    return (
      <>
        <Link to='/' className='cloud-link'>
          <div className='cloud-wrapper'>
            <div className='cloud-text'>Feed Me</div>
          </div>
        </Link>
      </>
    );
  }
}
