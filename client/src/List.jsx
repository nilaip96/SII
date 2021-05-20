import React from 'react';
import styled from 'styled-components';
import styles from './styles.jsx';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    {props.data.map((procedure)=><ListItem key={procedure.name} procedure={procedure}/>)}
  </div>
)

export default List;
