import { useCallback, useEffect } from "react";

export function useKeyboardBinding(keys, onEvent) {

  const cb = useCallback(
    (e) => {
      if (typeof onEvent !== "function") return;

      const _keys = Array.isArray(keys) ? keys : [keys];

      let key = _keys.find((k) => {
        return e.key === k;
      });

      if (key) onEvent(key);
    },
    [keys, onEvent]
  );

  useEffect(() => {
    document.addEventListener("keydown", cb);

    return  () => {
    document.removeEventListener("keydown", cb);
  };
  }, [keys, onEvent, cb])


}
