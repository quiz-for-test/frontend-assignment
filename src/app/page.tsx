import Lists from "@/components/Lists";
import SectionFlex from "@/components/SectionFlex";
import SelectedList from "@/components/SelectedList";

export default function Home() {
  return (
    <div>
      <SectionFlex>
        <div className="flex-1">
          <Lists />
        </div>
        <div className="flex-1">
          <SelectedList type="Vegetable" />
        </div>
        <div className="flex-1">
          <SelectedList type="Fruit" />
        </div>
      </SectionFlex>
    </div>
  );
}
