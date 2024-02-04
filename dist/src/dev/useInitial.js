import { useState } from "react";
export var useInitial = function () {
    var _a = useState({
        loading: false,
        error: false,
    }), status = _a[0], setStatus = _a[1];
    /*
      Implement hook functionality here.
      If you need to execute async operation, set loading to true and when it's over, set loading to false.
      If you caught some errors, set error status to true.
      Initial hook is considered to be successfully completed if it will return {loading: false, error: false}.
    */
    return status;
};
