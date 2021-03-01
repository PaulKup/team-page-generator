const Employee = require('../lib/Employee');

const { test, expect } = require('@jest/globals');

test("creates player object with properties and methods", () => {
    const mike = new Employee('mike', '2', 'laskdf');

    expect(mike.name).toBe('mike');
    expect(mike.id).toBe('2');
    expect(mike.email).toBe('laskdf');

    expect(mike.getName()).toEqual('mike');
    expect(mike.getId()).toBe('2');
    expect(mike.getEmail()).toBe('laskdf');
    expect(mike.getRole()).toBe('employee');
})