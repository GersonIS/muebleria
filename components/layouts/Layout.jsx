import { Box } from "@mui/material"
import Head from "next/head"
import ChairIcon from '@mui/icons-material/Chair';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DescriptionIcon from '@mui/icons-material/Description';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import { Navbar, Sidebar } from "../ui";

const navbarItems = [
    {
        title: "Muebles Hogar",
        path: "/muebles/hogar",
        icon: <ChairIcon />
    },
    {
        title: "Muebles Negocio",
        path: "/muebles/negocio",
        icon: <EventSeatIcon />
    },
    {
        title: "Entrega Inmediata",
        path: "/entrega",
        icon: <LocalShippingIcon />
    },
    {
        title: "Blog",
        path: "/blog",
        icon: <DescriptionIcon />
    },
    {
        title: "Contacto",
        path: "/contacto",
        icon: <ConnectWithoutContactOutlinedIcon />
    }
]

const Layout = ({ children, title = "Coloque titulo de pagina" }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>
            {/*Navbar */}
            <Navbar navbarItems={navbarItems} />
            {/*Sidebar */}
            <Sidebar navbarItems={navbarItems} />
            {/*Main */}
            <Box>
                {children}
            </Box>
        </Box>
    )
}

export default Layout