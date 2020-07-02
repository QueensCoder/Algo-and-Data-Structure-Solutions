
# write a function that takes in an array and an int (always > 1)
# determine how the start of every valid run in an array

# a run is defined as as a sequence of integers that are increasing or decreasing by a difference of 1 between each
# a run can only be asceding or desceding

# examples:
#  asc run  [1,2,3]

#  desc run [3,2,1]

# non runs

# [1,2,1]


def handle_runs(arr, total_runs, temp, i, dir):
    # allows one function to work for asc and desc depending on dir, diff can be -1 or 1
    diff = 1 if dir else -1
    curr = i  # start at i
    while temp:
        print(temp)
        next = curr + 1
        if arr[curr] + diff == arr[next]:
            temp -= 1
            curr += 1
        else:
            return
    total_runs.append(i)


def find_n_runs(arr, n):
    total_runs = []
    for i in range(len(arr) - (n - 1)):
        temp = n - 1
        dir = arr[i] < arr[i + 1]  # direction true if asc false if desc
        if dir:
            handle_runs(arr, total_runs, temp, i, dir)
        elif not dir:
            handle_runs(arr, total_runs, temp, i, dir)

    return total_runs if len(total_runs) else None


arr = [1, 2, 3, 5, 6, 9, 10, 11, 12, 11, 10]
n = 3

print(find_n_runs(arr, n), '><><><')  # expect [0,5,6,8]


print(find_n_runs([1, 2], 4), '><><><')  # expect None
