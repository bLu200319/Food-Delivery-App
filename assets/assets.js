import star from './star.png';
import plus_icon from './plus_icon.png';
import minus_icon from './minus_icon.png';
import appstore from './appstore.png';
import play_store from './play_store.png';
import bag from './bag.png';
import cross from './cross.png';
import food1k from './food1k.png';
import food1k2 from './food1k2.png';
import food1e1 from './food1e1.png';
import food1e2 from './food1e2.png';
import food1e3 from './food1e3.png';
import food1e4 from './food1e4.png';
import food2 from './food2.png';
import food2p1 from './food2p1.png';
import food2p2 from './food2p2.png';
import food2p3 from './food2p3.png';
import food2p4 from './food2p4.png';
import food3 from './food3.png';
import food3b1 from './food3b1.png';
import food3b2 from './food3b2.png';
import food3b4 from './food3b4.png';
import food5m1 from './food5m1.png';
import food5 from './food5.png';
import food5m2 from './food5m2.png';
import food5m3 from './food5m3.png';
import food5m5 from './food5m5.png';
import food6 from './food6.png';
import food6d1 from './food6d1.png';
import food6d2 from './food6d2.png';
import food6d3 from './food6d3.png';
import food6d4 from './food6d4.png';
import add_icon from './add_icon.png';
import arrow from './arrow.png';
import email_icon from './email_icon.png';
import facebook_icon from './facebook_icon.png';
import google_icon from './google_icon.png';
import female_prof3 from './female_prof3.png';
import male_profile2 from './male_profile2.png';
import profile from './profile.png';
import upload from './upload.png';
import logo from './logo.png';
import logout from './logout.png';
import logo_footer from './logo_footer.png';
import logo2 from './logo2.png';
import search from './search.png';
import basket from './basket.png';
import header_img1 from './header_img1.png';
import header_img3 from './header_img3.png';
import menu_1 from './menu_1.png';
import menu_2 from './menu_2.png';
import menu_3 from './menu_3.png';
import menu_4 from './menu_4.png';
import menu_5 from './menu_5.png';

export const assets = {
    logo,
    logo2,
    logo_footer,
    plus_icon,
    minus_icon,
    upload,
    search,
    basket,
    male_profile2,
    female_prof3,
    profile,
    add_icon,
    arrow,
    upload,
    google_icon,
    facebook_icon,
    email_icon,
    appstore,
    play_store,
    bag,
    cross,
    logo,
    food1k,
    food1k2,
    food1e1,
    food1e2,
    food1e3,
    food1e4,
    food2,
    food2p1,
    food2p2,
    food2p3,
    food2p4,
    food3,
    food3b1,
    food3b2,
    food3b4,
    food5,
    food5m1,
    food5m2,
    food5m3,
    food5m5,
    food6,
    food6d1,
    food6d2,
    food6d3,
    food6d4,
    header_img1,
    header_img3,
    menu_1,
    menu_2,
    menu_3,
    menu_4,
    menu_5,
    star,
    logout

}

export const menu_list= [
    {
        menu_name:"Traditional",
        menu_image: menu_1
    },
    {
       menu_name:"Pizza",
       menu_image: menu_2
    },
    {
       menu_name:"Burger",
       menu_image: menu_3 
    },
    {
       menu_name:"Pasta",
       menu_image: menu_4 
    },
    {
       menu_name:"Sweets",
       menu_image: menu_5 
    }

]
export const foods = [
   {
      _id: "1",
      name: "Kitfo",
      image: food1k,
      price: 1800,
      description:"Best Ethiopian traditional dish",
      category: "Traditional"
   },

    {
      _id: "2",
      name: "Kitfo",
      image: food1k2,
      price: 1550,
      description:"Best Ethiopian traditional dish",
      category: "Traditional"
   },
    {
      _id: "3",
      name: "Kitfo",
      image: food1e1,
      price: 1800,
      description:"Best Ethiopian traditional dish",
      category: "Traditional"
   },
   {
      _id: "4",
      name: "Beyaynet",
      image: food1e2,
      price: 400,
      description:"Best Ethiopian fasting traditional dish",
      category: "Traditional"
   },
   {
      _id: "5",
      name: "Doro-Wot",
      image: food1e3,
      price: 460,
      description:"#1 Best Ethiopian traditional dish",
      category: "Traditional"
   },
    {
      _id: "6",
      name: "Shekla-Tibs",
      image: food1e4,
      price: 460,
      description:"#1 Best Ethiopian traditional dish",
      category: "Traditional"
   },
    {
      _id: "7",
      name: "Margarita",
      image: food2,
      price: 800,
      description:"Best pizza you can find",
      category: "Pizza"
   },
   {
      _id: "8",
      name: "Tomato Sizzling",
      image: food2p1,
      price: 700,
      description:"Best pizza you can find",
      category: "Pizza"
   },
   {
      _id: "9",
      name: "Double Cheese",
      image: food2p2,
      price: 760,
      description:"Best pizza you can find",
      category: "Pizza"
   },

{
      _id: "10",
      name: "Large Cheese",
      image: food2p3,
      price: 960,
      description:"Best pizza you can find",
      category: "Pizza"
   },
   {
      _id: "11",
      name: "Spanish",
      image: food2p4,
      price: 760,
      description:"Best pizza you can find",
      category: "Pizza"
   },
   {
      _id: "12",
      name: "Cheese Burger",
      image: food3,
      price: 460,
      description:"Best Burger you can find",
      category: "Burger"
   },
   {
      _id: "13",
      name: "Double Cheese Burger",
      image: food3b1,
      price: 660,
      description:"Best Burger you can find",
      category: "Burger"
   },
   {
      _id: "14",
      name: "Burger",
      image: food3b2,
      price: 560,
      description:"Best Burger you can find",
      category: "Burger"
   },
   {
      _id: "15",
      name: "Burger",
      image: food3b4,
      price: 460,
      description:"Best Burger you can find",
      category: "Burger"
   },
   {
      _id: "16",
      name: "Pasta",
      image: food5,
      price: 260,
      description:"Best pasta you can find",
      category: "Pasta"
   },
    {
      _id: "17",
      name: "maccaroni",
      image: food5m1,
      price: 260,
      description:"Best pasta you can find",
      category: "Pasta"
   },
    {
      _id: "18",
      name: "Special sauce Pasta",
      image: food5m2,
      price: 260,
      description:"Best pasta you can find",
      category: "Pasta"
   },
    {
      _id: "19",
      name: "Special Maccaroni",
      image: food5m3,
      price: 260,
      description:"Best pasta you can find",
      category: "Pasta"
   },
    {
      _id: "20",
      name: "Special sauce Maccaroni ",
      image: food5m5,
      price: 260,
      description:"Best pasta you can find",
      category: "Pasta"
   },
   {
      _id: "21",
      name: "Maccaron ",
      image: food6,
      price: 150,
      description:"Best Sweet you can find",
      category: "Sweets"
   },
     {
      _id: "22",
      name: "Cake ",
      image: food6d1,
      price: 260,
      description:"Best Sweet you can find",
      category: "Sweets"
   },
     {
      _id: "23",
      name: "Cake ",
      image: food6d2,
      price: 260,
      description:"Best Sweet you can find",
      category: "Sweets"
   },
     {
      _id: "24",
      name: "Cake ",
      image: food6d3,
      price: 260,
      description:"Best Sweet you can find",
      category: "Sweets"
   },  {
      _id: "25",
      name: "Cake ",
      image: food6d4,
      price: 260,
      description:"Best Sweet you can find",
      category: "Sweets"
   }]
export default assets