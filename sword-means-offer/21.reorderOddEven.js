var reorderOddEven = function (nums) {
    if (!nums || !nums.length) {
        return nums
    }
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        while (left < right && !checkFunc(nums[left])) {
            left++
        }
        while (right > 0 && checkFunc(nums[right])) {
            right--
        }
        if (left < right) {
            const temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            right--
        }
    }
    return nums
}

var checkFunc = function (item) {
    return item % 2 === 0
}
