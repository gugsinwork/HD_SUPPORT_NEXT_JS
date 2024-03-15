import Header from "@/components/ui/header";
import Content from "@/components/ui/content";
import TextContent from "@/components/ui/textcontent";
export default function Home() {
  return (
    <div className="Home bg-slate-100 h-[100vw] w-[100%] items-center flex-col justify-center">
      <Header />
        <Content />
          <TextContent />
    </div>
  );
}
