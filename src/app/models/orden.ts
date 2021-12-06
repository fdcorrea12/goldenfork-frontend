export class Orden {

  constructor(_id = '',  name = '', lastName = '', telephone=0, email='', entry='',
  canEntry=0, mainCourse='', canMainCourse=0, drink='',canDrink=0,dessert='',canDessert=0
  ){
    this._id =_id;
    this.name=name;
    this.lastName = lastName;
    this.telephone=telephone;
    this.email=email;
    this.entry=entry;
    this.canEntry=canEntry;
    this.mainCourse=mainCourse;
    this.canMainCourse =canMainCourse;
    this.drink=drink;
    this.canDrink=canDrink;
    this.dessert=dessert;
    this.canDessert=canDessert;

  }

  _id: string;
  name: string;
  lastName: string;
  telephone: number;
  email: string;
  entry: string;
  canEntry: number;
  mainCourse: string;
  canMainCourse: number;
  drink: string;
  canDrink: number;
  dessert: string;
  canDessert: number;



}
