const { expect } = require('chai');
const twoSum = require("./twoSum");

describe("twoSum function", () => {
    it("returns an empty array if length of numbers array is less than 2", () => {
        const result = twoSum([1], 15);
        expect(result.length).to.equal(0);
    });
});