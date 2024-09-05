import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';
// import material table from 'material-table';








const Container = styled.div`
margin: 0px 20px 0px 20px;
height: 80vh;
`

const Div = styled.div`
display: flex;
justify-content: start;
align-items: center;
margin-bottom:-10px;
margin-top:-10px;
position: relative;
`

const Input = styled.input`
width: 100%;
border: none;
text-align: start;
padding: 3px 15px;
font-size: 14px;





&:focus{
  border: none;
  outline: none;
}
`


export const columns = [
  // { id: 'show', label: 'Show', minWidth: 50 },
  // { id: 'device', label: 'Device', minWidth: 120 },
  {
    id: 'GI',
    label: 'GI',
    minWidth: 150,
    align: 'right',
   
  },
  {
    id: 'Product',
    label: 'Product',
    minWidth: 70,
    align: 'right',
 
  },
  {
    id: 'Company',
    label: 'Company',
    minWidth: 100,
    align: 'right',

  },
  {
    id: 'Source',
    label: 'Source',
    minWidth: 100,
    align: 'right',

  },
  {
    id: 'ClientCode',
    label: 'Client Code',
    minWidth: 130,
    align: 'right',

  },
  {
    id: 'GroupCode',
    label: 'Group Code',
    minWidth: 130,
    align: 'right',
  
  },
  {
    id: 'ClientName',
    label: 'Client Name',
    minWidth: 130,
    align: 'right',

  },
  {
    id: 'ClientEmail',
    label: 'Client Email',
    minWidth: 190,
    align: 'right',

  },
  {
    id: 'Phone',
    label: 'Phone',
    minWidth: 130,
    align: 'right',

  },
  {
    id: 'TalismaID',
    label: 'Talisma ID',
    minWidth: 150,
    align: 'right',

  },
  {
    id: 'Status',
    label: 'Status',
    minWidth: 150,
    align: 'right',

  },
  {
    id: 'PolicyType',
    label: 'Policy Type',
    minWidth: 150,
    align: 'right',
   
  },
  {
    id: 'EnquiryType',
    label: 'Enquiry Type',
    minWidth: 150,
    align: 'right',
   
  },
  {
    id: 'EnquityDate',
    label: 'Enquity Date',
    minWidth: 150,
    align: 'right',

  },
 
];

function createData(GI, Product, Company, Source, ClientCode, GroupCode, ClientName, ClientEmail, Phone, TalismaID, Status, PolicyType, EnquiryType, EnquityDate) {

  return {GI, Product, Company, Source, ClientCode, GroupCode, ClientName, ClientEmail, Phone, TalismaID, Status, PolicyType, EnquiryType, EnquityDate };
}






export const rows = [
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
  createData('General Insurance', 'Insurance', 'SMC', 'Mobile', 'UIM20345', 'Group3', 'Rakesh', 'Rakesh@gmail.com', '1234567890', '4567890', 'Success', 'Active', 'New', '14-09-20022'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = React.useState(''
  
  // GI: '', 
  // Product: '',
  // Company: '',
  // Source: '', 
  // ClientCode: '',
  // GroupCode: '',
  // ClientName : '',
  // ClientEmail: '',
  // Phone: '',
  // TalismaID: '',
  // Status: '',
  // PolicyType: '',
  // EnquiryType: '',
  // EnquityDate: '',

);


const handleSearch = (e) => {


  setSearch(e.target.value) 
  

}



const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(event.target.value);
  setPage(0);
};





  return (
    <>
    <Container>
    <Paper className='paper' sx={{width: '100%', overflow: 'hidden' }}>
  
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead stickyHeader aria-label="sticky table">
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  options={{filtering:true}}
                  align={column.align}
                  style={{ minWidth: column.minWidth, 
                    fontWeight:'bold', 
                    fontSize:'13px',
                    textAlign: 'start',
                  
                    }}
                >
                  {/* <ColumnLabel column={column}/> */}
                  {column.label}
                  {/* <List />  */}
                </TableCell>
              ))}
            </TableRow>

            {/* search input  */}
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  options={{filtering:true}}
                  style={{ maxWidth: column.minWidth,
                  overflow:'hidden',}}>
                   <Div>
                    {/* <Search style={{color: 'gray', 
                    position:'absolute',
                    flex:'1'}} /> */}
                    <i class="fa fa-search" aria-hidden="true"></i>
                    {/* <Input
                    type='text'
                    value={search}
                    
                    onChange={(e)=> setSearch(e.target.value)}  /> */}

<Input
                    type='text'
                    key={column.id} 
                        align={column.align}
                        style={{minWidth: column.minWidth, 
                        fontSize:'13px',
                        textAlign: 'start',}}
                        options={{filtering:true}}
                    
                    onChange={(e)=> setSearch(e.target.value)}  />


<br/>
                  </Div> 
                  
              </TableCell>
                ))}
            </TableRow>
            
          </TableHead>
          <TableBody>
            {rows
            .filter((val) => {
                if(search===''){
                  return val;
                }
               
            })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow className='tablerow' hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns .map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell 
                        key={column.id} 
                        align={column.align}
                        style={{minWidth: column.minWidth, 
                        fontSize:'13px',
                        textAlign: 'start',
                       }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Container>

</>
  );
            }
