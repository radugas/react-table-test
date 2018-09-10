import React from 'react';
import { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';


export const url = {
  small: 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
  big: 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
};

export const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true,
  filter: textFilter(),
  
}, {
  dataField: 'firstName',
  text: 'First Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'lastName',
  text: 'Last Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'email',
  text: 'Email',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'phone',
  text: 'Phone',
  sort: true,
  filter: textFilter()
}];

export const pagination = paginationFactory({
    page: 1,
    sizePerPage: 50,
    totalSize: 0,
    hideSizePerPage: true 
  });

export const expandRow = {
    renderer: row => (
      <div>          
        <ul className="list-group">
          <li className="list-group-item">Выбран пользователь: <b>{row.firstName +' '+ row.lastName}</b></li> 
          <li className="list-group-item">Описание: <textarea className="form-control" disabled>{row.description}</textarea></li>                
          <li className="list-group-item">Адрес проживания: <b>{row.address.streetAddress}</b></li>
          <li className="list-group-item">Город: <b>{row.address.city}</b></li>
          <li className="list-group-item">Провинция/штат: <b>{row.address.state}</b></li>
          <li className="list-group-item">Индекс: <b>{row.address.zip}</b></li>
        </ul>          
      </div>
    )
  };




