def getDir(arr):
	for i in range(len(arr) - 1):
		if arr[i] < arr[i + 1]:
			return 'inc'
		elif arr[i] > arr[i + 1]:
			return 'dec'


def isMonotonic(arr):
	initDir = getDir(arr)
	currDir = initDir

    for i in range(len(arr) - 1):
		if arr[i] < arr[i + 1]:
			currDir = 'inc'
		elif arr[i] > arr[i + 1]:
			currDir = 'dec'
		
		if currDir != initDir:
			return False
	return True
