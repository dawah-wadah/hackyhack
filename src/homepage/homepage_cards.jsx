import React from "react";
import CardNew from "./Card.jsx";
import { Card } from "semantic-ui-react";

class CardList extends React.Component {
  render() {
    let food = [
      {
        name: "Homemade Japanese Curry",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 5.0,
        description:
          "A fragrant curry powder made from scratch takes this family-friendly Japanese chicken and vegetable curry to a new level of deliciousness."
      },
      {
        name: "Tonkatsu - Asian-Style Pork Chop",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/62/75/627512.jpg",
        rating: 4.38,
        description:
          '"This is using Panko, which is Japanese bread crumbs (really light and airy, more so than crackers), and thinly sliced boneless pork chops."'
      },
      {
        name: "Ashley's Chicken Katsu with Tonkatsu Sauce",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/00/23/2380.jpg",
        rating: 4.23,
        description:
          "Panko (Japanese bread crumbs) crusted fried chicken breasts with a sweet Tonkatsu dipping sauce. Serve with your choice of steamed white rice, shredded cabbage, or even mashed potatoes."
      },
      {
        name: "Green Tea Layer Cake",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/69/23/692310.jpg",
        rating: 4.4,
        description:
          "This is a light and moist cake that is not too sweet and has a refreshing green tea fragrance. The frosting uses cream cheese but has enough sweetness to mask the sour taste. The matcha (green tea) powder gives it a delicate green hue too. This cake can also be baked as a sheet cake in a 9x 13 inch pan or as 2 separate round cakes in two 8 inch round pans. Adjust baking time accordingly."
      },
      {
        name: "Kasutera (Castella), the Japanese Traditional Honey Cake",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/04/55/73/4557342.jpg",
        rating: 4.0,
        description:
          "Kasutera, a traditional Japanese honey cake, is a nice light sponge cake, similar to angel food cake. Serve with sweet adzuki bean paste and ice cream."
      },
      {
        name: "Marshmallow Cake",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/01/68/16820.jpg",
        rating: 4.58,
        description:
          "This is a very light version of a no-bake cheesecake that I learned from a friend in Japan.  A perfect recipe for people looking for something sweet to top off a meal."
      },
      {
        name: "Chi Chi Dango Mochi",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/36/38/363849.jpg",
        rating: 4.64,
        description:
          "Soft and chewy Japanese dessert.  A tradition of boy's or girl's day.  Great for a snack for picnics or parties. This recipe is easy to make, but do not try cheating and double it.  The directions should be followed exactly."
      },
      {
        name: "Microwave Mochi",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/95/57/955793.jpg",
        rating: 4.65,
        description:
          "A microwavable form of the Japanese dessert made with sweet rice flour.  More varied and interesting flavors are available as well."
      },
      {
        name: "Pumpkin Mochi",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/66/62/666208.jpg",
        rating: 4.61,
        description:
          "This twist on a traditional Japanese treat is made with canned pumpkin and glutinous rice flour."
      },
      {
        name: "Green Tea Mousse Cheesecake",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/33/29/332984.jpg",
        rating: 4.47,
        description:
          "Matcha green tea powder and honey flavor this easy no-bake cheesecake."
      },
      {
        name: "Butter Mochi Cake",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/65/96/659615.jpg",
        rating: 3.8,
        description:
          "This is a delectably rich, buttery, and simple-to-make rendition of the traditional Japanese dessert of red-bean mochi. Traditional Japanese mochi is made from sweet rice flour  mixed with water, steamed, and formed into small patties filled with sweetened red bean paste and lightly dusted with confectioner's sugar. This butter mochi cake is a westernized version of the traditional mochi, for it incorporates butter, milk, eggs, and vanilla and is baked."
      },
      {
        name: "Spongy Japanese Cheesecake",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/04/45/95/4459533.jpg",
        rating: 4.8,
        description:
          "This Japanese cheesecake, made with cream cheese, eggs, and a hint of cornstarch, is light and spongy and great plain or served with fruit."
      },
      {
        name: "Steamed Green Tea Cake with Black Sesame Seeds",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/05/07/50782.jpg",
        rating: 4.17,
        description:
          "Powdered green tea is used in this delicate cake you make in a bamboo steamer. Black sesame seeds can be found in most Asian grocery stores."
      },
      {
        name: "Japanese Fruitcake",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/02/63/19/2631976.jpg",
        rating: 4.33,
        description:
          "This recipe was given to me by my grandmother, now deceased. It is at least 40 years old."
      },
      {
        name: "Japanese Green Tea Petits Fours",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/04/48/79/4487954.jpg",
        rating: 2.78,
        description:
          "Green tea-flavored petits fours with a green tea whipped cream and decorated with green tea marzipan. This recipe could also be adapted to make a layer cake or tube cake. The powdered green tea used here is called matcha, the powdered kind used in Japanese tea ceremonies."
      },
      {
        name: "Butter Mochi",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/03/84/18/3841826.jpg",
        rating: 4.47,
        description:
          "Butter and coconut milk flavor this sweet, baked, Japanese treat."
      },
      {
        name: "Easy Mochi",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/01/01/47/1014786.jpg",
        rating: 3.88,
        description:
          "Chewy rice cakes are stuffed with a sweetened red bean paste."
      },
      {
        name: "Japanese Cheesecake",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/01/81/18110.jpg",
        rating: 3.61,
        description:
          "A light and fluffy cheesecake made with whipped eggs and very little cream cheese."
      },
      {
        name: "Green Tea Swiss Roll",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "Matcha (green tea powder) flavors both the cake and the cream in this pretty and delicious Japanese dessert you can make in under an hour."
      },
      {
        name: "Simply Mochi",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "Mochi, a Japanese dessert, is made with 3 simple ingredients: glutinous rice flour (mochiko), sugar, and water creating a nice sweet dessert."
      },
      {
        name: "Chicken Yakisoba",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/96/45/964515.jpg",
        rating: 4.57,
        description:
          "This traditional Japanese yakisoba noodle dish includes cabbage and chicken in a spicy sauce."
      },
      {
        name: "Chicken Katsu",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/65/36/653617.jpg",
        rating: 4.67,
        description:
          "This is my family recipe for Chicken Katsu - Japanese style fried chicken. Can also be used to make Tonkatsu, just use pork cutlets instead of chicken. Serve with white rice and tonkatsu sauce."
      },
      {
        name: "Quick Oyakodon",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/71/22/712228.jpg",
        rating: 4.38,
        description:
          "Chicken and onion are cooked with scrambled eggs and served over rice in this Japanese favorite."
      },
      {
        name: "Oyako Donburi",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/03/18/31846.jpg",
        rating: 4.68,
        description:
          "This is a popular (at least in Hawaii) Japanese dish which is often served at restaurants  in individual bowls. Oyako means mother and child, hence the main ingredients, chicken and eggs."
      },
      {
        name: "Japanese-Style Deep Fried Chicken",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/29/61/296189.jpg",
        rating: 4.56,
        description:
          "If you like the taste of Japanese dishes, you will love it. Very crispy, and my friends like it too. You can buy joshinko (rice flour), katakuriko (potato starch), and sesame oil at asian market. If you live in large city, you may find them at American grocery store. Joshinko and katakuriko taste nothing different from regular flour, but they really help to make crispy fried chicken."
      },
      {
        name: "Yakisoba Chicken",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/02/22/01/2220105.jpg",
        rating: 4.31,
        description:
          "A classic, justifiably popular Japanese stir fry in which chicken cooked in a yummy soy sauce, chili paste garlic blend is tossed with buckwheat soba noodles, carrot, cabbage and onion."
      },
      {
        name: "Juicy Chicken",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/84/41/844133.jpg",
        rating: 4.37,
        description:
          "This chicken is a variant on the popular Japanese snack yakitori.  It makes the juiciest chicken I've ever tasted."
      },
      {
        name: "Yakitori Chicken",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/04/09/57/4095713.jpg",
        rating: 4.32,
        description:
          "Chicken is marinated in a soy sauce, sake and ginger sauce, then threaded onto skewers and broiled with leeks for an easy, tasty and fun meal."
      },
      {
        name: "Chicken Hekka",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/82/71/827120.jpg",
        rating: 4.22,
        description:
          "A gingery Asian stir fry with heaps of carrot, onion, bamboo shoots, and mushrooms served over delicate rice noodles."
      },
      {
        name: "Shoyu Chicken",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/69/53/695345.jpg",
        rating: 4.65,
        description:
          "Shoyu Chicken is Hawaii's answer to teriyaki chicken. Chicken thigh meat is marinated in a sweet, spicy soy sauce marinade, then grilled and served with rice."
      },
      {
        name: "Yakitori Don",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/06/31/63142.jpg",
        rating: 4.52,
        description:
          "Chicken pieces rest overnight in a tasty ginger, soy sauce, and rice wine marinade before being pan-fried, baked, or grilled. Serve hot with rice or noodles."
      },
      {
        name: "Chicken Karaage (Japanese Fried Chicken)",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/03/50/39/3503916.jpg",
        rating: 4.8,
        description:
          "Bite-size pieces of chicken are marinated in ginger, sake, and soy sauce before being deep-fried in this Japanese-style Chicken Karaage."
      },
      {
        name: "Buffalo Chicken Sushi Roll",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/03/79/20/3792008.jpg",
        rating: 4.5,
        description:
          "Roll cooked chicken coated with hot sauce, carrot, and celery in sushi rice and nori for a sushi roll inspired by Buffalo-style chicken."
      },
      {
        name: "Spring Cabbage Chicken Boil",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "This recipe for cabbage and chicken are cooked in a mixture of soy sauce, mirin, and sake for a quick, easy, and tasty dish."
      },
      {
        name: "Tsukune (Japanese Chicken Meatballs)",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "Ground chicken is seasoned with ginger, sake, miso, and sake, shaped into meatballs, and grilled in this recipe for Japanese-style Tsukune."
      },
      {
        name: "Karaage (Japanese Fried Chicken) with Honey Mayoster Sauce",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "Karaage (Japanese fried chicken) is coated with a sauce of mayonnaise, honey, mirin, and soy sauce in this tasty, family-friendly recipe."
      },
      {
        name: "Chicken and Sweet Potato Rice",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "This traditional Asian recipe combines Japanese rice, chicken, and sweet potato in a microwave pressure cooker, making a quick, simple meal."
      },
      {
        name: "Japanese Curry with Homemade Curry Roux",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "This Japanese chicken curry made without an instant curry roux mix is a bright weeknight dish full of pumpkin, bell peppers, and carrot."
      },
      {
        name: "Manju (Japanese Sweet Bean Paste Cookies)",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/03/27/78/3277881.jpg",
        rating: 4.5,
        description:
          "Manju, Japanese sweet bean paste-filled cookies, are a tasty treat that a fairly quick and easy to prepare."
      },
      {
        name: "Sesame Seared Tuna",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/03/98/39843.jpg",
        rating: 4.68,
        description:
          "Easy, great tasting tuna coated with sesame seeds, and quickly seared. This tuna is served rare, so be sure to use a good quality fresh tuna."
      },
      {
        name: "Sesame Crusted Mahi Mahi with Soy Shiso Ginger Butter Sauce",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/82/02/820210.jpg",
        rating: 4.73,
        description:
          "Mahi mahi fillets are encrusted with black and white sesame seeds, and pan seared. The sauce is rich and creamy, and flavored with soy, ginger, shallots, and shiso (a Japanese herb related to basil and mint)."
      },
      {
        name: "Gyudon Japanese Beef Bowl ",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/03/66/38/3663861.jpg",
        rating: 4.0,
        description:
          "Thinly-sliced beef and onion are stir-fried with soy sauce, sake, and brown sugar in this fast and easy recipe for Japanese Gyudon bowls."
      },
      {
        name: "Teriyaki Rib Eye Steaks",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/24/92/249288.jpg",
        rating: 4.48,
        description:
          "Tangy homemade teriyaki sauce perfectly complements rich ribeye steaks. Colorful vegetable fried rice makes a wonderful accompaniment."
      },
      {
        name: "Japanese Broiled Mackerel",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/39/83/398397.jpg",
        rating: 4.56,
        description:
          "Japanese marinade sauce gives a lovely taste and texture to broiled mackerel. Yellow tail, tuna or salmon are also good for this recipe. Easy, exotic!"
      },
      {
        name: "Pan Roasted Beef Tenderloin with Ginger-Shiitake Brown Butter",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/01/08/30/1083084.jpg",
        rating: 4.5,
        description:
          "A sake-mirin browned butter sauce lends an Asian touch to these lovely filet mignons."
      },
      {
        name: "Sarah's Special Sushi",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/96/72/967291.jpg",
        rating: 4.8,
        description:
          "This California-style fusion sushi features untraditional but delicious smoked salmon and cream cheese rolled into nori seaweed sheets with sushi rice, then sliced into rounds. "
      },
      {
        name: "Japanese-Style Crispy Fried Pork Bowl (Tonkatsu Donburi)",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/04/54/76/4547600.jpg",
        rating: 5.0,
        description:
          "Rice is topped with egg and crispy deep-fried pork chops in this savory Japanese-style rice bowl, Tonkatsu Donburi, a great dinner for 2."
      },
      {
        name: "Sesame Tuna with Soy Miso Dressing",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/72/80/728001.jpg",
        rating: 4.35,
        description:
          "This recipe is served at a seafood restaurant in Royal Oak, Michigan. The sesame covered tuna is done medium rare inside (almost like sushi) and has a fantastic soy miso dressing drizzled over the top. One of the best seafood dishes I love!"
      },
      {
        name: "Tonkatsu Shoyu Ramen (Pork Cutlet Soy Sauce Ramen)",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/04/46/57/4465714.jpg",
        rating: 4.0,
        description:
          "Seasoned pork cutlet slices, naruto, and a hard-boiled egg top ramen cooked with shoyu and miso in this authentic Japanese noodle bowl."
      },
      {
        name: "My Fly Stir-Fry",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/02/43/67/2436763.jpg",
        rating: 3.93,
        description:
          "My mom taught me how to make this very tasty stir-fry. My boyfriend loves it so much I make it at least once a week! You can use virtually any combination of vegetables and meat you like, but the combination of sauces is essential. Serve over steamed rice or noodles."
      },
      {
        name: "Japanese-Style Deep-Fried Shrimp",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/59/91/599150.jpg",
        rating: 4.83,
        description:
          "Shrimp are seasoned and coated with crispy panko crumbs to make the easiest, tastiest deep-fried shrimp ever!"
      },
      {
        name: "Nigiri Sushi",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 3.5,
        description:
          "Seasoned rice is wrapped with fresh fish, cooked shrimp, or eggs for traditional Japanese nigiri sushi."
      },
      {
        name: "Nikujaga (Japanese-style meat and potatoes)",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/25/94/259466.jpg",
        rating: 4.61,
        description:
          "This main dish recipe features sliced beef sirloin cooked with potatoes, and onion in a sauce made with prepared dashi soup, sake, and soy sauce."
      },
      {
        name: "Tonkatsu",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/93/18/931809.jpg",
        rating: 4.75,
        description:
          "These breaded and fried pork cutlets make a traditional Japanese dish which is very simple and easy to make. Serve with sticky rice and tonkatsu sauce and enjoy! Also great if substituted with chicken breasts."
      },
      {
        name: "Stir-Fried Japanese Ginger Pork",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/03/64/44/3644407.jpg",
        rating: 4.0,
        description:
          "Thinly sliced pork is stir-fried with ginger, daikon radish, sake, and mirin in this easy Japanese weeknight dish that's full of flavor."
      },
      {
        name: "Omelet for Leftovers (Omurice)",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/03/36/90/3369036.jpg",
        rating: 5.0,
        description:
          'A thin omelet tops savory rice with bacon and vegetables in this Japanese-style "omurice," a quick meal you can rustle up from leftovers.'
      },
      {
        name: "Japanese Wafu Burger",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/61/49/614934.jpg",
        rating: 4.43,
        description:
          "These traditional glazed Japanese hamburgers are eaten without a bun. Shiitake mushrooms and tofu add moisture to the ground beef."
      },
      {
        name: "Okonomiyaki (Japanese Pancake)",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/04/46/61/4466193.jpg",
        rating: 4.75,
        description:
          "This savory pancake filled with cabbage, bacon, sausage, and shrimp is a well-known Japanese dish, okonomiyaki, that's easy to customize."
      },
      {
        name: "Japanese Ginger Pork",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/24/04/240451.jpg",
        rating: 4.3,
        description:
          "This recipe is for a quick Japanese style pork saute. Great with rice and steamed veggies on the side. You can also double the recipe and use whole Pork Chops or chicken breasts for grilling!"
      },
      {
        name: "Spicy Chile Oil Squid",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/04/39/56/4395635.jpg",
        rating: 4.0,
        description:
          "Squid is cooked in a soy-ginger sauce with chile oil for a spicy, Japanese dish that is great for a quick and easy appetizer or main dish."
      },
      {
        name: "Japanese Minced Beef",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/03/70/82/3708219.jpg",
        rating: 4.0,
        description:
          "Ground beef is pan-fried with ginger, soy sauce, sake, and mirin for a quick and easy, Japanese meal to serve over white rice."
      },
      {
        name: "Tofu with Pork and Miso",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/02/17/29/2172915.jpg",
        rating: 4.17,
        description:
          "Ground meat and tofu cubes are simmered with miso in this wonderful dish that goes really well with hot steamed rice. It's also very quick and easy."
      },
      {
        name: "Japanese-Inspired Beef Tenderloin",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 3.25,
        description:
          "Japanese ingredients add flavor and flair to marinated beef tenderloin filets that are stovetop seared, then finished in the oven, and served atop a medley of seasoned stir-fried vegetables."
      },
      {
        name: "Tofu Chanpuru",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 3.5,
        description:
          "Traditional Japanese-style tofu is pan-fried with cabbage, scrambled eggs, and a sake-miso dressing for a hearty and flavorful dish."
      },
      {
        name: "Goya Champuru (Bitter Melon Stir Fry)",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/04/56/03/4560394.jpg",
        rating: 4.0,
        description:
          "This quick and easy recipe is a traditional dish in Okinawa that is made with goya (bitter melon), pork loin, soy sauce, and scrambled eggs."
      },
      {
        name: "Salmon Yakitori",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/03/89/95/3899502.jpg",
        rating: 3.5,
        description:
          "This simple marinade of soy, sake, mirin and sugar gives salmon a lovely Asian-inspired taste while allowing the richness and flavor of the meat to shine through. This is great for an easy summer dinner, served with grilled or stir fried vegetables."
      },
      {
        name: "Crispy Shrimp Tempura",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/35/62/356226.jpg",
        rating: 4.04,
        description:
          "Served as an appetizer, first course, or main dish, these crisply fried Japanese-style shrimp are sure to impress.  Be sure to team them up with a soy or tempura dipping sauce."
      },
      {
        name: "Monica's Japanese Garlic Dollop Shrimp",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/02/70/31/2703164.jpg",
        rating: 3.0,
        description:
          "This is a delightful Japanese-inspired shrimp recipe for garlic-lovers; served over rice or pasta or on it's own -- it's sure to make everyone scream, 'What's the recipe?!'  I secured this sure-fire loads-o-goodness recipe while attempting to replicate something else entirely -- Happy Ending!"
      },
      {
        name: "Sukiyaki Beef",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/03/31/33124.jpg",
        rating: 3.71,
        description:
          "Strips of beef are stir-fried with onions, celery and mushrooms."
      },
      {
        name: "Sukiyaki",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/01/11/25/1112531.jpg",
        rating: 3.68,
        description:
          "Beef stir fried with bamboo shoots, mushrooms, celery and green onion and simmered in a soy sauce/chicken broth mixture."
      },
      {
        name: "Japanese Okonomiyaki",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/01/66/16609.jpg",
        rating: 3.86,
        description:
          "Japanese style dinner 'pancake' integrating cabbage and meat for a delicious meal!"
      },
      {
        name: "Japanese Beef Tongue Stir-Fry",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "Garlic and spring onions are stir-fried in sesame oil in this quick and easy Japanese dish that uses beef tongue as its main ingredient."
      },
      {
        name: "Japanese Spicy Spare Ribs",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "Tender Japanese pork spare ribs are oven-grilled and tossed in a spicy, sweet, and sour sauce made with balsamic vinegar, chiles, and sake."
      },
      {
        name: "Kimchi Goya Champuru",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "Deep-fried tofu, bitter melon, kimchi, and eggs combine in this quick and easy microwave version of goya champuru, an Okinawa specialty."
      },
      {
        name: "Miso Braised Pork",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/01/02/96/1029653.jpg",
        rating: 4.63,
        description:
          "This rich, sweet-and-salty Japanese braised pork is as comforting as it is easy to make. The recipe will also adapt well to a slow cooker, just do the searing and sauce-making on the stove, then pour it all into a slow cooker, and go do something fun while dinner cooks!"
      },
      {
        name: "Okinawa Shoyu Pork",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/58/76/587647.jpg",
        rating: 4.56,
        description:
          "Rich and full of flavor--pork belly is slowly simmered in a sweet and savory mixture of soy sauce and brown sugar. Serve it over a bowl of steamy rice for a meal worth waiting for."
      },
      {
        name: "Fake Sukiyaki",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/01/00/10017.jpg",
        rating: 3.67,
        description:
          "Sukiyaki for those that don't like tofu or seaweed. Great for a quick, nutritious supper with lots of natural flavors! Add some diced tomato for added fresh flavor."
      },
      {
        name: "Japanese Beef Rolls",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/25/53/255399.jpg",
        rating: 3.85,
        description:
          "Thinly sliced beef is rolled around blanched asparagus and shiitake mushrooms. This dish is easy to prepare ahead of time, and takes just minutes to broil before serving."
      },
      {
        name: "Beef Bowl (Gyudon)",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "One of the most popular rice bowl dishes in Japan, gyudon is made with beef and eggs that have been boiled in sake, mirin, and soy sauce."
      },
      {
        name: "Beef Short Ribs Rice Bowl (Gyu Kalbi Don)",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "Marinated beef short ribs and bitter melon are served over rice with myoga in this quick Japanese rice bowl dish called gyu kalbi don."
      },
      {
        name: "Mapo Tofu (Microwave Recipe)",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "Making mapo tofu in the microwave cuts the cooking time in half, so this easy Japanese dish is perfect for dinner on a busy weeknight."
      },
      {
        name: "Mizu Shingen Mochi with Strawberry Compote",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "Mizu shingen mochi, a Japanese water cake made out of agar-agar and topped with homemade strawberry compote is a nice, delicate dessert."
      },
      {
        name: "Miso Salmon",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 4.41,
        description:
          "Japanese style-broiled salmon just like the restaurants.  Easy recipe I came up with at the request of my family. Serve with sticky white rice and a light salad."
      },
      {
        name: "Miso Salmon (Sake Misozuke) with Spinach Sauce",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 3.5,
        description:
          "Salmon fillets are marinated in white miso, then broiled with a vibrant spinach sauce."
      },
      {
        name: "Poached Salmon Tobiko Bowls",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "Sticky rice is topped with salmon and tobiko (fish eggs) in this quick and easy Japanese-inspired bowl that is ready in less than 1 hour."
      },
      {
        name: "Nona's Tableside Homemade Soft Tofu",
        image:
          "http://images.media-allrecipes.com/userphotos/250x250/00/24/83/248374.jpg",
        rating: 5.0,
        description:
          "Although somewhat similar to silken (soft) tofu since no weight is placed on tofu to extract liquid, this type of tofu is not quite silken in texture. If is much softer and fluffier than silken and does not have the crisp form cutting quality of silken tofu. Simmering cut tofu for 5 minutes firms up tofu for later cooking."
      },
      {
        name: "Okura and Sakura Shrimp Japanese-Style Spaghetti",
        image: "http://images.media-allrecipes.com/userphotos/250x250/00/11/95/119577.jpg",
        rating: 0.0,
        description:
          "Spaghetti is tossed with tiny sakura shrimp and fresh okra in this Japanese-style pasta dish seasoned with soy sauce, mirin, and sake."
      }
    ];
    const allCards = food.map(card => <CardNew card={card} />);
    return <Card.Group itemsPerRow={4}>{allCards}</Card.Group>;
  }
}

export default CardList;
