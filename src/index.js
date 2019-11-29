//主流程入口文件

let apply = (action, ...args) => {
    //babel-env
    require(`./${action}`)(...args);
};

export default apply;