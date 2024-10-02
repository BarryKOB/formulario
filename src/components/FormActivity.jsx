import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select'; 

import Divider from '@mui/material/Divider';

import Rating from '@mui/material/Rating';

import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Grid2 from '@mui/material/Grid2';
import { Chip, DialogActions, DialogContent, DialogContentText } from '@mui/material'



function FormActivity() {
  const inicialData = {name:'', apellido:'', age:'', languaje: '', rating: 0, check: false, genero: ''}
  const [data,setData] = useState(inicialData)
  const [open,setOpen] = useState(false)

  const handleSubmit = (e) => {
    //Para que no mande el formulario, sino que haga lo que yo le diga
    e.preventDefault();  
    console.log(data)
  }

  const handleChangeName = (e) =>{
    setData({
      ...data,
      name: e.target.value
    })
    console.log(data.name);
  }

  const handleChangeApellido = (e) =>{
    setData({
      ...data,
      apellido: e.target.value
    })
    console.log(data.apellido);
  }

  const handleChangeAge = (e) =>{
    setData({
      ...data,
      age: e.target.value
    })
    console.log(data.age);
  }

  const  handleChangelanguaje = (e) => {
    setData({
      ...data,
      languaje: e.target.value})
    console.log(data.languaje);
  }

  const  handleChangeRating = (newValue) => {
    setData({
      ...data,
      rating: newValue})
  }

  const handleChangeCheck = (e) => {
    setData({
      ...data,
      check: e.target.checked})
  };

  const handleChangeGenero = (e) => {
    setData({
      ...data,
      genero: e.target.value})
  };

  const handleClear = () => {
    setData(inicialData)
  };

  const dialogo = () => {
    setOpen(true);
  }

  const hsndleClose = () => {
    setOpen(false);
  }

  return(
    <>
    <Container sx={{marginBottom: "70px"}}>
      <Paper elevation={3} square={true} sx={{textAlign:'center'}}>
        <Box sx={{padding: "20px"}}
          component='form'
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid size={{xs:12, sm:5, md:4}}>
              <TextField 
                required
                label='Nombre'
                variant='outlined'
                fullWidth
                value= {data.name}
                onChange={handleChangeName}
              />
            </Grid>
            <Grid size={{xs:12, sm:5, md:4}}>
              <TextField 
                  required
                  label='Apellidos'
                  variant='outlined'
                  fullWidth
                  value= {data.apellido}
                  onChange={handleChangeApellido}
              />
            </Grid>
            <Grid size={{xs:12, sm:2, md:4}}>
              <TextField 
                  required
                  label='Edad'
                  variant='outlined'
                  fullWidth
                  value= {data.age}
                  onChange={handleChangeAge}
              />
            </Grid>
            <Grid size={{xs:12, sm:6, md:4}}>
              <FormControl>
                <FormLabel  id="demo-radio-buttons-group-label">Genero</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="femenino"
                  name="radio-buttons-group"
                  value = {data.genero}
                  onChange={handleChangeGenero}
                >
                  <FormControlLabel required value="femenino" control={<Radio />} label="Femenino" />
                  <FormControlLabel required value="masculino" control={<Radio />} label="Masculino" />
                  <FormControlLabel required value="otro" control={<Radio />} label="Otro" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid size={{xs:12, sm:6, md:4}}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Lenguaje de programacion favorito</InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={data.languaje}
                  label="Lenguaje de programacion favorito"
                  onChange={handleChangelanguaje}
                >
                  <MenuItem value={"Javascript"}>Javascript</MenuItem>
                  <MenuItem value={"Java"}>Java</MenuItem>
                  <MenuItem value={"Python"}>Python</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={2}>
            <Grid >
              <Typography component="legend">Puntua esta encuesta</Typography>
            </Grid> 
            <Grid >
              <Rating
                name="simple-controlled"
                value={data.rating}
                onChange={(event, newValue) => {
                  handleChangeRating(newValue);
                }}
              />
            </Grid>
          </Grid>
          <Grid>
            <FormGroup>
              <FormControlLabel
               id='check'
               control={<Checkbox checked={data.check} />} 
               onChange={handleChangeCheck}
               label="Aceptar terminos y condiciones" 
               />
            </FormGroup>
          </Grid> 
          <Dialog 
              open={open}
              onClose={hsndleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle>{"Confirmacion"}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  ¿Estas seguro de mandar la encuesta?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={hsndleClose}>No</Button>
                <Button onClick={hsndleClose} autoFocus>Si</Button>
              </DialogActions>
          </Dialog>
          <Grid container spacing={2}>
            <Grid size={{xs:12, sm:6, md:6}}>
                <Button disabled={!data.check} id='but' onClick={dialogo} type="submit" variant='contained' fullWidth>Enviar</Button>
            </Grid>
            <Grid size={{xs:12, sm:6, md:6}}>
                <Button type="button" onClick={handleClear} variant='outlined' fullWidth>Limpiar</Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
    </>
  );
}
   
  

export default FormActivity