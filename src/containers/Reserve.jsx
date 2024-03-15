import React  from 'react';
import Title from "../components/Title/index.jsx";
import {section2Content} from "../utils/content.js";
import {Box} from "@mui/material";
import ReserveForm from "../components/Form/ReserveForm.jsx";
const {
    title1,
} = section2Content

const Reserve = () => {
    return (
        <Box display="block">
            <Box
                style={{
                    padding: "43px 24px",
                    boxShadow: "0 2px 12px #1b1b1b26",
                    borderTop: "solid 5px #1d9bf0",
                    backgroundColor: "#fff",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                }}
                sx={{
                    margin: "12vh auto",
                    width: "70%",
                    top: 0,
                    right: 0,
                    left: 0
                }}>

                <Title
                    variant={{ xs: "h5", sm:"h5", md: "h4" }}
                    sx={{ letterSpacing: "0.02em" , mb: 1 }}
                    style={{marginTop: 0, textAlign: "center", fontWeight: "400!important"}}
                >
                    {title1}
                </Title>
                <Box display="block">
                    <ReserveForm/>
                </Box>
            </Box>
        </Box>
    )
}

export default Reserve;