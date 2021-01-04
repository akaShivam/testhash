/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
  return (
    <Link to={props.destination}>Go to next</Link>
  );
}