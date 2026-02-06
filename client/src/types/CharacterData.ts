import type { StatsData } from './StatsData';
import type { CustomizationData } from './CustomizationData'

export interface CharacterData {
    id: number;
    name: string;
    body_type: string;
    species: string;
    class: string;
    stats: StatsData;
    customization: CustomizationData;
}

