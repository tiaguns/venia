
var faker = require('faker')

export default {

    user: function() {

        var firstName = faker.name.firstName()
        

        var data = {

            name: `${firstName}`,
            last_name:faker.name.lastName() ,
            email: faker.internet.email(firstName),
            password: faker.internet.password(16, true,true,"@#AbC12") 
        }  
            
            return data  
    }
  
}

