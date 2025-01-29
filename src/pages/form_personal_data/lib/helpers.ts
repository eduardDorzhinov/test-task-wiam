export const phoneMask = (str: string) => {
  if (!str) return "0";

  let nums = str.replace(/\D/g, "");

  if (nums[0] !== "0") {
    nums = `${0}${nums}`;
  }

  const length = nums.length;

  if (!length) {
    return "0";
  }

  if (length <= 4) {
    return nums;
  }

  if (length <= 7) {
    return `${nums.slice(0, 4)} ${nums.slice(4)}`;
  }

  return `${nums.slice(0, 4)} ${nums.slice(4, 7)} ${nums.slice(7, 10)}`;
};
