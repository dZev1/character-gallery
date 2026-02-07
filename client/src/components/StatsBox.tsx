import { type StatsProps } from './CharacterCard'

export function StatsBox({ data }: StatsProps) {
    return (
        <div className='text-left mb-2 leading-[1.1]'>
            <span className='block text-[1.4rem] font-bold uppercase'>
                STATS
            </span>
            <div className='flex justify-start gap-5 p-0'>
                <div className='flex text-left uppercase flex-col gap-1'>
                    <span className='text-[1rem]'>
                        <strong>STR</strong> {data.strength}
                    </span>

                    <span className='text-[1rem]'>
                        <strong>DEX</strong> {data.dexterity}
                    </span>

                    <span className='text-[1rem]'>
                        <strong>CON</strong> {data.constitution}
                    </span>

                </div>
                <div className='flex text-left uppercase flex-col gap-1'>
                    <span className='text-[1rem]'>
                        <strong>INT</strong> {data.intelligence}
                    </span>
                    <span className='text-[1rem]'>
                        <strong>WIS</strong> {data.wisdom}
                    </span>
                    <span className='text-[1rem]'>
                        <strong>CHR</strong> {data.charisma}
                    </span>
                </div>
            </div>
        </div>
    );
}
