import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ContactButton = ({ sx = {}, ...props }) => {
    return (
        <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props} fullWidth>
            Empezar check-in
            <KeyboardArrowRightIcon />
        </Button>
    );
};

export default ContactButton;