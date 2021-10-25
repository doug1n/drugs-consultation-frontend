const node = document.getElementsByTagName('ul')[1].children;

const fn = (node) => {
  if (!node) return [];

  const x = [];

  for (let i = 0; i < node.length; i += 1) {
    const desc = node[i].querySelector(
      'div.views-field.views-field-name > span > a'
    );

    if (desc)
      x.push({
        id: desc.text.split(' - ')[0],
        description: desc.text,
        childrens: fn(
          node[i].querySelector('.item-list')?.children?.[0]?.children
        ),
      });
  }

  return x;
};

const x = fn(node);
console.log(JSON.stringify(x));