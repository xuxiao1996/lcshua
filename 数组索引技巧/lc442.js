var findDuplicates = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 2;
        if (nums[index] < 0) {
            res.push(Math.abs(nums[i]));
        } else {
            nums[index] = -nums[index];
        }
    }
    return res;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));
