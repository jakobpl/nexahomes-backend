const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const propertyRoutes = require('./routes/propertyRoutes');
const Property = require('./models/property');
const fs = require('fs');
//import images

const app = express();
app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//   console.log("request sent to '/'");
//   res.json({ message: 'hello from server' });
// });

app.use('/api/properties', propertyRoutes);
//moongodb setup
const URL = 'mongodb://localhost:27017/nexahomes';
mongoose
  .connect(URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB', err));

// const sampleProperties = [
//   {
//     address: ['Via Amalfitana 28', 'Amalfi Coast, Italy'],
//     sqft: 6200,
//     bedrooms: 8,
//     bathrooms: 7,
//     price: 8_900_000,
//     description:
//       "Nestled amidst the breathtaking beauty of the Amalfi Coast, this exquisite property epitomizes luxury living in one of the world's most enchanting destinations. Perched on a cliff overlooking the cerulean waters of the Mediterranean Sea, this residence offers a rare blend of Italian elegance and coastal charm. With a sprawling interior that boasts opulent design and meticulous attention to detail, every corner of this villa exudes sophistication. The spacious living areas feature ornate frescoed ceilings, marble floors, and grand chandeliers, creating an atmosphere of timeless grandeur. The gourmet kitchen is a chef's dream, outfitted with top-of-the-line appliances and a marble island for culinary perfection.Step outside onto the expansive terrace, where panoramic views of the Amalfi coastline unfold before you. Relax by the infinity pool while gazing at the azure horizon, or dine alfresco in the shaded pergola, savoring the flavors of traditional Italian cuisine prepared by a private chef. The master suite offers an oasis of tranquility with its sweeping sea views and a luxurious en-suite bathroom adorned with Carrara marble. Additional bedrooms and suites provide comfort and style for family and guests. For those seeking relaxation and wellness, the property includes a spa with a sauna and a fully equipped gym. A private pathway leads to a secluded cove, where you can swim in the crystal-clear waters of the Tyrrhenian Sea. This is a once-in-a-lifetime opportunity to own a piece of paradise on the Amalfi Coast, where the beauty of nature harmoniously blends with the epitome of luxury living.",
//     thumbnail: fs.readFileSync(italy),
//     images: [
//       fs.readFileSync(italy1),
//       fs.readFileSync(italy2),
//       fs.readFileSync(italy3),
//       fs.readFileSync(italy4),
//       fs.readFileSync(italy5),
//     ],
//   },
//   {
//     address: ['Chalet Alpina 42', 'Geneva Switzerland'],
//     sqft: 5500,
//     bedrooms: 6,
//     bathrooms: 5,
//     price: 7_500_000,
//     description:
//       "Nestled high in the Swiss Alps, Chalet Alpina 42 offers the epitome of alpine luxury living in one of the world's most pristine mountain settings. Perched on a mountainside overlooking the picturesque Swiss valleys, this chalet combines Swiss craftsmanship with contemporary design, creating a harmonious blend of rustic charm and modern elegance. The interior of this chalet is a masterpiece of design, featuring exposed wooden beams, stone fireplaces, and large picture windows that frame the breathtaking mountain vistas. The open-concept living spaces provide warmth and comfort, with a grand fireplace as the centerpiece of the living room. The gourmet kitchen is equipped with the finest appliances, perfect for culinary enthusiasts.Step outside onto the spacious terrace, where you can soak in the stunning mountain views and enjoy the crisp alpine air. In the winter, you have direct access to world-class skiing, and in the summer, you can explore hiking trails that lead to pristine alpine lakes. The master suite boasts panoramic views of the surrounding peaks and a luxurious en-suite bathroom with a soaking tub. The additional bedrooms offer cozy retreats for family and guests.For relaxation and wellness, the chalet includes a private spa with a sauna and a hot tub, providing the perfect apres-ski or apres-hike experience. This is a rare opportunity to own a piece of alpine paradise in Switzerland, where natural beauty and luxury living seamlessly merge.",
//     thumbnail: fs.readFileSync(switzerland),
//     images: [
//       fs.readFileSync(switzerland1),
//       fs.readFileSync(switzerland2),
//       fs.readFileSync(switzerland3),
//       fs.readFileSync(switzerland4),
//       fs.readFileSync(switzerland5),
//     ],
//   },
//   {
//     address: ['8 Marina Boulevard', 'Singapore City, Singapore'],
//     sqft: 3000,
//     bedrooms: 4,
//     bathrooms: 3.5,
//     price: 10_500_000,
//     description:
//       "Elevate your urban living experience at Marina Bay Residences, where luxury meets the vibrant heart of Singapore. Situated at 8 Marina Boulevard, this stunning apartment offers an exceptional blend of contemporary design and panoramic city views. The interior of this spacious apartment is a showcase of modern elegance, featuring floor-to-ceiling windows that bathe the living spaces in natural light. Enjoy open-concept living with a spacious living room, dining area, and a designer kitchen equipped with top-of-the-line appliances. Step out onto your private balcony, where you can savor breathtaking vistas of the iconic Marina Bay Sands, the glittering cityscape, and the tranquil waters of the Singapore River. The master suite offers a luxurious retreat with a view, an en-suite bathroom with a soaking tub, and ample closet space. Additional bedrooms provide comfort and style for family and guests. Residents of Marina Bay Residences enjoy exclusive access to a range of amenities, including a rooftop pool, fitness center, and 24-hour concierge services. You're just a short walk away from world-class dining, shopping, and cultural attractions in the heart of Singapore's Central Business District. This is your opportunity to own a piece of the dynamic and cosmopolitan lifestyle that Marina Bay Residences has to offer.",
//     thumbnail: fs.readFileSync(singapore),
//     images: [
//       fs.readFileSync(singapore1),
//       fs.readFileSync(singapore2),
//       fs.readFileSync(singapore3),
//       fs.readFileSync(singapore4),
//       fs.readFileSync(singapore5),
//     ],
//   },
//   {
//     address: ['101 N 1st St.', 'DeKalb Il'],
//     sqft: 2500,
//     bedrooms: 3,
//     bathrooms: 2.5,
//     price: 350_000,
//     description:
//       "Discover the comfort of suburban living in the heart of Dekalb, Illinois, at 123 Maple Street. This charming property offers an ideal blend of modern convenience and classic design. With 2,500 square feet of living space, this home provides ample room for your family's needs. Step inside to find a spacious living room with plenty of natural light, a cozy fireplace, and a dining area perfect for family gatherings. The well-appointed kitchen is designed for efficiency and functionality, with modern appliances and plenty of cabinet space.Upstairs, you'll find three comfortable bedrooms, including a master suite with its own en-suite bathroom. The additional bedrooms are perfect for children, guests, or a home office. Enjoy the convenience of a fenced backyard, perfect for outdoor activities and gatherings. The attached garage provides shelter for your vehicles and additional storage. This property is conveniently located near schools, parks, shopping, and dining options in Dekalb, making it an excellent choice for those seeking suburban tranquility with easy access to city amenities.",
//     thumbnail: fs.readFileSync(dekalb),
//     images: [
//       fs.readFileSync(dekalb1),
//       fs.readFileSync(dekalb2),
//       fs.readFileSync(dekalb3),
//       fs.readFileSync(dekalb4),
//       fs.readFileSync(dekalb5),
//     ],
//   },
//   {
//     address: ['456 Mountain View Road', 'Aspen, CO'],
//     sqft: 4500,
//     bedrooms: 5,
//     bathrooms: 4.5,
//     price: 5_750_000,
//     description:
//       "Experience the epitome of mountain luxury at 456 Mountain View Road in beautiful Aspen, Colorado. Nestled in the heart of the Rocky Mountains, this exquisite property offers a harmonious blend of rustic charm and modern elegance. The interior of this spacious home is a showcase of mountain-inspired design, featuring exposed wooden beams, stone fireplaces, and large windows that frame breathtaking views of the surrounding peaks. The open-concept living spaces provide warmth and comfort, with a grand fireplace as the centerpiece of the living room.  The gourmet kitchen is equipped with top-of-the-line appliances, a spacious island, and a dining area perfect for entertaining. Step outside onto your private deck to soak in the stunning vistas and enjoy the crisp mountain air.  The master suite offers a luxurious retreat with its own fireplace, en-suite bathroom with a soaking tub, and a private balcony with mountain views. Additional bedrooms provide comfort and style for family and guests.  This property also includes a spacious garage for your vehicles and outdoor gear, as well as access to world-class skiing, hiking, and outdoor activities in the Aspen area.  Don't miss this rare opportunity to own a piece of the Colorado Rockies, where natural beauty and mountain living come together in perfect harmony.",
//     thumbnail: fs.readFileSync(aspen),
//     images: [
//       fs.readFileSync(aspen1),
//       fs.readFileSync(aspen2),
//       fs.readFileSync(aspen3),
//       fs.readFileSync(aspen4),
//       fs.readFileSync(aspen5),
//     ],
//   },
//   {
//     address: ['123 Palm Ave', 'Fort Lauderdale, FL'],
//     sqft: 3500,
//     bedrooms: 4,
//     bathrooms: 3.5,
//     price: 1_200_000,
//     description:
//       "Discover the allure of waterfront living in the heart of Fort Lauderdale, Florida, at 123 Palm Avenue. This elegant property offers an ideal blend of coastal beauty and modern sophistication. With 3,500 square feet of living space, this home provides ample room for luxurious living and entertaining.  The interior of this spacious residence is a showcase of contemporary design, featuring large windows that welcome an abundance of natural light. The open-concept living spaces provide a seamless flow from the living room with its cozy fireplace to the gourmet kitchen with high-end appliances and a spacious island.  Step outside to your private oasis, where you can enjoy waterfront views and the South Florida sunshine. The backyard features a sparkling pool, a covered patio for outdoor dining, and a private dock for boating enthusiasts.  The master suite offers a tranquil escape with water views, a lavish en-suite bathroom, and a walk-in closet. Additional bedrooms provide comfort and style for family and guests.  This property's location is ideal for those who appreciate the waterfront lifestyle, with easy access to boating, fishing, and the vibrant dining and cultural scene in Fort Lauderdale.  Don't miss this opportunity to own a piece of coastal paradise in Fort Lauderdale, where modern luxury and waterfront living meet in perfect harmony.",
//     thumbnail: fs.readFileSync(ftld),
//     images: [
//       fs.readFileSync(ftld1),
//       fs.readFileSync(ftld2),
//       fs.readFileSync(ftld3),
//       fs.readFileSync(ftld4),
//       fs.readFileSync(ftld5),
//     ],
//   },
//   {
//     address: ['456 Oceanfront Drive', 'La Jolla, CA'],
//     sqft: 5000,
//     bedrooms: 5,
//     bathrooms: 4.5,
//     price: 9_800_000,
//     description:
//       "Indulge in the coastal elegance of La Jolla, California, at 456 Oceanfront Drive. This magnificent property offers a captivating blend of modern luxury and breathtaking ocean views. With 5,000 square feet of living space, this home provides an exquisite retreat for those seeking the ultimate coastal lifestyle.The interior of this residence is a masterpiece of contemporary design, featuring expansive windows that frame panoramic views of the Pacific Ocean. The open-concept living spaces are adorned with high-end finishes and a seamless flow from the living room to the chef's kitchen, equipped with top-of-the-line appliances.  Step outside to your private terrace, where you can savor the salty breeze and watch the waves crash against the rugged coastline. The backyard boasts a sparkling infinity pool, a spa, and a private pathway to the sandy shores of La Jolla's beaches.  The master suite is a sanctuary of serenity with its stunning ocean views, a luxurious en-suite bathroom, and a walk-in closet. Additional bedrooms provide comfort and style for family and guests.  This property's location is a paradise for surfers, beachgoers, and those who appreciate the beauty of coastal California. You're just moments away from world-class dining, shopping, and cultural attractions. Embrace the coastal dream and make 456 Oceanfront Drive your seaside haven in La Jolla.",
//     thumbnail: fs.readFileSync(la_jolla),
//     images: [
//       fs.readFileSync(la_jolla1),
//       fs.readFileSync(la_jolla2),
//       fs.readFileSync(la_jolla3),
//       fs.readFileSync(la_jolla4),
//       fs.readFileSync(la_jolla5),
//     ],
//   },
//   (luxembourgProperty = {
//     address: ['25 Rue du Château', 'Luxembourg City, Luxembourg'],
//     sqft: 3000,
//     bedrooms: 4,
//     bathrooms: 3.5,
//     price: 2_500_000,
//     description:
//       "Experience the charm of historic Luxembourg at 25 Rue du Château, in the heart of Luxembourg City. This elegant property offers a unique blend of historic architecture and modern comfort. With 3,000 square feet of living space, this home provides a luxurious retreat in one of Europe's most picturesque capitals.  The interior of this residence is a testament to timeless design, featuring exquisite period details, high ceilings, and large windows that allow natural light to illuminate the living spaces. The grand entrance hall leads to spacious living and dining areas, perfect for entertaining.  The gourmet kitchen is a culinary delight, equipped with modern appliances and a center island for culinary enthusiasts. Step into the private courtyard, where you can enjoy a peaceful oasis in the heart of the city.  The master suite offers a serene escape with its luxurious en-suite bathroom and ample closet space. Additional bedrooms provide comfort and style for family and guests.  This property's location is ideal for those who appreciate the rich history, culture, and gastronomy of Luxembourg City. You're within walking distance of historic landmarks, museums, and the vibrant dining scene.  Embrace the European lifestyle and make 25 Rue du Château your elegant residence in Luxembourg.",
//     thumbnail: fs.readFileSync(luxembourg),
//     images: [
//       fs.readFileSync(luxembourg1),
//       fs.readFileSync(luxembourg2),
//       fs.readFileSync(luxembourg3),
//       fs.readFileSync(luxembourg4),
//       fs.readFileSync(luxembourg5),
//     ],
//   }),
//   (moldovaProperty = {
//     address: ['123 Vineyard Street', 'Chisinau, Moldova'],
//     sqft: 2800,
//     bedrooms: 3,
//     bathrooms: 2.5,
//     price: 450_000,
//     description:
//       "Discover the tranquility of Moldova at 123 Vineyard Street in the capital city of Chisinau. This charming property offers a blend of modern comfort and the peaceful beauty of Moldova's countryside. With 2,800 square feet of living space, this home provides a cozy retreat in a serene setting.  The interior of this residence is designed for comfortable living, featuring a spacious living room with large windows that bring in natural light. The dining area is perfect for family gatherings, and the well-equipped kitchen makes meal preparation a breeze.  Step outside into the lush garden, where you can enjoy the beauty of Moldova's vineyards and orchards. The backyard offers a peaceful retreat with a patio, perfect for outdoor dining and relaxation.  The master suite is a haven of comfort with its en-suite bathroom and a walk-in closet. Additional bedrooms provide space for family and guests.  This property's location is ideal for those who appreciate the tranquility of Moldovan countryside living while being close to the amenities and cultural attractions of Chisinau.  Embrace the Moldovan way of life and make 123 Vineyard Street your peaceful retreat in Chisinau, Moldova.",
//     thumbnail: fs.readFileSync(moldova),
//     images: [
//       fs.readFileSync(moldova1),
//       fs.readFileSync(moldova2),
//       fs.readFileSync(moldova3),
//       fs.readFileSync(moldova4),
//       fs.readFileSync(moldova5),
//     ],
//   }),
//   {
//     address: ['25 Nevsky Prospekt', 'St. Petersburg, Russia'],
//     sqft: 2800,
//     bedrooms: 4,
//     bathrooms: 3.5,
//     price: 12_500_000,
//     description:
//       "Experience the grandeur of St. Petersburg, Russia, at 25 Nevsky Prospekt, in the heart of this historic city. This opulent property offers a remarkable blend of classical elegance and modern luxury. With 3,800 square feet of living space, this home provides a palatial residence in one of Russia's cultural treasures.  The interior of this residence is a testament to classical Russian architecture, featuring ornate details, high ceilings, and grand windows that bathe the living spaces in natural light. The grand foyer leads to magnificent living and dining areas, perfect for hosting grand gatherings.  The gourmet kitchen is a masterpiece of culinary design, equipped with modern appliances and a central island for culinary excellence. Step out onto your private terrace, where you can savor views of St. Petersburg's iconic landmarks.  The master suite offers a regal retreat with its luxurious en-suite bathroom and a dressing room fit for royalty. Additional bedrooms provide comfort and style for family and guests.  This property's location is a dream for those who appreciate the rich history, culture, and architectural wonders of St. Petersburg. You're within walking distance of world-renowned museums, theaters, and the city's vibrant cultural scene.  Embrace the imperial splendor and make 25 Nevsky Prospekt your opulent residence in St. Petersburg, Russia.",
//     thumbnail: fs.readFileSync(st_petersburg),
//     images: [
//       fs.readFileSync(st_petersburg1),
//       fs.readFileSync(st_petersburg2),
//       fs.readFileSync(st_petersburg3),
//       fs.readFileSync(st_petersburg4),
//       fs.readFileSync(st_petersburg5),
//     ],
//   },
// ];

// // Property.insertMany(sampleProperties)
// //   .then(() => console.log('Sample properties added'))
// //   .catch((err) => console.error('Error adding sample properties:', err));

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
