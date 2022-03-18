const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { User: userMock } = require('./mock/models');
const server = require('../api/app');
const { User } = require('../models');

chai.use(chaiHttp);
const { expect } = chai;

describe('/api/users', () => {
  before(() => {
    sinon.stub(User, 'findAll').callsFake(userMock.findAll);
    sinon.stub(User, 'create').callsFake(userMock.create);
  });

  after(() => {
    User.findAll.restore();
    User.create.restore();
  });

  describe('GET /api/users', () => {
    let response;

    before(async () => {
      response = await chai.request(server).get('/api/users');
    });

    it('The request response is a list with two User entries', () => {
      expect(response.body).to.have.length(2);
    });

    it('The request must return the status code 200', () => {
      expect(response).to.have.status(200);
    });
  });

  describe('POST /api/users', () => {
    let createRequestResponse = {};
    let userListBeforeCreate = [];
    let userListAfterCreate = [];

    const newUser = {
      username: 'Elon Musk',
      password: 'boringpassword',
    };

    before(async () => {
      userListBeforeCreate = (await chai.request(server).get('/api/users')).body;

      createRequestResponse = await chai
        .request(server)
        .post('/api/users')
        .send(newUser);

      userListAfterCreate = (await chai.request(server).get('/api/users')).body;
    });

    it('Before user creation, GET /api/users must return a list with two User entries', () => {
      expect(userListBeforeCreate).to.have.length(2);
    });

    it('The POST request must return the status code 201', () => {
      expect(createRequestResponse).to.have.status(201);
    });

    it('The POST request must return an object in the response body', () => {
      expect(createRequestResponse.body).to.be.an('object');
    });

    it('The object must have the property "message"', () => {
      expect(createRequestResponse.body).to.have.property('message');
    });

    it('The property "message" must have the value "Novo usuário criado com sucesso"', () => {
      expect(createRequestResponse.body.message).to.be.equal(
        'Novo usuário criado com sucesso'
      );
    });

    it('After user creation, GET /api/users must return a list with three User entries', () => {
      expect(userListAfterCreate).to.have.length(3);
    });

    it('The list must contain the user sent in the POST request', () => {
      expect(userListAfterCreate[2]).to.contain(newUser);
    });
  });
});
