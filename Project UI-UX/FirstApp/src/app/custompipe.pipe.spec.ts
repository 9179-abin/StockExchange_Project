import { CustompipePipe } from './custompipe.pipe';
function greetings(a:number,b:number) {
  return a*b;
}

describe('Greeting Message', () => {
   let expected = 0;
   beforeEach(() => {
     expected = 8;

   });
    afterEach(() =>{
      expected= 8;
    });

  // it('create an instance', () => {
  //   const pipe = new CustompipePipe();
  //   expect(pipe).toBeTruthy();
  // });
   
  it('My GreetingMessage', () => {
     expect(greetings(2,4)).toEqual(expected);
  });

});
