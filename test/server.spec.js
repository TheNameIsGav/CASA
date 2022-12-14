const supertest = require("supertest");

process.env.DATABASE="integration_tests"

const app = require("../Server/server.js");
const chai = require('chai')
const expect = chai.expect;
const { User } = require("../Database/User.js")
const Validation = require("../Database/ValidationCode.js")

before(() => {
  return new Promise((resolve, reject) => {
    app.on("appStarted", function() {
      return resolve()
    })
  })
})

describe("GET /api", function() {
  it("it should has status code 202", function(done) {
    supertest(app)
      .get("/api")
      .expect(202)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
});

describe("GET /api/database", function() {
  it("it should have status code 201", function(done) {
    supertest(app)
    .get("/api/database")
    .expect(200)
    .end(function(err, res) {
      if(err) {done(err)} else {
        done();
      }
    });
  });
});

//Create Validation Codes
  //Coach and Mentor
describe("GET /api/admin/generate_coach_validation_code", function() {
  it("It should return a valid coach validation code and status 201", (done) => {
    let result;
    supertest(app).get("/api/admin/generate_coach_validation_code")
    .send()
    .expect(201)
    .end((err, res) => {
      if(err) done(err);
      result = res.body
      expect(res.body.validationType).to.be.true
      expect(res.body.value).to.not.be.undefined
      done();
    })
  })
})

describe("POST /api/coach/create_coach", function() {
  var code
  it("It should successfully create a validation code", (done) => {
    supertest(app)
    .get('/api/admin/generate_coach_validation_code')
      .send()
      .expect(201)
      .end((err, res) => {
        if(err) done(err)
        code = res.body.value
        done()
      })
  })

  it("and then create a coach and status 201", (done) => {
    //Create Coach
    var testCoach = {
      username: "test coach",
      email: "test_coach@email.com",
      password: "test_coach_password",
      madeQuizzes: [],
      school: "test school",
      teams: [],
      validationCode: code
    }

    supertest(app)
    .post("/api/coach/create_coach")
      .send(testCoach)
      .expect(201)
      .end((err, res) => {
        if(err) done(err)
        result = res.body
        expect(res.body.username).to.eq("test coach")
        expect(res.body.email).to.eq("test_coach@email.com")
        expect(res.body.school).to.eq("test school")
        expect(res.body.teams).to.be.empty
        expect(res.body.madeQuizzes).to.be.empty
        coach_id = res.body._id
        done()
    })
  })

  it("and the code should be removed", (done) => {
    supertest(app)
    .post('/api/admin/check_code_existence')
    .send({validationCode: code})
    .expect(404)
    .end((err, res) => {
      if(err) done(err)
      done()
    })
  })
});

//Create Teams
// describe("POST /api/admin/register_team", function() {
//   it("it should delete the test team and register the team to the coach", (done) => {
//     let result;
//     supertest(app).post("/api/admin/register_team")
//     .send(testTeam)
//     .end((err, res) => {
//       if(err) done(err)
//       result = res.body
//       expect(res.status).to.eq(200)
//       done()
//     })
//     .post('/api/user/fetch_user')
//     .send({id: coach_id})
//     .end((err, res) => {
//       if(err) done(err)
//       result = res.body
//       expect(res.body.teams).to.contain(0)
//       done()
//     })
//   })
// })

//Create Students
var testStudent = {
  username: "test student",
  email: "test_student@email.com",
  password: "test_student_password"
}
// describe("POST /api/student/create_student", function() {
//   it("It should create a new student", (done) => {
//     let result;
//     supertest(app).post("/api/student/create_student")
//     .send(testStudent)
//     .expect(201)
//     .end((err, res) => {
//       if(err) done(err)
//       result = res.body
//       expect(res.body.username).to.be("test student")
//       expect(res.body.email).to.be("test_student@email.com")
//       expect(res.body.password).to.be("test_student_password")
//       done()
//     })
//   })
// })

// //Login
// describe("POST /api/user/login", function() {
//   it("It should successfully login an existing user", (done) => {
//     let result;
//     supertest(app).post("/api/user/login")
//     .send({username: "test student", password: "test_student_password"})
//     .expect(201)
//     .end((err, res) => {
//       if(err) done(err)
//       result = res.body
//       expect(res.username).to.be("test student")
//       expect(res.password).to.be("test_student_password")
//       done()
//     })
//   })
// })

after(() => {
  User.deleteMany({}).then(() => {
    console.log("Deleted")
  }).catch((err) => {
    console.log(err)
  })
  Validation.deleteMany({}).then(() => {
    console.log("Deleted")
  }).catch((err) => {
    console.log(err)
  })
})