# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Product.delete_all
Product.create!(title: 'personal shopper package', image_url: 'product.png', price: 69.00)
Product.create!(title: 'second possible product', image_url: 'sofa.png', price: 79.00)
