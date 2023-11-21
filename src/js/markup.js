export function selectMarkup(arrCategories) {
  arrCategories.map(elem => {
    console.log(elem);
  });
  return arrCategories
    .map(elem => {
      return `<option value=${elem.replaceAll('&', '%26')}>${elem.replaceAll(
        '&',
        '/'
      )}</option>`;
    })
    .join('');
}

export function catInfoMarkup([
  {
    breeds: [{ name, description }],
    url,
  },
]) {
  return `<img
        class="fit-picture"
        src="${url}"
        alt="${name}"
      />
      <h2 class="title-descrip">${name}</h2>
      <p class="text-descrip">${description}</p>`;
}
