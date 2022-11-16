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

export default function UpdateManager() {
    const classes = useStyles();



    const { id } = useParams();

    useEffect(() => {
        fetch(url + "/usuarios/get/" + id + "/")
            .then(res => res.json())
            .then(
                (result) => {
                    setRid(result.id)
                    setRnombre(result.nombrecliente)
                    setRemail(result.e_mail)
                    // setRcontraseña(result.Password)
                    setRdeviceToken(result.DeviceToken)
                    setRtelefono(result.Telefono)
                    // console.log(result.id)
                }
            )
    }, [id])




    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            'nombrecliente': rnombre,
            'e_mail': remail,
            'DeviceToken': rdeviceToken,
            'Telefono': rtelefono,
        }
        const result = AdminService.updateUser(rid, data)
            .then(
                (result) => {
                    alert("Se editó el domiciliario correctamente")
                    window.location.href = '/domiciliarios';
                }
            ).catch(error => {
                console.log(error)
            })
    }

    const [rnombre, setRnombre] = useState('');
    const [remail, setRemail] = useState('');
    const [rtelefono, setRtelefono] = useState('');
    const [rdeviceToken, setRdeviceToken] = useState('');
    const [rid, setRid] = useState(id);



    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Encargado Restaurante
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
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
                                id="email"
                                label="Email"
                                name="email"
                                value={remail}
                                onChange={(e) => setRemail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="telefono"
                                label="Telefono"
                                name="telefono"
                                value={rtelefono}
                                onChange={(e) => setRtelefono(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="deviceToken"
                                label="DeviceToken"
                                name="deviceToken"
                                value={rdeviceToken}
                                onChange={(e) => setRdeviceToken(e.target.value)}
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