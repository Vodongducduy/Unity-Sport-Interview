export class Test {
    kiemTraChuoiDoiXung(str) {
        let lIdx = 0;
        let rIdx = str.length - 1;
        while(lIdx < rIdx) {
            if (str[lIdx] < str[rIdx]) {
                return false;
            }
            lIdx++;
            rIdx--;
        }
        return true;
    }

    baiToanTwoSum(nums, target) {
        const map = new Map();
        const result = [];
        
        for (let i = 0; i < nums.length; i++) {
            const tmp = target - nums[i];

            if (map.has(tmp)) {
                result.push([map.get(tmp), i]);
            }

            map.set(nums[i], i);
        }

        return result;
    }
}