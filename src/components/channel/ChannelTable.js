import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Button,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CircularProgress from '@material-ui/core/CircularProgress';
import useSdk from 'src/Hooks/useSdk';
import getPaginationSlice from 'src/utils/getPaginationSlice';



const CustomerListResults = ({ channels,postDelete, ...rest }={channels:[],postDelete:()=>null}) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [open, setOpen] = useState({
    active:false,
    id:0,
    isSubmitting:false
  });
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(0);
  const sdk = useSdk()

  const handleClose = () =>{
    setOpen(prev=>({...prev,active:false,id:0}))
  }

  const handleDelete = () =>{
    
    if(open.id){
      setOpen(prev=>({...prev,isSubmitting:true}))
      sdk.Channel.delete({
        id:open.id
      }).then(value=>{
        
        postDelete(value)
        setOpen({active:false,id:0,isSubmitting:false})
      })
      .catch(err=>{
        redirectUnauthorize(err)
        setOpen({active:false,id:0,isSubmitting:false})
      })

    }
  }

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
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
    <Dialog
        open={open.active}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete discord channel?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} 
          endIcon={open.isSubmitting?<CircularProgress size={10} color="primary" />:null} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
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
                    Name
                  </TableCell>
                  <TableCell>
                    Type
                  </TableCell>
                  <TableCell>
                    Server
                  </TableCell>
                  <TableCell>
                    {""}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {channels.slice(...getPaginationSlice(page,limit)).map((channel) => (
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
                      {channel.name}
                    </TableCell>
                    <TableCell>
                      {channel.type[0]}
                    </TableCell>
                    <TableCell>
                      {channel.server.name}
                    </TableCell>
                    <TableCell>
                    <IconButton onClick={()=>setOpen({active:true,id:channel.id})} aria-label="delete">
                        <DeleteIcon color="error" fontSize="large" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={channels.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </>
  );
};

CustomerListResults.propTypes = {
  channels: PropTypes.array.isRequired
};

export default CustomerListResults;
