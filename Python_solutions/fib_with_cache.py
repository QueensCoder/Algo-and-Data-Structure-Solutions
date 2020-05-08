def getNthFib(n):
    cache = {}
    return fibonacci(n, cache)


def fibonacci(n, cache):
    # if value is cached return its fib value
	if n in cache:
        return cache[n]
    elif n <= 1:
		return 0
    elif n == 2:
        return 1
    elif n > 2:
        value = fibonacci(n - 1, cache) + fibonacci(n - 2, cache)
	
	cache[n] = value	
	return value
