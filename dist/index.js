"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var x=u(function(B,p){
var R=require('@stdlib/complex-float64-ctor/dist'),c=require('@stdlib/complex-float64-real/dist'),q=require('@stdlib/complex-float64-imag/dist');function b(e,r){var i=c(e)+c(r),s=q(e)+q(r);return new R(i,s)}p.exports=b
});var m=u(function(D,g){
function h(e,r,i,s,n,t,a){return n[a]=e+i,n[a+t]=r+s,n}g.exports=h
});var w=u(function(E,l){
function j(e,r,i,s,n,t,a,C,v){return a[v]=e[i]+s[t],a[v+C]=e[i+r]+s[t+n],a}l.exports=j
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=x(),k=m(),o=w();y(d,"assign",k);y(d,"strided",o);module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
