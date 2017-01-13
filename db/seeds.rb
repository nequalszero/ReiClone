# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
# #
# # Examples:
# #
# #   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
# #   Mayor.create(name: 'Emanuel', city: cities.first)

def create_image_url(image_url, type)
  upload = "upload/"
  url_parts = image_url.split(upload)

  error_message = "Error in create_image_url: cannot format ${image_url}"
  raise error_message if url_parts.length != 2

  case type
  when :cart
    return url_parts[0] + upload + "c_pad,h_150,w_150/" + url_parts[1]
  when :result
    return url_parts[0] + upload + "c_fit,h_215,w_215/" + url_parts[1]
  when :primary
    return url_parts[0] + upload + "c_fit,h_440,w_440/" + url_parts[1]
  else
    error_message = "Error in create_image_url: cannot handle type: ${type}"
    raise error_message
  end
end

def calc_weight(pounds, ounces)
  (pounds + ounces.fdiv(16)).round(2)
end

User.create(username: 'Guest', password: 'asdfasdf')      # 1
User.create(username: 'Travis', password: 'asdfasdf')     # 2
User.create(username: 'Ima Dinosaur', password: 'asdfasdf')   # 3
User.create(username: 'Sheldon Cooper', password: 'asdfasdf')    # 4
User.create(username: 'Leonard Hofstadter', password: 'asdfasdf')    # 5
User.create(username: 'Howard Wallowitz', password: 'asdfasdf')     # 6
User.create(username: 'Penny Hofstadter', password: 'asdfasdf')      # 7
User.create(username: 'Rajesh Koothrappali', password: 'asdfasdf')     # 8
User.create(username: 'Amy Fowler', password: 'asdfasdf')     # 9
User.create(username: 'Bernadette Wallowitz', password: 'asdfasdf')     # 10
User.create(username: 'Alex Honnold', password: 'asdfasdf')     # 11
User.create(username: 'Caesar Wright', password: 'asdfasdf')     # 12
User.create(username: 'Jimmy Chin', password: 'asdfasdf')     # 13
User.create(username: 'Renan Ozturk', password: 'asdfasdf')     # 14
User.create(username: 'Hazel Findlay', password: 'asdfasdf')     # 15
User.create(username: 'Alex Megos', password: 'asdfasdf')     # 16
User.create(username: 'Daniel Woods', password: 'asdfasdf')     # 17
User.create(username: 'Paul Robinson', password: 'asdfasdf')     # 18
User.create(username: 'Alex Puccio', password: 'asdfasdf')     # 19
User.create(username: 'Nina Williams', password: 'asdfasdf')     # 20
User.create(username: 'Meaghan Martin', password: 'asdfasdf')     # 21
User.create(username: 'Ashima Shiraishi', password: 'asdfasdf')     # 22
User.create(username: 'Chris Sharma', password: 'asdfasdf')     # 23
User.create(username: 'Carlo Traversi', password: 'asdfasdf')     # 24
User.create(username: 'Adam Ondra', password: 'asdfasdf')     # 25
User.create(username: 'Akiyo Noguchi', password: 'asdfasdf')     # 26
User.create(username: 'Avi Kertsomething', password: 'asdfasdf')     # 27
User.create(username: 'Josh Schmidt', password: 'asdfasdf')     # 28
User.create(username: 'Alvin Lin', password: 'asdfasdf')     # 29
User.create(username: 'Shauna Coxsey', password: 'asdfasdf')     # 30
User.create(username: 'Julianne Wurm', password: 'asdfasdf')     # 31
User.create(username: 'Jan Hojer', password: 'asdfasdf')     # 32
User.create(username: 'Jain Kim', password: 'asdfasdf')     # 33
User.create(username: 'Leo Qiu', password: 'asdfasdf')     # 34
User.create(username: 'Noelle Patterson', password: 'asdfasdf')     # 35
User.create(username: 'Andrew Kim', password: 'asdfasdf')     # 36
User.create(username: 'Conrad Anker', password: 'asdfasdf')     # 37
User.create(username: 'Jordy Margid', password: 'asdfasdf')     # 38
User.create(username: 'Indiana Jones', password: 'asdfasdf')     # 39
User.create(username: 'John Muir', password: 'asdfasdf')     # 40
User.create(username: 'Chewbacca', password: 'asdfasdf')     # 41
User.create(username: 'Glorfindel', password: 'asdfasdf')     # 42
User.create(username: 'Sauron', password: 'asdfasdf')     # 43
User.create(username: 'Peregrin Took', password: 'asdfasdf')     # 44
User.create(username: 'Éowyn', password: 'asdfasdf')     # 45
User.create(username: 'Denethor', password: 'asdfasdf')     # 46
User.create(username: 'Galadriel', password: 'asdfasdf')     # 47
User.create(username: 'Meriadoc Brandybuck', password: 'asdfasdf')     # 48
User.create(username: 'Grìma Wormtongue', password: 'asdfasdf')     # 49
User.create(username: 'Boromir', password: 'asdfasdf')     # 50
User.create(username: 'Treebeard', password: 'asdfasdf')     # 51
User.create(username: 'Shadowfax', password: 'asdfasdf')     # 52
User.create(username: 'Saruman the White', password: 'asdfasdf')     # 53
User.create(username: 'Tom Bombadil', password: 'asdfasdf')     # 54
User.create(username: 'Gimli', password: 'asdfasdf')     # 55
User.create(username: 'Faramir', password: 'asdfasdf')     # 56
User.create(username: 'Aragorn', password: 'asdfasdf')     # 57
User.create(username: 'Legolas', password: 'asdfasdf')     # 58
User.create(username: 'Frodo Baggins', password: 'asdfasdf')     # 59
User.create(username: 'Elrond', password: 'asdfasdf')     # 60
User.create(username: 'Gandalf the Grey', password: 'asdfasdf')     # 61
User.create(username: 'Shelob', password: 'asdfasdf')     # 62
User.create(username: 'Golum', password: 'asdfasdf')     # 63
User.create(username: 'Théoden', password: 'asdfasdf')     # 64
User.create(username: 'Bilbo Baggins', password: 'asdfasdf')     # 65
User.create(username: 'Quickbeam', password: 'asdfasdf')     # 66
User.create(username: 'Samwise Gamgee', password: 'asdfasdf')     # 67
User.create(username: 'Barliman Butterbur', password: 'asdfasdf')     # 68
User.create(username: 'Beregond', password: 'asdfasdf')     # 69
User.create(username: 'Éomer', password: 'asdfasdf')     # 70
User.create(username: 'Arwen Evenstar', password: 'asdfasdf')     # 71
User.create(username: 'Borvo the Hutt', password: 'asdfasdf')     # 72
User.create(username: 'Yoda', password: 'asdfasdf')     # 73
User.create(username: 'Darth Maul', password: 'asdfasdf')     # 74
User.create(username: 'Sheev Palpatine', password: 'asdfasdf')     # 75
User.create(username: 'Padme Amidala', password: 'asdfasdf')     # 76
User.create(username: 'Kylo Ren', password: 'asdfasdf')     # 77
User.create(username: 'Qui-Gon Jinn', password: 'asdfasdf')     # 78
User.create(username: 'Han Solo', password: 'asdfasdf')     # 79
User.create(username: 'Poe Dameron', password: 'asdfasdf')     # 80
User.create(username: 'Luke Skywalker', password: 'asdfasdf')     # 81
User.create(username: 'Rune Haako', password: 'asdfasdf')     # 82
User.create(username: 'Lando Calrissian', password: 'asdfasdf')     # 83
User.create(username: 'Obi-Wan Kenobi', password: 'asdfasdf')     # 84
User.create(username: 'Nute Gunray', password: 'asdfasdf')     # 85
User.create(username: 'Ki-Adi-Mundi', password: 'asdfasdf')     # 86
User.create(username: 'Sebulba', password: 'asdfasdf')     # 87
User.create(username: 'Mace Windu', password: 'asdfasdf')     # 88
User.create(username: 'Bail Organa', password: 'asdfasdf')     # 89
User.create(username: 'Count Dooku', password: 'asdfasdf')     # 90
User.create(username: 'Watto', password: 'asdfasdf')     # 91
User.create(username: 'Leia Organa', password: 'asdfasdf')     # 92
User.create(username: 'Jar Jar Binks', password: 'asdfasdf')     # 93
User.create(username: 'Ben Solo', password: 'asdfasdf')     # 94
User.create(username: 'Boba Fett', password: 'asdfasdf')     # 95
User.create(username: 'Anakin Skywalker', password: 'asdfasdf')     # 96
User.create(username: 'Panaka', password: 'asdfasdf')     # 97
User.create(username: 'Jabba the Hutt', password: 'asdfasdf')     # 98
User.create(username: 'Darth Vader', password: 'asdfasdf')     # 99
User.create(username: 'Wedge Antilles', password: 'asdfasdf')     # 100
User.create(username: 'Darth Caedus', password: 'asdfasdf')     # 101
User.create(username: 'Jango Fett', password: 'asdfasdf')     # 102
User.create(username: 'Darth Sidious', password: 'asdfasdf')     # 103
User.create(username: 'Charles Cole', password: 'asdfasdf')     # 104
User.create(username: 'Yvon Chouinard', password: 'asdfasdf')     # 105
User.create(username: 'Tommy Caldwell', password: 'asdfasdf')     # 106
User.create(username: 'Kevin Jorgenson', password: 'asdfasdf')     # 107
User.create(username: 'Dean Potter', password: 'asdfasdf')     # 108
User.create(username: 'Steph Davis', password: 'asdfasdf')     # 109
User.create(username: 'Sasha DiGiulian', password: 'asdfasdf')     # 110
User.create(username: 'John Bachar', password: 'asdfasdf')     # 111
User.create(username: 'Anna Stohr', password: 'asdfasdf')     # 112
User.create(username: 'Melissa Le Neve', password: 'asdfasdf')     # 113
User.create(username: 'Douglas Tompkins', password: 'asdfasdf')     # 114
User.create(username: 'Susie Tompkins Buell', password: 'asdfasdf')     # 115
User.create(username: 'Tom Boyce', password: 'asdfasdf')     # 116
User.create(username: 'Eric Reynolds', password: 'asdfasdf')     # 117
User.create(username: 'David Huntley', password: 'asdfasdf')     # 118
User.create(username: 'Mike Pfotenhauer', password: 'asdfasdf')     # 119
User.create(username: 'Laurie White', password: 'asdfasdf')     # 120
User.create(username: 'Gary Erickson', password: 'asdfasdf')     # 121
User.create(username: 'Kit Crawford', password: 'asdfasdf')     # 122
User.create(username: 'Larry Penberthy', password: 'asdfasdf')     # 123
User.create(username: 'Peter Metcalf', password: 'asdfasdf')     # 124
User.create(username: 'Cam Brensinger', password: 'asdfasdf')     # 125
User.create(username: 'Jim Holland', password: 'asdfasdf')     # 126
User.create(username: 'Jerry Stritzke', password: 'asdfasdf')     # 127


# For parsing characters from GOT into above format
# count = 115
# "Tom Boyce
# Eric Reynolds
# David Huntley
# Mike Pfotenhauer
# Laurie White
# Gary Erickson
# Kit Crawford
# Larry Penberthy
# Peter Metcalf
# Cam Brensinger".split("\n").each { |name| puts "User.create(username: '#{name}', password: 'asdfasdf')     # #{count+=1}"}

brands = ["Marmot", "REI", "Mountain Hardwear", "The North Face", "NEMO",
          "MSR", "Heimplanet"]
brand_ids = {}
brands.each_with_index { |brand, idx| brand_ids[brand] = idx + 1 }
brands.each { |brand| Brand.create(name: brand) }

categories = ["sleeping_bags", "tents"]
category_ids = {}
categories.each_with_index { |cat, idx| category_ids[cat] = idx + 1 }
categories.each { |cat| Category.create(name: cat) }

# Search Keywords
mens_keywords = "men men's man's man"
womens_keywords = "women women's woman"
sleepingbags_keywords = "sleeping sleep bag"
tents_keywords = "tent"

# Marmot Hydrogen Regular
SleepingBag.create(weight: 1.45625,
                   temperature_rating: 30,
                   gender: "Unisex",
                   fits_up_to: 6,
                   insulation_type: "Down",
                   bag_shape: "Mummy",
                   zipper_location: "Left",
                   fill_power: 800,
                   fill: "800-fill goose down",
                   fill_weight: 0.68125,
                   color: "yellow",
                   packed_size: 5.6
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} #{mens_keywords} marmot hydrogen down 800-fill backpacking water-resistant".downcase.split(" ").uniq,
               product_table_id: 1,
               brand_id: 1,
               name: "Hydrogen Down Sleeping Bag",
               price: 329,
               rating: 4.0,
               num_ratings: 5,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478473156/marmot_hydrogen_hyghtl.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478473156/marmot_hydrogen_hyghtl.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478473156/marmot_hydrogen_hyghtl.jpg",
               description: "At just a pound and a half, the Marmot Hydrogen 3-season sleeping bag is constructed with curved baffles to reduce the shifting of its water-resistant 800-fill goose down for superb loft and warmth."
              )

Feature.create(product_id: 1, name: "Water-Resistant Down")
Feature.create(product_id: 1, name: "Ultralight")

Detail.create(product_id: 1, description: "Certified 800-fill goose down with Down Defender treatment for improved water-resistance in wet conditions")
Detail.create(product_id: 1, description: "Smooth, curved baffles reduce down shifting; stretch tricot baffles provide strength and durability for long bag life")
Detail.create(product_id: 1, description: "Ultralight Pertex Microlight 20d nylon ripstop with durable water repellant finish")
Detail.create(product_id: 1, description: "Anatomically designed footbox with wrap-around construction allows down to loft fully around your feet for optimum warmth and comfort")
Detail.create(product_id: 1, description: "Nautilus multi-baffle hood envelopes your head in warmth; adjustable drawcord cinches hood about your face")
Detail.create(product_id: 1, description: "Fold-down second zipper provides added ventilation and easy bag access")
Detail.create(product_id: 1, description: "Insulated draft tube backs a full-length, 2-way, snag-free zipper to prevent cold air getting in")
Detail.create(product_id: 1, description: "Internal stash pocket stows nighttime essentials")
Detail.create(product_id: 1, description: "Zipper garage keeps zipper pull in its place at night")
Detail.create(product_id: 1, description: "2 hang loops for storing and airing out sleeping bag")
Detail.create(product_id: 1, description: "Stuff sack and storage sack included")

# Marmot Plasma 15 Long
SleepingBag.create(weight: 2.125,
                   temperature_rating: 15,
                   gender: "Unisex",
                   fits_up_to: 6.5,
                   insulation_type: "Down",
                   bag_shape: "Mummy",
                   zipper_location: "Left",
                   fill_power: 875,
                   fill: "875-fill goose down",
                   fill_weight: 1.1875,
                   color: "black",
                   packed_size: 7
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} #{mens_keywords} marmot plasma down 875-fill backpacking water-resistant ultralight".downcase.split(" ").uniq,
               product_table_id: 2,
               brand_id: 1,
               name: "Plasma 15 Sleeping Bag",
               price: 699,
               rating: 3.2,
               num_ratings: 5,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478482708/marmot_plasma_15_qztthh.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478482708/marmot_plasma_15_qztthh.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478482708/marmot_plasma_15_qztthh.jpg",
               description: "No, you're not dreaming. The Marmot Plasma 15 Sleeping Bag comes in under 2 lbs. (regular length) with 875-fill-power, water-resistant goose down—backpacking season can't get here soon enough!"
              )

Feature.create(product_id: 2, name: "Water-Resistant Down")
Feature.create(product_id: 2, name: "Ultralight")

Detail.create(product_id: 2, description: "With a European Norm (EN) lower-limit rating of 18°F, the Plasma 15 sleeping bag is suitable for 3-season use and occasional winter outings")
Detail.create(product_id: 2, description: "Filled with certified, super-lofty, ultralight, 875-fill-power goose down (the largest down cluster with the lowest trace of feather) for an unsurpassed warmth-to weight ratio")
Detail.create(product_id: 2, description: "Down is treated to resist moisture to maintain warmth; treated down stays drier 10 times longer, maintains 150% more loft and dries 30% faster than untreated down")
Detail.create(product_id: 2, description: "Pertex® Quantum nylon ripstop shell is lightweight, durable and silky soft")
Detail.create(product_id: 2, description: "Shell is treated with a Durable Water Repellent finish that causes moisture to bead up and roll off")
Detail.create(product_id: 2, description: "Hood drawcord and insulated collar envelop your head and shoulders in warmth; down gasket face muff lets you cinch the hood snug without it digging into your face")
Detail.create(product_id: 2, description: "Vertical baffles prevent cold spots by keeping the goose down fully lofted and in place")
Detail.create(product_id: 2, description: "Down-insulated draft tube backs the two-way, full-length zipper to keep the cold out")
Detail.create(product_id: 2, description: "Wrap-around footbox construction reduces down compression; Flow design with the classic trapezoidal foot box shape lets feet move freely and keeps down lofted for warmth")
Detail.create(product_id: 2, description: "Zipper guard runs the entire length of the draft tube to prevent fabric from getting caught in zipper")
Detail.create(product_id: 2, description: "Marmot Plasma 15 Sleeping Bag features an ultralight stuff sack and storage bag")

# REI Igneo Sleeping Bag
SleepingBag.create(weight: 1.8125,
                   temperature_rating: 19,
                   gender: "Unisex",
                   fits_up_to: 6,
                   insulation_type: "Down",
                   bag_shape: "Mummy",
                   zipper_location: "Left",
                   fill_power: 700,
                   fill: '700-fill duck down',
                   fill_weight: 0.925,
                   color: "gray",
                   packed_size: 5.2
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} #{mens_keywords} REI igneo down 700-fill backpacking water-resistant ultralight".downcase.split(" ").uniq,
               product_table_id: 3,
               brand_id: 2,
               name: "Igneo Sleeping Bag",
               price: 299,
               rating: 4.3,
               num_ratings: 53,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478484166/rei_igneo_tdv7hy.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478484166/rei_igneo_tdv7hy.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478484166/rei_igneo_tdv7hy.jpg",
               description: "A premium backpacking bag for wet conditions, this 3-season Mummy bag features REI's double-protection design, which uses both water-repellent down and waterproof/breathable fabric panels."
              )

Feature.create(product_id: 3, name: "Water-Resistant Down")
Feature.create(product_id: 3, name: "Ultralight")

Detail.create(product_id: 3, description: "With a European Norm (EN) lower-limit rating of 19°F, this bag is suitable for 3-season use")
Detail.create(product_id: 3, description: "REI double-protection design combines a polymer-coated down fill with waterproof/breathable fabric at the hood, sides and footbox, the areas likely to touch a damp tent wall")
Detail.create(product_id: 3, description: "Water-repellent 700-fill-power duck down offers superior loft and warmth")
Detail.create(product_id: 3, description: "Ripstop nylon shell also features a durable water repellent finish to further protect the down fill")
Detail.create(product_id: 3, description: "Performance fit keeps weight low and thermal efficiency high; regular weighs just 1 lb., 13 oz.")
Detail.create(product_id: 3, description: "REI in-the-round design puts vertical baffles in side walls to wrap you in warmth and create a better fit than bags that use only horizontal baffles")
Detail.create(product_id: 3, description: "Contoured hood, insulated face muffler and full-length draft tube all work to keep warmth in")
Detail.create(product_id: 3, description: "Differentiated hood and neck drawcords simplify adjustments")
Detail.create(product_id: 3, description: "Most REI backpacking bags can be zipped to other REI backpacking bags; women's bags zip on the right, Unisex on the left")
Detail.create(product_id: 3, description: "The REI Igneo Sleeping Bag includes a nylon stuff sack and a large cotton storage bag")


# REI Flash Sleeping Bag - Women's
SleepingBag.create(weight: 1.6875,
                   temperature_rating: 32,
                   gender: "Women's",
                   fits_up_to: 5.5,
                   insulation_type: "Down",
                   bag_shape: "Mummy",
                   zipper_location: "Right",
                   fill_power: 700,
                   fill: '700-fill duck down (top) and PrimaLoft Sport (bottom)',
                   fill_weight: 0.725,
                   color: "blue",
                   packed_size: 3.7
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} #{womens_keywords} REI flash down primaloft 700-fill backpacking water-resistant ultralight".downcase.split(" ").uniq,
               product_table_id: 4,
               brand_id: 2,
               name: "Flash Sleeping Bag - Women's",
               price: 173.93,
               rating: 4.3,
               num_ratings: 18,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478484833/rei_flash_womens_t16m3w.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478484833/rei_flash_womens_t16m3w.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478484833/rei_flash_womens_t16m3w.jpg",
               description: "This 3-season, ultralight women's specific sleeping bag uses a clever hybrid of water-repellent insulations and waterproof/breathable fabric panels in its double-protection design."
              )

Feature.create(product_id: 4, name: "Water-Resistant Down")
Feature.create(product_id: 4, name: "Ultralight")

Detail.create(product_id: 4, description: "REI double-protection design combines water-repellent fills with waterproof/breathable fabric at the hood, sides and footbox, the areas most likely to touch a damp tent wall")
Detail.create(product_id: 4, description: "Designed to fit a woman's body, this bag offers increased room at hips, decreased room at shoulders and extra insulation in critical heat-loss areas")
Detail.create(product_id: 4, description: "On top of the bag, where superior loft and warmth are key, is water-repellent 700-fill-power duck down")
Detail.create(product_id: 4, description: "On the bottom is resilient Primaloft® Sport insulation, which performs well in a compressed under-bag space")
Detail.create(product_id: 4, description: "Ripstop nylon shell also features a durable water repellent (DWR) finish to further protect the bag's insulations")
Detail.create(product_id: 4, description: "Performance fit keeps weight low and thermal efficiency high")
Detail.create(product_id: 4, description: "REI in-the-round design puts vertical baffles in side walls to wrap you in warmth and create a better fit than bags that use only horizontal baffles")
Detail.create(product_id: 4, description: "Contoured hood, insulated face muffler and full-length draft tube all work to keep warmth in")
Detail.create(product_id: 4, description: "Differentiated hood and neck drawcords simplify adjustments; antisnag zipper works smoothly")
Detail.create(product_id: 4, description: "Any REI backpacking bag can be zipped to any other REI backpacking bag; women's bags zip on the right, men's on the left")
Detail.create(product_id: 4, description: "The women's REI Flash Sleeping Bag includes a nylon stuff sack and a large cotton storage bag")

# NEMO Celesta 25 Women's Sleeping Bag Regular
SleepingBag.create(weight: 3.625,
                   temperature_rating: 25,
                   gender: "Women's",
                   fits_up_to: 5.5,
                   insulation_type: "Synthetic",
                   bag_shape: "Semirectangular",
                   zipper_location: "Right",
                   fill: 'Stratofiber synthetic fibers',
                   fill_weight: 2.91875,
                   color: "red",
                   packed_size: 8.5
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} #{womens_keywords} NEMO celesta 25 synthetic backpacking".downcase.split(" ").uniq,
               product_table_id: 5,
               brand_id: 5,
               name: "Celesta 25 Sleeping Bag - Women's",
               price: 199.95,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478489515/nemo_celesta_25_womens_l964ql.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478489515/nemo_celesta_25_womens_l964ql.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478489515/nemo_celesta_25_womens_l964ql.jpg",
               description: "Side sleepers rejoice! The women's 3-season Nemo Celesta 25 sleeping bag has a unique spoon shape to give side sleepers more room to find their comfort zone."
              )

Detail.create(product_id: 5, description: "Spoon shaped 3-season backpacking bag is generous at the elbows and knees, perfect for side sleeping")
Detail.create(product_id: 5, description: "Women-specific design has extra insulation in the footbox and throughout to enhance warmth")
Detail.create(product_id: 5, description: "Stratofiber synthetic insulation offers the best blend of warmth, moisture resistance and packed volume")
Detail.create(product_id: 5, description: "Integrated blanket fold gives you temperature regulation and comfort just like your bed at home")


# NEMO Celesta 35 Women's Sleeping Bag Long
SleepingBag.create(weight: 3.0625,
                   temperature_rating: 35,
                   gender: "Women's",
                   fits_up_to: 6,
                   insulation_type: "Synthetic",
                   bag_shape: "Semirectangular",
                   zipper_location: "Right",
                   fill: 'Stratofiber synthetic fibers',
                   fill_weight: 2.5625,
                   color: "red",
                   packed_size: 7.5
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} NEMO #{womens_keywords} celesta 35 synthetic backpacking".downcase.split(" ").uniq,
               product_table_id: 6,
               brand_id: 5,
               name: "Celesta 35 Sleeping Bag - Women's",
               price: 189.95,
               rating: 5,
               num_ratings: 1,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478489515/nemo_celesta_25_womens_l964ql.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478489515/nemo_celesta_25_womens_l964ql.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478489515/nemo_celesta_25_womens_l964ql.jpg",
               description: "The women's 3-season NEMO Celesta backpacking bag features a unique spoon shape that offers generous room at the elbows and knees, making it perfect for side sleeping."
              )

Detail.create(product_id: 6, description: "Women-specific design has extra insulation in the footbox and throughout to enhance warmth")
Detail.create(product_id: 6, description: "Insulated blanket fold mimics the turned-down edge of a comforter; wrap it around your neck and face to block drafts or turn it down during warmer nights")
Detail.create(product_id: 6, description: "Stratofiber synthetic insulation offers the best blend of warmth, moisture resistance and packed volume")



# Nemo Rhapsody 15 - Women's
SleepingBag.create(weight: 2.6875,
                   temperature_rating: 15,
                   gender: "Women's",
                   fits_up_to: 5.5,
                   insulation_type: "Down",
                   bag_shape: "Semirectangular",
                   zipper_location: "Right",
                   fill_power: 750,
                   fill: '750-fill down',
                   fill_weight: 1.6125,
                   color: "blue",
                   packed_size: 7.5
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} NEMO #{womens_keywords} 750-fill down rhapsody 15 synthetic backpacking".downcase.split(" ").uniq,
               product_table_id: 7,
               brand_id: 5,
               name: "Rhapsody 15 Sleeping Bag - Women's",
               price: 399.95,
               rating: 5,
               num_ratings: 1,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478490599/nemo_rhapsody_15_womens_b4jars.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478490599/nemo_rhapsody_15_womens_b4jars.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478490599/nemo_rhapsody_15_womens_b4jars.jpg",
               description: "The Nemo Rhapsody 15 backpacking bag with 750-fill DownTek down features stretch stitching and a unique spoon shape for added room at the elbows and knees, perfect for side sleepers."
              )

Feature.create(product_id: 7, name: "Water-Resistant Down")

Detail.create(product_id: 7, description: "DownTek™ water-repellent down keeps insulating even if it gets damp")
Detail.create(product_id: 7, description: "Spoon shape allows room for knees to naturally bend and shift throughout the night; there's also enough room to sit comfortably in a cross-legged position")
Detail.create(product_id: 7, description: "Waterproof breathable footbox protects against damp tent-wall condensation")
Detail.create(product_id: 7, description: "Insotect FlowGates prevent the downward movement of insulation while still allowing for intentional redistribution of down")
Detail.create(product_id: 7, description: "Insotect Flow vertical baffling prevents cold spots from occurring due to sideways migration of down")
Detail.create(product_id: 7, description: "Insulated Blanket Fold provides bed-like, tucked-in comfort")
Detail.create(product_id: 7, description: "Pillow pocket allows a jacket or extra clothes to be stuffed into the sleeve opening for a handy pillow on the go")
Detail.create(product_id: 7, description: "Soft and bright lining gives you a cozy interior for a restful night's sleep")

# Mountain Hardwear Phantom Torch 3 Sleeping Bag
SleepingBag.create(weight: 2.75,
                   temperature_rating: 3,
                   gender: "Unisex",
                   fits_up_to: 6.5,
                   insulation_type: "Down",
                   bag_shape: "Mummy",
                   zipper_location: "Left",
                   fill_power: 800,
                   fill: '800-fill Water-resistant Q.Shield down',
                   fill_weight: 1.875,
                   color: "blue",
                   packed_size: 10.5
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} #{mens_keywords} mountain hardware hardwear phantom torch 3 800-fill down water-resistant backpacking".downcase.split(" ").uniq,
               product_table_id: 8,
               brand_id: 3,
               name: "Phantom Torch 3 Sleeping Bag",
               price: 630,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478497964/mountain_hardwear_phantom_torch_3_o9bjuq.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478497964/mountain_hardwear_phantom_torch_3_o9bjuq.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478497964/mountain_hardwear_phantom_torch_3_o9bjuq.jpg",
               description: "A favorite among cold-weather backpackers, the superlight Mountain Hardwear Phantom Torch 3 is filled with 800-fill Q.Shield Down for maximum warmth and loft in damp conditions."
              )

Feature.create(product_id: 8, name: "Water-Resistant Down")

Detail.create(product_id: 8, description: "Q.Shield Down 800-fill has an advanced treatment applied that resists heat robbing moisture and retains maximum loft in damp conditions")
Detail.create(product_id: 8, description: "10D nylon fabric has a soft hand and is exceptionally lightweight—it's almost translucent")
Detail.create(product_id: 8, description: "Performance mummy is cut snug, for maximum warmth and minimum weight")
Detail.create(product_id: 8, description: "Tight 5 in. baffle spacing maximizes loft")
Detail.create(product_id: 8, description: "Insulated draft tube with anti-snag panel backs the lightweight, durable 2-way zipper")
Detail.create(product_id: 8, description: "Down-filled face gasket comfortably blocks drafts at the hood opening")
Detail.create(product_id: 8, description: "6-chamber hood design maintains even loft around head for consistent warmth; single-handed drawcords simplify adjustments")
Detail.create(product_id: 8, description: "Ergonomic draft collar with drawcords blocks the escape of heated air from inside the bag")
Detail.create(product_id: 8, description: "Comfort footbox follows natural foot position for maximum warmth and comfort")
Detail.create(product_id: 8, description: "Nylon compression sack and mesh storage sack included")

# Mountain Hardwear Lamina Z Torch Sleeping Bag
SleepingBag.create(weight: 3.9375,
                   temperature_rating: 5,
                   gender: "Unisex",
                   fits_up_to: 6,
                   insulation_type: "Synthetic",
                   bag_shape: "Mummy",
                   zipper_location: "Left",
                   color: "blue",
                   packed_size: 10.25
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} #{mens_keywords} mountain hardware hardwear lamina z torch synthetic backpacking".downcase.split(" ").uniq,
               product_table_id: 9,
               brand_id: 3,
               name: "Lamina Z Torch Sleeping Bag",
               price: 209,
               rating: 4.3,
               num_ratings: 3,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478497968/mountain_hardwear_lamina_z_torch_sleeping_bag_qx3gn8.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478497968/mountain_hardwear_lamina_z_torch_sleeping_bag_qx3gn8.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478497968/mountain_hardwear_lamina_z_torch_sleeping_bag_qx3gn8.jpg",
               description: "For maximum warmth on winter outings, this cold-weather sleeping bag has thermally zoned insulation to put extra warmth where you need it most—around your core and your feet."
              )

Detail.create(product_id: 9, description: "Unique welded construction reduces weight and bulk, maximizes insulation loft, eliminates cold spots and thermally maps insulation to areas where warmth is needed most")
Detail.create(product_id: 9, description: "Thermal.Q insulation has outstanding compressibility, maintains excellent loft and continues to insulate even when damp")
Detail.create(product_id: 9, description: "Comfort mummy cut maximizes warmth and fit while minimizing weight")
Detail.create(product_id: 9, description: "Ergonomic draft collar and tailored hood with face gasket comfortably block drafts and seal in warmth")
Detail.create(product_id: 9, description: "Comfort footbox follows natural foot position for maximum warmth and comfort")
Detail.create(product_id: 9, description: "Soft polyester lining wicks away moisture and lightweight nylon shell has a durable water repellent finish to ward off moisture")
Detail.create(product_id: 9, description: "Full-length #5 zipper with double sliders for versatile ventilation")
Detail.create(product_id: 9, description: "Zippered pocket at shoulder")
Detail.create(product_id: 9, description: "Nylon compression stuff sack and mesh storage bag included")
Detail.create(product_id: 9, description: "5°F EN (European Norm) lower-limit rating is suitable for 4-season use
")

# Mountain Hardwear Lamina Z Blaze -15 Sleeping Bag
SleepingBag.create(weight: 4.5625,
                   temperature_rating: -15,
                   gender: "Unisex",
                   fits_up_to: 6,
                   insulation_type: "Synthetic",
                   bag_shape: "Mummy",
                   zipper_location: "Left",
                   color: "yellow",
                   packed_size: 17.7
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} #{mens_keywords} mountain hardware synthetic lazmina z blaze -15 backpacking".downcase.split(" ").uniq,
               product_table_id: 10,
               brand_id: 3,
               name: "Lamina Z Blaze -15 Sleeping Bag",
               price: 259,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478498827/mountain_hardwear_lamina_z_blaze_-15_sleeping_bag_dqhjmx.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478498827/mountain_hardwear_lamina_z_blaze_-15_sleeping_bag_dqhjmx.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478498827/mountain_hardwear_lamina_z_blaze_-15_sleeping_bag_dqhjmx.jpg",
               description: "A warm, affordable, and water-repellent synthetic bag, with unique Lamina construction for ultimate warmth, the Mountain Hardwear Lamina Z Blaze is a great choice for winter backpacking."
              )

Detail.create(product_id: 10, description: "Slightly wider, winter mummy cut retains body warmth without being restrictive")
Detail.create(product_id: 10, description: "Thermal.Q synthetic insulation has outstanding compressibility and maintains excellent loft")
Detail.create(product_id: 10, description: "Zoned insulation maximizes warmth where it's needed most")
Detail.create(product_id: 10, description: "Durable, lightweight nylon shell with DWR treatment repels water")
Detail.create(product_id: 10, description: "Proprietary, welded Lamina construction enhances loft and eliminates cold spots")
Detail.create(product_id: 10, description: "Ergonomic draft collar blocks the escape of warm air from inside the bag")
Detail.create(product_id: 10, description: "Comfort footbox follows natural foot position for maximum warmth and comfort")
Detail.create(product_id: 10, description: "Face gasket and tailored hood comfortably block drafts at the hood opening and seal in warmth")
Detail.create(product_id: 10, description: "Full length #8 zipper with double sliders for versatile ventilation")
Detail.create(product_id: 10, description: "Soft polyester lining wicks away moisture")
Detail.create(product_id: 10, description: "Zippered pocket at shoulder for storage")
Detail.create(product_id: 10, description: "Nylon compression stuff sack and mesh storage bag included")

# The North Face Cats Meow 22 Sleeping Bag
SleepingBag.create(weight: 2.6875,
                   temperature_rating: 20,
                   gender: "Unisex",
                   fits_up_to: 6,
                   insulation_type: "Synthetic",
                   bag_shape: "Mummy",
                   zipper_location: "Left",
                   fill: "Heatseeker Pro",
                   fill_weight: 1.625,
                   color: "blue",
                   packed_size: 16.6
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} #{mens_keywords} the north face tnf cats cat's meow 22 synthetic backpacking".downcase.split(" ").uniq,
               product_table_id: 11,
               brand_id: 4,
               name: "Cat's Meow 22 Sleeping Bag",
               price: 169,
               rating: 4.8,
               num_ratings: 9,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478499330/the_north_face_cats_meow_22_tkrnsz.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478499330/the_north_face_cats_meow_22_tkrnsz.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478499330/the_north_face_cats_meow_22_tkrnsz.jpg",
               description: "The quintessential synthetic, 20° bag for 3-season backpacking, the Cat's Meow 22 sleeping bag has an efficient design that maximizes warmth and compressibility while reducing weight."
              )

Detail.create(product_id: 11, description: "Cyclone construction wraps a blend of continuous-filament and cut-staple insulation around the bag in efficient, compressible vertical baffles")
Detail.create(product_id: 11, description: "Heatseeker™ Pro synthetic insulation is warm, light and compressible; synthetic insulation continues to insulate well even when damp")
Detail.create(product_id: 11, description: "Shaped hood fits snugly about your head and face for more warmth and comfort")
Detail.create(product_id: 11, description: "Draft collar blocks out cold air and prevents trapped heat from escaping")
Detail.create(product_id: 11, description: "Pad loops give you a way to attach the sleeping bag to your sleeping pad (sleeping pad and attachment hardware sold separately)")
Detail.create(product_id: 11, description: "Compression sack and storage sack included")

# The North Face Blue Kazoo 20 Sleeping Bag
SleepingBag.create(weight: 2.5625,
                   temperature_rating: 20,
                   gender: "Unisex",
                   fits_up_to: 6.5,
                   insulation_type: "Down / Synthetic Blend",
                   bag_shape: "Mummy",
                   zipper_location: "Left",
                   fill_power: 650,
                   fill: '650-fill down / synthetic insulation',
                   fill_weight: 1.3125,
                   color: "blue",
                   packed_size: 9.3
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} #{mens_keywords} the north face tnf blue kazoo 20 650-fill down synthetic backpacking".downcase.split(" ").uniq,
               product_table_id: 12,
               brand_id: 4,
               name: "Blue Kazoo 20 Sleeping Bag",
               price: 299,
               rating: 5,
               num_ratings: 1,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478499327/the_north_face_blue_kazoo_20_qjwxru.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478499327/the_north_face_blue_kazoo_20_qjwxru.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478499327/the_north_face_blue_kazoo_20_qjwxru.jpg",
               description: "It's been a long day on the trail and you're ready for a good night's sleep. The North Face Blue Kazoo 20 is filled with lofty 650-fill ProDown℥ to keep you warm on all your 3-season adventures."
              )

Feature.create(product_id: 12, name: "Water-Resistant Down")

Detail.create(product_id: 12, description: "With a European Norm (EN) lower-limit rating of 13°F, the Blue Kazoo is a versatile bag for 3-season backpacking and climbing adventures")
Detail.create(product_id: 12, description: "Lofty 650-fill-power ProDown™ down insulation compresses small and keeps the overall weight of the bag down while providing great warmth")
Detail.create(product_id: 12, description: "ProDown™ is enhanced with a hydrophobic finish that improves warmth by allowing it to dry faster and repel moisture up to 10x longer than untreated")
Detail.create(product_id: 12, description: "Anti-compression pads made from synthetic insulation are sewn into high-pressure areas that contact the ground to create an insulating buffer")
Detail.create(product_id: 12, description: "Shaped hood and down-insulated draft collar hold in warmth")
Detail.create(product_id: 12, description: "Insulated draft tube backs the zipper to prevent warm air from escaping; antisnag tape keeps the zipper from catching on the draft tube")
Detail.create(product_id: 12, description: "Pad loops give you a way to attach the sleeping bag to your sleeping pad (sleeping pad and attachment straps not included)")
Detail.create(product_id: 12, description: "Compression sack and storage sack included")



# The North Face Dolomite 40 Sleeping Bag
SleepingBag.create(weight: 1.3125,
                   temperature_rating: 40,
                   gender: "Unisex",
                   fits_up_to: 6.5,
                   insulation_type: "Synthetic",
                   bag_shape: "Rectangular",
                   zipper_location: "Right",
                   fill: 'Heatseeker Eco',
                   fill_weight: '1.3125',
                   color: "Orange",
                   packed_size: 10.7
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} #{mens_keywords} the north face tnf dolomite 40 synthetic camping".downcase.split(" ").uniq,
               product_table_id: 13,
               brand_id: 4,
               name: "Dolomite 40 Sleeping Bag",
               price: 89,
               rating: 4,
               num_ratings: 5,
               best_use: "Camping",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478501986/the_north_face_dolomtite_40_sleeping_bag_ivot0n.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478501986/the_north_face_dolomtite_40_sleeping_bag_ivot0n.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478501986/the_north_face_dolomtite_40_sleeping_bag_ivot0n.jpg",
               description: "Generously cut in a rectangular shape, The North Face Dolomite 40° synthetic sleeping bag is for those who want modern performance in an old-school camping bag."
              )

Detail.create(product_id: 13, description: "Heatseeker™ Eco insulation offers a great warmth-to-weight ratio, is highly compressible and is extremely durable; composed of 30% post-consumer recycled material")
Detail.create(product_id: 13, description: "Zipper zips all the way around the footbox and allows the sleeping bag to be opened up completely for use as a comforter")

# The North Face Homestead Twin 20 Sleeping Bag
SleepingBag.create(weight: 4.8125,
                   temperature_rating: 20,
                   gender: "Unisex",
                   fits_up_to: 6,
                   insulation_type: "Synthetic",
                   bag_shape: "Rectangular",
                   zipper_location: "Right",
                   fill: 'Heatseeker Eco',
                   fill_weight: 2.5125,
                   color: "Orange",
                   packed_size: 14.9
                  )

Product.create(category_id: category_ids["sleeping_bags"],
               search_keywords: "#{sleepingbags_keywords} #{mens_keywords} the north face tnf homestead twin 20 synthetic camping".downcase.split(" ").uniq,
               product_table_id: 14,
               brand_id: 4,
               name: "Homestead Twin 20 Sleeping Bag",
               price: 119,
               best_use: "Camping",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478502818/the_north_face_homestead_twin_20_sleeping_bag_gsp5ew.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_fit,h_215,w_215/v1478502818/the_north_face_homestead_twin_20_sleeping_bag_gsp5ew.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478502818/the_north_face_homestead_twin_20_sleeping_bag_gsp5ew.jpg",
               description: "The ultimate in base-camp comfort and style, the 20° Homestead synthetic bag from The North Face bag is sized to match a standard twin mattress, or you can zip two together for a queen-size bed."
              )

Detail.create(product_id: 14, description: "A bit larger than a standard twin mattress, this is easily the largest single bag on the market")
Detail.create(product_id: 14, description: "Heatseeker™ Eco insulation offers a great warmth-to-weight ratio, is highly compressible and is extremely durable; composed of 30% post-consumer recycled material")
Detail.create(product_id: 14, description: "An internal cellphone pocket features see-through, touch-though mesh so you can quickly hit snooze or ignore a call")
Detail.create(product_id: 14, description: "Short side zipper allows you to fold the bag more like your bedding at home")
Detail.create(product_id: 14, description: "Included compression stuff sack features printed fabric and doubles as a simple backpack")



# Shopping Cart Items ##########################################################################################################################################################################################################################################################################################
ShoppingCartItem.create(user_id: 1, product_id: 1, quantity: 1)
ShoppingCartItem.create(user_id: 1, product_id: 2, quantity: 2)


##### Tents #########################################################################################################################################################################################################################################################################################################
##### REI Half Dome 2 Plus Tent #####
image_url = "http://res.cloudinary.com/nequalszero/image/upload/v1482995066/REI_HalfDome_2Plus_Tent_syd7vx.jpg"

Tent.create(seasons: "3-season",
            sleeping_capacity: "2-person",
            minimum_trail_weight: calc_weight(5, 1),
            fly_footprint_pitch_weight: calc_weight(3, 9),
            packaged_weight: calc_weight(5, 7),
            packed_size: "7 x 21 inches",
            floor_dimensions: "95 x 56 inches",
            floor_area: 38.1,
            vestibule_area: "10.2 + 10.2 square feet",
            peak_height: 42,
            number_of_doors: 2,
            number_of_poles: 3,
            pole_material: "DAC Pressfit aluminum",
            pole_diameter: "8.7 millimeters",
            canopy_fabric: "40-denier ripstop nylon/20-denier nylon mesh",
            floor_fabric: "70-denier taffeta nylon",
            rainfly_fabric: "40-denier nylon",
            footprint_included: "No",
            design_type: "Freestanding"
           )

Product.create(category_id: category_ids["tents"],
               search_keywords: "#{tents_keywords} 2 person 3 season REI half dome 2plus 2+ 2 + plus backpacking".downcase.split(" ").uniq,
               product_table_id: 1,
               brand_id: brand_ids["REI"],
               name: "Half Dome 2 Plus Tent",
               price: 219,
               rating: 4.3,
               num_ratings: 92,
               best_use: "Backpacking",
               full_size_image: image_url,
               primary_image: create_image_url(image_url, :primary),
               result_image: create_image_url(image_url, :result),
               cart_image: create_image_url(image_url, :cart),
               description: "Lightweight and weather worthy, the extra roomy Half Dome 2 Plus tent offers many comfortable touches for 2 backpackers, along with an expressive twist—you can choose from different fly colors."
              )

details = [
  "Plus sizing provides more room via an extended floor plan; it's 10 in. longer and 4 in. wider than the standard REI Half Dome 2",
  "Fly design allows sides and ends to be rolled up to maximize views and airflow; everything also rolls down quickly if a storm blows in",
  "Curved zipper tracks on fly operate smoothly; fly's 4 ceiling vents provide airflow to prevent condensation buildup",
  "Hubbed pole assembly simplifies setup",
  "REI-exclusive tension-truss architecture creates stable vertical sidewalls for generous space and plenty of headroom",
  "2 doors and 2 vestibules offer easy access and additional covered storage",
  "Pockets and hang loops help organize the interior",
  "Includes guylines with tighteners, stakes and pole-repair tube, compression stuff sack, pole bag and stake bag",
  "Fly / footprint minimalist pitch option lets you leave the tent at home and use the fly, poles and footprint (sold separately) as a lightweight shelter",
  "REI Half Dome 2 Plus Footprint is sold separately"
]

details.each { |det| Detail.create(product_id: 15, description: det) }

##### REI Half Dome 2 Tent #####
image_url = "http://res.cloudinary.com/nequalszero/image/upload/v1483101094/REI_HalfDome_2_Tent_xzgqkq.jpg"

Tent.create(seasons: "3-season",
            sleeping_capacity: "2-person",
            minimum_trail_weight: calc_weight(4, 9),
            fly_footprint_pitch_weight: calc_weight(3, 4),
            packaged_weight: calc_weight(4, 15),
            packed_size: "6 x 21 inches",
            floor_dimensions: "88 x 52 inches",
            floor_area: 31.8,
            vestibule_area: "7.9 + 7.9 square feet",
            peak_height: 40,
            number_of_doors: 2,
            number_of_poles: 3,
            pole_material: "DAC aluminum",
            pole_diameter: "8.7 millimeters",
            canopy_fabric: "40-denier ripstop nylon/20-denier nylon mesh",
            floor_fabric: "70-denier nylon taffeta",
            rainfly_fabric: "40-denier nylon",
            footprint_included: "No",
            design_type: "Freestanding"
           )

Product.create(category_id: category_ids["tents"],
               search_keywords: "#{tents_keywords} 2 person 3 season REI half dome 2 backpacking".downcase.split(" ").uniq,
               product_table_id: 2,
               brand_id: brand_ids["REI"],
               name: "Half Dome 2 Tent",
               price: 199,
               rating: 4.0,
               num_ratings: 74,
               best_use: "Backpacking",
               full_size_image: image_url,
               primary_image: create_image_url(image_url, :primary),
               result_image: create_image_url(image_url, :result),
               cart_image: create_image_url(image_url, :cart),
               description: "Lightweight and weather worthy, this sturdy 3-season tent offers many comfortable touches for 2 backpackers, along with an expressive twist—you can choose from 6 different fly colors."
              )

details = "Fly design allows sides and ends to be rolled up to maximize views and airflow; everything also rolls down quickly if a storm blows in
Curved zipper tracks on fly operate smoothly; fly's 4 ceiling vents provide airflow to prevent condensation buildup
Hubbed pole assembly simplifies setup
REI-exclusive tension-truss architecture creates stable vertical sidewalls and generous headroom while minimizing pole weight
2 doors and 2 vestibules offer easy access and additional covered storage
Pockets and hang loops help organize the interior
Includes guylines with tighteners, stakes and pole-repair tube, compression stuff sack, pole bag and stake bag
Fly / footprint minimalist pitch option lets you leave the tent at home and use the fly, poles and footprint (sold separately) as a lightweight shelter
REI Half Dome 2 Footprint is sold separately"

details.split("\n").each { |det| Detail.create(product_id: 16, description: det) }



##### Heimplanet Fistral 2 Tent #####
image_url = "http://res.cloudinary.com/nequalszero/image/upload/v1483101093/Heimplanet_Fistral_2_Tent_vl4wj6.jpg"

Tent.create(seasons: "3-season",
            sleeping_capacity: "2-person",
            minimum_trail_weight: calc_weight(4, 8),
            fly_footprint_pitch_weight: calc_weight(3, 8),
            packaged_weight: calc_weight(5, 8),
            packed_size: "8 x 15 inches",
            floor_dimensions: "94 x 53 inches",
            floor_area: 31,
            vestibule_area: "6.5 + 6.5 square feet",
            peak_height: 44,
            number_of_doors: 2,
            number_of_poles: 2,
            pole_material: "Inflatable poles",
            pole_diameter: "100 millimeters",
            canopy_fabric: "40-denier ripstop nylon / polyester mesh",
            floor_fabric: "70-denier nylon taffeta",
            rainfly_fabric: "40-denier high-tenacity ripstop polyester",
            design_type: "Semi-freestanding"
           )

Product.create(category_id: category_ids["tents"],
               search_keywords: "#{tents_keywords} 2 person 3 season heimplanet fistral 2 backpacking".downcase.split(" ").uniq,
               product_table_id: 3,
               brand_id: brand_ids["Heimplanet"],
               name: "Fistral 2 Tent",
               price: 520,
               rating: 5,
               num_ratings: 1,
               best_use: "Backpacking",
               full_size_image: image_url,
               primary_image: create_image_url(image_url, :primary),
               result_image: create_image_url(image_url, :result),
               cart_image: create_image_url(image_url, :cart),
               description: "With an ingenious inflatable design, the 3-season Heimplanet Fistral 2 tent offers flexibility with minimum packed size and low weight. 2 entrances and 2 vestibules offer maximum comfort for 2 people."
              )

details = "Intuitive, easy, fast pitching with simultaneous setup of the airframe, inner tent and rainfly
1-pump system sets up with a single inflation process (pump sold separately)
Multi-chamber system separates frame into independent chambers for stability—even with a leak—and ensures easy repair or replacement of inflatable Diamond Grid
Light and well-ventilated interior has no-see-um mesh and lots of storage space integrated into the sidewalls
2 entrances provide convenient access and protect you from wind and weather; 2 vestibules offer covered space for your gear
Entrances open with 2-way zippers and can be used for additional ventilation
Inflatable geodesic structure ensures outstanding stability and easy setup
2 closable ports create air exchange to keep the tent interior ventilated
Corner pockets, roof pockets and hang loops provide multiple storage options; stuff pockets hold doors out of the way and double as storage pockets
Durable polyester rainfly holds a taut pitch and resists UV degradation
Save weight and create a minimalist shelter by using just the rainfly, inflatable frame, footprint (sold separately),
Includes guylines with tighteners, stakes, pole repair kit; compression stuff sack, pole bags and stake bags"

details.split("\n").each { |det| Detail.create(product_id: 17, description: det) }


##### NEMO Veda 1p Tent #####
image_url = "http://res.cloudinary.com/nequalszero/image/upload/v1483101094/NEMO_Veda_1P_Tent_uveafb.jpg"

Tent.create(seasons: "3-season",
            sleeping_capacity: "1-person",
            minimum_trail_weight: calc_weight(2, 1),
            packaged_weight: calc_weight(2, 7),
            packed_size: "6 x 6 inches",
            floor_dimensions: "98 x 36 inches",
            floor_area: 24,
            vestibule_area: "12 square feet",
            peak_height: 44,
            number_of_doors: 1,
            number_of_poles: "2 trekking poles (not included)",
            pole_material: "Not applicable",
            pole_diameter: "Not applicable",
            canopy_fabric: "40-denier waterproof ripstop polyester",
            floor_fabric: "30-denier coated nylon",
            rainfly_fabric: "20-denier coated nylon",
            footprint_included: "No",
            ultralight: "Yes",
            design_type: "Non-freestanding"
           )

Product.create(category_id: category_ids["tents"],
               search_keywords: "#{tents_keywords} 1 person 3 season ultralight nemo veda 1p backpacking trekkingpoles".downcase.split(" ").uniq,
               product_table_id: 4,
               brand_id: brand_ids["NEMO"],
               name: "Veda 1P Tent",
               price: 329.95,
               rating: 4.3,
               num_ratings: 8,
               best_use: "Backpacking",
               full_size_image: image_url,
               primary_image: create_image_url(image_url, :primary),
               result_image: create_image_url(image_url, :result),
               cart_image: create_image_url(image_url, :cart),
               description: "This 3-season tent gives solo backpackers a magical combination of light weight, packability and livability you will love while living on the trail."
              )

Feature.create(product_id: 18, name: "Ultralight")

details = "Ultralight design relies on 1 pair of trekking poles (sold separately) instead of tent poles to minimize weight and create a spacious interior with ample sitting height
Oversize grommets locate the tips of crossed trekking poles; reinforced areas at the top of the tent receive pole handles
Large vestibule offers generous protected space for gear; it rolls back with a shed-style overhang for weather protection and refreshing airflow
Wicking fabric overhead effectively manages condensation; built-in light pocket makes it easy to illuminate the interior with a headlamp or other light
Includes a drybag-style stuff sack, stakes, guy-out cord and repair kit"

details.split("\n").each { |det| Detail.create(product_id: 18, description: det) }




# ##### NEMO Galaxi 2 Tent #####
image_url = "http://res.cloudinary.com/nequalszero/image/upload/v1483101094/NEMO_Galaxy_2_Tent_dvbnag.jpg"

Tent.create(seasons: "3-season",
            sleeping_capacity: "2-person",
            minimum_trail_weight: calc_weight(4, 15),
            fly_footprint_pitch_weight: calc_weight(3, 10),
            packaged_weight: calc_weight(5, 8),
            packed_size: "6.5 x 18 inches",
            floor_dimensions: "90 x 54 inches",
            floor_area: 32,
            vestibule_area: "11 + 11 square feet",
            peak_height: 40,
            number_of_doors: 2,
            number_of_poles: 2,
            pole_material: "Aluminum",
            pole_diameter: "9 millimeters",
            canopy_fabric: "No-see-um mesh",
            floor_fabric: "70-denier coated nylon",
            rainfly_fabric: "68-denier coated ripstop polyester",
            footprint_included: "Yes",
            design_type: "Freestanding"
           )

Product.create(category_id: category_ids["tents"],
               search_keywords: "#{tents_keywords} 2 person 3 season nemo galaxi galaxy 2 with footprint backpacking".downcase.split(" ").uniq,
               product_table_id: 5,
               brand_id: brand_ids["NEMO"],
               name: "Galaxi 2 Tent with Footprint",
               price: 249.95,
               rating: 4.8,
               num_ratings: 25,
               best_use: "Backpacking",
               full_size_image: image_url,
               primary_image: create_image_url(image_url, :primary),
               result_image: create_image_url(image_url, :result),
               cart_image: create_image_url(image_url, :cart),
               description: "The spacious, 3-season NEMO Galaxi 2 Tent offers quality and innovation at an affordable price, with a great suite of fabrics and hardware that creates an intuitive tent design for 2 backpackers."
              )

Feature.create(product_id: 19, name: "Footprint Included")

details = "1-piece hubbed pole set makes setup simple and quick
Generous vestibules offer protected entry and dry gear storage; tie back one or both of the doors, or close both for full protection
MagTie™ magnetic door tie-backs make it simple to roll back your door and keep it out of the way
Place a headlamp (not included) in the overhead Light Pocket™; its special light-diffusing fabric casts an even glow throughout your tent
The NEMO Galaxi 2P Tent comes with a coated ripstop nylon footprint to help protect its floor from abrasion; webbing stake-outs at the corners allow easy attachment"

details.split("\n").each { |det| Detail.create(product_id: 19, description: det) }


# ####### Reviews ##########################################################################################################################################################################################################################################################

# Since my ruby version / Faker version are currently behind
wookie_speech =
"Youw yrroonn ruh!
Gwyaaaag kabukk rarr ga gwyaaaag rarr!
Kabukk!
Ga ruh ma muaa ru roo roo ga kabukk nng!
Youw wua?
Gwyaaaag.
Huewaa rarr ooma roooarrgh muaa gwyaaaag wua muaa.
Roooarrgh wua wyogg muaa mumwa ruh nng roo huewaa?
Youw wua?
Ur wyogg mumwa wua youw?
Ruh wyogg ooma ooma rarr ur mumwa huewaa!
Muaa?
Ahuma rarr wyogg?
Rarr wua nng ur youw muaa?
Ooma wua ru wyogg ma ahuma muaa rarr!
Roooarrgh ma muaa ma?
Ooma wyaaaaaa.
Nng muaa gwyaaaag ruh yrroonn ga muaa wyogg hnn-rowr nng!
Roo ooma huewaa ruh gwyaaaag yrroonn ruh roo yrroonn nng gwyaaaag?
Yrroonn mumwa gwyaaaag ooma ur wyogg roooarrgh roooarrgh huewaa ooma ru?".split("\n")

ondra_speech =
"Oahhhhhhhhh!
ahhhhhhhhh!
Oahhhhhhhhhhh!
Hnnggghhhhhhh!
ARRRGGGGHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
ARRRGGGGHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
ARRRGGGGHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"

ondra_title = "ARGHHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"

dist = {1 => [80, 12, 3, 2, 3],
        2 => [25, 35, 20, 10, 10],
        3 => [10, 10, 40, 20, 20],
        4 => [2.5, 5, 7.5, 20, 65],
        5 => [1.4, 1.4, 1.4, 7.1, 88.7]
       }

chewwie_id = User.where(username: "Chewbacca").first.id
ondra_id = User.where(username: "Adam Ondra").first.id
dinosaur_id = User.where(username: "Ima Dinosaur").first.id

def build_dist(dist)
  percents = {1 => dist.first}
  key = 1;
  dist.drop(1).each { |num| percents[key+=1] = num + percents[key-1]}
  percents.map { |key, val| percents[key] = val.fdiv(100) }
end

def random_noun()
  val = rand()

  if val < 0.33
    Faker::Food.ingredient
  elsif val < 0.67
    Faker::Food.spice
  else
    Faker::Music.instrument
  end
end

def random_title()
  while true
    title = "#{Faker::Hacker.adjective.capitalize} #{random_noun()}"
    return title if title.length <= 60
  end
end

def random_body()
  val = rand()

  if val <= 0.25
    bool = val < 0.125 ? true : false
    return Faker::Hipster.sentence(rand(3..12), bool, rand(0..5))
  elsif val <= 0.50
    bool = val < 0.375 ? true : false
    return Faker::Hipster.sentences(rand(2..4), bool).join(" ")
  elsif val <= 0.75
    bool = val < 0.625 ? true : false
    return Faker::Hipster.paragraph(rand(2..5), bool, rand(0..5))
  else
    bool = val < 0.875 ? true : false
    return Faker::Hipster.paragraphs(rand(2..5), bool).join("\n\n")
  end
end

def random_rating(dist)
  val = rand()

  (1..5).each { |i| return i if val <= dist[i-1] }
end

def random_date()
  val = rand()

  if val <= 0.05
    return DateTime.now - rand(0..45).minutes
  elsif val <= 0.25
    return DateTime.now - rand(1..18).hours
  elsif val <= 0.50
    return DateTime.now - rand(1..25).days
  elsif val <= 0.80
    return DateTime.now - rand(1..12).months
  else
    return DateTime.now - rand(1..3).years
  end
end

Product.all.each do |product|
  next if product.num_ratings == 0;
  num_ratings = product.num_ratings;
  avg_rating = product.rating.round;
  product.update_attribute :rating, 0
  product.update_attribute :num_ratings, 0

  user_ids = (1..User.count).to_a
  user_ids.shuffle!
  rating_dist = build_dist(dist[avg_rating])

  num_ratings.times do
    user_id = user_ids.pop

    case user_id
    when chewwie_id
      title = wookie_speech[rand(0..wookie_speech.length-2)]
      body = rand(0) > 0.5 ? wookie_speech.sample : "#{wookie_speech.sample} #{wookie_speech.sample}"
    when ondra_id
      title = ondra_title
      body = ondra_speech
    when dinosaur_id
      title = "Rawr! Rawr! Rawr! Rawr!"
      body = "Chomp! Chomp! Chomp! Chomp!"
    else
      title = random_title()
      body = random_body()
    end

    rating = num_ratings == 1 ? avg_rating : random_rating(rating_dist)
    date = random_date()

    review = Review.create(user_id: user_id, product_id: product.id, title: title, body: body, rating: rating)
    Product.add_rating(product, rating)
    review.update_attribute :created_at, date
    review.update_attribute :updated_at, date
  end
end

# (1..5).each do |i|
#   review = Review.create(user_id: i, product_id: 1, title: "Test #{i}", body: "creation test #{i}", rating: i )
#   randDate = DateTime.now - rand(10).days
#   review.update_attribute :created_at, randDate
#   review.update_attribute :updated_at, randDate
# end
