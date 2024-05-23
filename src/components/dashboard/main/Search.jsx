import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../../../assets/logobored.png'
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import notfiction from "../../../assets/dashboard/notification.svg";
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className=' bg-[#F5F6FA] md:px-14 px-7  ' sx={{background:"#F5F6FA",boxShadow:"none" }}>
      <Container maxWidth="xl" className=' bg-[#F5F6FA] text-[#000]'>
        <Toolbar disableGutters >
        
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: {  md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
     <img src={logo} className=' w-[200px] '/>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
  
          </Typography>
          <Box sx={{ flexGrow: 1, width: "100%", paddingLeft: "3%" ,position:"relative" }}>
          <input
            placeholder={""}
            style={{
              width: "98%",
              height: "8vh",
              background: "white",
              borderRadius: "10px",
              '& .MuiInputBase-root': {
                border: 'none',
                '&:focus': {
                  border: 'none',
                },
                '&:hover': {
                  border: 'none',
                }
              }
            }}
          />
          <div className='absolute  items-center top-[20%] left-[92%]  z-50 '>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
        </Box>
        

          <Box sx={{display: "flex",gap:"10px" }}>
          <Tooltip title="Open settings" sx={{display:"flex" }}>
          <Button onClick={handleOpenUserMenu} sx={{ p: 0 , borderRadius:"0px", borderRight:"1px", borderColor:"#000", borderStyle:"solid" }}>
            <Avatar alt="notifcation" src={notfiction} sizes='sm'    />
            
          </Button>

        </Tooltip>
            <Tooltip title="Open settings" sx={{display:"flex"}}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"  sizes='sm'/>
                
              </IconButton>

            </Tooltip>
     
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
