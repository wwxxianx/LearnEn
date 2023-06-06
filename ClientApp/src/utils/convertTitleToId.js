export function convertTitleToId(title) {
    var lowerCaseTitle = title.toLowerCase();
    var id = lowerCaseTitle.replace(/\s+/g, '-');

    return id;
}
