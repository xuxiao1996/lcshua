var removeDuplicates = function(nums) {
    let slow = 0;
    let fast = 0;
    if (nums.length === 1) {
        return;
    }
    while (fast < nums.length) {
        while (fast < nums.length && nums[slow] === nums[fast]) {
            fast++;
        }
        if (fast === nums.length) {
            break;
        } else {
            nums[slow] = nums[fast - 1];
            slow += 1;
            nums[slow] = nums[fast];
            fast += 1;
        }
    }
};

var removeDuplicates2 = function(nums) {
    if (nums.length === 0) return 0

    let slow = 0, fast = 1
    while (fast < nums.length) {
        if (nums[fast] !== nums[slow]) {
            slow++
            nums[slow] = nums[fast]
        }
        fast++
    }

    return slow + 1
};


removeDuplicates2([0,0,1,1,1,2,2,3,3,4])
