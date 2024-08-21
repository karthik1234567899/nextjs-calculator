import { clsx } from 'clsx';

export default function Button({ label, color, onClick, colSpan = 1, rowSpan = 1, equation, setEquation }: { label: String, color: String, onClick: Function, colSpan?: number, rowSpan?: number, equation: String, setEquation: Function }) {
    return (<button className={clsx(
        `w-full rounded-2xl`,
        {
            'aspect-square': (colSpan == 1 && rowSpan == 1),
            'h-full col-span-2': colSpan == 2,
            'h-full row-span-2': rowSpan == 2,
            'bg-[#7C93C3]': color == "operation",
            'bg-[#838383]': color == "number",
            'bg-[#55679C]': color == "special-operation"
        }
    )} onClick={() => onClick(label, equation, setEquation)}>
        {label}
    </button>);
}