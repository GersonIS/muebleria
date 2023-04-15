import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const Opcion = ({ imagenes }) => {
    return (
        <>
            {
                imagenes.map((el, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center" key={index}>
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
                                <CardActions sx={{ backgroundColor: "#E5E5E5" }}>
                                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                                        Add
                                    </Button>
                                    <Button variant="contained" endIcon={<SendIcon />}>
                                        Ver mas
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })
            }
        </>
    )
}

export default Opcion