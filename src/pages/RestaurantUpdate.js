import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import * as AdminService from "../Services/AdminService";
import { useParams } from 'react-router-dom';
import {url} from '../Services/ApiConfig'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: theme.spacing(14),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function EditRestaurant() {
  const classes = useStyles();

  const { id } = useParams();

  useEffect(() => {
    fetch(url + "/restaurantes/get/" + id + "/")
      .then(res => res.json())
      .then(
        (result) => {
            
            setRid(result.id)
            setRnombre(result.Nombre)
            setRcategoria(result.Categoria)
            setRdescripcion(result.Descripcion)
            setRestado(result.Estado)
            setRhorario(result.Horario)
            setRimagen(result.Imagen)
            setRlocalizacion(result.Localización)
            setRtelefono(result.Telefono)
            setRtiempoEntrega(result.TiempoEntrega)
            // console.log(result.id)
        }
      )
  }, [id])

    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            // 'id': rid,
            'Nombre': rnombre,
            // 'Categoria': [rcategoria],
            'Descripcion': rdescripcion,
            'Estado': parseInt(restado),
            'Horario': rhorario,
            'Imagen': rimagen,
            'Localizacion': rlocalizacion,
            'Telefono': rtelefono, 
            'TiempoEntrega': rtiempoEntrega
        }
        const result = AdminService.updateRestaurant(rid, data)
            // console.log(result)
            .then(
                (result) => {
                    // alert(result['message'])
                    // if (result['status'] === 'ok') {
                    alert("Se editó el restaurante correctamente")
                    window.location.href = '/';
                    // }
                }
            ).catch(error => {
                console.log(error)
            }
            )
    }

    const [rid, setRid] = useState('');
    const [rnombre, setRnombre] = useState('');
    const [rcategoria, setRcategoria] = useState('');
    const [rdescripcion, setRdescripcion] = useState('');
    const [restado, setRestado] = useState('');
    const [rlocalizacion, setRlocalizacion] = useState('');
    const [rtelefono, setRtelefono] = useState('');
    const [rhorario, setRhorario] = useState('');
    const [rimagen, setRimagen] = useState('');
    const [rtiempoEntrega, setRtiempoEntrega] = useState('');

    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Restaurante
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="rid"
                                name="id"
                                variant="outlined"
                                required
                                fullWidth
                                id="id"
                                label="id"
                                value={rid}
                                onChange={(e) => setRid(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="nombre"
                                label="Nombre"
                                value={rnombre}
                                onChange={(e) => setRnombre(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="categoria"
                                label="Categoria"
                                value={rcategoria}
                                onChange={(e) => setRcategoria(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="estado"
                                label="Estado"
                                value={restado}
                                onChange={(e) => setRestado(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="horario"
                                label="Horario"
                                value={rhorario}
                                onChange={(e) => setRhorario(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="descripcion"
                                label="Descripcion"
                                value={rdescripcion}
                                onChange={(e) => setRdescripcion(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="localizacion"
                                label="Localizacion"
                                value={rlocalizacion}
                                onChange={(e) => setRlocalizacion(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="telefono"
                                label="Telefono"
                                value={rtelefono}
                                onChange={(e) => setRtelefono(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="imagen"
                                label="Imagen"
                                value={rimagen}
                                onChange={(e) => setRimagen(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="tiempoEntrega"
                                label="TiempoEntrega"
                                value={rtiempoEntrega}
                                onChange={(e) => setRtiempoEntrega(e.target.value)}
                            />
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Editar
                        </Button>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}