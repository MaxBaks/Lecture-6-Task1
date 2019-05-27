const GetSortedProps = (newChar, propsForSort) => {
  const sortedProps = [];
  let unorderedProps = [];

  for (let i = 0; i < propsForSort.length; i += 1) {
    for (const prop in newChar) {
      if (prop === propsForSort[i]) {
        sortedProps.push({ key: prop, value: newChar[prop] });
      }
    }
  }

  for (const prop in newChar) {
    if (!propsForSort.includes(prop)) {
      unorderedProps.push({ key: prop, value: newChar[prop] });
    }
  }

  unorderedProps = unorderedProps.sort((a, b) => a.key.localeCompare(b.key));

  for (let i = 0; i < unorderedProps.length; i += 1) {
    for (const prop in newChar) {
      if (prop === unorderedProps[i].key) {
        sortedProps.push({ key: prop, value: newChar[prop] });
      }
    }
  }

  return sortedProps;
};

export default GetSortedProps;
