import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { habitaciones } from "@/data/habitaciones";
import { useAppContext } from "@/context/AppContext";

const Reservar = () => {
    const { selectedRoom, setSelectedRoom } = useAppContext();

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1); // añadir un dia mas (para q sea mañana claro)

    const [checkIn, setCheckIn] = useState(today);
    const [checkOut, setCheckOut] = useState(tomorrow);





    const handleSubmit = (e) => {
        e.preventDefault()

        console.log({ checkIn, checkOut });
    }


    /* reset de scroll para cuando entre en una hab individual no este el scroll bajo */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>


            <div className="Booking-container">
                <h2 className="Booking-title">reserva tu experiencia en Six Senses Ibiza</h2>
                <form className="Booking-form" onSubmit={handleSubmit}>
                    <label className="Booking-label">nombre completo
                        <input className="Booking-input" type="text" name="name" placeholder="Ana García López"
                            required /></label>

                    <label className="Booking-label">email
                        <input className="Booking-input" type="email" name="email" placeholder="ejemplo@correo.com" required /></label>

                    <label className="Booking-label">tipo de habitación
                        <select
                            className="Booking-input"
                            value={selectedRoom || ''}
                            onChange={(e) => setSelectedRoom(e.target.value)}
                            required
                        >
                            <option value="">- elige una opción -</option>
                            {habitaciones.map(hab => (
                                <option key={hab.id} value={hab.id}>{hab.name}</option>
                            ))}
                        </select>
                    </label>
                    <label className="Booking-label">fecha de entrada
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            minDate={today} selected={checkIn} onChange={setCheckIn} className="datepicker Booking-date" /></label>

                    <label className="Booking-label">fecha de salida
                        <DatePicker
                            dateFormat="dd/MM/yyyy"

                            minDate={today} selected={checkOut} onChange={setCheckOut} className="datepicker Booking-date" /></label>

                    <label className="Booking-label">personas
                        <input defaultValue={1} className="Booking-input" type="number" name="guests" min="1" max="10" required /></label>

                    <button className="Booking-btn" type="submit">confirmar reserva</button>
                </form>
            </div>

            <div className="Booking-info">
                <div className="Booking-infoTextos">

                    <h3>sobre el hotel</h3>
                    <p>
                        Six Senses Ibiza es un santuario en la costa norte de la isla, donde el lujo se encuentra con la sostenibilidad.
                        nuestro equipo está disponible todos los días y a todas horas para ayudarte con cualquier detalle de tu estancia.
                    </p>
                    <h3>contacto</h3>
                    <p className="Booking-infoTexto">
                        <span className="material-symbols-outlined">location_on</span>
                        Cala Xarraca, Ibiza<br />
                        <span className="material-symbols-outlined">call</span>
                        +34 871 008 875<br />
                        <span className="material-symbols-outlined">mail</span>
                        reservations-ibiza@sixsenses.com
                    </p>
                    <p></p>
                    <p></p>
                </div>
            </div>


        </>
    );
}

export default Reservar;