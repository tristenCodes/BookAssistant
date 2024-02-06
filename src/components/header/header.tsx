import { ModeToggle } from "../ui/toggle-theme";

const Header = () => {
  return (
    <section className="w-full bg-secondary">
      <div className="flex items-center justify-between max-screen-width py-4">
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Book Assistant
        </h1>
        <ModeToggle />
      </div>
    </section>
  );
};

export default Header;
