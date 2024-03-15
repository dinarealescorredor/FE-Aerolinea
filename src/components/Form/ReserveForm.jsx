import React, {Component} from 'react';
import Swal from "sweetalert2";
import {Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import Title from "../Title/index.jsx";
import {section2Content} from "../../utils/content.js";
import ContactButton from "../Buttons/ContactButton.jsx";
const {
    title2,
    title3,
    body1,
    body2,
    body3,
    body4,
    body5,
    body6
} = section2Content

class ReserveForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                emergencyName: "",
                emergencyCellPhone: "",
                statusMedic: "",
                medicalPreexistence: "",
                address: "",
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        let formData = this.state.formData;
        formData[event.target.id] = event.target.value;
        this.setState({ formData });
    }

    handleStatusMedic = (event, values) => {
        let formData = this.state.formData;
        if (values) {
            formData.statusMedic = event.target.value;
        }
        this.setState({ formData });
    };

    async handleSubmit(e) {
        e.preventDefault();

        const { formData } = this.state;
        if (formData) {
            console.log("todo ok mijita")
        } else {
            Swal.fire({
                title: "<span>" + "Error!" + "</span>",
                html: "<span>" + "Ups! Revisa y corrige los campos del formulario" + "</span>",
                icon: 'error',
                background: '#fff',
                confirmButtonText: 'Ok',
                confirmButtonColor: "#1d9bf0",
            })
        }
    }


    render() {
        const { formData } = this.state;
        return (
            <Box>
                <form
                    style={{
                        paddingRight: '1rem',
                        paddingLeft: '1rem',
                    }}
                    onSubmit={this.handleSubmit}
                >
                    <Grid container spacing={3}>
                        <Grid item sm={12} xs={12}>
                            <Title variant={"h1"}>{title2}</Title>
                        </Grid>

                        <Grid item sm={6} xs={12}>
                            <Typography variant="caption" display="block" gutterBottom>{body1}</Typography>
                            <TextField
                                id="emergencyName"
                                variant={"standard"}
                                fullWidth
                                type='text'
                                color="info"
                                value={formData.emergencyName}
                                onChange={this.handleChange}
                                required
                            />
                        </Grid>

                        <Grid item sm={6} xs={12}>
                            <Typography variant="caption" display="block" gutterBottom>{body2}</Typography>
                            <TextField
                                id="emergencyCellPhone"
                                variant={"standard"}
                                fullWidth
                                type='number'
                                color="info"
                                value={formData.emergencyCellPhone}
                                onChange={this.handleChange}
                                required
                            />
                            <Typography variant="body2" display="block" gutterBottom>{body3}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item sm={12} xs={12}>
                            <Title variant={"h1"}>{title3}</Title>
                        </Grid>

                        <Grid item sm={6} xs={12}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <Typography variant="caption" display="block" gutterBottom>{body5}</Typography>
                                    <Select
                                        id="statusMedic"
                                        value={formData.statusMedic}
                                        variant={"standard"}
                                        color="info"
                                        onChange={this.handleStatusMedic}
                                        required
                                    >
                                        <MenuItem value={true}>Si</MenuItem>
                                        <MenuItem value={false}>No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        {this.state.formData.statusMedic && (
                        <Grid item sm={6} xs={12}>
                            <Typography variant="caption" display="block" gutterBottom>{body4}</Typography>
                            <TextField
                                id="medicalPreexistence"
                                variant={"standard"}
                                fullWidth
                                type='text'
                                color="info"
                                required
                                value={formData.medicalPreexistence}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        )}
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12}  style={{marginTop: 30}}>
                            <Title variant={"h1"}>{title2}</Title>
                        </Grid>

                        <Grid item sm={12} xs={12}>
                            <Typography variant="caption" display="block" gutterBottom>{body6}</Typography>
                            <TextField
                                id="address"
                                variant={"standard"}
                                fullWidth
                                type='text'
                                color="info"
                                value={formData.address}
                                onChange={this.handleChange}
                                required
                            />
                        </Grid>
                    </Grid>


                    <Grid container spacing={3} style={{ margin: "10px auto 0"}}>
                        <Grid item sm={6} xs={12}>
                            <ContactButton type="submit">Guardar</ContactButton>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <ContactButton style={{background: "white", color: "black"}}>Cancelar</ContactButton>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        );
    }
}

export default ReserveForm;