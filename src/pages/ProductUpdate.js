import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import * as AdminService from "../Services/AdminService";
import { useParams } from 'react-router-dom';
import { url } from '../Services/ApiConfig'

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

export default function EditProduct() {
    const classes = useStyles();



    const { id } = useParams();

    useEffect(() => {
        fetch(url + "/productos/get/" + id + "/")
            .then(res => res.json())
            .then(
                (result) => {
                    setRid(result.id)
                    setRnombre(result.Nombre)
                    setRcategoria(result.Categoria)
                    setRdescripcion(result.Descripcion)
                    setRimagen(result.Imagen)
                    setRdpto(result.dpto)
                    setRseccion(result.seccion)
                    // console.log(result.id)
                }
            )
    }, [id])





    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            'id': parseInt(rid),
            'Nombre': rnombre,
            'Categoria': rcategoria,
            'Descripcion': rdescripcion,
            'Imagen': rimagen,
            'dpto': rdpto,
            'seccion': rseccion,
        }
        const result = AdminService.updateProduct(rid, data)
            // console.log(result)
            .then(
                (result) => {
                    // alert(result['message'])
                    // if (result['status'] === 'ok') {
                    alert("Se editó el producto correctamente")
                    window.location.href = '/productos';
                    // }
                }
            ).catch(error => {
                console.log(error)
            })
    }

    const [rid, setRid] = useState('');
    const [rnombre, setRnombre] = useState('');
    const [rcategoria, setRcategoria] = useState('');
    const [rdescripcion, setRdescripcion] = useState('');
    const [rimagen, setRimagen] = useState('');
    const [rdpto, setRdpto] = useState('');
    const [rseccion, setRseccion] = useState('');

    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Producto
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
                                id="categoria"
                                label="Categoria"
                                name="categoria"
                                value={rcategoria}
                                onChange={(e) => setRcategoria(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="nombre"
                                label="Nombre"
                                name="nombre"
                                value={rnombre}   
                                onChange={(e) => setRnombre(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="descripcion"
                                label="Descripcion"
                                name="descripcion"
                                value={rdescripcion}
                                onChange={(e) => setRdescripcion(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="imagen"
                                label="Imagen"
                                name="imagen"
                                value={rimagen}
                                onChange={(e) => setRimagen(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="dpto"
                                label="Departamento"
                                name="dpto"
                                value={rdpto}
                                onChange={(e) => setRdpto(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="seccion"
                                label="Seccion"
                                name="seccion"
                                value={rseccion}
                                onChange={(e) => setRseccion(e.target.value)}
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