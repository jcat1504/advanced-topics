function sortChar(s){
    let content = [];
    s.sort.content.push(s);
    return content;
}

function permutation(s, t) {
    if (s.length !== t.length) {
        return false
    }
    return sortChar(s).equals(sortChar(t))
}