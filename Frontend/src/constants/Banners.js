// homepage banners
const homeBanners = [
  { url: "https://www.orchardtaunton.co.uk/app/uploads/2021/06/OSC-Summer-Generic-Website-Banner-01.jpg", link: "Best-Deals" },
  { url: "https://i.pinimg.com/originals/8f/8c/96/8f8c96d99932fce8c786b4130d624dca.jpg", link: "wedding" },
  { url: "https://m.media-amazon.com/images/S/aplus-media/vc/85497716-3f9c-41f7-abf0-76003c76fa44.__CR0,0,970,300_PT0_SX970_V1___.jpg", link: "boat-headphones" },
  { url: "https://1.bp.blogspot.com/-tjmqXN7PvSA/YNBUBC4a_rI/AAAAAAAAE5U/HzjRrCB8rZwM-J2PVqh-84WrdO_33WvTwCNcBGAsYHQ/s1920/Laptop_banner.jpg", link: "" },
];

// Banners for each categories and subcategories
const images = {
  //men
  men_trousers: "https://www.artless-store.com/cdn/shop/collections/e63e4d03adef96f99de73b60f9e2ea50_1376x416_a34eea3d-a267-4a29-9085-9c2097e4c8f3.jpg?v=1704529624",
  men_blazers: "https://cdn.shopify.com/s/files/1/2027/6273/files/3for2_banner_1024x1024.jpg?v=1724524295",
  men_earbuds: "https://signatize.in/wp-content/uploads/2024/03/EARBUDS-BANNER_-2048x717.jpg",
  men_ethnics: "https://ethnicity.in/cdn/shop/files/Men-Banner_1_1024x1024.jpg?v=1737635693",
  men_formals: "https://theformalclub.in/cdn/shop/files/Fulkl-SLEVVEESSS_74f73ad8-8779-4f5c-9d89-c70fb07ff625.jpg?v=1721209695",
  men_jeans: "https://cdn.shopify.com/s/files/1/0565/8050/5775/files/5_jan_banner_1640x924_copy_1024x1024.jpg?v=1704452484",
  men_shirts: "https://theformalclub.in/cdn/shop/files/NEW-COLLECTION-BANNER-23_2.jpg?v=1721304243&width=3600",
  men_shoes: "https://th.bing.com/th/id/R.e70226b7efdbf3258e83fd98150263cb?rik=PkXL3K%2f48fh8fw&riu=http%3a%2f%2fs7d4.scene7.com%2fis%2fimage%2fboombah%2ffootwear-mens-banner-2%3f%24fullsize%24&ehk=56wCulEgRtWoXOqW7lHar78OOl7J0B3XJZUlr3aGkkk%3d&risl=&pid=ImgRaw&r=0",
  men_tshirts: "https://cdn.shopify.com/s/files/1/1982/7331/files/Artboard_1_77.jpg?v=1757922643",
  men_watches: "https://static.helioswatchstore.com/media/brand_directory/all.png",

  //women
  women_dresses: "https://www.odhanon.in/cdn/shop/files/Chic_Summer_women_outfits_made_of_hand_block_printed_cotton_2.png?v=1740985655&width=3840",
  women_tops:"https://cdn.shopify.com/s/files/1/0512/8398/4564/files/Tops_Shirts_CatPageBanner.jpg?v=1711020216",
  women_kurti:"https://zola.in/cdn/shop/articles/style_kurti_banner.jpg?v=1686116201",
  women_jeans:"https://www.denimjeansindia.com/designer/images/slider/girls-jeans.jpg",
  women_heels:"https://cdn.shopify.com/s/files/1/0249/9159/6604/files/Extra_Wide_fit_heels_banner_2nd.jpg?v=1712849054",
  women_sarees:"https://www.cbazaar.com/blog/wp-content/uploads/2023/09/WP_Blog_July28_02.jpg",
  women_trousers:"https://cdn.shopify.com/s/files/1/0486/0634/7416/collections/trousers-Listing-banner.jpg?v=1652551934",
  women_sneakers:"https://www.24s.com/static/images/BH7np-vFOnzA9bSVq3uErq9_E7s=/fit-in/2400x0/81f049d52b6040a48e7a557379e8b34b",
  women_handbags:"https://womenfashionwear.com/images/fashion-bag-banner.jpg",
  women_watches:"https://mir-s3-cdn-cf.behance.net/project_modules/fs/ac945557679665.59df3105bb316.jpg",

  kids_tshirts:"https://www.nusyl.com/cdn/shop/files/03.jpg?v=1687431019&width=3840",
  kids_shorts:"https://www.grassandair.com/cdn/shop/collections/grass-and-air-swimshorts-banner.jpg?v=1709564880&width=3000",
  kids_shoes:" https://cdn11.bigcommerce.com/s-g2v98q4kwy/images/stencil/original/carousel/947/3.19-20_Big_and_Little_Flash_Sale_Banner.jpg",
  kids_caps:"https://a.storyblok.com/f/132956/1920x730/d7dbc8e1d9/exclusive-page-banner-desktop-left-but-centered.jpg",
  kids_dresses:"https://fashion4kids.ie/wp-content/uploads/2021/06/middle-banner-scaled.jpg",
};
//kids subcateogry images
const subcategoryImages = {
    tshirts: "https://knitroot.com/wp-content/uploads/2023/05/20.png",
    shorts: "https://m.media-amazon.com/images/I/71sRFRR6BKL._UY1100_.jpg",
    shoes: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynK_X9lRguDKHa1y_CTLG3eZi2i5Qb6_FeA&s",
    caps: "https://www.tinyminymo.com/cdn/shop/files/Kids-Cool-3D-Cap-4_1200x1200.jpg?v=1741539809",
    dresses: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/29524964/2024/5/14/28f21d13-9753-4337-b032-e41403e6eb3e1715663385068BAESDFloralFlutterSleeveNetFitFlareDress1.jpg"
};
//men subcategory images
const mensubcatImages = {
  shirts: "https://i.pinimg.com/originals/72/c6/be/72c6be72e26904f53f1a042057f01c61.jpg",
  tshirts: "https://ae01.alicdn.com/kf/HTB1nR3uGWmWBuNjy1Xaq6xCbXXaE/casual-men-s-t-shirt-new-short-sleeved-Summer-Retro-Style-Synthwave-Graphic-Logo-Design-printing.jpg",
  shoes: "https://ae01.alicdn.com/kf/H25a36e5dfdb243bf93a08b34bd3f41376/Men-Business-Casual-Shoes-PU-Leather-Running-Shoes-Fashion-Lace-Up-Casual-Sneakers-Male-Outdoor-Walking.jpg",
  jeans: "https://images.bewakoof.com/t320/men-s-blue-jeans-mid-blue-624672-1706594218-1.jpg",
  ethnics: "https://shaadiwish.com/blog/wp-content/uploads/2023/10/2.-Samoh-India-Has-Chic-Festive-Season-Menswear-1-300x300.jpeg",
  blazers: "https://ae01.alicdn.com/kf/HTB1PMdeSVXXXXXNaXXXq6xXFXXXl/2017-designer-men-Suit-Jackets-Autumn-Slim-blazer-masculino-casual-Blazer-men-high-quality-Business-dress.jpg",
  watches: "https://ae01.alicdn.com/kf/HTB1kRYBXiHrK1Rjy0Flq6AsaFXa6/Geneva-Mens-Watch-Date-Stainless-Steel-Leather-Analog-Alloy-Quartz-Wrist-Watch-Waterproof-Military-Sports-Watches.jpg",
  earbuds: "https://m.media-amazon.com/images/I/61PULZm67sL._AC_UF894,1000_QL80_.jpg",
  formals: "https://louisphilippe.abfrl.in/blog/wp-content/uploads/2024/02/Formal-Dress-Code-in-2024.jpg",
  trousers: "https://ae01.alicdn.com/kf/HTB1c5R1QpXXXXanapXXq6xXFXXXo/Plus-Size-28-36-Men-s-Casual-Pants-Slim-Fit-Gray-Straight-Pants-Men-Fashion-Red.jpg",
};
//women sub category images
const womensubcatImages = {
    dresses: "https://i.pinimg.com/736x/1a/e1/43/1ae14341b8d9573ecef88c454edca694.jpg",
    tops: "https://i.pinimg.com/originals/16/96/d4/1696d40c051b038d4f56c8b91348a8fc.jpg",
    kurti: "https://urbanstree.com/cdn/shop/files/April23-351.jpg?v=1689345436",
    jeans: "https://d2j6dbq0eux0bg.cloudfront.net/images/21493407/3488072551.jpg",
    heels: "https://th.bing.com/th/id/OIP.JYcFWJJrRmiINXNCvy5bZQAAAA?w=385&h=385&rs=1&pid=ImgDetMain",
    sarees: "https://i.pinimg.com/originals/e3/35/a9/e335a9861dc71a9c17f38e4817f0b496.jpg",
    trousers: "https://assets.ajio.com/medias/sys_master/root/20240919/5p8e/66eb5480260f9c41e811fd6c/-473Wx593H-700440700-beige-MODEL.jpg",
    sneakers: "https://ae01.alicdn.com/kf/HTB1_ECxaXkoBKNjSZFEq6zrEVXaB/Women-Running-Shoes-Krasovki-Womens-Sneakers-2018-Sneakers-Women-Zapatillas-Deportivas-Mujer-Running-Shoes-Pink-Size.jpg",
    handbags: "https://th.bing.com/th/id/OIP.73ClGYHGReevkne1_hVF7AAAAA?rs=1&pid=ImgDetMain",
    watches: "https://img.joomcdn.net/8f3f0c280ce325d8756d88d2d5792e0a95dce3c7_original.jpeg"
  };

const assets = {
  homeBanners,
  images,
  subcategoryImages,
  mensubcatImages,
  womensubcatImages
};
export default assets;
  