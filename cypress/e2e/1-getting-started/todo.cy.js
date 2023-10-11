/// <reference types="cypress"/>

const dataJson= require('../../fixtures/example')




describe("POST", () => {
    let accesstoken = 'f1f4394f206657cbfcc27d5825740a9f07d8d8dc61e3b25cda7fff7361dd65bb';
    let radomtext="";
    let testemail="";
  
    it("POST", () => {
         var parttern= 'ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstvuwxyz'
         for (var i =0 ; i<parttern.length; i++)
         radomtext+=parttern.charAt(Math.floor(Math.random()* parttern.length));
         testemail= radomtext + '@gmail.com'
    
      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {'Authorization': 'Bearer ' + accesstoken}, // Corrected header
        body: {
          "name": dataJson.name,
          "gender": dataJson.gender,
          "email": testemail,
          "status": dataJson.status
        }
      }).then((res) => {
        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(201);
        expect(res.body).to.have.property('email', testemail);
        expect(res.body).to.have.property('name', dataJson.name);
        expect(res.body).to.have.property('gender', dataJson.gender);
        expect(res.body).to.have.property('status', dataJson.status);
      }).then((res) =>{
        const userId = res.id 
         cy.log("user id is: " + userId)
         //2. get user (GET)
         cy.request({
             method: 'GET',
             url: 'https://gorest.co.in/public/v1/users/'+userId,
             headers: {
                 'Authorization': 'Bearer ' + accesstoken
             }
         }).then((res)=>{
             expect(res.status).to.eq(200)
             expect(res.body).has.property('id', userId)
             expect(res.body).has.property('name',dataJson.name)
             expect(res.body).has.property('status',dataJson.status)
             expect(res.body).has.property('email', testemail)
         })
 });
 });
});