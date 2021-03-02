const Engineer = require('../lib/Engineer');
const { test, expect } = require('@jest/globals');

test('creates engineer object with inherited properties and new properties', () => {
    // name, id, email, github
    const mike = new Engineer('mike', '2', 'asdf', 'github');

    expect(mike.name).toBe('mike');
    expect(mike.id).toBe('2');
    expect(mike.email).toBe('asdf');
    expect(mike.github).toBe('github');

    expect(mike.getName()).toEqual('mike');
    expect(mike.getId()).toBe('2');
    expect(mike.getEmail()).toBe('asdf');
    expect(mike.getGithub()).toBe('github.com/github');
    expect(mike.getRole()).toBe('Engineer');
})