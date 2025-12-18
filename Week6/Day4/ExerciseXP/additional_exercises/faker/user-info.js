import {faker} from '@faker-js/faker'

let users = [];

function createNewUser(number) {
  for (let i = 0; i < number; i++) {
    const newUser = {}
    newUser.name = faker.person.firstName();
    newUser.address = faker.location.streetAddress();
    newUser.country = faker.location.country();
    console.log(newUser);
    users.push(newUser);
  }
}
createNewUser(5);
