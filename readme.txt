null is also object

data types 


primitives : call by value because we change the copy of current data

nor- primitives or refreance type : call by refrance


# javascript in daynmic typed languge because we dont define again and again his data type

string method - split,slice

array method:

slice (start,end): - Not Modified orignal array and not add end parameter last value 

splice (start ,target,add,addEnd...) - Modified the orignal array and add end parameter

array form  method always  take single value if you pass obj they will return empty array

symbol always call with [] square brackets eg obj[text] 


javascript have 3 excuction context


Global Execution Context

Function Execution Context - for function 

Eval Execution Context  - for database like mongoose   

* see snipets in images


**********truthy and falsy value**********

truthy-- all are true  but diffrent one

"0",
"false",
" ",
[],
 {},
 function(){}   

falsy:-
false
0 (zero)
"" or '' (empty string)
null
undefined
NaN (Not a Number)

***** dom manuplation****


in  document tree classname is set but class is visible due to conflictr we write classname in react and if you need to access class in normal script you have to write classname 

eg :- document.getElmentById("test").classname


*** diffrence between textcontent and innertext

in innertext it will return the visible content (like if if some text is hide with style that not show in inner text)

in text content it will give all content text

**********onclick **************

type,timestamp,deafultPrevented,
target,toElement,srcElemnt, currentTarget,
clientX ,clientY ,screenX,screenY
altKey,ctrKey, shiftKey,keyCode


********event propogation****
it has two part
1. event bubbling :-by default we use event bubbling it will go from child to parent
2.event Capturing :- we pass 3 parrameter in addEventListenr  is true and will go parent to child 

some we need to stop bublibng do we use stopPropgation .