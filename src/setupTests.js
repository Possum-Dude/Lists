// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


describe("true is truthy and false is falsy", ()=>{
    it("true is truthy", ()=>{
        expect(true).toBe(True);
    });
    it("false is falsy", ()=>{
        expect(false).toBe(False);
    });
    it("true is not falsy", ()=>{
        expect(false).toBeFalsy();
    });
})