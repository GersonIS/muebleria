import { Layout } from "@/components/layouts";
import { Tipo, Slider, Carrusel } from "@/components/ui";
import { Grid, Typography } from "@mui/material";

const imagenes = [
  {
    url: "/img/tipo1.jpeg",
    alt: "Tipo 1",
    title: 'Oficina',
    width: '40%',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "200"
  },
  {
    url: "/img/tipo2.jpeg",
    alt: "Tipo 2",
    title: 'Hogar',
    width: '30%',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "200"
  },
  {
    url: "/img/tipo3.jpg",
    alt: "Tipo 3",
    title: 'Catalogo',
    width: '30%',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "200"
  }
]

export default function Home() {
  return (
    <Layout title="Hola">
      <Slider />
      <Tipo imagenes={imagenes} />
      <Grid container sx={{ justifyContent: "center" }}>
        <Typography variant="h5">Muebles más vendidos</Typography>
        <Grid item xs={12} marginTop={2}>
          <Typography variant="body2" sx={{ paddingLeft: 5, paddingRight: 5, textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque, labore nesciunt amet harum quidem.
            Error quae necessitatibus neque iure velit eius harum, in vitae. Voluptatum totam sequi corrupti laborum!
          </Typography>
        </Grid>
        <Carrusel />
      </Grid>
    </Layout>
  )
}

{/* <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ marginBottom: 2, display: "flex", justifyContent: "center" }}>
              <Image
                src={el.url}
                alt={el.alt}
                width={250}
                height={250}
              />
            </Grid> */}