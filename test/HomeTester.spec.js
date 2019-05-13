import HomeController from "../js/controller/homeController";
debugger;
var sinon = require('sinon');
var controller = new HomeController({}); 

describe("#loadCategories", () => {
  
  var getCategoriesStub,
      getCarouselStub,
      renderResultsStub;

  beforeEach(()=>{
    getCategoriesStub = sinon.stub(controller.model, 'getCategories');
    getCarouselStub = sinon.stub(controller.model, 'getCarousel');
    renderResultsStub = sinon.stub(controller.view, 'renderResults');
  });

  afterEach(()=>{
      getCategoriesStub.restore();
      getCarouselStub.restore();
      renderResultsStub.restore();

  });


  it("should call getCategories of the model", async () => {
    debugger;
    await controller.loadCategories();
    console.log("load categories called from homespec.js");
    expect(getCategoriesStub.called).toEqual(true);
  });
  

  it("should call loadCategories of the mainController", async () => {
    debugger;
    await controller.loadCategories();
    console.log("load categories called from homespec.js");
    expect(getCarouselStub.called).toEqual(true);
  });
  

  it("should call renderResults of the mainController", async () => {
    debugger;
    await controller.loadCategories();
    console.log("load categories called from homespec.js");
    expect(renderResultsStub.called).toEqual(true);
  });

  

  it("should call loadCategories of the mainController", async () => {
  
    await controller.loadCategories();
    console.log("load categories called from homespec.js");
    expect(controller.state.Home).toEqual(controller.model);
  });


}); 
 


// describe('yo yo baby', function () {

//     it('it yo', function () {
  
//       var name = 'boss';
  
//       expect(name).toBe('boss');
  
//     });
  
//   });