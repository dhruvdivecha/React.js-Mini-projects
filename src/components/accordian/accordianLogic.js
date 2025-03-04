export const accordionData = [
    {
      title: "splice method",
      syntax: "array.splice(startIndex, deleteCount, item1, item2, ...);",
      description:
        "startIndex: Where in the array you start making changes.\n" +
        "deleteCount: How many items to remove starting at that position.\n" +
        "item1, item2, ...: Items to insert at that position."
    },
    {
      title: "filter method",
      syntax: "array.filter((element, index, array) => { ... });",
      description:
        "Iterates over each element in an array and returns a new array containing only the elements for which the callback returns true.\n" +
        "element: The current element (often ignored using '_' if not needed).\n" +
        "index: The index of the current element.\n" +
        "array: The array being processed."
    },
    {
      title: "map method",
      syntax: "array.map((element, index, array) => { ... });",
      description:
        "Creates a new array with the results of calling a provided function on every element in the original array.\n" +
        "element: The current element.\n" +
        "index: The index of the current element.\n" +
        "array: The array being processed."
    },
    {
      title: "reduce method",
      syntax: "array.reduce((accumulator, currentValue, index, array) => { ... }, initialValue);",
      description:
        "Executes a reducer function on each element of the array, resulting in a single output value.\n" +
        "accumulator: The accumulated value returned from the last invocation of the callback, or the initialValue if provided.\n" +
        "currentValue: The current element being processed.\n" +
        "index: The current index of the element being processed.\n" +
        "array: The original array."
    },
    {
      title: "forEach method",
      syntax: "array.forEach((element, index, array) => { ... });",
      description:
        "Executes a provided function once for each array element. Unlike map, it does not return a new array."
    },
    {
      title: "find method",
      syntax: "array.find((element, index, array) => { ... });",
      description:
        "Returns the first element in the array that satisfies the provided testing function.\n" +
        "If no element satisfies the testing function, undefined is returned."
    },
    {
      title: "includes method",
      syntax: "array.includes(searchElement, fromIndex);",
      description:
        "Determines whether an array includes a certain element, returning true or false.\n" +
        "searchElement: The element to search for.\n" +
        "fromIndex: The position in the array at which to start the search."
    },
    {
      title: "slice method",
      syntax: "array.slice(beginIndex, endIndex);",
      description:
        "Returns a shallow copy of a portion of an array into a new array object.\n" +
        "beginIndex: Zero-based index at which to begin extraction.\n" +
        "endIndex: Zero-based index before which to end extraction (not included)."
    },
    {
      title: "sort method",
      syntax: "array.sort((a, b) => { ... });",
      description:
        "Sorts the elements of an array in place and returns the sorted array.\n" +
        "The compare function (a, b) determines the sort order; if omitted, elements are converted to strings and sorted according to each character's Unicode code point value."
    }
  ];
  