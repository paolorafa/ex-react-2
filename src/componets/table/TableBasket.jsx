import React from 'react';
import Table from 'react-bootstrap/Table';

function TableBasket({title,price, asin}) {



  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Libro</th>
          <th>Prezzo</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{asin}</td>
          <td>{title}</td>
          <td>{price}</td>
          
        </tr>
        
       
      </tbody>
    </Table>
  );
}

export default TableBasket;