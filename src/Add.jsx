import { Edit, Add as AddIcon, EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import { red } from '@mui/material/colors';
import React, { useState } from 'react'
const StyledModal = styled(Modal)(
  {
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  }
);
const UserBox =styled(Box)(
  {
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
  }
)

function Add() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
   <>
    <Fab onClick={handleOpen} sx={{position:"fixed", bottom:10, left:20}} color="primary" aria-label="add">
    <AddIcon />
  </Fab>
  <StyledModal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  bgcolor={"background.default"} color={"text.primary"} width={400} height={280}   p={3} borderRadius={5}>
    <Typography textAlign={"center"} color={"gray"} variant="h6" component="h2">
      Create Post
    </Typography>
    <UserBox>
    <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIpWSwgghruWbHXLeOnFt4_uqM-LfVqQ6eQ&s' sx={{ bgcolor: red }} aria-label="recipe"/>
    <Typography fontWeight={500} variant='span'>
    Ajith Pathmanathan
    </Typography>
    </UserBox>
    <TextField
    sx={{width:"100%"}}
          id="standard-multiline-static"
          rows={4}
          placeholder="post your details..."
          variant="standard"
        />
        <Stack direction="row" mt={2} mb={3} gap={2}>
        <EmojiEmotions/>
        <Image color="primary"/>
        <VideoCameraBack color='secondary'/>
        <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup variant="contained" aria-label="Basic button group"  fullWidth>
  <Button>Post..</Button>
  <Button sx={{width:"100x"}}><DateRange/></Button>
</ButtonGroup>
  </Box>
</StyledModal>
  </>
  )
}

export default Add