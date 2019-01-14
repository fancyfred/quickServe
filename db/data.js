const Item = require('./trade');
// console.log(Item);
class Data {
  /*
  title: {type: String, required: true, max: [128, 'Too Long. Max is 128 chars.']},
  category: {type: String, required: false, lowercase: true},
  description: {type: String, required: true},
  color: {type: String, required: false},
  price: {type: Float, required: true},
  image: {type: String, required: false},
  new: {type: Boolean, required: true},
  createdAt: {type: Date, default: Date.now}
  */
  constructor() {
    this.items = [
      {
          title: "The Hobbit",
          category: "Books",
          description: "Oldest available edition of this famous novel",
          price: "10",
          new: false
      },
      {
          title: "Toy hammer",
          category: "Toys",
          description: "A plastic baby toy",
          price: "1",
          new: true
      },
      {
          title: "Mazda Premacy",
          category: "Cars",
          description: "An old tourer in good condition",
          price: "2600",
          new: false
      },
      {
          title: "Porche",
          category: "Cars",
          description: "Never been driven",
          price: "62900",
          new: true
      }
    ]
  }
  
  async cleanDb() {
    await Item.remove({});
  }
  
  pushDataToDb() {
    this.items.forEach((item) => {
      let newItem  = Item(item);
      // console.log(newItem);
      newItem.save()
    })
  }
  
  seeDb() {
    this.cleanDb();
    this.pushDataToDb();
  }
}

module.exports = Data;