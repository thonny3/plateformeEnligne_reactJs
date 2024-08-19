import React from "react";

export default function Modal({ open, onclose, children }) {
  return (
    <div
      onClick={onclose}
      className={`fixed  inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        style={{ width: "550px" }}
        className={`bg-white rounded-xl  shadow p-6 transition-all ${
          open ? "scale-100" : "scale-125 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
