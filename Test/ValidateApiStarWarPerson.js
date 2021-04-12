
let chai = require('chai');
let chaiHttp = require('chai-http');
let assert    = require("chai").assert;
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'https://swapi.dev';

/**
 * Valida Status code 200
 */
describe('1 Validar Codigo de respuesta:', () => {
    it('Estatus Code 200', (done) => {
        chai.request(url)
            .get('/api/people/')
            .end(function (err, res) {
                //console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
});

/**
 * Valida contenido del respose
 */
describe('2 Validar contenido de respuesta:', () => {
    it('Response', (done) => {
        chai.request(url)
            .get('/api/people/')
            .end(function (err, res) {
                //console.log(res.body);
                assert.equal(res.body.count, "82");            
                done();
            });
    });
});

/**
 * Valida Status code con Path erroneo
 */
describe('3 Validar respuesta con path erroneo:', () => {
    it('Response', (done) => {
        chai.request(url)
            .get('/api/peopl/')
            .end(function (err, res) {
                expect(res).to.have.status(404);         
                done();
            });
    });
});

/**
 * Valida Status code con Path erroneo
 */
describe('4 Validar path con numeracion fuera de rango:', () => {
    it('Response', (done) => {
        chai.request(url)
            .get('/api/peopl/1000000')
            .end(function (err, res) {
                expect(res).to.have.status(404);         
                done();
            });
    });
});

/**
 * Valida Status code con Path erroneo
 */
describe('5 Validar path con dato letra:', () => {
    it('Response', (done) => {
        chai.request(url)
            .get('/api/peopl/a')
            .end(function (err, res) {
                expect(res).to.have.status(404);         
                done();
            });
    });
});