import BreadCrumbs from "@/components/common/BreadCrumbs";
import AboutBanner from "@/components/about-page/AboutBanner";
import MissionBlock from "@/components/about-page/MissionBlock";
import AboutLaboratoryBlock from "@/components/about-page/AboutLaboratoryBlock";
import TeamBlock from "@/components/about-page/TeamBlock";
import ReadyToPartnerBlock from "@/components/about-page/ReadyToPartnerBlock";

export default function AboutPage() {

    return (
        <>
            <BreadCrumbs page={'About Page'}/>
            <AboutBanner/>
            <MissionBlock/>
            <AboutLaboratoryBlock/>
            <TeamBlock/>
            <ReadyToPartnerBlock/>
        </>
    )
}