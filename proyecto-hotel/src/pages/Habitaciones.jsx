import { Link } from "react-router-dom";
import { habitaciones } from "@/data/habitaciones";
import { useEffect } from "react";


const Habitaciones = () => {

    /* reset de scroll para cuando entre en una hab individual no este el scroll bajo */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <div className="Gallery">
                {habitaciones.map((hab, i) => (
                    <Link key={hab.id}
                        to={`/habitaciones/${hab.id}`}>

                        <div key={i} className={`Gallery-item ${hab.size} ${i % 2 === 0 ? 'left' : 'right'}`}>
                            <div className='Image-container'>
                                <img className="Image-default" src={hab.default} alt="img habitacion 1" />
                                <img className="Image-hover" src={hab.hover} alt="img habitacion 2" />
                            </div>

                            <div className="Image-legend">
                                <span>{hab.name} </span>
                                <span>no. {i + 1}</span>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>

        </>
    );
}

export default Habitaciones;