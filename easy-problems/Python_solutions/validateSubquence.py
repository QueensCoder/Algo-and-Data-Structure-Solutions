def isValidSubsequence(array, sequence):
    sp = 0
    ap = 0
     seq_len = len(sequence)
      arr_len = len(array)

       while sp < seq_len and ap < arr_len:
            if sequence[sp] == array[ap]:
                sp += 1
            ap += 1
        return sp == seq_len
