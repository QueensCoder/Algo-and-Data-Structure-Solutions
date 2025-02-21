from functools import lru_cache


@lru_cache(maxsize=1000)
def fibonacci(n):
    if not n:
        return 0
    elif n == 1 or n == 2:
        return 1
    elif n > 2:
        return fibonacci(n - 1) + fibonacci(n - 2)


for n in range(0, 600):
    print(n, ':', fibonacci(n))
