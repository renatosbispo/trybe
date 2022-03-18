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
  });

  after(() => {
    User.findAll.restore();
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
});
