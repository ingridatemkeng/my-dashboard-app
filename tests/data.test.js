const request = require('supertest');
const app = require('../backend/server');
const mongoose = require('mongoose');
const Data = require('../backend/models/Data');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/test_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

afterEach(async () => {
  await Data.deleteMany({});
});

describe('GET /api/data', () => {
  it('should return all data', async () => {
    const data = new Data({ name: 'abc', value: 12 });
    await data.save();

    const response = await request(app).get('/api/data');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].name).toBe('abc');
    expect(response.body[0].value).toBe(12);
  });
});

describe('POST /api/data', () => {
  it('should create a new data entry', async () => {
    const response = await request(app)
      .post('/api/data')
      .send({ name: 'abc', value: 12 });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('abc');
    expect(response.body.value).toBe(12);

    const data = await Data.find();
    expect(data.length).toBe(1);
    expect(data[0].name).toBe('abc');
    expect(data[0].value).toBe(12);
  });
});

// describe('DELETE /api/data/:id', () => {
//   it('should delete a data entry', async () => {
//     const data = new Data({ name: 'Test', value: 123 });
//     await data.save();

//     const response = await request(app).delete(`/api/data/${data._id}`);
//     expect(response.status).toBe(200);
//     expect(response.body.message).toBe('Data deleted');

//     const remainingData = await Data.find();
//     expect(remainingData.length).toBe(0);
//   });
// });
