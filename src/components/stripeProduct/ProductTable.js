import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import useSdk from 'src/Hooks/useSdk';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CircularProgress from '@material-ui/core/CircularProgress';
import getPaginationSlice from 'src/utils/getPaginationSlice';




  const CustomerListResults = ({ channels,postDelete,update,data, ...rest }={channels:[],postDelete:()=>null,update:null,data}) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  
    
  



  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = channels.map((channel) => channel.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    update({limit:event.target.value})
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    if(newPage>page){
      update({limit,starting_after:channels[channels.length-1].id})
    }else if(newPage<page){
      update({limit,ending_before:channels[channels.length-1].id})
    }
  };

  return (
    <>
      <Card {...rest}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.length === channels.length}
                      color="primary"
                      indeterminate={
                        selectedCustomerIds.length > 0
                        && selectedCustomerIds.length < channels.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>
                    Id
                  </TableCell>
                  <TableCell>
                    Product Name
                  </TableCell>
                  <TableCell>
                    Type
                  </TableCell>
                  <TableCell>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {channels.map((channel) => (
                  <TableRow
                    hover
                    key={channel.id}
                    selected={selectedCustomerIds.indexOf(channel.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCustomerIds.indexOf(channel.id) !== -1}
                        onChange={(event) => handleSelectOne(event, channel.id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      {channel.id}
                    </TableCell>
                    <TableCell>
                        {channel.name.split("-").join(" ")}
                    </TableCell>
                    <TableCell>
                        {channel.type}
                    </TableCell>
                    <TableCell>
                      <Chip 
                      color={channel.active?"primary":"secondary"} 
                      size="small" 
                      label={channel.active?"active":"inactive"} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={!data.has_more?0:-1}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[20,50,100,200]}
          
        />
      </Card>
    </>
  );
};

CustomerListResults.propTypes = {
  channels: PropTypes.array.isRequired
};

export default CustomerListResults;
