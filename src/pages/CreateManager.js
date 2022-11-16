import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import * as AdminService from "../Services/AdminService";


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

export default function CreateManager() {
    const classes = useStyles();

    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            'nombrecliente': rnombre,
            'e_mail': remail,
            'password': rcontraseña,
            'DeviceToken': rdeviceToken,
            'Telefono': rtelefono,
            'Restaurante': rrestaurante,
        }
        const result = AdminService.createManager(data)
            // console.log(result)
            .then(
                (result) => {
                    // alert(result['message'])
                    // if (result['status'] === 'ok') {
                    alert("Se agregó el domiciliario correctamente")
                    // window.location.href = '/';
                    // }
                }
            )
            // .catch(
            //     (error) => {
            //         alert(error)
            //     }
            // )
    }

    const [rnombre, setRnombre] = useState('');
    const [remail, setRemail] = useState('');
    const [rtelefono, setRtelefono] = useState('');
    const [rdeviceToken, setRdeviceToken] = useState('');
    const [rcontraseña, setRcontraseña] = useState('');
    const [rrestaurante, setRrestaurante] = useState('');
    



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
                                onChange={(e) => setRdeviceToken(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="contraseña"
                                label="Contraseña"
                                onChange={(e) => setRcontraseña(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="restaurante"
                                label="Codigo Restaurante"
                                onChange={(e) => setRrestaurante(e.target.value)}
                            />
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Create
                        </Button>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}