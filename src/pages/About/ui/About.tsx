import React from 'react';
import {useTranslation} from "react-i18next";

export const About = () => {
    const {t} = useTranslation("about")
    return (
        <div>
            {t("title")}
        </div>
    );
};

export default About;