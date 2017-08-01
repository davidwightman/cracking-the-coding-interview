const { assert } = require('chai');

const { oneEdit } = require('../1-5');

describe('oneEdit', () => {
	
	it('should return true if you can insert a character to make str1 equal str2', () => {
		assert.isTrue(oneEdit('pae', 'pale'))
	})

	it('should return true if you can remove a character to make str1 equal str2', () => {
		assert.isTrue(oneEdit('pale', 'pae'))
	})

	it('should return true if you can replace a character to make str1 equal str2', () => {
		assert.isTrue(oneEdit('pale', 'page'))
		assert.isFalse(oneEdit('pale', 'paged'))
	})

	it('should return true for equal strings', () => {
		assert.isTrue(oneEdit('pale', 'pale'))
	})

})