/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{toBe: function(toBeVal){
        if (val===toBeVal){
            return true;
        }
        throw new Error("Not Equal");
    },
    notToBe: function(notToBeVal){
        if (val!==notToBeVal){
            return  true;
        }
        throw new Error("Equal");
    }};
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */