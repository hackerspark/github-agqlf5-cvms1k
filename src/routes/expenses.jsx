import * as React from 'react';

const Expenses = (props) => (
  <main style={{ padding: '1rem 0' }}>
    <h2>Expenses : {props.amount > 100 ? 'Expensive' : 'Cheap'}</h2>
  </main>
);
export default Expenses;
