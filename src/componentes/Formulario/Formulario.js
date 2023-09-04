import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListasOpciones from "../ListasOpciones"
import Boton from "../Boton/Index"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log ("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color})
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo = "Nombre" 
                placeholder="Ingrese Nombre" 
                requieret 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo = "Puesto" 
                placeholder="Ingrese Puesto" 
                requieret
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo = "Foto" 
                placeholder="Ingrese link de la Foto" 
                requieret   
                valor={foto} 
                actualizarValor={actualizarFoto} 
            />
            <ListasOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton> 
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo = "Titulo" 
                placeholder="Ingresar titulo" 
                requieret 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo = "Color" 
                placeholder="Ingresar El Color en Hex" 
                requieret
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
            Registrar equipo
            </Boton>
        </form>
    </section>
}

export default Formulario