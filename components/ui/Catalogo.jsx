import { Grid } from "@mui/material"
import Filtro from "./catalogo/Filtro"
import Opcion from "./catalogo/Opcion"

const imagenes = [
    {
        url: "/img/tipo1.jpeg",
        alt: "Tipo 1",
        title: 'Oficina',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "200"
    },
    {
        url: "/img/tipo2.jpeg",
        alt: "Tipo 2",
        title: 'Hogar',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "200"
    },
    {
        url: "/img/tipo3.jpg",
        alt: "Tipo 3",
        title: 'Catalogo',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "200"
    },
    {
        url: "/img/tipo2.jpeg",
        alt: "Tipo 4",
        title: 'Hogar',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "200"
    },
    {
        url: "/img/tipo3.jpg",
        alt: "Tipo 5",
        title: 'Catalogo',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "200"
    },
    {
        url: "/img/tipo2.jpeg",
        alt: "Tipo 6",
        title: 'Hogar',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "200"
    },
    {
        url: "/img/tipo3.jpg",
        alt: "Tipo 7",
        title: 'Catalogo',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "200"
    },
    {
        url: "/img/tipo2.jpeg",
        alt: "Tipo 8",
        title: 'Hogar',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "200"
    },
    {
        url: "/img/tipo3.jpg",
        alt: "Tipo 9",
        title: 'Catalogo',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "200"
    }
]

export const Catalogo = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={6} sx={{maxHeight: "100%"}}>
                <Filtro />
            </Grid>
            <Opcion imagenes={imagenes} />
        </Grid>
    )
}