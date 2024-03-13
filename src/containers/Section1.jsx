import React  from 'react';
import ContactButton from "../components/Buttons/ContactButton.jsx";
import Title from "../components/Title/index.jsx";
import {section1Content} from "../utils/content.js";
const {
    title1,
} = section1Content

const Section1 = () => {
    return (
        <div>
            <Title
                variant={{ xs: "h5", sm:"h5", md: "h4" }}
                sx={{ letterSpacing: "0.02em" , mb: 1 }}
            >
                {title1}
            </Title>
            <ContactButton/>
        </div>
    )
}

export default Section1