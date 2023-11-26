export function markupOptionsCategory(arrCategories) {
  const uniqArr = new Set();

  arrCategories.map(elem => {
    uniqArr.add(elem.replaceAll('_', ' '));
  });

  return (
    Array.from(uniqArr)
      .map(elem => {
        return `<option value=${elem.replaceAll(' ', '_')}>${elem}</option>`;
      })
      .join('') + `<option value="">Show All</option>`
  );
}
