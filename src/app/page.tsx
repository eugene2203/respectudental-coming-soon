import MainBanner from "@/components/main-page/MainBanner";
import MainLaboratoryBlock from "@/components/main-page/MainLaboratoryBlock";
import AreasOfExpertiseBlock from "@/components/main-page/AreasOfExpertiseBlock";
import TechnologiesAndMaterials from "@/components/main-page/TechnologiesAndMaterials";

export default function Home() {

  return (
      <>
        <MainBanner/>
        <MainLaboratoryBlock/>
        <AreasOfExpertiseBlock/>
        <TechnologiesAndMaterials/>
      </>
  )
}