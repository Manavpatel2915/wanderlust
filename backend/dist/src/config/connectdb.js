import mongodbconnect from './mongodbconnect';
import sqldbconnect from './sqldbconnnect';
const connectdb = (() => {
    mongodbconnect();
    // sqldbconnect;
});
export default connectdb;
//# sourceMappingURL=connectdb.js.map