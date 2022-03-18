const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { User: userMock } = require('./mock/models');
const server = require('../api/app');
const { User } = require('../models');
const { expect } = require('chai');

chai.use(chaiHttp);

describe('/api/users/:userId', () => {
  before(() => {
    sinon.stub(User, 'findByPk').callsFake(userMock.findByPk);
  });

  after(() => {
    User.findByPk.restore();
  });

  describe('GET /api/users/:userId', () => {
    let response;

    describe('If no token is provided in the request headers', () => {
      before(async () => {
        response = await chai.request(server).get('/api/users/1');
      });

      it('The response status code must be 401', () => {
        expect(response).to.have.status(401);
      });

      it('The response body must be an object', () => {
        expect(response.body).to.be.an('object');
      });

      it('The response body must contain a property "message"', () => {
        expect(response.body).to.have.property('message');
      });

      it('The property must have the value "Token não encontrado ou informado"', () => {
        expect(response.body.message).to.be.equal(
          'Token não encontrado ou informado'
        );
      });
    });
  });
});
