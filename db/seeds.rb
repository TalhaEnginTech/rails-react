Product.destroy_all

1000.times do
  Product.create(
    title: Faker::Commerce.unique.product_name,
    description: "This is the dummy product",
    price: Faker::Commerce.price,
    stock_quantity: Faker::Number.number(digit 3))
end

puts "Created #{Product.count} products."
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
