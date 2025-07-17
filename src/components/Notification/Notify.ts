// toast.ts
type ToastType = "default" | "success" | "error" | "info" | "warning";

type ToastMessage = {
  id: string;
  type: ToastType;
  message: string;
};

let addToast: (toast: ToastMessage) => void = () => {};

export function toast(message: string, type: ToastType = "default") {

  addToast({
    id: crypto.randomUUID(),
    message,
    type,
  });
}

export function registerToastHandler(cb: typeof addToast) {
  addToast = cb;
}
