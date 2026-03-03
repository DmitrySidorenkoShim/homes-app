import axios from 'axios';

describe('GET /api/locations', () => {
  it('should return all locations', async () => {
    const res = await axios.get('/api/locations');

    expect(res.status).toBe(200);
    expect(res.data).toBeInstanceOf(Array);
    expect(res.data.length).toBe(10);
  });

  it('should return a single location by id', async () => {
    const res = await axios.get('/api/locations/0');

    expect(res.status).toBe(200);
    expect(res.data).toEqual(
      expect.objectContaining({
        id: 0,
        name: 'Acme Fresh Start Housing',
        city: 'Chicago',
        state: 'IL',
      })
    );
  });

  it('should return 404 for non-existent location', async () => {
    try {
      await axios.get('/api/locations/999');
      fail('Expected 404 error');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        expect(error.response?.status).toBe(404);
      }
    }
  });
});
