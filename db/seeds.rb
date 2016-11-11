# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'Guest', password: 'asdfasdf')      # 1
User.create(username: 'Travis', password: 'asdfasdf')     # 2
User.create(username: 'Dinosaur', password: 'asdfasdf')   # 3
User.create(username: 'Sheldon', password: 'asdfasdf')    # 4
User.create(username: 'Leonard', password: 'asdfasdf')    # 5
User.create(username: 'Howard', password: 'asdfasdf')     # 6
User.create(username: 'Penny', password: 'asdfasdf')      # 7
User.create(username: 'Rajesh', password: 'asdfasdf')     # 8

Brand.create(name: "Marmot")
Brand.create(name: "REI")
Brand.create(name: "Mountain Hardwear")
Brand.create(name: "The North Face")
Brand.create(name: "NEMO")

Category.create(name: "sleeping_bags")
Category.create(name: "tents")

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

Product.create(category_id: 1,
               product_table_id: 1,
               brand_id: 1,
               name: "Hydrogen Down Sleeping Bag",
               price: 329,
               rating: 4.0,
               num_ratings: 5,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478473156/marmot_hydrogen_hyghtl.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478473156/marmot_hydrogen_hyghtl.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478473156/marmot_hydrogen_hyghtl.jpg",
               description: "At just a pound and a half, the Marmot Hydrogen 3-season sleeping bag is constructed with curved baffles to reduce the shifting of its water-resistant 800-fill goose down for superb loft and warmth."
              )

Feature.create(product_id: 1,
               name: "Water-Resistant Down")

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

Product.create(category_id: 1,
               product_table_id: 2,
               brand_id: 1,
               name: "Plasma 15 Sleeping Bag",
               price: 699,
               rating: 3.2,
               num_ratings: 5,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478482708/marmot_plasma_15_qztthh.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478482708/marmot_plasma_15_qztthh.jpg",
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

Product.create(category_id: 1,
               product_table_id: 3,
               brand_id: 2,
               name: "Igneo Sleeping Bag",
               price: 299,
               rating: 4.3,
               num_ratings: 53,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478484166/rei_igneo_tdv7hy.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478484166/rei_igneo_tdv7hy.jpg",
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

Product.create(category_id: 1,
               product_table_id: 4,
               brand_id: 2,
               name: "Flash Sleeping Bag - Women's",
               price: 173.93,
               rating: 4.3,
               num_ratings: 18,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478484833/rei_flash_womens_t16m3w.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478484833/rei_flash_womens_t16m3w.jpg",
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

Product.create(category_id: 1,
               product_table_id: 5,
               brand_id: 5,
               name: "Celesta 25 Sleeping Bag - Women's",
               price: 199.95,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478489515/nemo_celesta_25_womens_l964ql.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478489515/nemo_celesta_25_womens_l964ql.jpg",
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

Product.create(category_id: 1,
               product_table_id: 6,
               brand_id: 5,
               name: "Celesta 35 Sleeping Bag - Women's",
               price: 189.95,
               rating: 5,
               num_ratings: 1,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478489515/nemo_celesta_25_womens_l964ql.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478489515/nemo_celesta_25_womens_l964ql.jpg",
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

Product.create(category_id: 1,
               product_table_id: 7,
               brand_id: 5,
               name: "Rhapsody 15 Sleeping Bag - Women's",
               price: 399.95,
               rating: 5,
               num_ratings: 1,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478490599/nemo_rhapsody_15_womens_b4jars.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478490599/nemo_rhapsody_15_womens_b4jars.jpg",
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

Product.create(category_id: 1,
               product_table_id: 8,
               brand_id: 3,
               name: "Phantom Torch 3 Sleeping Bag",
               price: 630,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478497964/mountain_hardwear_phantom_torch_3_o9bjuq.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478497964/mountain_hardwear_phantom_torch_3_o9bjuq.jpg",
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

Product.create(category_id: 1,
               product_table_id: 9,
               brand_id: 3,
               name: "Lamina Z Torch Sleeping Bag",
               price: 209,
               rating: 4.3,
               num_ratings: 3,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478497968/mountain_hardwear_lamina_z_torch_sleeping_bag_qx3gn8.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478497968/mountain_hardwear_lamina_z_torch_sleeping_bag_qx3gn8.jpg",
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

Product.create(category_id: 1,
               product_table_id: 10,
               brand_id: 3,
               name: "Lamina Z Blaze -15 Sleeping Bag",
               price: 259,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478498827/mountain_hardwear_lamina_z_blaze_-15_sleeping_bag_dqhjmx.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478498827/mountain_hardwear_lamina_z_blaze_-15_sleeping_bag_dqhjmx.jpg",
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

Product.create(category_id: 1,
               product_table_id: 11,
               brand_id: 4,
               name: "Cat's Meow 22 Sleeping Bag",
               price: 169,
               rating: 4.8,
               num_ratings: 9,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478499330/the_north_face_cats_meow_22_tkrnsz.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478499330/the_north_face_cats_meow_22_tkrnsz.jpg",
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

Product.create(category_id: 1,
               product_table_id: 12,
               brand_id: 4,
               name: "Blue Kazoo 20 Sleeping Bag",
               price: 299,
               rating: 5,
               num_ratings: 1,
               best_use: "Backpacking",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478499327/the_north_face_blue_kazoo_20_qjwxru.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478499327/the_north_face_blue_kazoo_20_qjwxru.jpg",
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

Product.create(category_id: 1,
               product_table_id: 13,
               brand_id: 4,
               name: "Dolomite 40 Sleeping Bag",
               price: 89,
               rating: 4,
               num_ratings: 5,
               best_use: "Camping",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478501986/the_north_face_dolomtite_40_sleeping_bag_ivot0n.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478501986/the_north_face_dolomtite_40_sleeping_bag_ivot0n.jpg",
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

Product.create(category_id: 1,
               product_table_id: 14,
               brand_id: 4,
               name: "Homestead Twin 20 Sleeping Bag",
               price: 119,
               best_use: "Camping",
               primary_image: "http://res.cloudinary.com/nequalszero/image/upload/v1478502818/the_north_face_homestead_twin_20_sleeping_bag_gsp5ew.jpg",
               result_image: "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_215/v1478502818/the_north_face_homestead_twin_20_sleeping_bag_gsp5ew.jpg",
               cart_image: "http://res.cloudinary.com/nequalszero/image/upload/c_pad,h_150,w_150/v1478502818/the_north_face_homestead_twin_20_sleeping_bag_gsp5ew.jpg",
               description: "The ultimate in base-camp comfort and style, the 20° Homestead synthetic bag from The North Face bag is sized to match a standard twin mattress, or you can zip two together for a queen-size bed."
              )

Detail.create(product_id: 14, description: "A bit larger than a standard twin mattress, this is easily the largest single bag on the market")
Detail.create(product_id: 14, description: "Heatseeker™ Eco insulation offers a great warmth-to-weight ratio, is highly compressible and is extremely durable; composed of 30% post-consumer recycled material")
Detail.create(product_id: 14, description: "An internal cellphone pocket features see-through, touch-though mesh so you can quickly hit snooze or ignore a call")
Detail.create(product_id: 14, description: "Short side zipper allows you to fold the bag more like your bedding at home")
Detail.create(product_id: 14, description: "Included compression stuff sack features printed fabric and doubles as a simple backpack")



# Shopping Cart Items
ShoppingCartItem.create(user_id: 1, product_id: 1, quantity: 1)
ShoppingCartItem.create(user_id: 1, product_id: 2, quantity: 2)
