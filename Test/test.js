const calculator = require('../index')
const chai = require('chai');
const sinon = require("sinon");

const expect = chai.expect;

// created obj for class calculator
let temp = new calculator();

// test suit npm
describe("Test suit",()=>{
    after(()=>{console.log("run after test cases completed")})
    before(()=>{console.log("run before test cases started")})
    afterEach(()=>{console.log("run after test case ")})
    afterEach(()=>{sinon.restore()})


    // test the add method 
    it("This will test add method",()=>{
        expect(temp.add(1,2)).to.be.equal(3);
    })
    // test the multiply method 
    it("This will test multiply method",()=>{
        expect(temp.multiply(4,3)).to.be.equal(12);
    })
    // test the division method 
    it("This will test division method",()=>{
        expect(temp.divide(3,2)).to.be.equal(1.5);
    })
    // test the subtraction method 
    it("This will test subtraction method",()=>{
        expect(temp.sub(1,2)).to.be.equal(-1);
    })


    // lets apply spy on our test
    it("lets spy add and divide method",()=>{
        let spy1 = sinon.spy(temp,"add");
        let spy2 = sinon.spy(temp,"divide");

        temp.callAnotherFun(2,3,0); // here we are calling another function which contain add function
         sinon.assert.calledOnce(spy1)
         sinon.assert.neverCalledWith(spy2) // we have pass 0 so it will not be called

        temp.callAnotherFun(2,3,1); // here we are calling another function which contain divide function
        // sinon.assert.neverCalledWith(spy1)
        sinon.assert.calledOnce(spy2) // we have pass 1 so it will not be called
    })

    // lets mock our test
    it("Let's mock our test",()=>{
        let mock = sinon.mock(temp);
        let expectation = mock.expects("verdis");
        expectation.exactly(1); // should be called once 
        expectation.withArgs("hii verdis")
        temp.callAnotherFun(1,2,1) // when we are calling callAnotherFun than verdis should not be called
        mock.verify();
    })

    // it will stub the test method
    it("Let's stub the test method",()=>{
        let stub = sinon.stub(temp,"add")
        stub.withArgs(10,20).onFirstCall().returns(100).onSecondCall().returns(200);
        expect(temp.add(10,20)).to.be.equal(100)
        expect(temp.add(10,20)).to.be.equal(200)
    })
})



