/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isIteratorLike = require( '@stdlib/assert-is-iterator-like' );
var pkg = require( './../package.json' ).name;
var stridedarray2iterator = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var iter;
	var N;
	var i;

	values = [ 1, 2, 3, 4 ];
	N = values.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		values[ 0 ] = i;
		iter = stridedarray2iterator( N, values, 1, 0 );
		if ( typeof iter !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isIteratorLike( iter ) ) {
		b.fail( 'should return an iterator protocol-compliant object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iteration', function benchmark( b ) {
	var values;
	var iter;
	var N;
	var z;
	var i;

	values = [];
	values.length = b.iterations;
	N = values.length;

	iter = stridedarray2iterator( N, values, 1, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = iter.next().value;
		if ( z !== void 0 ) {
			b.fail( 'should be undefined' );
		}
	}
	b.toc();
	if ( z !== void 0 ) {
		b.fail( 'should be undefined' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iteration,map', function benchmark( b ) {
	var values;
	var iter;
	var N;
	var z;
	var i;

	values = [];
	values.length = b.iterations;
	N = values.length;

	iter = stridedarray2iterator( N, values, 1, 0, transform );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = iter.next().value;
		if ( isnan( z ) ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not be NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function transform( v, i ) {
		return i;
	}
});
