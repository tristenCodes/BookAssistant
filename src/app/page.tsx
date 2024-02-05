import { ModeToggle } from "@/components/ui/toggle-theme";

export default function Home() {
  return (
    <main>
      <ModeToggle />
      <h1>Book Assistant</h1>
      <p>
        Utilizes the Google Books API to search for books and display details
        about them.
      </p>
    </main>
  );
}
