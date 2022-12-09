game.splash("we are going to show you the pizza cost")
let diameter = game.askForNumber("what is the diameter of the pizza")
let labor_cost = 0.75
let rent_per_pizza = 1
let materials = 0.5
let subtotal_cost = labor_cost + (rent_per_pizza + materials)
let hst = 0.13
let tax = subtotal_cost + hst
let total_cost = subtotal_cost + tax
game.splash("your total is", total_cost)
