import basket_icon from './basket_icon.png'
import header_img from './header_img.png'
import logo from './logo.png'
import search_icon from './search_icon.png'

import plant_1 from './plant_1.png'
import plant_2 from './plant_2.png'
import plant_3 from './plant_3.png'
import plant_4 from './plant_4.png'
import plant_5 from './plant_5.png'
// I'm using the existing plant images as placeholders for new categories.

import add_icon_green from './add_icon_green.png'
import add_icon_white from './add_icon_white.png'
import app_store from './app_store.png'
import bag_icon from './bag_icon.png'
import facebook_icon from './facebook_icon.png'
import linkedin_icon from './linkedin_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import play_store from './play_store.png'
import profile_icon from './profile_icon.png'
import rating_starts from './rating_starts.png'
import remove_icon_red from './remove_icon_red.png'
import selector_icon from './selector_icon.png'
import twitter_icon from './twitter_icon.png'

// Placeholder for new category icons
import { default as home_decor_icon, default as indoor_icon } from './menu_1.png'
import { default as herb_icon, default as outdoor_icon } from './menu_2.png'
import { default as flowers_icon, default as succulent_icon } from './menu_3.png'
import { default as air_purifying_icon, default as large_plants_icon } from './menu_4.png'
import placeholder_menu from './placeholder_menu.png'


export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    // Add the new category icons here
    indoor_icon,
    outdoor_icon,
    succulent_icon,
    air_purifying_icon,
    home_decor_icon,
    herb_icon,
    flowers_icon,
    large_plants_icon,
    placeholder_menu,
}

export const plant_menu_list = [
    {
        menu_name: "Indoor",
        menu_image: assets.indoor_icon
    },
    {
        menu_name: "Outdoor",
        menu_image: assets.outdoor_icon
    },
    {
        menu_name: "Succulent",
        menu_image: assets.succulent_icon
    },
    {
        menu_name: "Air Purifying",
        menu_image: assets.air_purifying_icon
    },
    {
      menu_name: "Home Decor",
      menu_image: assets.home_decor_icon
    },
    {
      menu_name: "Herb",
      menu_image: assets.herb_icon
    },
    {
      menu_name: "Flowers",
      menu_image: assets.flowers_icon
    },
    {
      menu_name: "Large Plants",
      menu_image: assets.large_plants_icon
    }
]

export const plant_list = [
    {
        _id: "1",
        name: "Money Plant",
        image: plant_1,
        price: 250,
        description: "A classic indoor plant known for its air-purifying qualities and easy care.",
        category: "Indoor"
    },
    {
        _id: "2",
        name: "Snake Plant",
        image: plant_2,
        price: 300,
        description: "A popular choice for beginners due to its resilience and air-cleaning abilities.",
        category: "Indoor"
    },
    {
        _id: "3",
        name: "Fiddle Leaf Fig",
        image: plant_3,
        price: 1200,
        description: "A stylish plant with large, lush leaves, perfect for a modern home aesthetic.",
        category: "Indoor"
    },
    {
        _id: "4",
        name: "Aloe Vera",
        image: plant_4,
        price: 150,
        description: "A popular medicinal succulent, perfect for sunlit windowsills.",
        category: "Indoor"
    },
    {
        _id: "5",
        name: "Rose",
        image: plant_5,
        price: 150,
        description: "A beautiful flowering plant with fragrant blooms, ideal for outdoor gardens.",
        category: "Outdoor"
    },
]
