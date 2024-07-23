import config from './config/index.js'; 


const mode = process.env.MODE || "base";
const useConfig = config[mode];
console.log("use config:", useConfig);
export default useConfig;
/*
 * mode:
 *   base: base config
 *   dev: dev config
 *   prod: prod config
 */