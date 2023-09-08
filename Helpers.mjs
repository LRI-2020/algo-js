function isNullOrEmpty(str){
    return str === '' || str === null || str === undefined || str.trim().length === 0;
}

export {isNullOrEmpty};
