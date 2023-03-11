import { Box, Grid } from "@mui/material";
import CardComponent from "../components/CardComponent";
import { useState } from "react";
let cardArr = [
  {
    id: 1,
    img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",
    title: "nature",

    description: `Here’s a gift to help bring a little more beauty to your life in September: An image of the world-famous Spirit Island at Maligne Lake in Alberta’s Jasper National Park, specially prepared to serve as a wallpaper or background image for your computer, tablet or mobile phone.
    Use the links below to download the wallpaper in the appropriate size, and enjoy the scene all month long. We’ll create another beautiful Alberta image next month for you to enjoy.
    If you want to see Spirit Island and Jasper National Park under the stars yourself (don’t forget to check out the park’s Dark Sky Festival from Oct. 14 to 23), scroll down for more information.`,
  },
  {
    id: 2,
    img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",
    title: "nature2",
    price: 112,
    description: `Here’s a gift to help bring a little more beauty to your life in September: An image of the world-famous Spirit Island at Maligne Lake in Alberta’s Jasper National Park, specially prepared to serve as a wallpaper or background image for your computer, tablet or mobile phone.
    Use the links below to download the wallpaper in the appropriate size, and enjoy the scene all month long. We’ll create another beautiful Alberta image next month for you to enjoy.
    If you want to see Spirit Island and Jasper National Park under the stars yourself (don’t forget to check out the park’s Dark Sky Festival from Oct. 14 to 23), scroll down for more information.`,
  },
  {
    id: 3,
    img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",
    title: "nature3",
    price: 112,
    description: `Here’s a gift to help bring a little more beauty to your life in September: An image of the world-famous Spirit Island at Maligne Lake in Alberta’s Jasper National Park, specially prepared to serve as a wallpaper or background image for your computer, tablet or mobile phone.
    Use the links below to download the wallpaper in the appropriate size, and enjoy the scene all month long. We’ll create another beautiful Alberta image next month for you to enjoy.
    If you want to see Spirit Island and Jasper National Park under the stars yourself (don’t forget to check out the park’s Dark Sky Festival from Oct. 14 to 23), scroll down for more information.`,
  },
  {
    id: 4,
    img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",
    title: "nature4",
    price: 112,
    description: `Here’s a gift to help bring a little more beauty to your life in September: An image of the world-famous Spirit Island at Maligne Lake in Alberta’s Jasper National Park, specially prepared to serve as a wallpaper or background image for your computer, tablet or mobile phone.
    Use the links below to download the wallpaper in the appropriate size, and enjoy the scene all month long. We’ll create another beautiful Alberta image next month for you to enjoy.
    If you want to see Spirit Island and Jasper National Park under the stars yourself (don’t forget to check out the park’s Dark Sky Festival from Oct. 14 to 23), scroll down for more information.`,
  },
];

const HomePage = () => {
  const [arr, setArr] = useState(cardArr);
  const deleteItem = (id) => {
    // the old way of updating the state
    /*  let newCardArr = JSON.parse(JSON.stringify(arr));
    newCardArr = newCardArr.filter((item) => item.id !== id);
    setArr(newCardArr); */
    setArr((newCardsArr) => newCardsArr.filter((item) => item.id !== id));
    cardArr = arr;
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {arr.map((item) => (
          <Grid item xs={4} key={item.id + Date.now()}>
            <CardComponent {...item} deleteItemFunc={deleteItem} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
