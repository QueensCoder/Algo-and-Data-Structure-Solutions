# O(n) time O(1) space


def longestPeak(array):
    max_peak = 0
    arr_len = len(array)

    for i in range(1, arr_len - 1):
        last = array[i - 1]
        curr = array[i]
        nex = array[i + 1]
        if last < curr and curr > nex:
            curr_peak = 1
            left = i - 1
            right = i + 1

            while left >= 0 and array[left + 1] > array[left]:
                curr_peak += 1
                left -= 1

            while right < arr_len and array[right - 1] > array[right]:
                curr_peak += 1
                right += 1

            if curr_peak > max_peak:
                max_peak = curr_peak

        curr_peak = 1

    return max_peak
