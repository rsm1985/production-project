import {classNames} from 'shared/lib/classNames/classNames';
import {render, screen} from '@testing-library/react';
import {Button} from 'shared/ui';

describe('classNames', () => {
	test('with first param', () => {
		expect(classNames('class')).toBe('class');
	});
	test('with first param and mod', () => {
		expect(classNames('class', {mod1: true})).toBe('class mod1');
	});
	test('with all params', () => {
		expect(classNames('class', {mod1: true}, ['additional-1', 'additional-2'] ))
			.toBe('class mod1 additional-1 additional-2');
	});
	test('with all params and on mod is false', () => {
		expect(classNames('class', {mod1: true, mod2: false}, ['additional-1', 'additional-2'] ))
			.toBe('class mod1 additional-1 additional-2');
	});
});

