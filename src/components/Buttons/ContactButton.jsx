import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PropTypes from "prop-types";

const ContactButton = ({ sx = {}, children, ...props }) => {
    return (
        <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props} fullWidth>
            {children}
            <KeyboardArrowRightIcon />
        </Button>
    );
};

ContactButton.propTypes = {
    children: PropTypes.node.isRequired,
    sx: PropTypes.object,
};

export default ContactButton;