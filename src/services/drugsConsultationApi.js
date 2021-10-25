import axios from 'axios';

export async function getDrugs(query = '') {
  const flat = (list) => {
    let f = [];

    list.forEach((element) => {
      f.push({
        id: element.id,
        description: element.description,
        isDrug: element.isDrug ?? false,
      });

      if (element.childrens) {
        f = [...f, ...flat(element.childrens)];
      }
    });

    return f;
  };

  const response = await axios.get('http://192.168.0.25:3000/atc');

  return flat(response.data).filter(
    (el) => el.isDrug && el.description.includes(query)
  );
}

export async function getAtcs(parent = '') {
  const flat = (list) => {
    let f = [];

    list.forEach((element) => {
      f.push({
        id: element.id,
        description: element.description,
        isDrug: element.isDrug ?? false,
        childrens: element.childrens,
      });

      if (element.childrens) {
        f = [...f, ...flat(element.childrens)];
      }
    });

    return f;
  };

  const response = await axios.get('http://192.168.0.25:3000/atc');

  return parent === ''
    ? flat(response.data).filter((el) => el.id.length === 1)
    : flat(response.data)
        .filter((el) => el.id === parent)
        .shift().childrens;
}
