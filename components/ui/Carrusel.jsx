// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const imagenes = [
    {
        url: "/img/tipo1.jpeg",
        alt: "Tipo 1",
        title: 'Oficina',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque, labore nesciunt amet harum quidem.",
        price: "200"
    },
    {
        url: "/img/tipo2.jpeg",
        alt: "Tipo 2",
        title: 'Hogar',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque, labore nesciunt amet harum quidem.",
        price: "200"
    },
    {
        url: "/img/tipo3.jpg",
        alt: "Tipo 3",
        title: 'Catalogo',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque, labore nesciunt amet harum quidem.",
        price: "200"
    },
    {
        url: "/img/tipo2.jpeg",
        alt: "Tipo 4",
        title: 'Hogar',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque, labore nesciunt amet harum quidem.",
        price: "200"
    },
    {
        url: "/img/tipo3.jpg",
        alt: "Tipo 5",
        title: 'Catalogo',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque, labore nesciunt amet harum quidem.",
        price: "200"
    },
    {
        url: "/img/tipo2.jpeg",
        alt: "Tipo 6",
        title: 'Hogar',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque, labore nesciunt amet harum quidem.",
        price: "200"
    },
    {
        url: "/img/tipo3.jpg",
        alt: "Tipo 7",
        title: 'Catalogo',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque, labore nesciunt amet harum quidem.",
        price: "200"
    },
    {
        url: "/img/tipo2.jpeg",
        alt: "Tipo 8",
        title: 'Hogar',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque, labore nesciunt amet harum quidem.",
        price: "200"
    },
    {
        url: "/img/tipo3.jpg",
        alt: "Tipo 9",
        title: 'Catalogo',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque, labore nesciunt amet harum quidem.",
        price: "200"
    }
]

export const Carrusel = () => {
    return (
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12} sm={10} md={7}>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        imagenes.map((el, index) => {
                            return <SwiperSlide key={index}>
                                <Card sx={{ maxWidth: 250, textAlign: "center", marginBottom: 3, marginTop: 4 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="190"
                                            image={el.url}
                                            alt={el.alt}
                                        />
                                        <CardContent sx={{ backgroundColor: "#E5E5E5" }}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {el.title}
                                            </Typography>
                                            <Typography variant="body2">
                                                {el.description}
                                            </Typography>
                                            <Typography variant="body2">
                                                Precio - {el.price}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </SwiperSlide>
                        })
                    }
                    ...
                </Swiper >
            </Grid>
        </Grid>
    );
};