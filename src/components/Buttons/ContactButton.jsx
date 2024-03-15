import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ContactButton = ({ sx = {}, children, ...props }) => {
    return (
        <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props} fullWidth>
            {children}
            <KeyboardArrowRightIcon />
        </Button>
    );
};

export default ContactButton;