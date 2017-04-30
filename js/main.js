/*
Apple
The apple tree (Malus pumila, commonly and erroneously called Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions.

Banana
The banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, in contrast to dessert bananas. The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.

Cherry
The cherry fruits of commerce usually are obtained from a limited number of species such as cultivars of the sweet cherry, Prunus avium. The name 'cherry' also refers to the cherry tree, and is sometimes applied to almonds and visually similar flowering trees in the genus Prunus, as in "ornamental cherry", "cherry blossom", etc. Wild cherry may refer to any of the cherry species growing outside of cultivation, although Prunus avium is often referred to specifically by the name "wild cherry" in the British Isles.

Grape
Grapes can be eaten fresh as table grapes or they can be used for making wine, jam, juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Grapes are a non-climacteric type of fruit, generally occurring in clusters.

Orange
The orange is a hybrid between pomelo (Citrus maxima) and mandarin (Citrus reticulata). It has genes that are ~25% pomelo and ~75% mandarin; however, it is not a simple backcrossed BC1 hybrid, but hybridized over multiple generations. The chloroplast genes, and therefore the maternal line, seem to be pomelo. The sweet orange has had its full genome sequenced. Earlier estimates of the percentage of pomelo genes varying from ~50% to 6% have been reported.

Peach
The peach (Prunus persica) is a deciduous tree native to the region of Northwest China between the Tarim Basin and the north slopes of the Kunlun Shan mountains, where it was first domesticated and cultivated. It bears an edible juicy fruit called a peach or a nectarine.

Pear
The pear is any of several tree and shrub species of genus Pyrus, in the family Rosaceae. It is also the name of the pomaceous fruit of the trees. Several species of pear are valued for their edible fruit and juices, while others are cultivated as ornamental trees.

Pineapple
Pineapples can be consumed fresh, cooked, juiced, or preserved. They are found in a wide array of cuisines. In addition to consumption, the pineapple leaves are used to produce the textile fiber piña in the Philippines, commonly used as the material for the men's barong Tagalog and women's baro't saya formal wear in the country. The fiber is also used as a component for wallpaper and other furnishings.

Strawberry
The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries). It is cultivated worldwide for its fruit. The fruit (which is not a botanical berry, but an aggregate accessory fruit) is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as preserves, fruit juice, pies, ice creams, milkshakes, and chocolates. Artificial strawberry flavorings and aromas are also widely used in many products like lip gloss, candy, hand sanitizers, perfume, and many others.
*/
//HW: Escaping strings and THIS
//border and remove around boxes 

$(document).ready(function(){

event.preventDefault();


 $('.apple').click(doAppleStuff);
 $('.banana').click(doBananaStuff);
 $('.cherry').click(doCherryStuff);
 $('.grape').click(doGrapeStuff);
 $('.orange').click(doOrangeStuff);
 $('.peach').click(doPeachStuff);
 $('.pear').click(doPearStuff);
 $('.pineapple').click(doPineappleStuff);
 $('.strawberry').click(doStrawberryStuff);

 function doAppleStuff() {
    // everything in here is what the function does
        
        $('#title').html('Apple');
     	$('.apple').addClass('fruit active ');
     	$('.banana').removeClass('fruit active');
     	$('.cherry').removeClass('fruit active');
     	$('.grape').removeClass('fruit active');
     	$('.orange').removeClass('fruit active');
     	$('.peach').removeClass('fruit active');
     	$('.pear').removeClass('fruit active');
     	$('.pineapple').removeClass('fruit active');
     	$('.strawberry').removeClass('fruit active');
        $('#description').html('The apple tree (Malus pumila, commonly and erroneously called Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions.');
       
   };
    function doBananaStuff() {
    // everything in here is what the function does
        
        $('#title').html('Banana');
        $('.banana').addClass('fruit active ');
        $('.apple').removeClass('fruit active');
     	$('.cherry').removeClass('fruit active');
     	$('.grape').removeClass('fruit active');
     	$('.orange').removeClass('fruit active');
     	$('.peach').removeClass('fruit active');
     	$('.pear').removeClass('fruit active');
     	$('.pineapple').removeClass('fruit active');
     	$('.strawberry').removeClass('fruit active');
        $('#description').html('The banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, in contrast to dessert bananas. The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.');
       
   };
   
   function doCherryStuff() {
    // everything in here is what the function does
        
        $('#title').html('Cherry');
		$('.cherry').addClass('fruit active ');
		$('.banana').removeClass('fruit active');
     	$('.apple').removeClass('fruit active');
     	$('.grape').removeClass('fruit active');
     	$('.orange').removeClass('fruit active');
     	$('.peach').removeClass('fruit active');
     	$('.pear').removeClass('fruit active');
     	$('.pineapple').removeClass('fruit active');
     	$('.strawberry').removeClass('fruit active');
        $('#description').html("The cherry fruits of commerce usually are obtained from a limited number of species such as cultivars of the sweet cherry, Prunus avium. The name 'cherry' also refers to the cherry tree, and is sometimes applied to almonds and visually similar flowering trees in the genus Prunus, as in 'ornamental cherry', 'cherry blossom', etc. Wild cherry may refer to any of the cherry species growing outside of cultivation, although Prunus avium is often referred to specifically by the name 'wild cherry' in the British Isles.");
       
   };
function doGrapeStuff() {
    // everything in here is what the function does
        
        $('#title').html('Grape');
        $('.grape').addClass('fruit active ');
        $('.banana').removeClass('fruit active');
     	$('.cherry').removeClass('fruit active');
     	$('.apple').removeClass('fruit active');
     	$('.orange').removeClass('fruit active');
     	$('.peach').removeClass('fruit active');
     	$('.pear').removeClass('fruit active');
     	$('.pineapple').removeClass('fruit active');
     	$('.strawberry').removeClass('fruit active');
        $('#description').html('Grapes can be eaten fresh as table grapes or they can be used for making wine, jam, juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Grapes are a non-climacteric type of fruit, generally occurring in clusters.');
       
   };
function doOrangeStuff() {
    // everything in here is what the function does
        
        $('#title').html('Orange');
        $('.orange').addClass('fruit active ');
        $('.banana').removeClass('fruit active');
     	$('.cherry').removeClass('fruit active');
     	$('.grape').removeClass('fruit active');
     	$('.apple').removeClass('fruit active');
     	$('.peach').removeClass('fruit active');
     	$('.pear').removeClass('fruit active');
     	$('.pineapple').removeClass('fruit active');
     	$('.strawberry').removeClass('fruit active');
        $('#description').html('The orange is a hybrid between pomelo (Citrus maxima) and mandarin (Citrus reticulata). It has genes that are ~25% pomelo and ~75% mandarin; however, it is not a simple backcrossed BC1 hybrid, but hybridized over multiple generations. The chloroplast genes, and therefore the maternal line, seem to be pomelo. The sweet orange has had its full genome sequenced. Earlier estimates of the percentage of pomelo genes varying from ~50% to 6% have been reported.');
       
   };
function doPeachStuff() {
    // everything in here is what the function does
        
        $('#title').html('Peach');
        $('.peach').addClass('fruit active ');
        $('.banana').removeClass('fruit active');
     	$('.cherry').removeClass('fruit active');
     	$('.grape').removeClass('fruit active');
     	$('.orange').removeClass('fruit active');
     	$('.apple').removeClass('fruit active');
     	$('.pear').removeClass('fruit active');
     	$('.pineapple').removeClass('fruit active');
     	$('.strawberry').removeClass('fruit active');
        $('#description').html('The peach (Prunus persica) is a deciduous tree native to the region of Northwest China between the Tarim Basin and the north slopes of the Kunlun Shan mountains, where it was first domesticated and cultivated. It bears an edible juicy fruit called a peach or a nectarine.');
       
   };
   function doPearStuff() {
    // everything in here is what the function does
        
        $('#title').html('Pear');
        $('.pear').addClass('fruit active ');
        $('.banana').removeClass('fruit active');
     	$('.cherry').removeClass('fruit active');
     	$('.grape').removeClass('fruit active');
     	$('.orange').removeClass('fruit active');
     	$('.peach').removeClass('fruit active');
     	$('.apple').removeClass('fruit active');
     	$('.pineapple').removeClass('fruit active');
     	$('.strawberry').removeClass('fruit active');
        $('#description').html('The pear is any of several tree and shrub species of genus Pyrus, in the family Rosaceae. It is also the name of the pomaceous fruit of the trees. Several species of pear are valued for their edible fruit and juices, while others are cultivated as ornamental trees.');
       
   };
function doPineappleStuff() {
    // everything in here is what the function does
        
        $('#title').html('Pineapple');
        $('.pineapple').addClass('fruit active ');
        $('.banana').removeClass('fruit active');
     	$('.cherry').removeClass('fruit active');
     	$('.grape').removeClass('fruit active');
     	$('.orange').removeClass('fruit active');
     	$('.peach').removeClass('fruit active');
     	$('.pear').removeClass('fruit active');
     	$('.apple').removeClass('fruit active');
     	$('.strawberry').removeClass('fruit active');
        $('#description').html('Pineapples can be consumed fresh, cooked, juiced, or preserved. They are found in a wide array of cuisines. In addition to consumption, the pineapple leaves are used to produce the textile fiber piña in the Philippines, commonly used as the material for the men\'s barong Tagalog and women\'s baro\'t saya formal wear in the country. The fiber is also used as a component for wallpaper and other furnishings.');
       
   };
function doStrawberryStuff() {
    // everything in here is what the function does
        
        $('#title').html('Strawberry');
        $('.strawberry').addClass('fruit active ');
        $('.banana').removeClass('fruit active');
     	$('.cherry').removeClass('fruit active');
     	$('.grape').removeClass('fruit active');
     	$('.orange').removeClass('fruit active');
     	$('.peach').removeClass('fruit active');
     	$('.pear').removeClass('fruit active');
     	$('.pineapple').removeClass('fruit active');
     	$('.apple').removeClass('fruit active');
        $('#description').html('The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries). It is cultivated worldwide for its fruit. The fruit (which is not a botanical berry, but an aggregate accessory fruit) is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as preserves, fruit juice, pies, ice creams, milkshakes, and chocolates. Artificial strawberry flavorings and aromas are also widely used in many products like lip gloss, candy, hand sanitizers, perfume, and many others.');
       
   };







});
