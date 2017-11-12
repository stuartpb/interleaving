# interleaving

JavaScript functions to combine N arrays of any size, distributing items evenly

The `interleaving` module exposes two functions:

## interleaving.justify(array1, array2, ...)

Distributes items based on their distance from the final item of the source array. Items from the longest arrays will both appear and finish first, while items from the shortest arrays will both appear and finish last.

Points of equal distance will be placed by the order the arrays are specified, so it is recommended to sort longest arrays first if you wish for this principle to remain consistent.

```
> console.log(interleaving.justify(
>>   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
>>   ['1', '2', '3', '4'],
>>   ['X', 'Y', 'Z']));

[ 'a', 'b', '1', 'X', 'c', 'd', '2', 'e', 'Y', 'f', '3', 'g', 'h', '4', 'Z' ]
```

## interleaving.center(array1, array2, ...)

Distributes items based on their distance along the length of the source array. Items from the longest arrays will appear first and finish last, while items from the shortest arrays will appear last and finish first.

Points of equal distance will be placed by the order the arrays are specified.

```
> console.log(interleaving.center(
>>   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
>>   ['1', '2', '3', '4'],
>>   ['X', 'Y', 'Z']));

[ 'a', '1', 'b', 'X', 'c', '2', 'd', 'Y', 'e', '3', 'f', 'Z', 'g', '4', 'h' ]
```
