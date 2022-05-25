function F(a, b) {
    this.a = a;
    this.b = b;
    // const result  new Object();
    // result.a = a;
    // return {a: 1};
}

F.prototype.c = function() {}

const instance = new F(1,2);
console.log(instance instanceof F);
console.log(instance.__proto__ === F.prototype);

function fn(args) {
    if(arg instanceof Array) {
        args.push('value');
    } else {
        args['key'] = 'value';
    }
    console.log(arg);
}

fn([]);