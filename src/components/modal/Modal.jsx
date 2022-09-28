import * as Dialog from "@radix-ui/react-dialog";
import {
  Content,
  Trigger,
  Overlay,
  Close,
  Iframe,
  IconComp,
  TrailerContainer,
} from "./modal.style";

export const DialogDemo = (props) => (
  <Dialog.Root>
    <Trigger asChild>
      <img src={props.vidImg} alt="trailer picture" />
    </Trigger>
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>X</Close>
        <TrailerContainer>
          <Iframe
            src={`${props.trailer}\\${props.youId}`}
            size={{
              "@initial": "1",
              "@bp1": "3",
              "@bp2": "2",
              "@bp5": "3",
              "@bp6": "4",
            }}
          />
        </TrailerContainer>
      </Content>
    </Dialog.Portal>
  </Dialog.Root>
);
