'use strict'
const Factory =  use('Factory')
const Student =  use('App/Models/Student')
const { test, trait } = use('Test/Suite')('Student Test')

trait('Test/ApiClient')

// test("Unique nisn post Student", async ({ client, assert }) => {
//   const student = await Factory.model("App/Models/Student").create();

//   const response = await client
//     .post("/api/v1/students")
//     .send({
//       nisn: student.nisn,
//       name: "Muri Budiman",
//       study: "Teknik Informatika"
//     })
//     .end();

//   response.assertStatus(400);
  
//   response.assertJSONSubset([{
//     message: "unique validation failed on nisn",
//     field: "nisn",
//     validation: "unique"
//   }]);
// });

test("Validasi NIK", async ({ client, assert }) => {
  const response = await client
    .post("/api/v1/students")
    .send({
      nisn: null,
      name: "Muri Budiman",
      study: "Teknik Informatika"
    })
    .end();

  response.assertStatus(400);
  
  response.assertJSONSubset([
    {
        "message": "required validation failed on nisn",
        "field": "nisn",
        "validation": "required"
    }
  ]);
});

test("Validasi Name", async ({ client, assert }) => {
  const response = await client
    .post("/api/v1/students")
    .send({
      nisn: "1234567890",
      study: "Teknik Informatika"
    })
    .end();

  response.assertStatus(400);
  
  response.assertJSONSubset([
    {
        "message": "required validation failed on name",
        "field": "name",
        "validation": "required"
    }
  ]);
});

