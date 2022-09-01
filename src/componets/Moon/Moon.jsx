import React, { useState } from "react";
import styles from "./Moon.module.css";

const Moon = ({
    width,
    height,
    title,
    handleClick,
}) => {
    const [active, setActive] = useState(false);

    const clickMoonHandler = () => {
        setActive(prevActive => {
            return !prevActive
        });

        if(handleClick) {
            handleClick(active);
        }
    }


    const styleMoon = `${styles.moon} ${active && styles.active}`;

    return (
        <div
            onClick={clickMoonHandler}
            style={{ width, height }}
            className={styleMoon}
        >
            <p className={styles.title}>
                {title}
            </p>
        </div>
    );
}

export default Moon;