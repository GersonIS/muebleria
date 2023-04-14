import { Layout } from "@/components/layouts"
import { Button, Box, Grid, Typography, TextField } from "@mui/material"
import Link from 'next/link';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
        value: '1',
        label: 'Buscador de internet'
    },
    {
        value: '2',
        label: 'Correo electronico',
    },
    {
        value: '3',
        label: 'Redes sociales',
    },
    {
        value: '4',
        label: 'Recomendacion',
    },
    {
        value: '5',
        label: 'Anuncio online',
    },
    {
        value: '6',
        label: 'Anuncio en revistas',
    },
    {
        value: '7',
        label: 'Espectacular',
    }
];

const index = () => {
    return (
        <Layout title="Contacto">
            <Box sx={{ backgroundColor: "#9EC6C8", height: 400, width: "100%", textAlign: "center" }}>
                <Typography variant="h4" color="white" sx={{ lineHeight: 10 }}>Queremos conocerte</Typography>
            </Box>
            <Grid container sx={{ paddingLeft: 5, paddingRight: 5, paddingTop: 5 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body2">Estamos para ayudarte. Compártenos tus dudas, comentarios o sugerencias y nuestros ejecutivos se pondrán en contacto contigo.</Typography>
                    <Typography variant="h5" color="#727272" sx={{ marginTop: 2, marginBottom: 2 }}><b>¡Ponte en Contacto!</b></Typography>
                    <Box
                        component="form"
                        paddingBottom={3}
                        noValidate
                        autoComplete="off"
                    >
                        <Box>
                            <Box sx={{ marginTop: 1, marginBottom: 2 }}>
                                <TextField id="outlined-basic" placeholder="Escribe tu nombre" sx={{ width: "90%" }} label="Nombre" variant="outlined" />
                            </Box>
                            <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                                <TextField id="outlined-basic" placeholder="Escribe tu correo" sx={{ width: "90%" }} label="Correo" variant="outlined" />
                            </Box>
                            <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                                <TextField id="outlined-basic" placeholder="Escribe tu whatsapp" sx={{ width: "90%" }} label="WhatsApp" variant="outlined" />
                            </Box>
                            <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                                <TextField id="outlined-basic" placeholder="Escribe tu ciudad" sx={{ width: "90%" }} label="Ciudad" variant="outlined" />
                            </Box>
                            <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="¿Como nos conociste?"
                                    defaultValue="1"
                                    sx={{ width: "90%" }}
                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                            <TextField
                                id="outlined-multiline-static"
                                label="Mensaje"
                                multiline
                                rows={4}
                                placeholder="Escribe tu Mensaje"
                                sx={{ width: "90%", marginBottom: 2 }}
                            />
                            <Box sx={{ textAlign: "center" }}>
                                <Link style={{ textDecoration: 'none', color: "inherit" }} href="/">
                                    <Button variant="contained" endIcon={<SendOutlinedIcon />}>
                                        Enviar
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ textAlign: "center", marginBottom: 2 }}>
                        <Typography variant="h4" color="#727272">Visitanos</Typography>
                    </Box>
                    <Box sx={{ borderRadius: 2, boxShadow: 7 }} >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.8756977185351!2d-79.04422681708576!3d-8.100342810676503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3dbdd759c11f%3A0x795fb99a31c59a1a!2sMuebleria%20Nicoll!5e0!3m2!1ses!2spe!4v1681448549820!5m2!1ses!2spe"
                            width="600" height="550" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>

                </Grid>
            </Grid>
        </Layout>
    )
}

export default index