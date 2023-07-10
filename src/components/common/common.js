// import React from "react";
// import "react-notifications-component/dist/theme.css";
import { toast } from "react-toastify";

class Common {
  static notify() {
    toast.dismiss();

    this.error = (list) => {
      setTimeout(() => {
        list.forEach((value) => {
          toast.error(value);
        });
      }, 500);
    };

    this.success = (list) => {
      setTimeout(() => {
        list.forEach((value) => {
          toast.success(value);
        });
      }, 500);
    };

    this.warn = (list) => {
      setTimeout(() => {
        list.forEach((value) => {
          toast.warn(value);
        });
      }, 500);
    };
    return this;
  }

  static setLoaderRef(loaderIns) {
    this.loaderIns = loaderIns;
  }

  static getLoaderRef() {
    return this.loaderIns;
  }

  static showLoader() {
    return this.loaderIns ? this.loaderIns.showLoader() : "";
  }
  static hideLoader() {
    return this.loaderIns ? this.loaderIns.hideLoader() : "";
  }

 
}

export default Common;
