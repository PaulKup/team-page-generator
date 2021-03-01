const Intern = require('../lib/Intern');
const { test, expect } = require('@jest/globals');

test('creates intern object with inherited properties and new properties', () => {
    // name, id, email, school
    const mike = new Intern('mike', '2', 'asdf', 'american samoa');

    expect(mike.name).toBe('mike');
    expect(mike.id).toBe('2');
    expect(mike.email).toBe('asdf');
    expect(mike.school).toBe('american samoa');

    expect(mike.getName()).toEqual('mike');
    expect(mike.getId()).toBe('2');
    expect(mike.getEmail()).toBe('asdf');
    expect(mike.getSchool()).toBe('american samoa');
    expect(mike.getRole()).toBe('Intern');
})