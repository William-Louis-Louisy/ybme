import BbcBurger from "@/assets/ybme01.png";
import ClChBurger from "@/assets/ybme14.png";
import SMBurger from "@/assets/ybme11.png";
import UGC from "@/assets/ybme10.png";
import SmAvBurrito from "@/assets/ybme09.png";
import PpRb from "@/assets/ybme08.png";
import FoS from "@/assets/ybme15.png";
import CreggP from "@/assets/ybme07.png";
import FsP from "@/assets/ybme13.png";
import BeBc from "@/assets/ybme12.png";
import BTS from "@/assets/ybme04.png";
import GTC from "@/assets/ybme03.png";
import Pecpie from "@/assets/ybme06.png";
import Grhea from "@/assets/ybme05.png";
import RVC from "@/assets/ybme02.png";

export const menu = [
  {
    category: "mainCourses",
    displayedName: { en: "Main courses", nl: "Hoofdgerechten" },
    items: [
      {
        _id: "ybmebbcb1",
        name: "BBC Burger",
        picture: BbcBurger,
        isVeggyfriendly: false,
        price: 12.5,
        ingredients: {
          en: [
            "Bacon",
            "Blue-cheese",
            "Beef patty",
            "Grilled onions",
            "Salad",
            "Tomato",
            "Honey mustard",
          ],
          nl: [
            "Bacon",
            "Blue-cheese",
            "Biefpatty",
            "Gegrilde uien",
            "Salade",
            "Tomaten",
            "Honeymosterd",
          ],
        },
      },
      {
        _id: "ybmeccb1",
        name: "Classic Cheddar Burger",
        picture: ClChBurger,
        isVeggyfriendly: false,
        price: 11.0,
        ingredients: {
          en: ["Beef patty", "Cheddar", "Pickles", "Ketchup"],
          nl: ["Biefpatty", "Cheddar", "Augurken", "Ketchup"],
        },
      },
      {
        _id: "ybmercb1",
        name: "Swiss Mush' Burger",
        picture: SMBurger,
        isVeggyfriendly: true,
        price: 10.5,
        ingredients: {
          en: ["Raclette cheese", "Grilled mushrooms", "No meat"],
          nl: ["Raclette kaas", "Gegrilde champignons", "Geen vlees"],
        },
      },
      {
        _id: "ybmegrcb1",
        name: "Ultimate Grilled Cheese",
        picture: UGC,
        isVeggyfriendly: false,
        price: 13.0,
        ingredients: {
          en: [
            "Cheddar",
            "Edam",
            "Gouda",
            "Bacon",
            "Ham",
            "Pepperoni",
            "Mortadella",
            "Turkey slices",
          ],
          nl: [
            "Cheddar",
            "Edam",
            "Gouda",
            "Bacon",
            "Ham",
            "Pepperoni",
            "Mortadella",
            "Kalkoen plakjes",
          ],
        },
      },
      {
        _id: "ybmeburrb1",
        name: "Smoky Burrito",
        picture: SmAvBurrito,
        isVeggyfriendly: false,
        price: 12.0,
        ingredients: {
          en: [
            "Smoked chicken",
            "Avocado",
            "Plantain banana",
            "Onions",
            "Cilantro",
            "Black beans",
          ],
          nl: [
            "Gerookte kip",
            "Avocado",
            "Banaanplantaan",
            "Uien",
            "Koriander",
            "Zwarte bonen",
          ],
        },
      },
      {
        _id: "ybmerb1",
        name: "Pulled Pork Rice Bowl",
        picture: PpRb,
        isVeggyfriendly: false,
        price: 13.5,
        ingredients: {
          en: [
            "Sautéed rice",
            "Corn",
            "Black beans",
            "Green peppers",
            "Tomato salsa",
            "Pulled pork",
            "Crème fraîche",
            "Coriander",
            "Chives",
          ],
          nl: [
            "Gebakken rijst",
            "Maïs",
            "Zwarte bonen",
            "Groene paprika's",
            "Tomatensalsa",
            "Pulled pork",
            "Crème fraîche",
            "Koriander",
            "Bieslook",
          ],
        },
      },
    ],
  },
  {
    category: "sides",
    displayedName: { en: "Sides", nl: "Afslag" },
    items: [
      {
        _id: "ybmesoup1",
        name: "Onion Soup",
        picture: FoS,
        isVeggyfriendly: true,
        price: 6.5,
        ingredients: {
          en: ["Onions", "Melted Comté cheese"],
          nl: ["Uiens", "Gesmolten Comté kaas"],
        },
      },
      {
        _id: "ybmee1",
        name: "CREGG P",
        picture: CreggP,
        isVeggyfriendly: true,
        price: 6.5,
        ingredients: {
          en: ["Eggplant", "Cashew nuts", "Basil"],
          nl: ["Aubergine", "Cashewnoten", "Basilicum"],
        },
      },
      {
        _id: "ybmesp1",
        name: "Feta Sweet Potato Bites",
        picture: FsP,
        isVeggyfriendly: true,
        price: 6.0,
        ingredients: {
          en: ["Sweet potatoes", "Feta cheese", "Parsley"],
          nl: ["Zoete aardappel", "Feta kaas", "Peterselie"],
        },
      },
      {
        _id: "ybmebe1",
        name: "Belgian Mess",
        picture: BeBc,
        isVeggyfriendly: false,
        price: 7.0,
        ingredients: {
          en: ["Endives", "Bacon", "Comté cheese"],
          nl: ["Witlof", "Bacon", "Comté kaas"],
        },
      },
      {
        _id: "ybmesal1",
        name: "Broccoli & Tomato Salad",
        picture: BTS,
        isVeggyfriendly: true,
        price: 6.5,
        ingredients: {
          en: [
            "Broccoli",
            "Tomatoes",
            "Cottage cheese",
            "Chives",
            "Basil",
            "Lemon zest",
          ],
          nl: [
            "Broccoli",
            "Tomaten",
            "Hüttenkäse",
            "Bieslook",
            "Basilicum",
            "Citroenrasp",
          ],
        },
      },
      {
        _id: "ybmegua1",
        name: "Guacamole & Tortilla Chips",
        picture: GTC,
        isVeggyfriendly: true,
        price: 7.0,
        ingredients: {
          en: ["Guacamole", "Cilantro", "Diced tomatoes", "Tortilla chips"],
          nl: ["Guacamole", "Koriander", "Gesneden tomaten", "Tortilla chips"],
        },
      },
    ],
  },
  {
    category: "desserts",
    displayedName: { en: "Desserts", nl: "Desserts" },
    items: [
      {
        _id: "ybmepec1",
        name: "Pecan Pie",
        picture: Pecpie,
        isVeggyfriendly: true,
        price: 6.0,
        ingredients: {
          en: ["Pecan nuts", "Pie crust", "Caramel filling"],
          nl: ["Pecannoten", "Taartbodem", "Karamelvulling"],
        },
      },
      {
        _id: "ybmetir1",
        name: "Green heaven",
        picture: Grhea,
        isVeggyfriendly: true,
        price: 6.5,
        ingredients: {
          en: ["Pistachios", "Mascarpone", "Ladyfingers"],
          nl: ["Pistachenoten", "Mascarpone", "Lange vingers"],
        },
      },
      {
        _id: "ybmervc1",
        name: "Red Velvet Cake",
        picture: RVC,
        isVeggyfriendly: true,
        price: 7.0,
        ingredients: {
          en: ["Cocoa cake", "Cream cheese frosting"],
          nl: ["Cacaocake", "Roomkaas glazuur"],
        },
      },
    ],
  },
];
