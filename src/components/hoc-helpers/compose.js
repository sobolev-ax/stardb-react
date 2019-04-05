const Compose = (...funcs) => (comp) => funcs.reduceRight((prevValue, f) => f(prevValue), comp);

export default Compose;
