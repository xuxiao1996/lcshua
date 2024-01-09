var moveZeroes = function(nums) {
    let i = 0;
    let j = 0;
    while (j < nums.length) {
        if (nums[j] !== 0) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    for (let k = i; k < nums.length; k++) {
        nums[k] = 0;
    }
};

moveZeroes([0,1,0,3,12])
