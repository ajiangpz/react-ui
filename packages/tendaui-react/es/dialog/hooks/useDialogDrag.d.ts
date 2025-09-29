import { RefObject } from 'react';
interface DialogDragProps {
    dialogCardRef: RefObject<HTMLDivElement | null>;
    canDraggable?: boolean;
}
declare const useDialogDrag: (props: DialogDragProps) => void;
export default useDialogDrag;
