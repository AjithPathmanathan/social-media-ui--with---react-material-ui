import React from 'react'
import { red } from '@mui/material/colors'

import {  Favorite, FavoriteBorder, Label, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia,  Checkbox,  IconButton, Typography } from '@mui/material'


function Post() {
  return (
    <Card >
    <CardHeader
      avatar={
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIpWSwgghruWbHXLeOnFt4_uqM-LfVqQ6eQ&s' sx={{ bgcolor: red }} aria-label="recipe"/>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://miro.medium.com/v2/resize:fit:720/format:webp/0*eR9D6K0uvaTnTUWI.jpeg"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
      
     
    </CardActions>
    
  </Card>
  )
}

export default Post