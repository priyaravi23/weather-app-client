import {Intent, Position, Toaster} from "@blueprintjs/core";

/** Singleton toaster instance. Create separate instances for different options. */
export const AppToaster = Toaster.create({
    className: "app-toaster",
    position: Position.TOP,
});

export const showSuccessToast = message => AppToaster.show({
    message,
    intent: Intent.SUCCESS
});

export const showErrorToast = message => AppToaster.show({
    message,
    intent: Intent.DANGER
});

export const showLongErrorToast = message => AppToaster.show({
    message,
    intent: Intent.DANGER,
    timeout: 60000
});

export const showWarningToast = message => AppToaster.show({
    message,
    intent: Intent.WARNING
});