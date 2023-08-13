const state1 = { username: 'john', point: 100, loading: true };


const stateNew = {
    loading: false,
    point: 75,
    success: true
}

const object = {};

Object.assign(object , state1 , stateNew);



console.log(object);