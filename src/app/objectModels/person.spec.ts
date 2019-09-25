import { Person } from './person';

describe('Person', () => {
  let p:Person;
  beforeEach(()=>{

     p = new Person();
  });
  
  it('should create an instance', () => {
    expect(new Person()).toBeTruthy();
  });
  it('get person age', () => {
    p.setBearthDay(1978,11,22);
    expect(p.GetAge()).toBe(41);

  });
});
