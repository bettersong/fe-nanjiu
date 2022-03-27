function toRGB(val) {
    var reg1 = /^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,
        reg2 = /^#([0-9A-F])([0-9A-F])([0-9A-F])$/i,
        reg3 = /[0-9A-F]{2}/g,
        m;
    if(reg2.test(val)) {
        val = val.replace(reg2, "#$1$1$2$2$3$3");
    }
    if(reg1.test(val)) {
        m  = val.match(reg3);
        val = `rgb(${[parseInt(m[0], 16),parseInt(m[1], 16),parseInt(m[2], 16)].join(',')})`
    }
    return val;
}

console.log(toRGB('#0000FF'))