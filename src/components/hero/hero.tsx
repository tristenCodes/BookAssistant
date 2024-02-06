import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div
      className="text-center flex flex-col justify-center items-center align-middle m-auto"
      style={{ height: "calc(100vh - 76px)", maxWidth: "80ch" }}
    >
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Welcome to Book Assistant
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 mb-8">
        Discover endless reading possibilities with our app, your personal
        gateway to the vast collection of Google Books. Effortlessly search,
        explore, and save your favorite books to a custom library tailored just
        for you. Dive into the world of literature and knowledge, making your
        reading journey more organized and accessible than ever.
      </p>
      <div className="flex gap-4">
        <Button style={{ width: "100px" }}>Sign Up</Button>
        <Button style={{ width: "100px" }} variant={"ghost"}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Hero;
