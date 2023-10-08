import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { Badge, FormControlLabel, List, ListItem, Switch } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

export default function Header({ toggleMode } : {toggleMode: (d:boolean) => void}) {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const midLinks: any = [
    {title: "catalog", path: "/catalog"},
    {title: "about", path: "/about"},
    {title: "contact", path: "/contact"}
  ]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const rightLinks: any = [
    {title: "login", path: "/login"},
    {title: "register", path: "/register"},
  ]
  const navStyles = {
    color:"inherit", 
    typography: "h6",
    "&:hover": {
      color: "secondary.main"
    },
    "&:active": {
      color: "secondary"
    },
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent:"space-between"}}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component={NavLink} to="/" sx={ navStyles }>
            RE-STORE
          </Typography>
          <FormControlLabel 
            control={ <Switch onChange={() => toggleMode((prev: boolean) => !prev )} color="secondary" />} 
            label="Theme" 
          />

       

          <List sx={{display: 'flex'}}>
              {midLinks.map(({title, path} : any) => (
                  <ListItem
                    component={NavLink}
                    to={path}
                    key={path}
                    sx={ navStyles }
                  >
                    {title.toUpperCase()}
                  </ListItem>
              ))}
          </List>
          
          <Box sx={{display: "flex"}}>
            {/* icon cart */}
            <IconButton size="large" edge="start" color="inherit" sx={{mr: 2}}>
              <Badge badgeContent="4" color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <List sx={{display: 'flex'}}>
                {rightLinks.map(({title, path}) => (
                    <ListItem
                      component={NavLink}
                      to={path}
                      key={path}
                      sx={ navStyles }
                    >
                      {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>
          </Box>
           
        </Toolbar>
      </AppBar>
    </Box>
  );
}
