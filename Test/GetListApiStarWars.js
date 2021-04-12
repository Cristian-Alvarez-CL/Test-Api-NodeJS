
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
            .get('/api/')
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
            .get('/api/')
            .end(function (err, res) {
                //console.log(res.body);
                assert.equal(res.body.people, "http://swapi.dev/api/people/");            
                assert.equal(res.body.planets,"http://swapi.dev/api/planets/");
                assert.equal(res.body.films,"http://swapi.dev/api/films/");
                assert.equal(res.body.species, "http://swapi.dev/api/species/");
                assert.equal(res.body.vehicles, "http://swapi.dev/api/vehicles/");
                assert.equal(res.body.starships, "http://swapi.dev/api/starships/");
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
            .get('/ap/')
            .end(function (err, res) {
                expect(res).to.have.status(404);         
                done();
            });
    });
});