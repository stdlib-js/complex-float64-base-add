<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# add

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Add two double-precision complex floating-point numbers.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-base-add@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { assign, strided } from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-base-add@deno/mod.js';
```

#### add( z1, z2 )

Adds two double-precision complex floating-point numbers.

```javascript
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';

var z = new Complex128( -1.5, 2.5 );

var v = add( z, z );
// returns <Complex128>

var re = real( v );
// returns -3.0

var im = imag( v );
// returns 5.0
```

#### add.assign( re1, im1, re2, im2, out, strideOut, offsetOut )

Adds two double-precision complex floating-point numbers and assigns results to a provided output array.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var out = new Float64Array( 2 );
var v = add.assign( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
// returns <Float64Array>[ 3.0, 4.0 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **re1**: real component of the first complex number.
-   **im1**: imaginary component of the first complex number.
-   **re2**: real component of the second complex number.
-   **im2**: imaginary component of the second complex number.
-   **out**: output array.
-   **strideOut**: stride length for `out`.
-   **offsetOut**: starting index for `out`.

#### add.strided( z1, sz1, oz1, z2, sz2, oz2, out, so, oo )

Adds two double-precision complex floating-point numbers stored in real-valued strided array views and assigns results to a provided strided output array.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var z1 = new Float64Array( [ 5.0, 3.0 ] );
var z2 = new Float64Array( [ -2.0, 1.0 ] );
var out = new Float64Array( 2 );

var v = add.strided( z1, 1, 0, z2, 1, 0, out, 1, 0 );
// returns <Float64Array>[ 3.0, 4.0 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **z1**: first complex number strided array view.
-   **sz1**: stride length for `z1`.
-   **oz1**: starting index for `z1`.
-   **z2**: second complex number strided array view.
-   **sz2**: stride length for `z2`.
-   **oz2**: starting index for `z2`.
-   **out**: output array.
-   **so**: stride length for `out`.
-   **oo**: starting index for `out`.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@deno/mod.js';
var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-base-add@deno/mod.js';

var rand = discreteUniform( -50, 50 );

var z1;
var z2;
var z3;
var i;
for ( i = 0; i < 100; i++ ) {
    z1 = new Complex128( rand(), rand() );
    z2 = new Complex128( rand(), rand() );
    z3 = add( z1, z2 );
    console.log( '(%s) + (%s) = %s', z1.toString(), z2.toString(), z3.toString() );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/ops/cdiv`][@stdlib/math/base/ops/cdiv]</span><span class="delimiter">: </span><span class="description">divide two complex numbers.</span>
-   <span class="package-name">[`@stdlib/complex-float64/base/mul`][@stdlib/complex/float64/base/mul]</span><span class="delimiter">: </span><span class="description">multiply two double-precision complex floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/math-base/ops/csub`][@stdlib/math/base/ops/csub]</span><span class="delimiter">: </span><span class="description">subtract two double-precision complex floating-point numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex-float64-base-add.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex-float64-base-add

[test-image]: https://github.com/stdlib-js/complex-float64-base-add/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/complex-float64-base-add/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex-float64-base-add/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex-float64-base-add?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex-float64-base-add.svg
[dependencies-url]: https://david-dm.org/stdlib-js/complex-float64-base-add/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/complex-float64-base-add/tree/deno
[deno-readme]: https://github.com/stdlib-js/complex-float64-base-add/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/complex-float64-base-add/tree/umd
[umd-readme]: https://github.com/stdlib-js/complex-float64-base-add/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/complex-float64-base-add/tree/esm
[esm-readme]: https://github.com/stdlib-js/complex-float64-base-add/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/complex-float64-base-add/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex-float64-base-add/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/ops/cdiv]: https://github.com/stdlib-js/math-base-ops-cdiv/tree/deno

[@stdlib/complex/float64/base/mul]: https://github.com/stdlib-js/complex-float64-base-mul/tree/deno

[@stdlib/math/base/ops/csub]: https://github.com/stdlib-js/math-base-ops-csub/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
