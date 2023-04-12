import { UiContext } from "@/context/ui";
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Link from 'next/link';
import { useContext } from "react";

export const Sidebar = ({ navbarItems }) => {
    const { sidemenuOpen, closeSideMenu } = useContext(UiContext);

    return (
        <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
            <Box sx={{ width: 250, backgroundColor: "#423B3D", height: "100vh", color: "white" }}>
                <Box sx={{ padding: "5px 10px" }} >
                    <Typography variant="h5" textAlign="center">Menu</Typography>
                </Box>
                <List>
                    {
                        navbarItems.map((el, index) => {
                            return <Link style={{ textDecoration: 'none', color: "white" }} key={index} href={el.path} onClick={closeSideMenu}>
                                <ListItemButton>
                                    <ListItemIcon sx={{color: "white"}}>
                                        {el.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={el.title} />
                                </ListItemButton>
                            </Link>
                        })
                    }
                </List>
            </Box>
        </Drawer>
    )
}