import { StaticImageData } from "next/image";
import { LocalizedText } from "@/types/localizedText";
import Baker from "@/assets/baker.png";
import Breeder from "@/assets/breeder.png";
import Gardeners from "@/assets/gardeners.png";

export interface IPartner {
  title: LocalizedText;
  name: string;
  image: StaticImageData;
  description: LocalizedText;
}

export const partners: IPartner[] = [
  {
    title: {
      en: "The Baker",
      nl: "De Bakker",
    },
    name: "Jaap",
    image: Baker,
    description: {
      en: "Our breads are supplied by a specialist baker based just a few blocks from our restaurant. He uses locally sourced ingredients and traditional techniques to produce fresh, artisan breads that perfectly complement our dishes.",
      nl: "Onze broden worden geleverd door een gespecialiseerde bakker, gevestigd op slechts een paar straten afstand van ons restaurant. Hij gebruikt lokaal ingekochte ingrediënten en traditionele technieken om verse, ambachtelijke broden te produceren die perfect passen bij onze gerechten.",
    },
  },
  {
    title: {
      en: "The Market Gardeners",
      nl: "De Markttuinbouwers",
    },
    name: "Hilda & Sebastiaan",
    image: Gardeners,
    description: {
      en: "The vast majority of our fruit and vegetables come from a couple of local market gardeners. They grow their produce according to sustainable practices, ensuring that each item is grown with care and attention to both quality and the environment.",
      nl: "Het overgrote deel van ons fruit en onze groenten komt van een paar lokale markttuinbouwers. Zij telen hun producten volgens duurzame methoden, zodat elk item met zorg en aandacht voor zowel kwaliteit als het milieu wordt gekweekt.",
    },
  },
  {
    title: {
      en: "The Livestock Breeder",
      nl: "De Veehouder",
    },
    name: "Willem",
    image: Breeder,
    description: {
      en: "Our meats, eggs, and dairy products are provided by a local livestock breeder. With a focus on ethical farming and fair compensation, he ensures that every product meets our rigorous standards while supporting responsible agricultural practices.",
      nl: "Ons vlees, onze eieren en zuivelproducten worden geleverd door een lokale veehouder. Met een focus op ethische landbouw en eerlijke beloning zorgt hij ervoor dat elk product voldoet aan onze strenge normen, terwijl hij verantwoordelijke landbouwpraktijken ondersteunt.",
    },
  },
];
