import React from "react";
import { Container, Paper } from "@material-ui/core/";
import MaterialTable, { MTableToolbar } from 'material-table'


export const SearchResults=() => {

  const columns = [
    {title:'Date', field:'CON_DATE'},
    {title:'Contributor', field:'CON_NAME'},
    {title:'Candidate', field:'cand_name'},
    {title:'Committee', field:'CMT_NAME', render:(data)=>{
      return `${data.CMT_NAME}  [${data.CON_ID}]`
    }},
    {title:'Amount', field:'CON_AMOUNT'}
  ]
  
  // Import Candidate Contributions Data
  const data = require('./data.json');
  console.log(data);

  return (
    <Container>
      <Paper>
        <MaterialTable title=""
          columns={columns}
          data={data}
          localization={{
            toolbar: {
              searchPlaceholder: 'Search'
            }
          }}
          options={{
            exportButton: true,
            headerStyle: {
              fontSize: 20,
              backgroundColor: '#61c6de'
            },
            exportFileName: 'Candidate Contributions'
          }} 
          components={{
            Toolbar: props => (
                <div 
                  style={{ 
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: '#f6f6f6' 
                  }}
                >
                  <MTableToolbar {...props} />
                </div>
              
            )
          }}  
        />
      </Paper>
    </Container>
  );
}

export default SearchResults;
