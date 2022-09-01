import React from "react";
import Planet from "../componets/Planet/Planet";
import { PLANETS } from "../constans/planets";
import { MOONS } from "../constans/moons";

const Planets = () => {
    const planets = PLANETS.map(planet => {
        const moons = MOONS.filter(moon => moon.planetId === planet.id);

        return (
            <div
                style={{
                    display: "flex",
                    marginBottom: 15,
                }}
                key={planet.id}
            >
                <Planet
                    width={100}
                    height={100}
                    title={planet.title}
                    moons={moons}
                />
            </div>
        )
    });

    return planets
}

export default Planets;