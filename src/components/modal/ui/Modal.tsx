import {
  FC,
  useState,
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useRef,
  MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import clsx from "classnames";
import cl from "./Modal.module.scss";
import { useIsMobile } from "../../../app/hooks/useIsMobile";

interface IProps {
  Trigger?: ReactElement;
  children:
    | ReactElement
    | ReactElement[]
    | ((onClose: () => void) => ReactElement);
  closeOnBackDropClick?: boolean;
  isCloseBtnHidden?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  width?: string;
  isOpen?: boolean;
}

export const Modal: FC<IProps> = ({
  Trigger,
  isCloseBtnHidden,
  onClose,
  onOpen,
  children,
  closeOnBackDropClick,
  isOpen,
  width,
}) => {
  const isMobile = useIsMobile();

  const containerRef = useRef(null);

  const [isOpenLocal, setIsOpenLocal] = useState(false);

  const onPopupClose = () => {
    document.body.classList.remove("modal-open");
    setIsOpenLocal(false);
    onClose?.();
  };

  const onPopupOpen = () => {
    document.body.classList.add("modal-open");
    setIsOpenLocal(true);
    onOpen?.();
  };

  const closePopupOnOutsideClick = (e: MouseEvent) => {
    if (!closeOnBackDropClick) return;
    if (e?.target !== containerRef.current) return;
    onPopupClose();
  };

  const TriggerWithProps = Trigger ? (
    Children.map(Trigger, (child: ReactElement) => {
      if (isValidElement(child)) {
        return cloneElement(child as ReactElement<any>, { onClick: onPopupOpen, });
      }
      return child;
    })
  ) : (
    <></>
  );

  return (
    <>
      {TriggerWithProps}
      {(isOpen || isOpenLocal) &&
        createPortal(
          <div
            className={cl.outside_wrap}
            ref={containerRef}
            onClick={closePopupOnOutsideClick}
          >
            <div>
              <div
                className={clsx(cl.inside_wrap, isMobile && cl.is_mobile)}
                style={width ? { width } : undefined}
              >
                {!isCloseBtnHidden && (
                  <button
                    className={cl.close_btn}
                    type="button"
                    onClick={onPopupClose}
                  >
                    <img
                      src="/cross.svg"
                      alt="img"
                    />
                  </button>
                )}
                {typeof children === "function"
                  ? children(onPopupClose)
                  : children}
              </div>
            </div>
          </div>,
          document.getElementById("root") as HTMLDivElement,
        )}
    </>
  );
};
