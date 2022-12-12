game.splash("we are going to show you the pizza cost")
diameter = game.ask_for_number("what is the diameter of the pizza")
labor_cost = 0.75
rent_per_pizza = 1
materials = 0.5
subtotal_cost = labor_cost + (rent_per_pizza + materials)
hst = 0.13
tax = subtotal_cost + hst
total_cost = subtotal_cost + tax
game.splash("your total is", total_cost)