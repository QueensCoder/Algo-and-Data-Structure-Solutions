def longest_peak(array):
    max_peak = 0
    peak_indexs = []
    arr_len = len(array)

# start at first element of array and end before last to stay in bounds
    for i in range(1, arr_len - 1):
        last = array[i - 1]
        curr = array[i]
        nex = array[i + 1]
        if last < curr and curr > nex:
            peak_indexs.append(i)
# 	start current peak at 1 because the index of a peak counts towards its len
    curr_peak = 1

    for i in peak_indexs:
        left = i - 1
        right = i + 1

# ensure that pointers are in array bounds
# 		start at peak and begin to more left checking that each item is less than last
        while left >= 0 and array[left + 1] > array[left]:
            curr_peak += 1
            left -= 1
# start at right of pointer and move until right - 1 is not less than right
        while right < arr_len and array[right - 1] > array[right]:
            curr_peak += 1
            right += 1
# update max speak
        if curr_peak > max_peak:
            max_peak = curr_peak
# 		reset current peak to 1
        curr_peak = 1

    return max_peak
