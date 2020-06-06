import ReactTable from 'react-table';
import "react-table/react-table.css";
import withFixedColumns from 'react-table-hoc-fixed-columns';
import 'react-table-hoc-fixed-columns/lib/styles.css' // important: this line must be placed after react-table css import
 
const ReactTableFixedColumns = withFixedColumns(ReactTable);
render () {
  return (
    <ReactTableFixedColumns
      data={data}
      columns={[
        {
          Header: 'First Name',
          accessor: 'firstName',
          fixed: 'left',
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
          fixed: 'left',
        },
        ...
        {
          Header: 'age',
          accessor: 'age',
          fixed: 'right',
        }
      ]}
    />
  )
};