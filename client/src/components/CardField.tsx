import type { FieldData } from "../types/FieldData"

export function CardField({ fieldName, fieldVal }: FieldData) {
    return (
        <div className='text-left mb-2 leading-[1.1]'>
            <span className='block text-[1.4rem] font-bold uppercase'>
                {fieldName}
            </span>
            <span className='text-[0.9rem] capitalize'>
                {fieldVal}
            </span>
        </div>
    )
}