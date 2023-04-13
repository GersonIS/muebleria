import { AppBar, Box, Button, IconButton, Toolbar, Tooltip } from "@mui/material"
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import Link from 'next/link';
import { useContext, useState } from "react";
import { UiContext } from "@/context/ui";
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const options = [
    'Mi cuenta',
    'Pedidos',
    'Datos de cuenta',
];
const options2 = [
    'Vacio',
    'Maso',
    'Lleno',
];
const ITEM_HEIGHT = 48;

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Navbar = ({ navbarItems }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorEl2, setAnchorEl2] = useState(null)
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const { openSideMenu } = useContext(UiContext);
    return (
        <AppBar position="static" sx={{ backgroundColor: "#E5E5E5" }}>
            <Toolbar>
                <IconButton edge="start" onClick={openSideMenu} color="inherit" size="large" sx={{ display: { xs: "flex", md: "none" } }}>
                    <ListOutlinedIcon />
                </IconButton>
                <Box sx={{ display: { xs: "none", md: "flex", flexGrow: 1 } }}>
                    {
                        navbarItems.map((el, index) => {
                            return <Link style={{ textDecoration: 'none', color: "#727272" }} key={index} href={el.path}>
                                <Button color="inherit">
                                    {el.title}
                                </Button>
                            </Link>
                        })
                    }
                </Box>
                <Image
                    src={"/logo-nicole.png"}
                    width={100}
                    height={100}
                />
                <Search sx={{ marginLeft: "10px" }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <div>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <Tooltip title="Usuario">
                            <AccountCircleIcon />
                        </Tooltip>
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div>
                    <Tooltip title="Compre algo :c">
                        <IconButton
                            aria-label="cart"
                            id="long-button"
                            aria-controls={open2 ? 'long-menu' : undefined}
                            aria-expanded={open2 ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick2}
                        >
                            <StyledBadge badgeContent={3} color="primary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl2}
                        open={open2}
                        onClose={handleClose2}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        {options2.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar