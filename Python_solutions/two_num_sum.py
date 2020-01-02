def twoNumberSum(array, targetSum):
    nums = set(array)
    for i in array:
        diff = targetSum - i
        if diff in nums and diff != i:
            return [min(i, diff), max(i, diff)]
    return []
