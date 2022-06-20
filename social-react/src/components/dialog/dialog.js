import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";


export default function FormDialog(props) {  
  const [editValues, setEditValues] = useState({
    id: props.id,
    username: props.username,
    password: props.password,
    firstName: props.firstName,
    lastName: props.lastName,
  });

  const handleEditUser =  () => {
     Axios.put("http://localhost:3305/users",{
        id: editValues.id,
        username: editValues.username,
        password: editValues.password,
        firstName: editValues.firstName,
        lastName: editValues.lastName,
    }).then(() => {
        props.setListCard(
            props.listCard.map((value) => {
                return value.id === editValues.id
                ? {
                    id: editValues.id,
                    username: editValues.username,
                    password: editValues.password,
                    firstName: editValues.firstName,
                    lastName: editValues.lastName,
                }
                : value;
            })
        );
    });
    handleClose();
  };

  const handleDeleteUser = () => {
    Axios.delete(`http://localhost:3305/users/${editValues.id}`).then(() => {
        props.setListCard(
            props.listCard.filter((value) => {
                return value.id !== editValues.id;
            })
        );
    });
    handleClose();
  };



  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = value => {
    setEditValues(prevValues =>({
        ...prevValues,
        [value.target.id]: value.target.value
    }))
  };


  return (

      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            defaultValue={props.username}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            defaultValue={props.password}
            onChange={handleChangeValues}
            type="text"

            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            defaultValue={props.firstName}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            defaultValue={props.lastName}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteUser} color="primary" >
            Excluir
          </Button>
          <Button onClick={handleEditUser} color="primary" >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

  );
}