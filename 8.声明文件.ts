/// <reference path='./jQuery.d.ts' /> //方法一
// 方法二是在tsconfig.json中定义include为'**/*' 这样全局就可以引入声明的$
// declare var $: (selector: string) => any
$('test')