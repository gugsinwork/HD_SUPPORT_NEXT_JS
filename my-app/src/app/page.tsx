import Header from "@/components/ui/header";
import Content from "@/components/ui/content";
import TextContent from "@/components/ui/textcontent";
import Cards from "@/components/ui/cards"
export default function Home() {
  return (
    <div className="Home bg-slate-950 h-[100vw] w-[100%] items-center flex-col justify-center">
      <Header />
        <Content />
          <TextContent />
          <Cards />
    </div>
  );
}
