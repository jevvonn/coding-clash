# Diskon Toko Alkamart
def calculateDiscount(x):
  if x < 500000:
    return x
  elif x <= 1000000 :
    return round(x - (x * (10/100)))
  else :
    return round(x - (x * (15/100)))

print(calculateDiscount(5450000));
print(calculateDiscount(1500000));
print(calculateDiscount(750000));
print(calculateDiscount(1000000));
print(calculateDiscount(1000005));

# Menghitung Laba
def calculateProfit(x,y,z):
  r = 10;tp = 1;tl = 5
  p = ((x * tp) + (y * tl)) * r
  return round((p + (p * (z/100))) / 100)

print(calculateProfit(10000, 2000, 10)); 
print(calculateProfit(15000, 3000, 5));
print(calculateProfit(10000, 1000, 30));
print(calculateProfit(5000, 5000, 50));

# Konferensi Meja Bundar
def factorial(x):
  return x if x == 1 else x * factorial(x-1)

print(factorial(3))
print(factorial(10))
print(factorial(6))
print(factorial(5))