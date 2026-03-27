import { apiClient } from './client';

describe('apiClient', () => {
  it('should be an axios instance', () => {
    expect(apiClient).toBeDefined();
    expect(typeof apiClient.get).toBe('function');
    expect(typeof apiClient.post).toBe('function');
  });

  it('should have the correct base URL', () => {
    expect(apiClient.defaults.baseURL).toBe('https://valnapi-production.up.railway.app');
  });

  it('should have JSON content type header', () => {
    expect(apiClient.defaults.headers['Content-Type']).toBe('application/json');
  });

  it('should have a 10 second timeout', () => {
    expect(apiClient.defaults.timeout).toBe(10000);
  });
});
