


# without using cache
# def fibonacci(n):
#     if n == 1:
#         return 1
#     elif n == 2:
#         return 1
#     elif n > 2:
#         return fibonacci(n - 1) + fibonacci(n - 2)

fib_cache = {}

def fibonacci(n):
    # if value is cached return its fib value
    if n in fib_cache:
        return fib_cache[n]
    elif not n:
        return 0
    elif n == 0 or  n == 1 or n == 2:
        return 1
    elif n > 2:
        value = fibonacci(n - 1) + fibonacci(n - 2)

    fib_cache[n] = value
    return value
        



for n in range(0, 41):
    print(n, ':', fibonacci(n))

