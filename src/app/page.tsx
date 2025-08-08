import Header from "@/components/Header";
import Editor from "@/components/Editor";
import List from "@/components/List";

export default function Home() {
  return (
    <main className="animate-fade-in w-full max-w-lg mx-auto flex flex-col gap-4 p-4">
      <Header />
      <Editor />
      <List />
    </main>
  );
}
