import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import React, { useState } from 'react';
import { Mail, Notifications } from '@mui/icons-material';

const Navbar = () => {
  const [open, setOpeen] = useState(false)
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  });
  const Search = styled("div")(({theme}) =>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
  }));
  const Icons = styled(Box)(({theme}) =>({
    display:"none",
    justifyContent:"space-between",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
      display:"flex"
    }
   
  }));
  const MIcons = styled(Box)(({theme}) =>({
    display:"none",
    justifyContent:"space-between",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.down("sm")]:{
      display:"flex"
    }
   
   
  }));
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>RIDO</Typography>
        <AccountBalanceIcon sx={{display:{xs:"block", sm:"none"}}}/>
      <Search><InputBase placeholder='SEARCH.....'/></Search>
      <Icons>
        <Badge badgeContent={4} color="error">
        <Mail />
</Badge>
<Badge badgeContent={4} color="error">
        <Notifications/>
</Badge>
<Avatar onClick={e=>setOpeen(true)} sx={{width:30, height:30}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgSeKmifEDFo3GytCm70KY4LCMsBi0P-aFA&s'/>
</Icons>
<MIcons>
<Avatar onClick={e=>setOpeen(true)} sx={{width:30, height:30}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgSeKmifEDFo3GytCm70KY4LCMsBi0P-aFA&s'/>
<Typography variant='span'>Ajith</Typography>
</MIcons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpeen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar