import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
import * as AdminService from "../Services/AdminService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    marginLeft: theme.spacing(14),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function RestaurantList() {
  const classes = useStyles();

  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    RestaurantsGet()
  }, [])
  
  const RestaurantsGet = () => {
    AdminService.getRestaurants()
      .then((result) => {
        setRestaurants(result);
      })
  }

  const UpdateRestaurant = id => {
    window.location = '/UpdateRestaurant/' + id
  }

  const RestaurantDelete = (id) => {
    // console.log("sdfsdf}", id)
    AdminService.removeRestaurant(id)
    .then(
      (result) => {
        alert(result)
        window.location.reload(false);
      }
    )
  }

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">    
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Restaurantes
              </Typography>
            </Box>
            <Box>
              <Link to="/createRestaurant">
                <Button variant="contained" color="primary">
                  Agregar
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="left">Telefono</TableCell>
                <TableCell align="center">Acción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurants.map((rest) => (
                <TableRow key={rest.id}>
                  <TableCell align="right">{rest.id}</TableCell>
                  <TableCell align="center">{rest.Nombre}</TableCell>
                  <TableCell align="left">{rest.Telefono}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => UpdateRestaurant(rest.id)}>Editar</Button>
                      <Button onClick={() => RestaurantDelete(rest.id)}>Eliminar</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>
    
  );
}