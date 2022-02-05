import { NavLink } from "react-router-dom";

export const products = [
  {
    img:
      "https://i.ibb.co/vs5nWbf/tai-nghe-bluetooth-sony-xb950n1-xanh-reu-hang-phan-phoi-chinh-thuc-1240-74684912-825c15aa84e0f6de49f.png",
    outOfStock: true,
    top: true,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Phasellus hendrerit. Pellentesque",
    sale: false,
    color: false,
    new: true,
    colors: [],
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratingsVal: 50,
    reviews: 11324,
  },
  {
    img: "https://i.ibb.co/99msrjs/mi10-pro.png",
    top: true,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Phasellus hendrerit. Pellentesque",
    sale: false,
    color: true,
    colors: [
      { active: false, color: "#69b4ff" },
      { active: false, color: "#ff887f" },
      { active: true, color: "#333333" },
    ],
    outOfStock: false,
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratingsVal: 10,
    reviews: 2,
  },
  {
    img: "https://i.ibb.co/fN3BMSJ/dien-thoai-chup-anh-dep-11.png",
    outOfStock: false,
    top: true,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Phasellus hendrerit. Pellentesque",
    sale: true,
    new: false,
    color: true,
    colors: [
      { active: false, color: "#69b4ff" },
      { active: false, color: "#ff887f" },
      { active: true, color: "#333333" },
    ],
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratingsVal: 90,
    reviews: 2,
  },
  {
    img: "https://i.ibb.co/9TKWh5R/images.png",
    top: false,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Phasellus hendrerit. Pellentesque",
    sale: true,
    new: true,
    color: false,
    colors: [],
    outOfStock: false,
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratingsVal: 100,
    reviews: 2,
  },
  {
    img:
      "https://i.ibb.co/1mWyD9T/15725814008212-laptop-gaming-la-gi-1024x1024.png",
    top: false,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Phasellus hendrerit. Pellentesque",
    sale: false,
    new: true,
    color: true,
    colors: [
      { active: false, color: "#69b4ff" },
      { active: false, color: "#ff887f" },
      { active: true, color: "#333333" },
    ],
    outOfStock: false,
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratingsVal: 20,
    reviews: 2,
  },
  {
    img: "https://i.ibb.co/fDcqfZ7/3979495620d0021e0fd016b0ffbd5b71.png",
    top: false,
    sale: false,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Phasellus hendrerit. Pellentesque",
    new: false,
    color: false,
    colors: [],
    outOfStock: true,
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratingsVal: 60,
    reviews: 2,
  },
  {
    img: "https://i.ibb.co/NKXgF5t/600-xiaomi-mi-10-pro.png",
    top: false,
    sale: true,
    new: true,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Phasellus hendrerit. Pellentesque",
    color: false,
    colors: [],
    outOfStock: false,
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratingsVal: 60,
    reviews: 2,
  },
  {
    img: "https://i.ibb.co/T4JNYfj/14ab60b9a783ace9e7a7c97b8e142ef4.png",
    top: true,
    sale: false,
    new: true,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Phasellus hendrerit. Pellentesque",
    color: false,
    colors: [],
    outOfStock: false,
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratingsVal: 60,
    reviews: 2,
  },
  {
    img: "https://i.ibb.co/sK4zw46/FB-IMG-1586737119403-1.png",
    top: true,
    sale: true,
    new: false,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Phasellus hendrerit. Pellentesque",
    color: false,
    colors: [],
    outOfStock: false,
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratingsVal: 60,
    reviews: 2,
  },
];

export const optionsFeatured = {
  nav: true,
  dots: true,
  margin: 20,
  navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
  loop: true,
  smartSpeed: 1000,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

export const optionsTrending = {
  nav: true,
  dots: false,
  margin: 20,
  loop: true,
  smartSpeed: 1000,
  autoplay: true,
  navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
  responsive: {
    0: {
      items: 2,
    },
    480: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
};

export const optionsTop = {
  nav: true,
  navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
  dots: false,
  margin: 20,
  loop: true,
  smartSpeed: 1000,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    480: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
};

export const optionsBrand = {
  nav: true,
  navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
  smartSpeed: 1000,
  autoplay: true,
  dots: true,
  margin: 30,
  loop: true,
  responsive: {
    0: {
      items: 2,
    },
    420: {
      items: 3,
    },
    600: {
      items: 4,
    },
    900: {
      items: 5,
    },
    1024: {
      items: 6,
    },
  },
};

export const categoriesDropdown = [
  {
    id: 1,
    name: "Electronics",
    row: [
      {
        id: 1,
        title: [
          {
            id: 1,
            tle: "Laptops & Computers",
            li: [
              "Desktop Computers",
              "Monitors",
              "Laptops",
              "iPad & Tablets",
              "Hard Drives & Storage",
              "Printers & Supplies",
              "Computer Accessories",
            ],
          },
          {
            id: 2,
            tle: "TV & Video",
            li: [
              "TVs",
              "Home Audio Speakers",
              "Projectors",
              "Media Streaming Devices",
            ],
          },
        ],
      },
      {
        id: 2,
        title: [
          {
            id: 1,
            tle: "Cell Phones",
            li: [
              "Carrier Phones",
              "Unlocked Phones",
              "Phone & Cellphone Cases",
              "Cellphone Chargers",
            ],
          },
          {
            id: 2,
            tle: "Digital Cameras",
            li: [
              "Digital SLR Cameras",
              "Sports & Action Cameras",
              "Camcorders",
              "Camera Lenses",
              "Photo Printer",
              "Digital Memory Cards",
              "Camera Bags, Backpacks & Cases",
            ],
          },
        ],
      },
    ],
    baner: (
      <div class="banner banner-overlay">
        <NavLink to="/shop/grid-3-columns" class="banner banner-menu">
          <img
            src="/assets/images/demos/demo-13/menu/banner-1.jpg"
            alt="Banner"
          />
        </NavLink>
      </div>
    ),
  },
  {
    id: 2,
    name: "Furniture",
    row: [
      {
        id: 1,
        title: [
          {
            id: 1,
            tle: "Bedroom",
            li: [
              "Beds, Frames & Bases",
              "Dressers",
              "Nightstands",
              "Kids' Beds & Headboards",
              "Armoires",
              "Printers & Supplies",
              "Computer Accessories",
            ],
          },
          {
            id: 2,
            tle: "Living Room",
            li: [
              "Coffee Tables",
              "Chairs",
              "Tables",
              "Futons & Sofa Beds",
              "Cabinets & Chests",
            ],
          },
        ],
      },
      {
        id: 2,
        title: [
          {
            id: 1,
            tle: "Office",
            li: [
              "Office Chairs",
              "Desks",
              "Bookcases",
              "File Cabinets",
              "Breakroom Tables",
            ],
          },
          {
            id: 2,
            tle: "Kitchen & Dining",
            li: [
              "Dining Sets",
              "Kitchen Storage Cabinets",
              "Bakers Racks",
              "Dining Chairs",
              "Dining Room Tables",
              "Bar Stools",
            ],
          },
        ],
      },
    ],
    baner: (
      <div class="banner banner-overlay">
        <NavLink to="/shop/grid-3-columns" class="banner banner-menu">
          <img
            src="/assets/images/demos/demo-13/menu/banner-2.jpg"
            alt="Banner"
          />
        </NavLink>
      </div>
    ),
  },
];

export const categoriesCooking = {
  name: "Cooking",
  row: [
    {
      id: 1,
      title: "Cookware",
      li: [
        "Cookware Sets",
        "Pans, Griddles & Woks",
        "Pots",
        "Skillets & Grill Pans",
        "Kettles",
        "Soup & Stockpots",
      ],
    },
    {
      id: 2,
      title: "Dinnerware & Tabletop",
      li: [
        "Plates",
        "Cups & Mugs",
        "Trays & Platters",
        "Coffee & Tea Serving",
        "Salt & Pepper Shaker",
      ],
    },
    {
      id: 3,
      title: "Cooking Appliances",
      li: [
        "Microwaves",
        "Coffee Makers",
        "Mixers & Attachments",
        "Slow Cookers",
        "Air Fryers",
        "Toasters & Ovens",
      ],
    },
  ],
  banner: [
    "/assets/images/demos/demo-13/menu/1.jpg",
    "/assets/images/demos/demo-13/menu/2.jpg",
    "/assets/images/demos/demo-13/menu/3.jpg",
  ],
};

export const categoriesClothing = {
  name: "Clothing",
  row: [
    {
      id: 1,
      title: "Women",
      li: [
        { strong: true, name: "New Arrivals" },
        { strong: true, name: "Best Sellers" },
        { strong: true, name: "Trending" },
        { strong: false, name: "Clothing" },
        { strong: false, name: "Shoes" },
        { strong: false, name: "Bags" },
        { strong: false, name: "Accessories" },
        { strong: false, name: "Jewlery & Watches" },
        { strong: true, name: "Sale" },
      ],
    },
    {
      id: 2,
      title: "Men",
      li: [
        { strong: true, name: "New Arrivals" },
        { strong: true, name: "Best Sellers" },
        { strong: true, name: "Trending" },
        { strong: false, name: "Clothing" },
        { strong: false, name: "Shoes" },
        { strong: false, name: "Bags" },
        { strong: false, name: "Accessories" },
        { strong: false, name: "Jewlery & Watches" },
        { strong: true, name: "Sale" },
      ],
    },
  ],
  banner: "/assets/images/demos/demo-13/menu/banner-3.jpg",
  brands: [
    "/assets/images/brands/1.png",
    "/assets/images/brands/2.png",
    "/assets/images/brands/3.png",
    "/assets/images/brands/4.png",
    "/assets/images/brands/5.png",
    "/assets/images/brands/6.png",
  ],
};
