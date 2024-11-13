import { Drawer } from "vaul";
import BurgerIcon from "./BurgerIcon";

const BurgerMenu = ({ active, setActive, children }) => {
  return (
    <Drawer.Root direction="right" open={active}>
      <Drawer.Trigger asChild onClick={() => setActive((prev) => !prev)}>
        <div>
          <BurgerIcon active={active} />
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay
          asChild
          onClick={() => setActive((prev) => !prev)}
          className="fixed inset-0 bg-black/40"
        />
        <Drawer.Content className="bg-primary5/70  z-30 backdrop-blur-[10px]  flex flex-col justify-center items-center rounded-tl-3xl
         rounded-bl-3xl h-full w-[320px] fixed bottom-0 right-0">
          <div className="mt-52 p-4 flex-1 h-full">
            <div className="max-w-md mx-auto ml-6">
              <Drawer.Title className="font-semibold text-4xl w-fit mb-10 text-center text-white">
                Menu
              </Drawer.Title>
              <Drawer.Description />
              <div className="flex justify-around font-customFont text-white py-6 w-fit text-3xl bg-secondary1 flex-col space-y-5">
                {children}
              </div>
            </div>
            {active && (
              <button
                type="button"
                onClick={() => setActive((prev) => !prev)}
                className="fixed border w-16 h-16 bg-red-300 rounded-full right-7 top-24 opacity-0"
              />
            )}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default BurgerMenu;
