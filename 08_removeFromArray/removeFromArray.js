const removeFromArray = function(arr, ...nums) {
    for (let i = 0; i < nums.length; i++) {
        arr = arr.filter(item => item !== nums[i]);
    }
    return arr;

};
removeFromArray([1, 2, 3, 4], 7, "tacos")
// Do not edit below this line
module.exports = removeFromArray;
