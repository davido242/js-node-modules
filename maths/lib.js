function add(x, y) {
    return x + y;
}

function subtract(a, b) {
    return a - b
}

const num = 33;

// export add function as a module

module.exports = { add, subtract, num };