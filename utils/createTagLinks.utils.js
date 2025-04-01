function createTagLinks(tags, url) {
  const formattedTags = [];
  tags.map((tag) => {
    formattedTags.push({
      ...tag,
      link: `/?${url}&tag=${tag.slug}`,
    });
  });
  return formattedTags;
}

module.exports = createTagLinks;
