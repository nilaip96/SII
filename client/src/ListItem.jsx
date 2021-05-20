import React from 'react';

const ListItem = ({procedure}) => (
  <div>
    <hr/>
    <p>
      Name
      <br/>
      {procedure.name}
    </p>
    <p>
      Description
      <br/>
      {procedure.description}
    </p>
    <p>
      Insured Cost
      <br/>
      {procedure.insuredCost}
    </p>
    <p>
      Uninsured Cost
      <br/>
      {procedure.uninsuredCost}
    </p>
  </div>
)

export default ListItem;