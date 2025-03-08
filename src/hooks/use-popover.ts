import * as React from "react";

export function usePopover() {
    const anchorRef = React.useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = React.useState<boolean>(false);

    const handleOpen = React.useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = React.useCallback(() => {
        setOpen(false);
    }, []);

    const handleToggle = React.useCallback(() => {
        setOpen((prevState) => !prevState);
    }, []);

    return { anchorRef, handleClose, handleOpen, handleToggle, open };
}
