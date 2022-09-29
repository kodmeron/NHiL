const getLat = require('../src/Components/location-api/testbase');


it('returns the second lat value in the array', async () => {
  const lat = await getLat();
  expect(lat).toEqual(59.33422047153669);
});