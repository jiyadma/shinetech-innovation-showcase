import alTurki from "@/assets/clients/al-turki.webp.asset.json";
import galfar from "@/assets/clients/galfar.webp.asset.json";
import muscatEng from "@/assets/clients/muscat-engineering.webp.asset.json";
import omanLng from "@/assets/clients/oman-lng.webp.asset.json";
import petrofac from "@/assets/clients/petrofac.webp.asset.json";
import seehAlSarya from "@/assets/clients/seeh-al-sarya.webp.asset.json";
import shell from "@/assets/clients/shell.webp.asset.json";
import sts from "@/assets/clients/sts.webp.asset.json";
import tecnicas from "@/assets/clients/tecnicas-reunidas.webp.asset.json";
import worley from "@/assets/clients/worley.webp.asset.json";

// Client logos shown on the home page strip and the Our Clients page.
export const clients = [
  { name: "Shell", sector: "Integrated Energy", logo: shell.url },
  { name: "Oman LNG", sector: "Liquefied Natural Gas", logo: omanLng.url },
  { name: "Petrofac", sector: "Energy Services", logo: petrofac.url },
  { name: "Worley", sector: "Engineering & EPC", logo: worley.url },
  { name: "Técnicas Reunidas", sector: "Engineering & EPC", logo: tecnicas.url },
  { name: "Galfar", sector: "EPC Contractor", logo: galfar.url },
  { name: "Al Turki", sector: "Construction & EPC", logo: alTurki.url },
  { name: "Muscat Engineering Consultancy", sector: "Engineering Consultancy", logo: muscatEng.url },
  { name: "Seeh Al Sarya Engineering", sector: "Oilfield Engineering", logo: seehAlSarya.url },
  { name: "STS", sector: "Industrial Services", logo: sts.url },
] as const;
