const getLat = require('../src/Components/location-api/testbase');
const axios = require('axios');

jest.mock('axios');

it('returns the second lat value in the array', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        lat: '61.33444047153733'
      },
      {
        userId: 1,
        id: 2,
        lat: '61.33444047153701'
      }
    ]
  });

  const lat = await getLat();
  expect(lat).toEqual('61.33444047153701');
});