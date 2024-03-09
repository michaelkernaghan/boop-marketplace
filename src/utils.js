// src/utils/utils.js

export function fromMicrotezToXTZ(microtez) {
    const xtz = Number(microtez) / 1000000;
    return xtz.toString();
  }
  