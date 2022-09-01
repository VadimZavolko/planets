import React, { useState } from "react";
import Moon from "../Moon/Moon";
import styles from "./Planet.module.css";

const Planet = ({
    width,
    height,
    title,
    moons,
}) => {
    const [counter, setCounter] = useState(0);

    const handleClick = (active) => {
        setCounter(prevCounter => {
            if(!active) {
                return prevCounter + 1;
            }

            return prevCounter - 1;
        });
    }

    const moonsPlanet = moons.map(moon => {
        return (
            <Moon
                width={90}
                height={90}
                title={moon.title}
                handleClick={handleClick}
                key={moon.id}
            />
        )
    });

    return (
        <>
            <div style={{ width, height }} className={styles.planet}>
                <div className={styles.row}>
                    <p className={styles.title}>
                        {title}
                    </p>

                    {counter > 0 && <p>
                        {counter}
                    </p>
                    }
                </div>
            </div>

            {
                moonsPlanet
            }
        </>
    );
}

export default Planet;