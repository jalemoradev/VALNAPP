import React from 'react';

describe('App', () => {
  it('should export a valid component', () => {
    const App = require('../App').default;
    expect(App).toBeDefined();
    expect(typeof App).toBe('function');
  });
});
