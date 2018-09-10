import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import {columns, pagination, expandRow} from './TableSettings';
import filterFactory from 'react-bootstrap-table2-filter';

const Table = ({data}) => {
  return ( 
    <BootstrapTable 
        keyField='id'
        data={ data }
        columns={ columns } 
        filter={ filterFactory() }        
        expandRow={ expandRow }
        pagination={ pagination }
        striped = {true}
        hover={true}
    />        
  );
}

export default Table;