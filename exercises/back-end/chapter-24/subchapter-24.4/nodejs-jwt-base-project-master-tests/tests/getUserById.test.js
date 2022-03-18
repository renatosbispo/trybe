const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { User: userMock } = require('./mock/models');
const usersMock = require('./mock/models/Users.json');
const server = require('../api/app');
const { User } = require('../models');
const { expect } = require('chai');

chai.use(chaiHttp);

describe('/api/users/:userId', () => {
  before(() => {
    sinon.stub(User, 'findByPk').callsFake(userMock.findByPk);
    sinon.stub(User, 'findOne').callsFake(userMock.findOne);
  });

  after(() => {
    User.findByPk.restore();
    User.findOne.restore();
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

    describe('If the token informed does not match the user being retrieved', () => {
      before(async () => {
        const { id, ...unauthorizedUserLoginInfo } = usersMock[1];

        const incorrectToken = await chai
          .request(server)
          .post('/api/login')
          .send(unauthorizedUserLoginInfo)
          .then(({ body: { token } }) => token);

        response = await chai
          .request(server)
          .get('/api/users/1')
          .set('Authorization', incorrectToken);
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

      it('The property must have the value "Acesso negado"', () => {
        expect(response.body.message).to.be.equal('Acesso negado');
      });
    });

    describe('If the user is authenticated and requesting its own information', () => {
      before(async () => {
        const { id, ...authorizedUserLoginInfo } = usersMock[0];

        const correctToken = await chai
          .request(server)
          .post('/api/login')
          .send(authorizedUserLoginInfo)
          .then(({ body: { token } }) => token);

        response = await chai
          .request(server)
          .get('/api/users/1')
          .set('Authorization', correctToken);
      });

      it('The response status code must be 200', () => {
        expect(response).to.have.status(200);
      });

      it('The response body must be an object', () => {
        expect(response.body).to.be.an('object');
      });

      it('The response body must contain the authenticated user info', () => {
        expect(response.body).to.be.deep.equal(usersMock[0]);
      });
    });
  });
});
