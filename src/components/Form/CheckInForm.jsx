import React, {Component} from 'react';
import ContactButton from "../Buttons/ContactButton.jsx";
import {Box, InputAdornment, TextField, Typography} from "@mui/material";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PersonIcon from '@mui/icons-material/Person';
import Swal from 'sweetalert2';
import { Navigate } from "react-router-dom";

class CheckInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reservationNumber: '',
            lastName: '',
            redirect: false,
            redirectTo: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    async handleSubmit(e) {
        e.preventDefault();

        const { reservationNumber, lastName } = this.state;
        if (reservationNumber == "1234" && lastName == "reales") {
            this.setState({ redirect: true, redirectTo: "reserva" });
        } else {
            Swal.fire({
                title: "<span>" + "Error!" + "</span>",
                html: "<span>" + "Ups! Revisa tu código de reserva o tus apellidos" + "</span>",
                icon: 'error',
                background: '#fff',
                confirmButtonText: 'Ok',
                confirmButtonColor: "#1d9bf0",
            })
        }
    }



    render() {
        const { reservationNumber, lastName, redirect } = this.state;

        return (
            <Box>
                <form
                    style={{
                    paddingRight: '1rem',
                    paddingLeft: '1rem',
                    }}
                    onSubmit={this.handleSubmit}
                >
                    <div style={{ margin: "24px auto 0"}}>
                        <TextField
                            fullWidth
                            type='text'
                            color="info"
                            label="Código de reserva"
                            placeholder="Código de reserva"
                            value={reservationNumber}
                            required
                            onChange={this.handleChange('reservationNumber')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocalActivityIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Typography variant="caption" display="block" gutterBottom>Debe ser alfanumérico (Ejemplo: AAA000)</Typography>
                    </div>
                    <div style={{ margin: "24px auto 0"}}>
                        <TextField
                            fullWidth
                            color="info"
                            type='text'
                            placeholder="Apellido(s)"
                            label="Apellido(s)"
                            value={lastName}
                            required
                            onChange={this.handleChange('lastName')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Typography variant="caption" display="block" gutterBottom>Ingresa tu(s) apellido(s), tal como aparece registrados en tu reserva.</Typography>
                    </div>
                    <div style={{ margin: "24px auto 0"}}>
                        <ContactButton type="submit">Empezar check-in</ContactButton>
                    </div>
                </form>
                {redirect && <Navigate to={"/" + this.state.redirectTo} />}
            </Box>
        );
    }
}

export default CheckInForm;