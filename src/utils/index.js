export const processKids = (kids) => {
  if(!kids) return {};
  const kidsKeys = Object.keys(kids);
  const title = kidsKeys.length ? kidsKeys[0] : null;
  const type = title === 'has_relatives' ? 'relatives' : 'phones';
  const haveKids = kidsKeys.length && kids[title].records ? kids[title].records.length !== 0 : false;
  const ids = haveKids ? kids[title].records : null;

  return {
    title,
    type,
    haveKids,
    ids,
  }
}