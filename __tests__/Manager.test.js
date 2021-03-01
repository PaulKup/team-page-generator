const Manager = require('../lib/Manager');
const { test, expect } = require('@jest/globals');

test('creates Manager object with inherited properties and new properties', () => {
    // name, id, email, office number
    const mike = new Manager('mike', '2', 'asdf', '1');

    expect(mike.name).toBe('mike');
    expect(mike.id).toBe('2');
    expect(mike.email).toBe('asdf');
    expect(mike.officeNumber).toBe('1');

    expect(mike.getName()).toEqual('mike');
    expect(mike.getId()).toBe('2');
    expect(mike.getEmail()).toBe('asdf');
    expect(mike.getRole()).toBe('Manager');
})