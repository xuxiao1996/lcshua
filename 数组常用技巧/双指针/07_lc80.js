var removeDuplicates = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let slow = 0;
    let fast = 1;
    let count = 1;
    while (fast < nums.length) {
        if (nums[slow] >= nums[fast] && count < 2) {
            count++;
            nums[++slow] = nums[fast++];
            continue;
        }
        if (nums[slow] !== nums[fast]) {
            count = 1;
            nums[++slow] = nums[fast];
        }
        fast++;
    }
    console.log(slow + 1);
    console.log(nums);
    return slow;

};

var removeDuplicates1 = function(nums) {
    if (nums.length <= 2) return nums.length

    let slow = 2, fast = 2
    while (fast < nums.length) {
        if (nums[fast] != nums[slow - 2]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }

    return slow
};

removeDuplicates([0,0,1,1,1,1,2,3,3])
removeDuplicates([0,1,2,3])
