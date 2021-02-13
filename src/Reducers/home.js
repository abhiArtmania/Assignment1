import { homeActionType } from '../Constants'

const dragTableData = [{
  id: 4,
  name: "Patricia Lebsack",
  username: "Karianne",
  email: "Julianne.OConner@kory.org",
  address: {
     street: "Hoeger Mall",
     suite: "Apt. 692",
     city: "South Elvis",
     zipcode: "53919-4257"
   }
},{
   id: 5,
   name: "Chelsey Dietrich",
   username: "Kamren",
   email: "Lucio_Hettinger@annie.ca",
   address: {
     street: "Skiles Walks",
     suite: "Suite 351",
     city: "Roscoeview",
     zipcode: "33263"
   }
 },{
   id: 6,
   name: "Mrs. Dennis Schulist",
   username: "Leopoldo_Corkery",
   email: "Karley_Dach@jasper.info",
   address: {
     street: "Norberto Crossing",
     suite: "Apt. 950",
     city: "South Christy",
     zipcode: "23505-1337"
   }
 },{
   id: 7,
   name: "Kurtis Weissnat",
   username: "Elwyn.Skiles",
   email: "Telly.Hoeger@billy.biz",
   address: {
     street: "Rex Trail",
     suite: "Suite 280",
     city: "Howemouth",
     zipcode: "58804-1099"
   }
 }]

const dropTableData = [{
   id: 1,
   name: "Leanne Graham",
   username: "Bret",
   email: "Sincere@april.biz",
   address: {
     street: "Kulas Light",
     suite: "Apt. 556",
     city: "Gwenborough",
     zipcode: "92998-3874",
   }
  },
  {
   id: 2,
   name: "Ervin Howell",
   username: "Antonette",
   email: "Shanna@melissa.tv",
   address: {
     street: "Victor Plains",
     suite: "Suite 879",
     city: "Wisokyburgh",
     zipcode: "90566-7771",
   }
 },{
   id: 3,
   name: "Clementine Bauch",
   username: "Samantha",
   email: "Nathan@yesenia.net",
   address: {
     street: "Douglas Extension",
     suite: "Suite 847",
     city: "McKenziehaven",
     zipcode: "59590-4157",
   }
 }]

const initialState = {
  user:{},
  tableData:JSON.stringify({
    dragTableData:dragTableData,
    dropTableData:dropTableData
  })
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case homeActionType.FETCH_DATA:
      return {
        ...state,
        user: {
          name:'ABC'
        }
      }
    case homeActionType.UPDATE_DATA:
      return {
        ...state,
        tableData:action.payload
      }
    default:
      return { ...state }
  }
}

export default home
