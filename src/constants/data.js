export const MENU_CATEGORIES = ['Sab Dekhein', 'Classic', 'Signature', 'Premium', 'Stuffed Crust'];
export const WHATSAPP_NUMBER = "923084314376";
export const WHATSAPP_MESSAGE = "Hi! Main pizza order karna chahta hoon.";

export const MENU_ITEMS = [
  // Classic
  { id: 1, name: 'Cheese Lover Pizza', category: 'Classic', prices: { S: 350, M: 700, L: 1000, F: 1300 }, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80', desc: 'Ek classic pizza jis mein rich tomato sauce aur behtareen mozzarella cheese hai.' },
  { id: 2, name: 'Vegetarian Pizza', category: 'Classic', prices: { S: 350, M: 700, L: 1000, F: 1300 }, image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&w=600&q=80', desc: 'Taaza mushrooms, shimla mirch, olives aur pyaz se bhara hua cheesy crust.' },
  // Signature
  { id: 3, name: 'Supreme Pizza', category: 'Signature', prices: { S: 450, M: 850, L: 1190, F: 1690 }, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80', desc: 'Premium meats, taaza sabziyan aur pighli hui cheese ka mazedar combination.' },
  { id: 4, name: 'Fajita Pizza', category: 'Signature', prices: { S: 450, M: 850, L: 1190, F: 1690 }, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80', desc: 'Spiced chicken fajita chunks, pyaz aur shimla mirch ka masaledar maza.' },
  { id: 5, name: 'BBQ Pizza', category: 'Signature', prices: { S: 450, M: 850, L: 1190, F: 1690 }, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80', desc: 'Grilled chicken aur BBQ sauce ke sath gooey mozzarella ka zabardast maza.' },
  { id: 6, name: 'Pepperoni Pizza', category: 'Signature', prices: { S: 450, M: 850, L: 1190, F: 1690 }, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80', desc: 'Pepperoni ki layers, mozzarella aur hamara khas marinara sauce.' },
  { id: 7, name: 'Hot and Spicy Pizza', category: 'Signature', prices: { S: 450, M: 850, L: 1190, F: 1690 }, image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&q=80', desc: 'Jalapeños, spicy chicken, aur pyaz se bana aag lagane wala pizza.' },
  { id: 8, name: 'Tikka Pizza', category: 'Signature', prices: { S: 450, M: 850, L: 1190, F: 1690 }, image: 'https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=600&q=80', desc: 'Chicken tikka, pyaz aur shimla mirch ke sath desi masalo ka maza.' },
  // Premium
  { id: 9, name: 'Pizza Station Special', category: 'Premium', prices: { S: 550, M: 980, L: 1350, F: 1850 }, image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80', desc: 'Hamara sab se behtareen pizza. Premium toppings aur extra cheese ke sath.' },
  { id: 10, name: 'Malai Boti Pizza', category: 'Premium', prices: { S: 550, M: 980, L: 1350, F: 1850 }, image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80', desc: 'Munh mein pighal jane wali malai boti chicken aur bhari hui cheese.' },
  { id: 11, name: 'Peri Peri Pizza', category: 'Premium', prices: { S: 550, M: 980, L: 1350, F: 1850 }, image: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&fit=crop&w=600&q=80', desc: 'Peri peri sauce mein bani hui chicken, ek naye flavor ke sath.' },
  { id: 12, name: 'Lazania Pizza', category: 'Premium', prices: { S: 550, M: 980, L: 1350, F: 1850 }, image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=600&q=80', desc: 'Lasagna ke zaiqay ko humne pizza crust mein bake kiya hai.' },
  { id: 13, name: 'Behari Kabab Pizza', category: 'Premium', prices: { S: 550, M: 980, L: 1350, F: 1850 }, image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=600&q=80', desc: 'Asli Behari kabab spices ka maza, bilkul desi style mein.' },
  // Stuffed Crust
  { id: 14, name: 'Crown Crust Pizza', category: 'Stuffed Crust', prices: { S: 650, M: 1200, L: 1600, F: 2200 }, image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80', desc: 'Taj jaisa crust, jis mein chicken aur premium cheese bhari hai.' },
  { id: 15, name: 'Kabab Crust Pizza', category: 'Stuffed Crust', prices: { S: 650, M: 1200, L: 1600, F: 2200 }, image: 'https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?auto=format&fit=crop&w=600&q=80', desc: 'Golden crust ke andar mazaidar seekh kabab bake kiye gaye hain.' },
  { id: 16, name: 'Cheese Crust Pizza', category: 'Stuffed Crust', prices: { S: 650, M: 1200, L: 1600, F: 2200 }, image: 'https://images.unsplash.com/photo-1541745537411-b8046f8d8653?auto=format&fit=crop&w=600&q=80', desc: 'Dugna cheese ka maza, crust ke andar pighli hui cheese ki ring.' },
];

export const TESTIMONIALS = [
  { name: 'Sneha T.', location: 'Local Guide', text: "Main amuman fast food nahi khati, lekin Crown Crust pizza ne mera dil jeet liya. Zabardast zaiqa!" },
  { name: 'Mark D.', location: 'Food Blogger', text: "Shehar ka behtareen crust — bahar se crispy, andar se soft. Tikka pizza lajawab hai!" },
  { name: 'Amanda R.', location: 'Regular Customer', text: "BBQ Pizza try kiya aur ab main koi aur pizza nahi kha sakti. Bohat hi mazaidar hai." },
  { name: 'Billy V.', location: 'Local resident', text: "Tez delivery, bilkul taaza aur garam! Inki Buy 1 Get 1 deal mere weekend ka hissa ban chuki hai." }
];
